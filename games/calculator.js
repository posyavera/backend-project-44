import logicFunction from '../src/index.js';

const randomNumberGenerator = () => {
  const figure = Math.floor(Math.random() * 100);
  return figure;
};

const mathOperatorgenerator = () => {
  const mathOperations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (mathOperations.length - 1));
  const result = mathOperations[randomIndex];
  return result;
};

const calc = () => {
  const question = 'What is the result of the expression?';
  const logic = () => {
    const figure1 = randomNumberGenerator();
    const figure2 = randomNumberGenerator();
    const mathOperator = mathOperatorgenerator();
    const expression = `${figure1} ${mathOperator} ${figure2}`;
    let rightAnswer = 0;
    switch (mathOperator) {
      case ('+'):
        rightAnswer = figure1 + figure2;
        break;
      case ('-'):
        rightAnswer = figure1 - figure2;
        break;
      case '*':
        rightAnswer = figure1 * figure2;
        break;
      default:
        return null;
    }
    return [expression, rightAnswer];
  };
  logicFunction(question, logic);
};
calc();

export default calc;
