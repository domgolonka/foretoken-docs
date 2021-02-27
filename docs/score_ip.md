---
id: score_ip
title: IP Score
sidebar_label: IP
slug: /score_ip
---

The IP Score is outputted in JSON format. 
You can get the score via [REST](rest.md) or [gRPC](grpc.md).

### Example output
    {
        "success": true,
        "proxy": false,
        "ISP": "",
        "organization": "",
        "ASN": "GOOGLE",
        "hostname": "",
        "country_code": "US",
        "city": "",
        "postal_code": "",
        "is_crawler": false,
        "connection_type": "",
        "latitude": 37.751,
        "longitude": -97.822,
        "timezone": "America/Chicago",
        "vpn": false,
        "tor": false,
        "recent_abuse": false,
        "mobile": false,
        "score": 0,
        "operating_system": "",
        "browser": "",
        "device_model": "",
        "device_brand": ""
    }
    
 ### Parameters
 
 | Field        |      Description      |   Possible Values |
 | ------------- | :-----------: | -----: |
 | success      | Whether the response was a success | boolean |
 | proxy      |   If the IP is a proxy    |   boolean |
 | ISP |   ISP name    |    string |
 | Organization |   Organization name. Parent company or subcompany of ISP (Need Maxmind)   |    string |
| ASN |   Autonomous System Number (Need Maxmind)  |    integer |
| hostname |   hostname of IP    |    string |
| country_code |   Country of IP (Need Maxmind)   |    string |
| city |   City of IP  (Need Maxmind)    |    string |
| postal_code |   Postal Code/ZIP of IP (Need Maxmind)    |    string |
| is_crawler |   If is a search engine; Google, yahoo, bing,yandex etc    |    boolean |
| connection_type |    "Residential", "Corporate", "Education", "Mobile", or "Data Center"    |    string |
| latitude |   Latitude of IP    |    float |
 | longitude |   Longitude of IP    |    float |   
 | timezone |   timezone of IP   |    string | 
 | vpn |   Is IP a VPN?   |    boolean | 
 | tor |   Is IP using Tor?  |    boolean | 
 | recent_abuse |   Is IP a spam IP?   |    boolean |
 | mobile |   Is IP using mobile device?   |    boolean |
 | score |  A score from 0 to 100. It's set in the config. A score of 100 indicates that the IP is fraudulent.   |    integer |
 | operating_system |  Operating system of IP   |    string | 
 | browser |   Browser used   |    string | 
 | device_model |   Device Model used   |    string | 
 | device_brand |   Device Brand used   |    string |        