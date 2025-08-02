import { Octokit } from 'octokit';
import 'dotenv/config';


function main() {
  getCommitNumber()
}

function calculateSum(a: number, b: number): number {
  return a + b;
}

function calculateSub(a: number, b: number): number {
  return a - b;
}

async function getCommitNumber() {
    const octokit = new Octokit({auth: process.env.GITHUB_API_KEY})
    const owner = 'Math-Fauch'
    const repo = 'github-test'
    const request = "GET /repos/" + owner + "/" + repo + "/commits";

    const result = await octokit.request(
      request,
      {
        owner: owner,
        repo: repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    console.log(result.data[0])
}

main();

