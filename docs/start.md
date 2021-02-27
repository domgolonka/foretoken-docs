---
id: start
title: Start
sidebar_label: Start
slug: /start
---

## Migrate

**If using NON-MEMORY SQLITE or PostgreSQL, DO THIS BEFORE YOU RUN**, You need to migrate the database:

`make migrate`

:::Memory SQLite will always migrate at every run.

## Edit the config

You want to rename `changeme.env` to `.env`, and edit the exteral APIs with your API keys.

You can also edit the config.yml to your preference. More in the [config section](config.md).

## How to run

To run it on your local computer:

    git clone https://github.com/domgolonka/Foretoken`
    cd ./Foretoken
    make build && ./bin/Foretoken


The default config file is `config.yml`. If you want to run it with a different config file (or add your own)
.

`make build` (make sure to build it first)

`./bin/Foretoken --config=/PATH/TO/CONFIG`

example:
`./bin/Foretoken --config=./config.prod.yml`


## Docker 

If docker is installed you can build an image and run this as a container.

```docker build -t Foretoken .```

Once the image is built, Foretoken can be invoked by running the following:

```docker run --rm -t Foretoken```