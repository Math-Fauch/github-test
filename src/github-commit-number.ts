import dotenv from 'dotenv';
import { Octokit } from 'octokit';

dotenv.config();
const key: string = process.env.GITHUB_API_KEY;
if (!key) {
    throw new Error("missing key");
}


async function getCommitNumber(): Promise<number | null> {
    const octokit = new Octokit({
            auth: key,
        })
    await octokit.request('GET /repos/Math-Fauch/github-test/commits', {
        owner: 'Math-Fauch',
        repo: 'github-test'
    })
    .then(response => console.log(response))
    

    return null;
}

getCommitNumber()