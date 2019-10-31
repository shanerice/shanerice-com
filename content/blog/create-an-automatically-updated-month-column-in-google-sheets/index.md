---
title: "Create an automatically updated month column in Google Sheets"
slug: "/create-an-automatically-updated-month-column-in-google-sheets"
date: "2019-07-10T21:21:27.000Z"
featured: false
draft: false
tags: ["Google Sheets workflow"]
---

You can use `=today()-30` to set a cell's value to the last calendar month. To create a column with a rolling 12 month you can iterate the cells in a column by 30.

- `=today()-30`
- `=today()-60`
- `=today()-90`
- `=today()-120`

31 day months and February will create some hiccups, but unless you need this column for every day use it will be fine.
