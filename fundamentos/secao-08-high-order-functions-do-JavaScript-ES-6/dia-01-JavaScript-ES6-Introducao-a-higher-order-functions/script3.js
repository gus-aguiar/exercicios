const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

let corretorExame = (RIGHT_ANSWERS, STUDENT_ANSWERS, teste()) => {
    return `Sua pontuação foi de ${teste}`;
}
function teste(RIGHT_ANSWERS, STUDENT_ANSWERS) {
    let count = 0;
    for (let index = 1; index < RIGHT_ANSWERS.length; index += 1) { 
        if(RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index] ){
            count += 1;
        } else if(RIGHT_ANSWERS[index] !== STUDENT_ANSWERS[index] ){
            count -= 0.5;
        } else if (STUDENT_ANSWERS === N.A)
            count += 0;
    }
    return count
}
