My approach to solving this task would be to:

1. Understand the task requirements and guidelines
2. Familiarize myself with the provided codebase
3. Define a data structure that will hold the live football matches data
4. Implement the following functions as described in the task requirements:
   - `startMatch(homeTeam, awayTeam)`
   - `updateScore(matchId, homeScore, awayScore)`
   - `finishMatch(matchId)`
   - `getMatchesSummary()`
   These functions will handle the operations that will be supported by the scoreboard.

In order to implement the solution:

1. Create a new file called "scoreboard.js" component that will export the scoreboard module.
2. Define the above functions and any other helper functions that will be required to implement these functions in the scoreboard module.
3. Create a new data structure that will hold the live football matches data. Use an array to hold the list of matches, and each match will be an object that will have the following properties:
   - `homeTeam`: the name of the home team
   - `awayTeam`: the name of the away team
   - `homeScore`: the current score of the home team
   - `awayScore`: the current score of the away team

4. Implement the `addMatch()` function to add a new match to the list of matches.
5. Implement the `updateScore()` function to update the score of a match.
6. Implement the `removeMatch()` function to remove a match from the list of matches.
7. Implement the `getSummary()` function to get a summary of all the matches sorted by their total score and the most recently started match in the scoreboard.

In order to follow the guidelines:

1. Keep the solution simple and focus on edge cases.
2. Use an in-memory store solution and will not implement a REST API, command line application, a Web Service or Microservice.
3. Focus on quality and use Test-Driven Development (TDD), Clean Code and adherence to SOLID principles.
4. Implement the solution according to my standards and share my solution with a link to a source control repository.
5. Add a `README.md` file where I will make notes of any assumption or things I would like to mention to the reviewers about my solution.
