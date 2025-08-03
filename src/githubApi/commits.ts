
import { Octokit } from "octokit";
import "dotenv/config";

export async function getCommitNumberForDate(
  startDate: number,
  endDate: number
): Promise<number> {
  const commits: GithubCommit[] = await getCommits("Math-Fauch", "github-test");


  return commits.filter((commit => {
    let d: number = Date.parse(commit.commit.author.date);
    return d > startDate && d < endDate;
  })).length;
}

async function getCommits(owner: string, repo: string): Promise<GithubCommit[]> {
  const octokit = new Octokit({ auth: process.env.GITHUB_API_KEY });
  const request = "GET /repos/" + owner + "/" + repo + "/commits";
  const result = await octokit.request(request, {
    owner: owner,
    repo: repo,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return result.data;
}
