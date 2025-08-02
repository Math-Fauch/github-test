import dotenv from 'dotenv';
import { Octokit } from 'octokit';

require('dotenv').config();


function main() {
  console.log(calculateSum(1, 2));
  console.log(calculateSub(5, 1));
}

function calculateSum(a: number, b: number): number {
  return a + b;
}

function calculateSub(a: number, b: number): number {
  return a - b;
}

function getCommitNumber() {
    const gh-key = new Octokit({auth: process.env.GITHUB_API_KEY})
}

main();

