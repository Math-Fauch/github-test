import dotenv from 'dotenv';
import { Octokit } from 'octokit';

async function getCommitNumber(): Promise<number | null> {
    dotenv.config();
    const octokit = new Octokit({
            auth: process.env.GITHUB_API_KEY,
        })
    await octokit.request('GET /repos/Math-Fauch/github-test/commits', {
        owner: 'Math-Fauch',
        repo: 'github-test'
    })
    .then(response => console.log(response))
    

    return null;
}

getCommitNumber()