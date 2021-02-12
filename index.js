module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/disableTS4SFCC.ts":
/*!*******************************!*\
  !*** ./src/disableTS4SFCC.ts ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const path_1 = __webpack_require__(/*! path */ "path");
const clientSideFolders = ['js', 'client', 'default', 'static', 'node_modules'];
function isSFCCBackEndFile(filePath) {
    const pathArr = path_1.dirname(filePath).split(path_1.sep);
    return filePath.endsWith('.js')
        && pathArr.some(folder => folder === 'cartridge' || folder === 'module')
        && pathArr.every(folder => !clientSideFolders.includes(folder));
}
function init() {
    function create(info) {
        info.project.projectService.logger.info("Prophet TS filter. I'm getting set up now!");
        const { languageService: tsLS } = info;
        function getQuickInfoAtPosition(fileName, position) {
            if (!isSFCCBackEndFile(fileName)) {
                return tsLS.getQuickInfoAtPosition(fileName, position);
            }
            info.project.projectService.logger.info("Prophet TS filter. Skipping SFCC file: " + fileName);
            return undefined;
        }
        function getSemanticDiagnostics(fileName) {
            if (!isSFCCBackEndFile(fileName)) {
                return tsLS.getSemanticDiagnostics(fileName);
            }
            info.project.projectService.logger.info("Prophet TS filter. Skipping SFCC file: " + fileName);
            return [];
        }
        function getDefinitionAtPosition(fileName, position) {
            if (!isSFCCBackEndFile(fileName)) {
                return tsLS.getDefinitionAtPosition(fileName, position);
            }
            info.project.projectService.logger.info("Prophet TS filter. Skipping SFCC file: " + fileName);
        }
        function getDefinitionAndBoundSpan(fileName, position) {
            if (!isSFCCBackEndFile(fileName)) {
                return tsLS.getDefinitionAndBoundSpan(fileName, position);
            }
            info.project.projectService.logger.info("Prophet TS filter. Skipping SFCC file: " + fileName);
        }
        ;
        function getCompletionsAtPosition(fileName, position, options) {
            if (!isSFCCBackEndFile(fileName)) {
                return tsLS.getCompletionsAtPosition(fileName, position, options);
            }
            info.project.projectService.logger.info("Prophet TS filter. Skipping SFCC file: " + fileName);
        }
        ;
        function getCodeFixesAtPosition(fileName, start, end, errorCodes, formatOptions, preferences) {
            if (!isSFCCBackEndFile(fileName)) {
                return tsLS.getCodeFixesAtPosition(fileName, start, end, errorCodes, formatOptions, preferences);
            }
            info.project.projectService.logger.info("Prophet TS filter. Skipping SFCC file: " + fileName);
            return [];
        }
        ;
        function getApplicableRefactors(fileName, positionOrRange, preferences, triggerReason) {
            if (!isSFCCBackEndFile(fileName)) {
                return tsLS.getApplicableRefactors(fileName, positionOrRange, preferences, triggerReason);
            }
            info.project.projectService.logger.info("Prophet TS filter. Skipping SFCC file: " + fileName);
            return [];
        }
        ;
        function getEditsForRefactor(fileName, formatOptions, positionOrRange, refactorName, actionName, preferences) {
            if (!isSFCCBackEndFile(fileName)) {
                return tsLS.getEditsForRefactor(fileName, formatOptions, positionOrRange, refactorName, actionName, preferences);
            }
            info.project.projectService.logger.info("Prophet TS filter. Skipping SFCC file: " + fileName);
        }
        ;
        function getSignatureHelpItems(fileName, position, options) {
            if (!isSFCCBackEndFile(fileName)) {
                return tsLS.getSignatureHelpItems(fileName, position, options);
            }
            info.project.projectService.logger.info("Prophet TS filter. Skipping SFCC file: " + fileName);
        }
        ;
        function getCompletionEntryDetails(fileName, position, entryName, formatOptions, source, preferences) {
            if (!isSFCCBackEndFile(fileName)) {
                return tsLS.getCompletionEntryDetails(fileName, position, entryName, formatOptions, source, preferences);
            }
            info.project.projectService.logger.info("Prophet TS filter. Skipping SFCC file: " + fileName);
        }
        ;
        return Object.assign(Object.assign({}, tsLS), { getQuickInfoAtPosition,
            getSemanticDiagnostics,
            getDefinitionAtPosition,
            getDefinitionAndBoundSpan,
            getCompletionEntryDetails,
            getCompletionsAtPosition,
            getCodeFixesAtPosition,
            getApplicableRefactors,
            getEditsForRefactor,
            getSignatureHelpItems });
    }
    return { create };
}
module.exports = init;


/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/disableTS4SFCC.ts");
/******/ })()
;
