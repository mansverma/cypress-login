

This reposetory contains e2e browser tests and API tests using cypress

#### e2e tests
The purpose of these tests are to check if user is able to create new account. I have added test for desktop and mobile viewport seperately.Thr common selectors are defined in command.js file so that selectos can be reused.


#### API tests
These tests contains test for  GET request and validate response 


### Installation

#### Install cypress

This project requires cypress to run tests
Type following command in your terminal to install cypress

```
npm install cypress
```

#### Download the project

Run following commands to download and setup project

```
git clone git@github.com:Mansatfinder/automation.git
cd automation
```

#### Install the dependencies

Run following command to install all dependencies

```
yarn
```

### Running the tests

#### All tests

To run these tests in both desktop and mobile viewport use this command in terminal

```
yarn tests
```

#### API tests only

To run API tests use this command in terminal

```
yarn api
```

#### e2e tests only

To run these tests in desktop only use this command in terminal

```
yarn e2e
```
