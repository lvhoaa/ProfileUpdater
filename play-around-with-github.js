// Github Token: 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
import { Octokit } from "@octokit/core";
import fetch from 'node-fetch';

const octokit = new Octokit({ 
  auth: '',
  request: {fetch,},
});


// GET ISSUES OF A GITHUB REPO 
try {
  const result = await octokit.request("GET /repos/facebook/react/issues", {
    owner: "facebook",
    repo: "react",
    per_page: 2,
  });
  console.log(result)
  console.log(`Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`);

} catch (error) {
  console.log(error);
}



// RETRIEVE MY OWN FOLLOWERS 
try {
    const result = await octokit.request('GET /user/followers', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    console.log(result);
} 
catch(error){
    console.log(error);
}


// FOLLOW A USER 
try{
    const result = await octokit.request('PUT /user/following/facebook', {
        username: 'facebook',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    }) 
    console.log(result);
}
catch(error){
    console.log(error);
}
