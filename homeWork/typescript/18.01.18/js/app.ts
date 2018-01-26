// ex1
import {execOperations} from './ex';

console.log(execOperations(undefined,3.1,7.9,8.5));
let sqrVal = function(num:number):number{
    return num * num;
}
console.log(execOperations(sqrVal,4,7,8));
//matrix
let num:number = Number(prompt(" number ? "));
let mat1 :Array<Array<string>> = [];
enum mat {
    main,
    sub,
    center,
    up,
    down
}

for(let i = 0 ; i < num ; i++){
    mat1.push(new Array());
    for (let j = 0 ; j < num ; j++){
        if(i === j)
            mat1[i][j] = mat[0];
        if( i + j  === num -1 )
            mat1[i][j] = mat[1];
        if(i + j  === num -1 && i === j )
            mat1[i][j] = mat[2];
        if(i < j && i + j  !== num -1)
            mat1[i][j] = mat[3];
         if(j < i && i + j  !== num -1)
        mat1[i][j] = mat[4];
    }       
}
console.log(mat1);

