## Note 1: 
Any API interaction should happen through state only.

## Note 2 (Build) 
1. After you have completed your application fully, (i.e. everything is working and is live: Backend, database ,  APIs, every component is live and working) then run the command:

```npm
npm run build
```
> and you will get a build of your application in `build` folder.

2. Anytime you make any changes to your application, run the command again.

3. Then go to the website https://www.netlify.com and SIGN up / login with Git.

4. On the landing page there, you will find a field saying `Drag and drop your site output folder here`

5. Drag and drop your `build` folder into that. 

6. Wait for a minute and refresh the page, then you will get a live `url` of your app.

7. Go in change site settings, and change the name of your app, so it looks good. Then your `url` will also get updated. Use the new one.

> If it doesn't work, wait for some time (say 2 min), if still doesn't works then delete it once, and redo the things. 

## So at the end we have everything as live: 
1. Database: on MongoDb Atlas (i.e. in Cloud)

2. Heroku  : 
  a. Backend API, 
  b. Login API, 
  c. Payment gateway

3. FrontEnd: on netlify


## Note 3: 
Update redirection url of Payment Gateway to redirect to your live app on netlify.
If you change your app name, you need to again change the redirection url.

Then commit, and push the changes to git.
Deploy the updated Payment Gateway again in Heroku (so changes are reflected in deployment.)

<!-- 
got into an error: 
when you put any path name directly in url, the page shows 404 on netlify, even when the data comes back from payment gateway, then also we get 404 on netlify.

To fix this: 
https://dev.to/rajeshroyal/page-not-found-error-on-netlify-reactjs-react-router-solved-43oa 

-->

## These are how things are connected : 
1. database (mongodb live)
2. APIs (on heroku) interacting with my live database
3. Payment Gateway (on heroku) using my test API keys redirecting back to app
4. Login / Register App (on heroku) interacting with my live database
5. React App (interacting with above 4) live on netlify