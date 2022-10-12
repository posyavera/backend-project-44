import logicFunction from '../src/index.js';

const randomNumberGenerator = () => {
  const figure = Math.floor(Math.random() * 100);
  return figure;
};

const even = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  const logicEven = () => {
    const figure = randomNumberGenerator();
    const expression = figure;
    let rightAnswer;
    if (figure % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    return [expression, rightAnswer];
  };
  logicFunction(question, logicEven);
};
export default even;
