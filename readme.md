# Express Boilerplate
This is a boilerplate project used for starting a new project

## Set up
Create the following steps to start a new project

1. Clone the respository to your local machine `git clone <git-repository-url>`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project
4. Install the node dependencies `npm i`
5. Move the example Environment file to `.env` and delete `example.env`
6. Edit the contents of the `package.json` to use NEW project details

## Scripts
Start the application `npm start`
Start nodemon `npm run dev`
Run tests `npm test`

## Deploying
When you new project is ready for deployment run the following commands:
1. Audit your project for vunerabilities `npm run predeploy`
2. Deploy your project to Heroku `npm run deploy`