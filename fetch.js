/**
 * Optional build-time helper: writes public/profile.json with your pinned
 * GitHub repositories (used only for live star/fork counts).
 *
 * Enable it by creating a .env file with:
 *   USE_GITHUB_DATA=true
 *   GITHUB_USERNAME=A-janjan
 *   REACT_APP_GITHUB_TOKEN=ghp_xxx
 *
 * Then run: npm run fetch:github
 * The site works fine without it — src/portfolio.js has curated projects.
 */
import fs from "node:fs";
import https from "node:https";
import process from "node:process";
import dotenv from "dotenv";

dotenv.config();

const GITHUB_TOKEN =
  process.env.REACT_APP_GITHUB_TOKEN || process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if the GitHub token in your .env file is correct."
};

if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

  const body = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") {
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node",
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body)
    }
  };

  const req = https.request(options, res => {
    let data = "";
    console.log(`statusCode: ${res.statusCode}`);

    if (res.statusCode !== 200) {
      console.error(ERR.requestFailed);
      return;
    }

    res.on("data", chunk => {
      data += chunk;
    });

    res.on("end", () => {
      fs.writeFile("./public/profile.json", data, err => {
        if (err) return console.error(err);
        console.log("saved file to public/profile.json");
      });
    });
  });

  req.on("error", error => {
    console.error(error);
  });

  req.write(body);
  req.end();
} else {
  console.log(
    "USE_GITHUB_DATA is not 'true' — keeping the existing public/profile.json."
  );
}
