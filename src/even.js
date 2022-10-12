import readlineSync from 'readline-sync';

const randomNumberGenerator = () => {
  const figure = Math.floor(Math.random() * 100);
  return figure;
};

const evenOrNot = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const figure = randomNumberGenerator();
    console.log('Question:', figure);
    const answer = readlineSync.question('Your answer:');
    const check1 = (figure % 2 === 0) && (answer === 'yes');
    const check2 = (figure % 2 !== 0) && (answer === 'no');
    if (answer !== 'yes' && answer !== 'no') {
      const incorrectInput = 'Incorrect input. Answer "yes" if the number is even, otherwise answer "no". Try again!';
      console.log(incorrectInput);
      return;
    }
    if (check1 === true || check2 === true) {
      console.log('Correct!');
    } else {
      const opposite = (answer === 'yes' ? 'no' : 'yes');
      const errorMessage = `'${answer}' is wrong answer ;(. Correct answer was '${opposite}'. \n Let's try again, ${name}!`;
      console.log(errorMessage);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default evenOrNot;
