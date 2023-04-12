const fs = require('fs').promises;
const readline = require("readline-sync");


async function readAll(){
    const data = await fs.readFile('./simpsons.json', 'utf8');
    const simpsons = JSON.parse(data);
    const mapSimpsons= simpsons.map(simpson => {
        return {
            id: simpson.id,
            name: simpson.name
        }
        });
    mapSimpsons.forEach(simpson => console.log(simpson.id + ' - ' + simpson.name));
;
}

// async function main(){
//     const simpsons = await readAll();
// }

// main();

async function readId(id){
    const data = await fs.readFile('./simpsons.json', 'utf8');
    const simpsons = JSON.parse(data);
    const simpson = simpsons.find(simpson => Number(simpson.id) === Number(id));
    if(!simpson){
        throw new Error('Id not found');
    }
    return simpson;
}

async function main(){
    const id = readline.questionInt('Enter the id: ');
    try{
        const simpson = await readId(id);
        console.log(simpson.id + ' - ' + simpson.name);
    }catch(err){
        console.log(err.message);
    }
}

main();