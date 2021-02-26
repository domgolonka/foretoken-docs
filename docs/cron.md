---
id: cron
title: Cron
sidebar_label: Cron
slug: /cron
---

You can change the way cron runs on the IP scrapers & External downloads in the `config.yml` file.
The integer is a number in `hours`.

    crontab:
      vpn: 24
      proxy: 24
      tor: 12
      spam: 24
      maxmind: 24