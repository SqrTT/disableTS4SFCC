import { dirname, sep } from "path";
import { ApplicableRefactorInfo, CodeFixAction, CompletionEntryDetails, DefinitionInfo, DefinitionInfoAndBoundSpan, Diagnostic, FormatCodeOptions, FormatCodeSettings, GetCompletionsAtPositionOptions, QuickInfo, RefactorEditInfo, RefactorTriggerReason, SignatureHelpItems, SignatureHelpItemsOptions, TextRange, UserPreferences } from "typescript/lib/tsserverlibrary";

const clientSideFolders = ['js', 'client', 'default', 'static', 'node_modules'];

function isSFCCBackEndFile(filePath: string) {
	const pathArr = dirname(filePath).split(sep);
	return filePath.endsWith('.js')
		&& pathArr.some(folder => folder === 'cartridge' || folder === 'module')
		&& pathArr.every(folder => !clientSideFolders.includes(folder));
}

function init() {
	// const ts = modules.typescript;

	function create(info: ts.server.PluginCreateInfo) {

		info.project.projectService.logger.info(
			"Prophet TS filter. I'm getting set up now!"
		);

		const { languageService: tsLS } = info;

		function getQuickInfoAtPosition(fileName: string, position: number): QuickInfo | undefined {
			if (!isSFCCBackEndFile(fileName)) {
				return tsLS.getQuickInfoAtPosition(fileName, position);
			}
			info.project.projectService.logger.info(
				"Prophet TS filter. Skipping SFCC file: " + fileName
			);
			return undefined;
		}

		function getSemanticDiagnostics(fileName: string): Diagnostic[] {
			if (!isSFCCBackEndFile(fileName)) {
				return tsLS.getSemanticDiagnostics(fileName);
			}
			info.project.projectService.logger.info(
				"Prophet TS filter. Skipping SFCC file: " + fileName
			);
			return [];
		}

		function getDefinitionAtPosition(fileName: string, position: number): ReadonlyArray<DefinitionInfo> | undefined {
			if (!isSFCCBackEndFile(fileName)) {
				return tsLS.getDefinitionAtPosition(fileName, position);
			}
			info.project.projectService.logger.info(
				"Prophet TS filter. Skipping SFCC file: " + fileName
			);
		}


		// function getReferencesAtPosition(fileName: string, position: number): ReferenceEntry[] | undefined {
		// 	if (!isSFCCBackEndFile(fileName)) {
		// 		return tsLS.getReferencesAtPosition(fileName, position);
		// 	}
		// 	info.project.projectService.logger.info(
		// 		"Prophet TS filter. Skipping SFCC file: " + fileName
		// 	);
		// 	return [];
		// }

		function getDefinitionAndBoundSpan(fileName: string, position: number): DefinitionInfoAndBoundSpan | undefined {
			if (!isSFCCBackEndFile(fileName)) {
				return tsLS.getDefinitionAndBoundSpan(fileName, position);
			}
			info.project.projectService.logger.info(
				"Prophet TS filter. Skipping SFCC file: " + fileName
			);
		};

		function getCompletionsAtPosition(fileName: string, position: number, options: GetCompletionsAtPositionOptions | undefined) {
			if (!isSFCCBackEndFile(fileName)) {
				return tsLS.getCompletionsAtPosition(fileName, position, options);
			}
			info.project.projectService.logger.info(
				"Prophet TS filter. Skipping SFCC file: " + fileName
			);
		};

		function getCodeFixesAtPosition(fileName: string, start: number, end: number, errorCodes: readonly number[], formatOptions: FormatCodeSettings, preferences: UserPreferences): readonly CodeFixAction[] {
			if (!isSFCCBackEndFile(fileName)) {
				return tsLS.getCodeFixesAtPosition(fileName, start, end, errorCodes, formatOptions, preferences);
			}
			info.project.projectService.logger.info(
				"Prophet TS filter. Skipping SFCC file: " + fileName
			);
			return []
		};
		function getApplicableRefactors(fileName: string, positionOrRange: number | TextRange, preferences: UserPreferences | undefined, triggerReason?: RefactorTriggerReason): ApplicableRefactorInfo[] {
			if (!isSFCCBackEndFile(fileName)) {
				return tsLS.getApplicableRefactors(fileName, positionOrRange, preferences, triggerReason);
			}
			info.project.projectService.logger.info(
				"Prophet TS filter. Skipping SFCC file: " + fileName
			);
			return []
		};


		function getEditsForRefactor(fileName: string, formatOptions: FormatCodeSettings, positionOrRange: number | TextRange, refactorName: string, actionName: string, preferences: UserPreferences | undefined): RefactorEditInfo | undefined {
			if (!isSFCCBackEndFile(fileName)) {
				return tsLS.getEditsForRefactor(fileName, formatOptions, positionOrRange, refactorName, actionName, preferences);
			}
			info.project.projectService.logger.info(
				"Prophet TS filter. Skipping SFCC file: " + fileName
			);
		};

		function getSignatureHelpItems(fileName: string, position: number, options: SignatureHelpItemsOptions | undefined): SignatureHelpItems | undefined {
			if (!isSFCCBackEndFile(fileName)) {
				return tsLS.getSignatureHelpItems(fileName, position, options);
			}
			info.project.projectService.logger.info(
				"Prophet TS filter. Skipping SFCC file: " + fileName
			);
		};


		function getCompletionEntryDetails(fileName: string, position: number, entryName: string, formatOptions: FormatCodeOptions | FormatCodeSettings | undefined, source: string | undefined, preferences: UserPreferences | undefined): CompletionEntryDetails | undefined {
			if (!isSFCCBackEndFile(fileName)) {
				return tsLS.getCompletionEntryDetails(fileName, position, entryName, formatOptions, source, preferences);
			}
			info.project.projectService.logger.info(
				"Prophet TS filter. Skipping SFCC file: " + fileName
			);
		};


		return {
			// First clone the original TS language service
			...tsLS,
			// Then override the methods supported by prophet language service
			getQuickInfoAtPosition,
			getSemanticDiagnostics,
			getDefinitionAtPosition,
			getDefinitionAndBoundSpan,
			getCompletionEntryDetails,
		//	getReferencesAtPosition,
			getCompletionsAtPosition,
			getCodeFixesAtPosition,
			getApplicableRefactors,
			getEditsForRefactor,
			getSignatureHelpItems
		};
	}
	return { create };
}

export = init;
