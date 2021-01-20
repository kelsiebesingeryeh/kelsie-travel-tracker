# Travel Tracker
#### Turing School of Software Design - Mod2 Final Project
#### Project Manager: David Whitaker

The details of this project are outlined in [this project spec](https://frontend.turing.io/projects/travel-tracker.html)

### Contributors
Kelsie Besinger-Yeh : [github profile](https://github.com/kelsiebesingeryeh)


## Table of Contents
1. [Introduction](#introduction)
2. [Instructions](#setup-instructions)
3. [How-To](#using-travel-tracker)
4. [Challenges & Wins](#challenges-&-wins)
5. [Appreciation](#appreciation)

## Introduction
In this project we were tasked to build a travel tracking website that allowed us to pull data from an API running a local server and displaying information based upon a specific user chosen at login. The goal of this project was for us to build a website using API data to send and receive information. Please follow the setup instructions below on how to begin!

## Setup Instructions
#### Clone This Repo
That's right, clone not fork. You will use this repo multiple times, but you can only fork a repository once. So here is what you need to do to clone the repo and still be able to push changes to your repo:

Clone down this repo. Since you don't want to name your project "webpack-starter-kit", you can use an optional argument when you run git clone (you replace the [...] with the terminal command arguments): git clone [remote-address] [what you want to name the repo]
Remove the default remote: git remote rm origin (notice that git remote -v not gives you back nothing)
Create a new repo on GitHub with the name of [what you want to name the repo] to be consistent with naming
Copy the address that you would use to clone down this repo - something like git@github.com:...
Add this remote to your cloned down repo: git remote add origin [address you copied in the previous step] - do not include the brackets
Now try to commit something and push it up to your new repo. If everything is setup correctly, you should see the changes on GitHub.

#### Setup
After you have gone through the steps of cloning down this repo and editing the remote: Then install the library dependencies. Run:

npm install
To verify that it is setup correctly, run npm start in your terminal. Go to http://localhost:8080/ and you should see a page with some h1 text and a pink background. If that's the case, you're good to go. Enter control + c in your terminal to stop the server at any time.

View Our Code in Action
Simply visit our deployed site here

OR

In the terminal, run:

npm start
You will see a bunch of lines output to your terminal. One of those lines will be something like:

Project is running at http://localhost:8080/
Go to http://localhost:8080/ in your browser to view your code running in the browser.

### Testing
We have created a series of tests for our data model. If you would like to run a few of these tests (or add new features), choose a test file and run npm test test/[selected test file] in your terminal. You will see that we have provided a set test data file to make testing much smoother and easier to read.

Back to Top of Page

## Using Travel Tracker
A user is brought to a login page where they must sign in using predefined credentials. Once the user signs in using the credentials below, they are brought to a homepage on load. From here, the user can view all of their trips including current trips, upcoming trips, past trips and pending trips. 

```
username: traveler50 (where 50 is the ID of the user)
password: travel2020
```

### Adding Trips to a Users Trip List
A user can add trips to their trips list by filling out the form on the home page. A user must select a pre-defined destination, a start date, a duration and number of travelers and an estimated cost will appear. 

Once they user sees the estimated cost, they can click the "Book" button and their trip will appear on page load and also in their upcoming/current trips list and in their pending trips list. 

![demo-mobile-view](https://media.giphy.com/media/sVtSxMHVxlNv9lwWPW/giphy.gif)

### Navigation bar
A user can click on any of the items in the navigation bar to filter their trips by type - current, upcoming, pending and past.

![demo-home](https://i.imgur.com/KkSjkxA.png)

Try it out! Try booking a trip!

![demo-book-trip](https://i.imgur.com/Hp0KjQd.png)

At anytime, the user can return to the main page by clicking the Home button.

### Mobile Friendly Responsive Design
In addition to all the functionality above, we made the application completely responsive for mobile, tablet and large screens.

![demo-mobile-friendly](https://i.imgur.com/61ecB34.png)

Back to Top of Page

### Challenges

One: One major technical challenge was just figuring what methods belonged where and which class had what responsibility. I ended up making it pretty simple, but felt that I could have make other classes so that my Travelers class didn't hold a majority of the responsibility.

Two: Async JavaScript - there were quite a few times I was puzzled when it came to getting the fetch request data to display and understanding which functions belong where and when to call/invoke them.

### Wins
One: Using fetch for GET requests and POST requests. I felt comfortable from the beginning working with the data because as soon as we got the project, I set up all of my network requests inside of an API class and went ahead and started getting the data. 
Two: Planning - I spent a good amount of time planning and creating a project plan with milestones, iterations, issues, etc.. I also had a great wireframe to help me build out the site and make it user friendly. 

### Appreciation
Thanks to David Whitaker, Travis Rollins, and Hilary Lewis

Back to Top of Page
