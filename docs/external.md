---
id: external
title: External
sidebar_label: External
slug: /external
---

You can use the external services to improve the quality of the scoring and service. 
Rename the file `changeme.env` to `.env` in the root directory.

The application improves if you sign up for external APIs. Leaked is paid, but all other services are free to sign up!

- [haveibeenpwned.com](https://haveibeenpwned.com/) - Check if email/password is leaked.
- [maxmind.com](https://www.maxmind.com/en/home) - IP Geolocation
- [ip2location.com](https://www.ip2location.com/) - IP Geolocation


It's highly recommended that you enable all the services in the `.env` file.

    PWNEDKEY=
    IP2LOCATION=
    MAXMIND=
      
