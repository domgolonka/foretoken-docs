---
id: source
title: Source
sidebar_label: Source
slug: /source
---

## Source

All sources are available in the `./resource` directory. You can edit and the resources. The files get checked once a
day by the different modules in the app.

---

### Regular Expressions

Regex expressions are saved in the `./resource/expressions.json` file in JSON format.

Each regex looks like this:

    {
    "name": "ipv4",
    "expression": "^((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)).*",
    "type": "ipv4"
    },

_**Name**:_  The UNIQUE name of the regular expression. 

_**Expression**:_ The regex 

_**Type:**_ The type of expression. For IPs, it is
usually is a ipv4 or ipv6. For IP proxy, its http, https, sock4, sock5.

---

### IPs

The IP files are stored in the `./resource` directory and start with `ip_` such as `ip_tor` for tor.

#### Spam

#### Proxy

#### VPN

#### Tor

### Email

#### Disposable

#### Free

#### Spam