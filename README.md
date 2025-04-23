# The Periodic Table of Hate and Intolerance
Site by: [Sophie The Lionhart](https://sophielionhart.com)
Art by: [Amy Cohen Efron](https://aefronarts.com/)

Installation
----
Very simple, do the following from the project root:
```bash
cd assets/scripts
npm i
npx webpack
```

No other dependencies are required. You can then serve and access directly from the project root's index.html file. 

To deploy simply push your code and open a pull request targeting the 
`main` branch. On merge into `main` Cloudflare automatically pulls in the code then builds the `dist` folder.