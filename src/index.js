import readlineSync from 'readline-sync';

const logicFunction = (question, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name} !`);
  for (let i = 0; i < 3; i += 1) {
    console.log(question);
    const questionResult = task();
    console.log(`Question: ${questionResult[0]}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = questionResult[1].toString();
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      const errorMessage = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \n Let's try again, ${name}!`;
      console.log(errorMessage);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default logicFunction;
