# Disclaimer the model will take sometime to boot see more [here](https://replicate.com/docs/how-does-replicate-work#cold-boots).

## Incident Plat

Get a summary of your errors in your deployments from any app directly from vercel using a popular LLM [LLama 🦙](https://replicate.com/meta/llama-2-70b-chat)https://replicate.com/meta/llama-2-70b-chat

if you would like to run this app do the following:

- sign up for the services below and fill in your env files with their token.
```
VERCEL_AUTH_TOKEN==******************
VERCEL_AUTH_PROJECT_ID==******************

UPSTASH_TOKEN==******************
UPSTASH_URL==******************

REPLICATE_API_TOKEN==******************
REPLICATE_URL=******************
```

## Demo

Enter your app name from vercel

<img width="1440" alt="Screenshot 2023-11-09 at 1 11 34 PM" src="https://github.com/wcisco17/incident-plat/assets/35783824/99cdb9ba-4189-429e-a9d8-e8605abd04bf">

Then select the deployments that caused an error you'd like to see a summary off:

<img width="1436" alt="Screenshot 2023-11-09 at 1 12 27 PM" src="https://github.com/wcisco17/incident-plat/assets/35783824/22302a21-ef16-4573-b406-f9bd30ba6f00">

You can now trigger the LLM to generate the reason for why your deployments failed!

<img width="1440" alt="Screenshot 2023-11-09 at 1 14 40 PM" src="https://github.com/wcisco17/incident-plat/assets/35783824/d1fd8710-96bb-4900-a5de-eb068d88d581">



