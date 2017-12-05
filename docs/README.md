# view documents site



1. Installation

Use docute-cli to initialize the docs folder.

Using npm:
`` npm i -g docute-cli ``
Using Yarn:
`` yarn global add docute-cli ``

2. Quick Start

Assume that the folder you want for docs is ./docs:

`` docute init ./docs ``

Now the ./docs folder is ready, so far we got:
	•	README.md: Used as content of homepage
	•	index.html: The html that contains the scripts and styles you need
	•	.nojekyll: Indicates that this is not a jekyll website, ignore this if you're not deploying to github pages

Then you can preview the docs locally:
`` docute ./docs ``
Open http://localhost:8080 and you'll see it in action.

https://docute.js.org/#/home
