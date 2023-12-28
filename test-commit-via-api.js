import { Octokit } from "@octokit/core";
import fetch from 'node-fetch';
import { execPath } from "process";

const octokit = new Octokit({ 
    auth: '',
    request: {fetch,},
});

// Get references
const readme = await octokit.request("GET /repos/lvhoaa/commit-via-api/contents/README.md", {
    ref: "main",
});

// Update file & commit 
const updatedContent = "Try this again!"
try{
    const result = await octokit.request("PUT /repos/lvhoaa/commit-via-api/contents/README.md", {
        message: "Update README.md using API",
        content: Buffer.from(updatedContent).toString("base64"),
        sha: readme.data.sha,
        branch: "main",
    });
    console.log(result);
} catch(error){
    console.log(error);
}