interface IResult {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

const calculateExercises = (dailyExerciseHours: number[], targetAmount: number ):IResult => {
  const periodLength = dailyExerciseHours.length;
  const trainingDays = dailyExerciseHours.filter(h => h > 0).length;
  const average = dailyExerciseHours.reduce((a, b) => a + b, 0) / periodLength;
  const success = average >= targetAmount;
  const rating = average > targetAmount ? 3 : average === targetAmount ? 2 : 1;
  const ratingDescription = rating === 3 ? 'great job!' : rating === 2 ? 'not too bad but could be better' : 'you need to do better';

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target: targetAmount,
    average
  };
}

const dailyExerciseHours = process.argv.slice(2, process.argv.length-1).map(h => Number(h));
const targetAmount = process.argv.slice(process.argv.length-1).map(h => Number(h));

console.log(calculateExercises(dailyExerciseHours, Number(targetAmount[0])));