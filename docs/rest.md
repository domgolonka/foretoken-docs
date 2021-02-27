---
id: rest
title: Rest
sidebar_label: Rest
slug: /rest
---


# REST API

The REST API to the example app is described below.


## Rate Limiting

You can enable the rate limiter for REST API in the `config.yml` file.

    ratelimit:
      enabled: true
      max: 20 
      expiration: 30 

`Max` number of recent connections during `Duration` seconds before sending a 429 response
 
`Expiration` is the time on how long to keep records of requests in memory per minute


### Health
#### Request

`GET /health`

    curl -i -H 'Accept: application/json' http://localhost:8080/health

#### Response

    HTTP/1.1 200 OK
    Date: Thu, 18 Feb 2021 04:56:45 GMT
    Content-Type: application/json
    Content-Length: 13
    
    {"http":true}

### IP Proxy
#### Request

`GET /list/ip/proxy`

    curl -i -H 'Accept: application/json' http://localhost:8080/list/ip/proxy

#### Response

    HTTP/1.1 200 OK
    Content-Type: application/json
    Date: Fri, 12 Feb 2021 03:21:38 GMT
    Transfer-Encoding: chunked
    
    [
        {
            "ip": "185.34.22.225",
            "port": "37879",
            "type": "http"
        },
        ....
    
### IP Spam    
#### Request

`GET /list/ip/spam`

    curl -i -H 'Accept: application/json' http://localhost:8080/list/ip/spam

#### Response

    HTTP/1.1 200 OK
    Date: Thu, 18 Feb 2021 04:57:33 GMT
    Content-Type: text/plain; charset=utf-8
    Content-Length: 34952
    
    168.0.xxx.0/22
    202.49.xxx.0/24

### IP VPN
#### Request

`GET /list/ip/vpn`

    curl -i -H 'Accept: application/json' http://localhost:8080/list/ip/vpn

#### Response

    HTTP/1.1 200 OK
    Date: Fri, 12 Feb 2021 03:29:54 GMT
    Content-Type: text/plain; charset=utf-8
    Transfer-Encoding: chunked

    yul-c14.xxx.com
    lim-c04.xxx.com
    bhx-c05.xxx.com

### IP Tor
#### Request

`GET /list/ip/tor`

    curl -i -H 'Accept: application/json' http://localhost:8080/list/ip/tor

#### Response

    HTTP/1.1 200 OK
    Date: Thu, 18 Feb 2021 04:58:18 GMT
    Content-Type: text/plain; charset=utf-8
    Content-Length: 23253
    
    176.10.xxx.xxx
    54.37.xxx.xxx
    109.70.xxx.xxx

### Email Disposal
#### Request

`GET /list/email/disposal`

    curl -i -H 'Accept: application/json' http://localhost:8080/list/email/disposal

#### Response

    HTTP/1.1 200 OK
    Date: Thu, 18 Feb 2021 04:58:18 GMT
    Content-Type: text/plain; charset=utf-8
    Content-Length: xxx

    xxx.cc
    xxx.com
    xxx.ca

### Email Generic
#### Request

`GET /list/email/generic`

    curl -i -H 'Accept: application/json' http://localhost:8080/list/email/generic

#### Response

    HTTP/1.1 200 OK
    Date: Thu, 18 Feb 2021 04:59:38 GMT
    Content-Type: text/plain; charset=utf-8
    Content-Length: xxxx
    
    xxx@
    xxx@
    xxx@

### Email Spam
#### Request

`GET /list/email/spam`

    curl -i -H 'Accept: application/json' http://localhost:8080/list/email/spam

#### Response

    HTTP/1.1 200 OK
    Date: Thu, 18 Feb 2021 04:59:38 GMT
    Content-Type: text/plain; charset=utf-8
    Content-Length: xxxx

    xxx.cc
    xxx.com
    xxx.ca

### Email Free
#### Request

`GET /list/email/free`

    curl -i -H 'Accept: application/json' http://localhost:8080/list/email/free

#### Response

    HTTP/1.1 200 OK
    Date: Thu, 18 Feb 2021 04:59:38 GMT
    Content-Type: text/plain; charset=utf-8
    Content-Length: xxxx

    xxx.cc
    xxx.com
    xxx.ca

### Email Score
#### Request

`GET /score/email/youremail@gmail.com`

    curl -i -H 'Accept: application/json' http://localhost:8080/score/email/youremail@gmail.com

#### Response

    HTTP/1.1 200 OK
    Date: Fri, 12 Feb 2021 03:29:54 GMT
    Content-Type: text/plain; charset=utf-8
    Transfer-Encoding: chunked

    10

### IP Score
#### Request

`GET /score/ip/127.0.0.1`

    curl -i -H 'Accept: application/json' http://localhost:8080/score/ip/127.0.0.1

#### Response

    HTTP/1.1 200 OK
    Date: Fri, 12 Feb 2021 03:29:54 GMT
    Content-Type: text/plain; charset=utf-8
    Transfer-Encoding: chunked

    0
### Email Validation
#### Request

`GET /validate/email/youremail@gmail.com`

    curl -i -H 'Accept: application/json' http://localhost:8080/validate/email/youremail@gmail.com

#### Response

    HTTP/1.1 200 OK
    Date: Fri, 12 Feb 2021 03:29:54 GMT
    Content-Type: text/json; charset=utf-8
    Transfer-Encoding: chunked

    {
    "valid": true
    }

### Email 
#### Request

`GET /email/youremail@gmail.com`

    curl -i -H 'Accept: application/json' http://localhost:8080/email/youremail@gmail.com

#### Response

    HTTP/1.1 200 OK
    Date: Fri, 12 Feb 2021 03:29:54 GMT
    Content-Type: text/json; charset=utf-8
    Transfer-Encoding: chunked

    {
    "valid": true,
    "disposable": false,
    "recent_spam": false,
    "free": false,
    "leaked": false,
    "generic": false,
    "score": 0,
    "domain": {
        "created_at": "1995-08-13T04:00:00Z",
        "expiration_date": "2021-08-12T04:00:00Z"
        }
    }

### IP 
#### Request

`GET /ip/127.0.0.1`

    curl -i -H 'Accept: application/json' http://localhost:8080/ip/127.0.0.1

#### Response

    HTTP/1.1 200 OK
    Date: Fri, 12 Feb 2021 03:29:54 GMT
    Content-Type: text/json; charset=utf-8
    Transfer-Encoding: chunked

    {
    "success": false,
    "proxy": false,
    "ISP": "",
    "organization": "",
    "ASN": 0,
    "host": "",
    "country_code": "",
    "city": "",
    "region": "",
    "is_crawler": false,
    "connection_type": "",
    "latitude": 0,
    "longitude": 0,
    "timezone": "",
    "vpn": false,
    "tor": false,
    "recent_abuse": false,
    "abuse_velocity": "",
    "bot_status": false,
    "mobile": false,
    "score": 0,
    "operating_system": "",
    "browser": "",
    "device_model": "",
    "device_brand": ""
    }
