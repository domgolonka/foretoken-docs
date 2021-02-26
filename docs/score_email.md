---
id: score_email
title: Email Score
sidebar_label: Email
slug: /score_email
---

The Email Score is outputted in JSON format. 
You can get the score via [REST](rest.md) or [gRPC](grpc.md).

#### Example output
    {
    "success": true,
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
    
    
 #### Parameters
 
 | Field        |      Description      |   Possible Values |
 | ------------- | :-----------: | -----: |
 | success      | Whether the response was a success | boolean |
 | valid      |   Whether the email is valid. It's best make sure you have smtp config set properly.    |   boolean |
 | disposable |   Is the domain disposable?    |    boolean |
 | recent_spam |   Is the domain a spam domain?    |    boolean |
| free |   Is the domain free?    |    boolean |
 | leaked |   Has the email been leaked? (requires [pwned](external.md) )   |    boolean |
 | generic |   Is the email generic? admin@.., user@.. etc   |    boolean |
 | score |  A score from 0 to 100. It's set in the config. A score of 100 indicates that the IP is fraudulent.   |    integer |
 | domain |   Shows details about the domain such as created at and expired at    |    array |