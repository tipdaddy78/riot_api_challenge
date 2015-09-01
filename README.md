# A World of AP
Includes all code for our Riot API Challenge 2.0

Live Site: http://tipdaddy78.github.io/riot_api_challenge/WebContent/html/index.html

## The Challenge:
This project was created for Riot Game’s API Challenge 2. My partner, Tipdaddy78, and myself Old Man Winter, chose to do the second Challenge, “Given two data sets of match IDs, one before the AP Item changes and another one after, create a piece of software to demonstrate changes in AP Item usage”. 
The goal of this project was to develop a visually pleasing application that would uniquely and efficiently display the changes in the AP items for patches 5.11 and 5.14. However this was no easy task, because the objective is very open ended, there were many different ways we could go about this process. 

## Our Goal:
Our goal was to show as many interesting trends as possible that we learned from the match histories we were provided. 
We start each user off with the ability to select any region in which League of Legends has a server. After picking a region we begin showing you some really interesting trends that we learned. 
The first thing we display in regards to trends is, the pick rate, and win rate for both patches. We did this for both the Ranked Solo Queue games, and the Normal 5x5 games, for every region that League of Legends has servers for. 
The second thing we do is allow for users to compare an item’s pick and win rate for each game type and patch in regards to a specific lane in which it was used, a champion it was built on, or even both at once for the most specific statistics possible.  
The third thing a user can do is navigate to the “World View” page.  On this page, users can select a specific Item, queue type, and lane to compare that criteria’s pick and win rates across all 10 regions. 

## The Process:
To get to our end goal, there were lots of steps to take, first and foremost, we polled the 400k list of match ids across the 10 regions to gather our data.  After almost 48 hours of straight data collection (thanks Mediacom), we were able to run another python script that analyzed each match to come up with a pick rate and win rate all 17 of the main AP items for every champion in every lane as well as the same data on a global (no specific lane and/or champion) basis as well.  After analysis was complete, the website was created!

## The End Product: 
Throughout this two and a half week process, we have gone through many changes, updates, tweaks, and bug fixes to develop and design “A World of AP”. We really enjoyed working on the project, and win or lose, we hope the community enjoys what we have developed, and can find some of the information beneficial in their build paths. We know we have. 

PS. Build Liandry’s, its win rate is off the charts!  

