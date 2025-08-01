interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    // ... add other relevant fields
}

async function getGitHubUserData(username: string): Promise<GitHubUser | null> {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: GitHubUser = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching GitHub user data:", error);
        return null;
    }
}

// Example usage:
async function main() {
    const user = await getGitHubUserData("octocat");
    if (user) {
        console.log(`User: ${user.login}, ID: ${user.id}`);
    }
}