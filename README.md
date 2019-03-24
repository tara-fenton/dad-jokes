# Project Overview


## Project Description

Dad Jokes for a laugh

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.
  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Navigation to routes
- Random joke

#### PostMVP EXAMPLE

- Add a joke
- Allow user to choose favorites 
- Save their choices in firebase
- Add user auth

## React Component Hierarchy

App > Header
App > JokesList > JokeItem
App > RandomJoke
App > Footer

## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

State Components - App
Stateless Components - JokesList, JokeItem, RandomJoke, Header, Footer

| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 
[ICANHAZDADJOKE API](https://icanhazdadjoke.com/api)
## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
