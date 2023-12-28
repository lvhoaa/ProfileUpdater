import { Octokit } from "@octokit/core";
import fetch from 'node-fetch';

const octokit = new Octokit({ 
    auth: '',
    request: {fetch,},
});

async function commitViaAPI() {
    // Get references
    const readme = await octokit.request("GET /repos/lvhoaa/lvhoaa/contents/README.md", {
        ref: "main",
    });

    // Get current time 
    const currentDate = new Date();

    const options = { timeZone: 'America/New_York', timeStyle: 'medium' };

    const currentTimeInEST = currentDate.toLocaleString('en-US', options);
    const currentHour = currentTimeInEST.split(":")[0]
    const currentMinute = currentTimeInEST.split(":")[1]
    const currentMeridiem = currentTimeInEST.slice(-2);

    const currentTime = currentHour+":"+currentMinute+" "+currentMeridiem

    // Update file & commit 
    const updatedContent = "### Hi there, I'm Hoa La 👋 \n\n 👨‍💻 3 key facts about me: \n - 🌱 I’m studying CS @ UMass Amherst, hoping to become a full-stack developer \n - 👨‍💼 Having interned at Abbott and Kyons with software engineering role in the past \n - 💼 Having published a computer science paper in a peer-reviewed journal \n\n 🕒 My current time is "+ currentTime+ " (updated via API) \n\n 📫 How to reach me: lavanhoa41@gmail.com"

    try{
        const result = await octokit.request("PUT /repos/lvhoaa/lvhoaa/contents/README.md", {
            message: "Update README.md using API",
            content: Buffer.from(updatedContent).toString("base64"),
            sha: readme.data.sha,
            branch: "main",
        });
    } catch(error){
        console.log(error);
    }
    console.log("running"+currentTime);
}

const running = setInterval(commitViaAPI,60000);