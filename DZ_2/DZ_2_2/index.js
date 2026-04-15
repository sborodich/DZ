let energy = 10;
let depth = 0;
let gold = 0;


while(energy > 0){
    energy -= 1;
    depth += 1;
    if(depth==7){
        console.log(`\nМонстр! Гном в панике убегает!`);
        break};
    if(depth%3==0){ gold+=1};
    console.log(`\n
    Глубина: ${depth}
    Энергия: ${energy}
    Золото: ${gold}
`);
};
console.log(`\n
    Смена окончена. 
    Итоговая глубина: ${depth}
    Добыто золота: ${gold}\n`
);