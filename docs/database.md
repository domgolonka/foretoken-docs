---
id: database
title: Database
sidebar_label: Database
slug: /database
---

## Database

At this moment, you are able to use PostgreSQL and SQLite.

By Default, the SQLite driver is set to "in memory". To use a SQLite file, you need to 
specify that the `host` to a `.sqlite3` extension, example: `host: "YOURNAME.sqlite3"`. This will create a 
new SQLite file  in the root directory. 

At this moment, PostgreSQL needs some more testing!