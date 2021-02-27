---
id: score
title: Score
sidebar_label: Score
slug: /score
---

## Score

The overall Fraud Score of the email and IP's reputation and recent behavior across the threat network. 
You can set your own fraud score in the `config.yml` file. 

There are two scores to consider; email, and ip. The score range is from 0 to 100. 
Anything over 100 will be set to 100. 

You can set a score to an integer for a specific check. 
For example, if an email/domain is found in the disposable list, 20 will be added to the score (below). 
If not found, 10 will be taken away.

    email:
      score:
        disposable:
          yes: 20
          no: -10
        free:
          yes: 20
          no: 0
        spam:
          yes: 30
          no: 0
        valid:
          yes: 0
          no: 40
        generic:
          yes: 12
          no: 0
        catchall:
          yes: 10
          no: 0
        domain: # domain age
          week: 30  # younger than one week
          month: 20 # younger than one month
          year: 10 # younger than one year
          yearplus: -10 # older than 1 years
    ip:
      score:
        proxy:
          yes: 40
          no: 0
        spam:
          yes: 40
          no: 0
        tor:
          yes: 20
          no: 0
        vpn:
          yes: 15
          no: 0


