"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ex1
var ex_1 = require("./ex");
console.log(ex_1.execOperations(undefined, 3.1, 7.9, 8.5));
var sqrVal = function (num) {
    return num * num;
};
console.log(ex_1.execOperations(sqrVal, 4, 7, 8));
//matrix
var num = Number(prompt(" number ? "));
var mat1 = [];
var mat;
(function (mat) {
    mat[mat["main"] = 0] = "main";
    mat[mat["sub"] = 1] = "sub";
    mat[mat["center"] = 2] = "center";
    mat[mat["up"] = 3] = "up";
    mat[mat["down"] = 4] = "down";
})(mat || (mat = {}));
for (var i = 0; i < num; i++) {
    mat1.push(new Array());
    for (var j = 0; j < num; j++) {
        if (i === j)
            mat1[i][j] = mat[0];
        if (i + j === num - 1)
            mat1[i][j] = mat[1];
        if (i + j === num - 1 && i === j)
            mat1[i][j] = mat[2];
        if (i < j && i + j !== num - 1)
            mat1[i][j] = mat[3];
        if (j < i && i + j !== num - 1)
            mat1[i][j] = mat[4];
    }
}
console.log(mat1);
//# sourceMappingURL=app.js.map