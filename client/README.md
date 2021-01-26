# Welcome!

Welcome to the ThermoHuman Test. This an app test for the [ThermoHuman](https://thermohuman.com/es/) company.

This company is a pioneer in the analysis of thermal imaging of the human body for medical, therapeutic and sports purposes.

Remember that you need to log in if you want to access the content.To do so, if you already have an account you can directly log in through Auth0:

![alt text] (https://github.com/Ramon-ggf/ThermoHumanTest/blob/main/client/Log%20In%20auth0.PNG "Login with auth0")

Just fill the fields with your credentials.

If not, you will need to sign up.

![alt text] (https://github.com/Ramon-ggf/ThermoHumanTest/blob/main/client/Sign%20up%20auth0.PNG "Sign up with auth0")

## Pages in this site

This web site is composed by a header, with a navigation menu and a log out button. You will find two options in the menu that will show you three different pages:

### Default page

![alt text](https://github.com/Ramon-ggf/ThermoHumanTest/blob/main/client/Main%20page.PNG "Main site")

The site will always display the user profile as the default page. That's why you must log in first of all.

### User Profile

Contains all the information about the logged in user in non-editable form controls (username, user nickname, user email and last login). 

### Hello World

![alt text](https://github.com/Ramon-ggf/ThermoHumanTest/blob/main/client/Hello%20World%20empty.PNG "Hello World empty")

Contains a form input where you can write whatever you want. In this page you can also find three different buttons (submit, cancel and exit). 

- Once you press the **submit button**, only avaialble when the text field has some content, what you have written will be displayed in the upper text box with the following structure: "Hello, _your text_. Now it is _current date_".

If the box doesn't contain anything or the text changes, the message displayed will be: "Who are you?". The submit button won't be available if the text field is empty or if you have already submitted the content.

- The **cancel button** will be available if the text field has some content and it allows you to clear the field and return to the User Profile.

- The **exit button** will be available if the text field is empty and it allows you to return to the User Profile.

![alt text](https://github.com/Ramon-ggf/ThermoHumanTest/blob/main/client/Hello%20World%20guest.PNG "Hello World guest")

## Installation

To install this application:

1. Clone this repo in your local machine by running the following command in your CLI, in the folder where your want to store the application: `git clone`.

2. Once you have cloned the repo, enter in the root folder, where the file package.json is stored and run the following command: `npm i`.

This will install all the necesary dependencies for the correct running of the application.

3. After this two previous steps, run this command in your CLI to stand up the server and make the application run: `npm start`.

### `npm start`

This command runs the app in the development mode. You will see that your browser will automatically open on [http://localhost:3000](http://localhost:3000), your local server. After that, you will be able to see the application running locally in your browser. 

If your browser doesn't open automatically, open it manually and type [http://localhost:3000](http://localhost:3000) as URL to view the application in the browser.

The page will reload if you make edits in the files that contain the code.

That's all! Enjoy navigating! :)
