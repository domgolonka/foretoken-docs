---
id: start
title: Start
sidebar_label: Start
slug: /start
---

## Migrate

**BEFORE YOU RUN THIS**, You need to migrate the database:

`make migrate`

## How to run

To run it on your local computer:

`make run`

The default config file is `config/config.dev.yml`. If you want to run it with a different config file (or add your own)
.

`make build` (make sure to build it first)

`./bin/threatdefender --config=/PATH/TO/CONFIG`

example:
`./bin/threatdefender --config=config/config.prod.yml`


## Docker 

If docker is installed you can build an image and run this as a container.

```docker build -t threatdefender .```

Once the image is built, ThreatDefender can be invoked by running the following:

```docker run --rm -t threatdefender```