import logicFunction from '../src/index.js';

const randomNumberGenerator = () => {
  const figure = Math.floor(Math.random() * 20);
  return figure;
};

const hidedNumberIndex = () => {
  const figure = Math.floor(Math.random() * 9);
  return figure;
};

const progression = () => {
  const question = 'What number is missing in the progression?';
  const logicProgression = () => {
    const startNumber = randomNumberGenerator();
    const difference = randomNumberGenerator();
    const progressionLength = 10;
    const resultProgression = [];
    for (let i = 1; i < progressionLength; i += 1) {
      resultProgression[0] = startNumber;
      resultProgression[i] = resultProgression[i - 1] + difference;
    }
    const hidedNumber = hidedNumberIndex();
    const rightAnswer = resultProgression[hidedNumber];
    resultProgression[hidedNumber] = '..';
    const expression = resultProgression.join(' ');
    return [expression, rightAnswer];
  };
  logicFunction(question, logicProgression);
};

export default progression;
