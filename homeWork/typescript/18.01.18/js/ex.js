"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function execOperations(func) {
    if (func === void 0) { func = Math.floor; }
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    var res_array = new Array();
    for (var _a = 0, params_1 = params; _a < params_1.length; _a++) {
        var i = params_1[_a];
        res_array.push(func(i));
    }
    return res_array;
}
exports.execOperations = execOperations;
//# sourceMappingURL=ex.js.map