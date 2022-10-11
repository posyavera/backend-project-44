import logicFunction from '../src/index.js';

const randomNumberGenerator = () => {
  const figure = Math.floor(Math.random() * 100);
  return figure;
};

const GCD = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  const logicGCD = () => {
    const figure1 = randomNumberGenerator();
    const figure2 = randomNumberGenerator();
    const expression = `${figure1} ${figure2}`;
    let rightAnswer;
    for (let i = 1; i <= figure1 && i <= figure2; i += 1) {
      if (figure1 % i === 0 && figure2 % i === 0) {
        rightAnswer = i;
      }
    }
    return [expression, rightAnswer];
  };
  logicFunction(question, logicGCD);
};

export default GCD;
