import { Octokit } from "octokit";
import "dotenv/config";

async function main() {
  const oneDay = 1000 * 60 * 60 * 24;
  const numberOfDays = 1.2;
  let commitNum: number = await getCommitNumberForDate(
    Date.now() - numberOfDays * oneDay,
    Date.now()
  );
  console.log(commitNum);
}

async function getCommitNumberForDate(
  startDate: number,
  endDate: number
): Promise<number> {
  const commits = await getCommits("Math-Fauch", "github-test")
  .then(response => JSON.parse(response));

  let commitCount = 0;
  for (let i: number = 0; i < (commits as any).data.length; i++) {
    let commitDate: number = Date.parse(commits.data[i].commit.author.date);

    if (endDate < commitDate) {
      continue;
    }
    if (startDate > commitDate) {
      break;
    }
    commitCount++;
  }

  return commitCount;
}

async function getCommits(owner: string, repo: string): Promise<string> {
  const octokit = new Octokit({ auth: process.env.GITHUB_API_KEY });
  const request = "GET /repos/" + owner + "/" + repo + "/commits";

  const result = await octokit.request(request, {
    owner: owner,
    repo: repo,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return JSON.stringify(result);
}

main();
