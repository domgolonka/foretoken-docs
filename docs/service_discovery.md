---
id: service_discovery
title: Service Discovery
sidebar_label: Service Discovery
slug: /service_discovery
---


Foretoken supports etcd3, zookeeper, and consul as a registry.

All service discovery configurations are stored in the `config.yml` file:

    servicediscovery:
      service: ""
      nodeid: ""
      endpoint: ""

- Service: The viable options are `consul`, `etc3` and `zookeeper`
- Nodeid: A name for the grpc nodeid
- endpoint: An address for the service such as zookeeper: `10.0.101.68:2189`, etcd: `http://10.0.101.68:2379`  or consul: `http://10.0.101.68:8500`
