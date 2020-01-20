---
title: "Cleaning up your GTM container in Google Sheets"
slug: "/cleaning-up-your-gtm-container-in-google-sheets"
date: "2018-12-12T19:52:24.000Z"
featured: false
draft: false
tags: ["work","Google Tag Manager","Google Sheets"]
---

One project I've tackled at GitLab is cleaning up our GTM container. Our container is a few years old and is full of cruft, and I want to clear the cobwebs. This means I need to move our active components to a new container and then import the updates for a fresh start.

This cleanup effort led me to back up our container with an export from the GTM admin, and I scrolled through the JSON file daydreaming of how beautiful it would be to have all of that data in a format I could read.

Then I had an idea.

> 💡 What if I could import this data from the JSON backup into Google Sheets?

I’m technical, but I’m not JSON technical. Which means, I spent a little bit of time Googling and ended up on a [Stack Exchange post](https://webapps.stackexchange.com/questions/73252/how-to-import-json-data-into-google-spreadsheets#73270) with a [link to a Google Apps script to import JSON in Google Sheets on GitHub](https://github.com/bradjasper/ImportJSON). I was able to use this to import the GTM JSON backup, but the data was still a little unusable with the basic import.

There's a query option in the importJSON script, so I tried using that with no success. After poking around a bit, I found a tool to help me parse the JSON paths in my GTM JSON backup.

Success! I was able to import my tags. 

When I tried to add triggers and variables, my import filled in some data that made it less scannable. I'm guessing it had something to do with JSON inheritance or something.

Importing everything into a specific sheet helped keep the data scannable, so I didn't worry too much about troubleshooting how to import everything at once. Here are the functions I wrote in each sheet.

### Tag sheet

`=importJSON(\"url where I uploaded JSON, you can use a public file on Google Drive or Dropbox\", \"/containerVersion/tag\",\"noInherit\")`

### Trigger sheet

`=importJSON(\"url where I uploaded JSON, you can use a public file on Google Drive or Dropbox\", \"/containerVersion/trigger\",\"noInherit\")`

### Variable sheet

`=importJSON(\"url where I uploaded JSON, you can use a public file on Google Drive or Dropbox\", \"/containerVersion/variable\",\"noInherit\")`

Now I can quickly find data for each component in a Google Sheet without having to dig into each setting individually to collect data! The importJSON script makes the cleanup I'm tackling much faster.

Another neat tool I stumbled on in my quest to get GTM container info into a Google Sheet is [GTM Tools by Simo Ahava](https://gsuite.google.com/marketplace/app/gtm_tools_by_simo_ahava/699273202516). Like so many folks, I've learned a ton about GTM from Simo's blog over the years, and I was excited to see this add-on.

Our team was talking about using Google Sheets to keep an inventory of our GTM components going forward and the note syncing between Google Sheets and GTM sounds like it will help us do just that.
