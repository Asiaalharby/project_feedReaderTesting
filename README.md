# project_feedReaderTesting
 
## How to run the application
Open the index.html file and wait for the page to load the feeds. Once feeds are loaded, scroll down to read Jasmin tests (the objective of this project). For more details about the prject objective, please read below.

## Why this Project?
Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application
## What will I learn?
You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

## How will I complete this project?

1-Familiarize yourself with the starter code
Open up index.html and review the functionality of the application within your browser
What is all the code in app.js doing? Be sure to read all code comments
Check out style.css. How is styling applied to the application?

2-Explore the Jasmine spec file in feedreader.js
* This is the file in which you'll be writing your tests
* Make sure to read all code comments here as well
* Review the Jasmine documentation if needed

3-Edit the allFeeds variable in app.js to make the provided test fail
* See how Jasmine visualizes this failure in your application
* Return the allFeeds variable to a passing state after reviewing the failed test

4-Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty
* For example, how would you use a for...of loop in this test?

5-Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty
* Think about how you wrote the previous test. What are you testing for this time?

6-Write a new test suite named "The menu"
* What are you describe-ing in this test suite?

7- Write a test that ensures the menu element is hidden by default
* You'll have to analyze the HTML and the CSS to determine how the hiding/showing of the menu element is implemented
* What code in app.js is directly involved with toggling the menu on and off?

8-Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display itself when clicked, and does it hide when clicked again?
* Think about how you wrote the previous test. What is different this time around?
* Which clickable element are you checking for?
* How do you "simulate" a mouse click that element without actually clicking it?

9-Write a test suite named "Initial Entries"
* What are you describe-ing in this test suite?

10- Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container
* How does Jasmine's beforeEach()function work?
* How does the loadFeed() function in app.js work? Is it synchronous or asynchronous?

11-Write a test suite named "New Feed Selection"
* What are you describe-ing in this test suite?

12-Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes
How is this test different from the previous test?
Additionally, note that:

* No test should be dependent on the results of another
* Callbacks should be used to ensure that feeds are loaded before they are tested
* Error handling should be implemented for undefined variables and out-of-bound array access
* When complete, all of your tests should pass


