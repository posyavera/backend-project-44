import logicFunction from '../src/index.js';

const randomNumberGenerator = () => {
  const figure = Math.floor(Math.random() * 20);
  return figure;
};

const prime = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const logicPrime = () => {
    const figure = randomNumberGenerator();
    const expression = figure;
    let rightAnswer;
    const limitForCycle = Math.floor(Math.sqrt(figure));
    for (let i = 2; i <= limitForCycle; i += 1) {
      if (figure % i === 0) {
        rightAnswer = 'no';
        break;
      } else {
        rightAnswer = 'yes';
      }
    }
    return [expression, rightAnswer];
  };
  logicFunction(question, logicPrime);
};

export default prime;
