# Welcome!

Welcome to the ThermoHuman Test. This an app test for the [ThermoHuman](https://thermohuman.com/es/) company.

This company is a pioneer in the analysis of thermal imaging of the human body for medical, therapeutic and sports purposes.

## Pages in this site

This web site is composed by a header, with a navigation menu and a log out button. Remember that you need to log in if you want to access the content.

You will find two options in the menu that will show you two different pages:

### User Profile

Contains all the information about the logged in user in non-editable form controls (username, user nickname, user email and last login). 

### Hello World

Contains a form input where you can write whatever you want. In this page you can also find three different buttons (submit, cancel and exit). 

- Once you press the **submit button**, only avaialble when the text field has some content, what you have written will be displayed in the upper text box with the following structure: "Hello, _your text_. Now it is _current date_".

If the box doesn't contain anything or the text changes, the message displayed will be: "Who are you?". The submit button won't be available if the text field is empty or if you has already submitted the content.

- The **cancel button** will be available if the text field has some content and it allows you to clear the field and return to the User Profile.

- The **exit button** will be available if the text field is empty and it allows you to return to the User Profile.

### Default page

The site will always display the user profile as the default page. That's why you must log in first of all.

## Installation

To install this application:

1. Clone this repo in your local machine by running the following command in your CLI, in the folder where your want to store the application: `git clone`.

2. Once you have cloned the repo, enter in the root folder, where the file package.json is stored and run the following command: `npm i`.

This will install all the necesary dependencies for the correct running of the application.

3. After this two previous steps, run this command in your CLI to stand up the server and make the application run: `npm start`.

### `npm start`

This command runs the app in the development mode. You will see that your browser will automatically open on [http://localhost:3000](http://localhost:3000), your local server. After that, you will be able to see the application running locally in your browser. 

If your browser doesn't open automatically, open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

The page will reload if you make edits in the files that contain the code.

That's all! Enjoy navigating! :)
