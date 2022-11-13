let num = [6, 7, 9, 4, 5]

for(let pos = 0; pos < num.length; pos ++) {
console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//Forma simplificada
for(let pos in num) {
    console.log(num[pos])
}