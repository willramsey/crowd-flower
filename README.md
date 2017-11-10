# Assignment

Imagine you’re working with a product manager and s/he wants to build a list of ordered tasks as the new feature of the product you’re working on. Your colleague will implement details of the Task component. Your job is to implement a working prototype of a task list that will be loaded/saved on the server.

We created a small server application that you can connect to. It has two endpoints for fetching and saving your tasks. Provided endpoints will fail randomly to help you and us test the unhappy paths.

## Mockup

![Alt text](https://dr5mo5s7lqrtc.cloudfront.net/items/2R0x0c1y2x3z0n0J1X3K/Screen%20Shot%202017-11-10%20at%203.03.44%20PM.png "Mockup to match")

## UI and Interactions

* Render ordered list of tasks. Load the list when the app starts
* “New task” button will create a new task and place it on top of the list
* “Save” button
    * Is disabled by default
    * Is set enabled when current state of the list doesn’t match it’s initial state (task has been added, deleted, or updated)
    * On click will send a POST request to the server with current state of the list. Show success/failure alert after successful/failed request
* “trash” button deletes the task from the list
* Alert message
    * “x” button will remove the alert
* Task title should be editable and set in focus when a new task is added


# Installation

Install via npm.

```bash
cd task-app
npm install
npm start
```
Then navigate to [localhost:3000](http://localhost:3000) in browser.

## Result

![Alt text](https://dr5mo5s7lqrtc.cloudfront.net/items/3S1d2V0X1o0l0l2w3S1w/Screen%20Shot%202017-11-10%20at%202.42.25%20PM.png "Comparison of Mock Up (Left) and App running locally (Right)")
