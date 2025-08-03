import { getCommitNumberForDate } from "./githubApi/commits.ts";

async function main() {
  const oneDay = 1000 * 60 * 60 * 24;
  const numberOfDays = 1;
  let commitNum: number = await getCommitNumberForDate(
    Date.now() - numberOfDays * oneDay,
    Date.now()
  );
  console.log(commitNum);
}
main();