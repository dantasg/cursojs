let var1 = 'A'; // B
let var2 = 'B'; // C 
let var3 = 'C'; // A

const var1temp = var1;
var1 = var2;
var2 = var3;
var3 = var1temp;
console.log(var1, var2, var3);

[var1, var2, var3] = [var2, var3, var1];

console.log(var1, var2, var3);
