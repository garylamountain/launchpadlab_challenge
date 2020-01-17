# Launchpad Lab Challenge

## Chronicling the Process
I'd like to use this section as a sort of journal to record my thought process as I create this app.

[01/17]
Initial thoughts on how to meet the requirements of this challenge. I need to:
1. Decide which metrics to use to determine the "best" framework (without knowing much about the culture surrounding Github, I assume commits will be an important factor? More commits might equate to a more actively updated framework.)
2. Figure out how to fetch information from each of these repos with Github's API (hopefully it won't be too hard to figure out with the Fetch API!)
3. Display this information in a way that promotes the user to make a well-informed decision (I wonder if I could find a log of this data over time, i.e. how many commits were made to the repo within the past year vs the past week, etc.)
4. Ensure that a user can only vote once per email address and browser session, and that the tally of total votes is accessible (should be easy using rails as an API?)

To address the first of these, I'm going to do some light research on what metrics make a "good" Github repo. I've read a few articles in the vein of this https://blog.tidelift.com/dont-judge-a-project-by-its-github-stars-alone which all say that stars and forks are the two most commonly-used (but potentially flawed) metrics to measure a Github's popularity. Stars can work as favorites or bookmarks, which hopefully demonstrate some sort of interest in a repo. Forks show interest in improving the content of a project, which again definitely demonstrates some sort of interest. For my third metric, I'm choosing to use commits for the reason stated above; I assume that a more actively updated framework probably has fewer bugs or other issues and may have more features). 

Now moving on to the second task at hand, I need to figure out how to fetch information about a Github. I also need to see what information is avaliable to me; I'd like to do a comparison of my three metrics over time, to better determine which framework is currently the most active. I plan to start with simply making a single GET request to Github's API using the fetch API, console logging the response and using their documentation to determine how to proceed (https://developer.github.com/v3/). Thankfully, their documentation seems pretty good. It also turns out there is some tracking of these stats over time: https://developer.github.com/v3/repos/statistics/#get-the-last-year-of-commit-activity-data. Unfortunately, only commits over time seem to be avaliable through the API. This means that for stars and forks, I may only be able to display the current number of each.