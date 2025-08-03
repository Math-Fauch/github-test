import { getCommitNumberForDate } from "./githubApi/commits.ts";
import { getWeatherInspirationMessage } from "./openWeatherApi/currentWeather.ts";

async function main() {
  const oneDay = 1000 * 60 * 60 * 24;
  const numberOfDays = 0.25;
  let commitNum: number = await getCommitNumberForDate(
    Date.now() - numberOfDays * oneDay,
    Date.now()
  );

  let weatherMsg: string = await getWeatherInspirationMessage(46.845165, -70.969717);
  let fullMsg: string = `${weatherMsg} Still, you did ${commitNum} in the last ${(numberOfDays * 24).toFixed(2)} hours!`;
  console.log(fullMsg);
}
main();