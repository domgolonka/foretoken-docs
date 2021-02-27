---
id: config
title: Config
sidebar_label: Config
slug: /config
---

The config file can be found in ./config.yml. It is highly recommended that you edit it to your needs. An example of the config file is found here: 


    publicport: ":8080"
    grpcport: ":8082"
    env: "dev"
    autotls: false
    debug: true
    ##### External Services
    external:
      maxminddest: "assets/Maxmind/download/"
      ip2location: "assets/IP2Location/download/"
    
    ## Rate limit
    ratelimit:
      enabled: false
      max: 20 # Max number of recent connections during `Duration` seconds before sending a 429 response
      expiration: 30 # Expiration is the time on how long to keep records of requests in memory per minute
    
    ## Crontab (in hours)
    crontab:
      vpn: 24
      proxy: 24
      tor: 12
      spam: 24
      maxmind: 24
    #### SCORE
    email:
      score:
        disposable:
          yes: 20
          no: 0
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
        leaked:
          yes: 25
          no: -10
        domain:
          week: 30
          month: 20
          year: 10
          yearplus: -10
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
    
    ### SMTP
    smtp:
      hostname: ""
      mailaddress: ""
    
    ## error reporting
    errorreporter:
      default: ""
      airbrakecredentials: ""
    
    ## Proxy Settings
    proxy:
      cachedurationminutes: 120
      workers: 40
    
    ### Database: sqlite3 or postgresql. For Non-Memory SQLite, change host: "db.sqlite3"
    database:
      type: "sqlite3"
      Name: ""
      host: "db"
      port: 0
      username: ""
      password: ""
      timezone: "America/Vancouver"
      ssl: false

### Explained 


| Variable        |      Description      |   Values |
| ------------- | :-----------: | -----: |
| publicport      | The REST API port. | 8080 |
| grpcport     |   The gRPC port.   |   8080 |
| autotls |  Enable TLS using Let's encrypt.   |    false |
| debug |   Debug mode for more versability.    |    true |
| external |   This is where the files will be store for each external service.    |    directory |
| ratelimit |    The REST API rate limit for the service. If set to enabled, you can change the settings to throttle calls.   |    false |
| crontab |   The difference in hours to check each service to update a specific list.     |    integer (in hours) |
| email (score) |   This is the bread and butter of the service. You can set the score variables for each service. More in the [score section](score.md).     |    variable |
| ip (score) |   This is the bread and butter of the service. You can set the score variables for each service. More in the [score section](score.md).    |    variable |
| smtp |   It is highly recommended that you set the STMP server to check if an email is valid or not.    |    string |
| errorreporter |   External error reporting.   |    string |
| proxy |   `cachedurationminutes` caches the proxy for X amount of minutes. `workers` is the amount of threads used to check if proxy is active.   |    integers |
| database |   More in the [database section](database.md).   |    variable |
