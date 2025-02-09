# The Periodic Table of Hate and Intolerance
Site by Sophie The Lionhart
Art by Amy Cohen Efron

Installation
----
Very simple, simply do the following from the project root:
```bash
cd assets/scripts
npm i
npx webpack
```

No other dependencies are required. You cna then serve and access directyl from the 
project root's index.html file. 

To deploy simply push your code and open a pull request targeting the 
`main` branch. On merge into `main` Cloudflare automatically pulls in the code then builds the `dist` folder.