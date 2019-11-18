const handleServerData = (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];
  if (method === 'GET' && path === '/node/test/soar/blockly/_config') {
    let response = {
      "status": "success",
      "message": [
        {
          "enable": "false",
          "vendor": "nsfocus",
          "name": "bsa",
          "actions": [
            {
              "params": [

              ],
              "name": "on_poll",
              "description": "\u4ecebsa\u7684topic\u62c9\u53d6\u5b89\u5168\u4e8b\u4ef6\u6570\u636e"
            }
          ],
          "version": "v1",
          "create_time": "2019-07-23 16:55:40",
          "is_datasource": "true",
          "key": 34,
          "associated": 1,
          "plugin_id": 34,
          "assets": [
            {
              "asset_id": 88,
              "enable": "false",
              "name": "BSA_192.168.19.38",
              "create_time": "2019-07-23 04:57:36",
              "key": 88,
              "config": {
                "topic": "ips_tac_log_tmp",
                "max_record": 100,
                "hosts": "192.168.19.38:9092,192.168.19.35:9092,192.168.19.39:9092,192.168.19.40:9092",
                "period": 11,
                "timeout": 10000
              },
              "description": "BSA_192.168.19.38"
            }
          ],
          "config": [
            {
              "type": "string",
              "name": "topic",
              "desc": "kafka topic name"
            },
            {
              "type": "int",
              "name": "timeout",
              "desc": "\u4e00\u6b21poll\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3ams"
            },
            {
              "type": "int",
              "name": "max_record",
              "desc": "\u5355\u6b21poll\u7684\u6700\u5927\u6570\u636e\u6761\u6570"
            },
            {
              "type": "string",
              "name": "hosts",
              "desc": "eg: ip:9092"
            },
            {
              "type": "int",
              "name": "period",
              "desc": "poll\u5468\u671f"
            }
          ],
          "description": "\u5bf9\u63a5bsa\u5e73\u53f0\u7684\u63d2\u4ef6"
        },
        {
          "enable": "true",
          "vendor": "nsfocus",
          "name": "agent",
          "actions": [
            {
              "params": [
                {
                  "type": "string",
                  "name": "endpoint_ip",
                  "desc": "\u7ec8\u7aefip"
                },
                {
                  "type": "string",
                  "name": "objects",
                  "desc": "\u5f85\u6740\u8fdb\u7a0b\u5217\u8868"
                }
              ],
              "name": "kill_process",
              "description": "\u6740\u8fdb\u7a0b"
            },
            {
              "params": [
                {
                  "type": "string",
                  "name": "endpoint_ip",
                  "desc": "\u7ec8\u7aefip"
                },
                {
                  "type": "string",
                  "name": "objects",
                  "desc": "\u6ce8\u518c\u8868\u8def\u5f84\u5217\u8868"
                }
              ],
              "name": "query_registry",
              "description": "\u67e5\u8be2\u6ce8\u518c\u8868"
            },
            {
              "params": [
                {
                  "type": "string",
                  "name": "endpoint_ip",
                  "desc": "\u7ec8\u7aefip"
                },
                {
                  "type": "string",
                  "name": "objects",
                  "desc": "\u5f85\u7ec8\u6b62\u670d\u52a1\u540d\u79f0\u5217\u8868"
                }
              ],
              "name": "stop_service",
              "description": "\u7ec8\u6b62\u670d\u52a1"
            },
            {
              "params": [
                {
                  "type": "string",
                  "name": "endpoint_ip",
                  "desc": "\u7ec8\u7aefip"
                },
                {
                  "type": "string",
                  "name": "objects",
                  "desc": "\u5f85\u5220\u9664\u670d\u52a1\u540d\u79f0\u5217\u8868"
                }
              ],
              "name": "delete_service",
              "description": "\u5220\u9664\u670d\u52a1"
            },
            {
              "params": [
                {
                  "type": "string",
                  "name": "endpoint_ip",
                  "desc": "\u7ec8\u7aefip"
                },
                {
                  "type": "string",
                  "name": "objects",
                  "desc": "\u5f85\u5220\u9664\u6587\u4ef6\u5939\u5217\u8868"
                }
              ],
              "name": "delete_dir",
              "description": "\u5220\u9664\u6587\u4ef6\u5939"
            },
            {
              "params": [
                {
                  "type": "string",
                  "name": "endpoint_ip",
                  "desc": "\u7ec8\u7aefip"
                },
                {
                  "type": "string",
                  "name": "objects",
                  "desc": "\u5f85\u5220\u9664\u6587\u4ef6\u5217\u8868"
                }
              ],
              "name": "delete_file",
              "description": "\u5220\u9664\u6587\u4ef6"
            },
            {
              "params": [
                {
                  "type": "string",
                  "name": "endpoint_ip",
                  "desc": "\u7ec8\u7aefip"
                },
                {
                  "type": "string",
                  "name": "objects",
                  "desc": "\u5f85\u6267\u884c\u547d\u4ee4\u5217\u8868"
                }
              ],
              "name": "exec_cmd",
              "description": "\u6267\u884c\u7cfb\u7edf\u547d\u4ee4"
            }
          ],
          "version": "v1",
          "create_time": "2019-07-23 15:37:41",
          "is_datasource": "false",
          "key": 33,
          "associated": 1,
          "plugin_id": 33,
          "assets": [
            {
              "asset_id": 86,
              "enable": "true",
              "name": "AGENT_10.65.150.52",
              "create_time": "2019-07-23 03:45:45",
              "key": 86,
              "config": {
                "ip": "10.65.150.52"
              },
              "description": "AGENT_10.65.150.52"
            }
          ],
          "config": [
            {
              "type": "string",
              "name": "ip",
              "desc": "agent server address"
            }
          ],
          "description": "\u5bf9\u63a5\u5fae\u871c\u7f50agent\u7684\u63d2\u4ef6"
        },
        {
          "enable": "true",
          "vendor": "nsfocus",
          "name": "isop",
          "actions": [
            {
              "params": [

              ],
              "name": "on_poll",
              "description": "\u4eceisop\u7684topic\u62c9\u53d6\u5b89\u5168\u4e8b\u4ef6\u6570\u636e"
            }
          ],
          "version": "v1",
          "create_time": "2019-07-23 15:36:27",
          "is_datasource": "true",
          "key": 32,
          "associated": 1,
          "plugin_id": 32,
          "assets": [
            {
              "asset_id": 85,
              "enable": "true",
              "name": "ISOP_10.65.133.17",
              "create_time": "2019-07-23 03:44:11",
              "key": 85,
              "config": {
                "topic": "ipslog",
                "max_record": 100,
                "hosts": "kafka:9092",
                "period": 11,
                "timeout": 10000
              },
              "description": "ISOP_10.65.133.17"
            }
          ],
          "config": [
            {
              "type": "string",
              "name": "topic",
              "desc": "kafka topic name"
            },
            {
              "type": "int",
              "name": "timeout",
              "desc": "\u4e00\u6b21poll\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3ams"
            },
            {
              "type": "int",
              "name": "max_record",
              "desc": "\u5355\u6b21poll\u7684\u6700\u5927\u6570\u636e\u6761\u6570"
            },
            {
              "type": "string",
              "name": "hosts",
              "desc": "eg: ip:9092"
            },
            {
              "type": "int",
              "name": "period",
              "desc": "poll\u5468\u671f"
            }
          ],
          "description": "\u5bf9\u63a5isop\u5e73\u53f0\u7684\u63d2\u4ef6"
        },
        {
          "enable": "false",
          "vendor": "nsfocus",
          "name": "nf",
          "actions": [
            {
              "params": [
                {
                  "type": "string",
                  "name": "ip",
                  "desc": "\u963b\u65adip"
                }
              ],
              "name": "block_ip",
              "description": "\u963b\u65adip"
            },
            {
              "params": [
                {
                  "type": "string",
                  "name": "url",
                  "desc": "\u963b\u65adurl"
                }
              ],
              "name": "block_url",
              "description": "\u963b\u65adurl"
            }
          ],
          "version": "v1",
          "create_time": "2019-07-23 10:17:09",
          "is_datasource": "false",
          "key": 27,
          "associated": 1,
          "plugin_id": 27,
          "assets": [
            {
              "asset_id": 83,
              "enable": "false",
              "name": "NF_10.65.133.252",
              "create_time": "2019-07-23 03:31:53",
              "key": 83,
              "config": {
                "nf_port": 8000,
                "nf_ip": "10.65.133.252",
                "nf_pwd": "ced5cfab-7c6f-11e9-8a30-0010f33f6725",
                "nf_user": "weboper"
              },
              "description": "NF_10.65.133.252"
            }
          ],
          "config": [
            {
              "type": "string",
              "name": "nf_ip",
              "desc": "nf_ip"
            },
            {
              "type": "int",
              "name": "nf_port",
              "desc": "nf_port"
            },
            {
              "type": "string",
              "name": "nf_user",
              "desc": "nf_user"
            },
            {
              "type": "string",
              "name": "nf_pwd",
              "desc": "token"
            }
          ],
          "description": "\u5bf9\u63a5\u7eff\u76dfnf\u7684\u63d2\u4ef6"
        }
      ]
    }
    return response;
  }
  if (method === 'GET' && path === '/node/test/soar/app/mock_data') {
    let response = {
      "status": "success",
      "message": [
        {
          "enable": "false",
          "vendor": "nsfocus",
          "name": "bsa",
          "actions": [
            {
              "params": [

              ],
              "name": "on_poll",
              "description": "\u4ecebsa\u7684topic\u62c9\u53d6\u5b89\u5168\u4e8b\u4ef6\u6570\u636e"
            }
          ],
          "version": "v1",
          "create_time": "2019-07-23 16:55:40",
          "is_datasource": "true",
          "key": 34,
          "associated": 1,
          "plugin_id": 34,
          "assets": [
            {
              "asset_id": 88,
              "enable": "false",
              "name": "BSA_192.168.19.38",
              "create_time": "2019-07-23 04:57:36",
              "key": 88,
              "config": {
                "topic": "ips_tac_log_tmp",
                "max_record": 100,
                "hosts": "192.168.19.38:9092,192.168.19.35:9092,192.168.19.39:9092,192.168.19.40:9092",
                "period": 11,
                "timeout": 10000
              },
              "description": "BSA_192.168.19.38"
            }
          ],
          "config": [
            {
              "type": "string",
              "name": "topic",
              "desc": "kafka topic name"
            },
            {
              "type": "int",
              "name": "timeout",
              "desc": "\u4e00\u6b21poll\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3ams"
            },
            {
              "type": "int",
              "name": "max_record",
              "desc": "\u5355\u6b21poll\u7684\u6700\u5927\u6570\u636e\u6761\u6570"
            },
            {
              "type": "string",
              "name": "hosts",
              "desc": "eg: ip:9092"
            },
            {
              "type": "int",
              "name": "period",
              "desc": "poll\u5468\u671f"
            }
          ],
          "description": "\u5bf9\u63a5bsa\u5e73\u53f0\u7684\u63d2\u4ef6"
        },
        {
          "enable": "true",
          "vendor": "nsfocus",
          "name": "agent",
          "actions": [
            {
              "params": [
                {
                  "type": "string",
                  "name": "endpoint_ip",
                  "desc": "\u7ec8\u7aefip"
                },
                {
                  "type": "string",
                  "name": "objects",
                  "desc": "\u5f85\u6740\u8fdb\u7a0b\u5217\u8868"
                }
              ],
              "name": "kill_process",
              "description": "\u6740\u8fdb\u7a0b"
            },
            {
              "params": [
                {
                  "type": "string",
                  "name": "endpoint_ip",
                  "desc": "\u7ec8\u7aefip"
                },
                {
                  "type": "string",
                  "name": "objects",
                  "desc": "\u6ce8\u518c\u8868\u8def\u5f84\u5217\u8868"
                }
              ],
              "name": "query_registry",
              "description": "\u67e5\u8be2\u6ce8\u518c\u8868"
            },
            {
              "params": [
                {
                  "type": "string",
                  "name": "endpoint_ip",
                  "desc": "\u7ec8\u7aefip"
                },
                {
                  "type": "string",
                  "name": "objects",
                  "desc": "\u5f85\u7ec8\u6b62\u670d\u52a1\u540d\u79f0\u5217\u8868"
                }
              ],
              "name": "stop_service",
              "description": "\u7ec8\u6b62\u670d\u52a1"
            },
            {
              "params": [
                {
                  "type": "string",
                  "name": "endpoint_ip",
                  "desc": "\u7ec8\u7aefip"
                },
                {
                  "type": "string",
                  "name": "objects",
                  "desc": "\u5f85\u5220\u9664\u670d\u52a1\u540d\u79f0\u5217\u8868"
                }
              ],
              "name": "delete_service",
              "description": "\u5220\u9664\u670d\u52a1"
            },
            {
              "params": [
                {
                  "type": "string",
                  "name": "endpoint_ip",
                  "desc": "\u7ec8\u7aefip"
                },
                {
                  "type": "string",
                  "name": "objects",
                  "desc": "\u5f85\u5220\u9664\u6587\u4ef6\u5939\u5217\u8868"
                }
              ],
              "name": "delete_dir",
              "description": "\u5220\u9664\u6587\u4ef6\u5939"
            },
            {
              "params": [
                {
                  "type": "string",
                  "name": "endpoint_ip",
                  "desc": "\u7ec8\u7aefip"
                },
                {
                  "type": "string",
                  "name": "objects",
                  "desc": "\u5f85\u5220\u9664\u6587\u4ef6\u5217\u8868"
                }
              ],
              "name": "delete_file",
              "description": "\u5220\u9664\u6587\u4ef6"
            },
            {
              "params": [
                {
                  "type": "string",
                  "name": "endpoint_ip",
                  "desc": "\u7ec8\u7aefip"
                },
                {
                  "type": "string",
                  "name": "objects",
                  "desc": "\u5f85\u6267\u884c\u547d\u4ee4\u5217\u8868"
                }
              ],
              "name": "exec_cmd",
              "description": "\u6267\u884c\u7cfb\u7edf\u547d\u4ee4"
            }
          ],
          "version": "v1",
          "create_time": "2019-07-23 15:37:41",
          "is_datasource": "false",
          "key": 33,
          "associated": 1,
          "plugin_id": 33,
          "assets": [
            {
              "asset_id": 86,
              "enable": "true",
              "name": "AGENT_10.65.150.52",
              "create_time": "2019-07-23 03:45:45",
              "key": 86,
              "config": {
                "ip": "10.65.150.52"
              },
              "description": "AGENT_10.65.150.52"
            }
          ],
          "config": [
            {
              "type": "string",
              "name": "ip",
              "desc": "agent server address"
            }
          ],
          "description": "\u5bf9\u63a5\u5fae\u871c\u7f50agent\u7684\u63d2\u4ef6"
        },
        {
          "enable": "true",
          "vendor": "nsfocus",
          "name": "isop",
          "actions": [
            {
              "params": [

              ],
              "name": "on_poll",
              "description": "\u4eceisop\u7684topic\u62c9\u53d6\u5b89\u5168\u4e8b\u4ef6\u6570\u636e"
            }
          ],
          "version": "v1",
          "create_time": "2019-07-23 15:36:27",
          "is_datasource": "true",
          "key": 32,
          "associated": 1,
          "plugin_id": 32,
          "assets": [
            {
              "asset_id": 85,
              "enable": "true",
              "name": "ISOP_10.65.133.17",
              "create_time": "2019-07-23 03:44:11",
              "key": 85,
              "config": {
                "topic": "ipslog",
                "max_record": 100,
                "hosts": "kafka:9092",
                "period": 11,
                "timeout": 10000
              },
              "description": "ISOP_10.65.133.17"
            }
          ],
          "config": [
            {
              "type": "string",
              "name": "topic",
              "desc": "kafka topic name"
            },
            {
              "type": "int",
              "name": "timeout",
              "desc": "\u4e00\u6b21poll\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3ams"
            },
            {
              "type": "int",
              "name": "max_record",
              "desc": "\u5355\u6b21poll\u7684\u6700\u5927\u6570\u636e\u6761\u6570"
            },
            {
              "type": "string",
              "name": "hosts",
              "desc": "eg: ip:9092"
            },
            {
              "type": "int",
              "name": "period",
              "desc": "poll\u5468\u671f"
            }
          ],
          "description": "\u5bf9\u63a5isop\u5e73\u53f0\u7684\u63d2\u4ef6"
        },
        {
          "enable": "false",
          "vendor": "nsfocus",
          "name": "nf",
          "actions": [
            {
              "params": [
                {
                  "type": "string",
                  "name": "ip",
                  "desc": "\u963b\u65adip"
                }
              ],
              "name": "block_ip",
              "description": "\u963b\u65adip"
            },
            {
              "params": [
                {
                  "type": "string",
                  "name": "url",
                  "desc": "\u963b\u65adurl"
                }
              ],
              "name": "block_url",
              "description": "\u963b\u65adurl"
            }
          ],
          "version": "v1",
          "create_time": "2019-07-23 10:17:09",
          "is_datasource": "false",
          "key": 27,
          "associated": 1,
          "plugin_id": 27,
          "assets": [
            {
              "asset_id": 83,
              "enable": "false",
              "name": "NF_10.65.133.252",
              "create_time": "2019-07-23 03:31:53",
              "key": 83,
              "config": {
                "nf_port": 8000,
                "nf_ip": "10.65.133.252",
                "nf_pwd": "ced5cfab-7c6f-11e9-8a30-0010f33f6725",
                "nf_user": "weboper"
              },
              "description": "NF_10.65.133.252"
            }
          ],
          "config": [
            {
              "type": "string",
              "name": "nf_ip",
              "desc": "nf_ip"
            },
            {
              "type": "int",
              "name": "nf_port",
              "desc": "nf_port"
            },
            {
              "type": "string",
              "name": "nf_user",
              "desc": "nf_user"
            },
            {
              "type": "string",
              "name": "nf_pwd",
              "desc": "token"
            }
          ],
          "description": "\u5bf9\u63a5\u7eff\u76dfnf\u7684\u63d2\u4ef6"
        }
      ]
    }
    return response;
  }

  // defineActionBlocks
  if (method === 'GET' && path === '/node/test/soar/blockly/_define') {
    let response = {
      "status": "success",
      "message": [
        {
          "enable": "false",
          "vendor": "nsfocus",
          "name": "bsa",
          "actions": [{
            "params": [

            ],
            "name": "on_poll",
            "description": "\u4ecebsa\u7684topic\u62c9\u53d6\u5b89\u5168\u4e8b\u4ef6\u6570\u636e"
          }],
          "version": "v1",
          "create_time": "2019-07-23 16:55:40",
          "is_datasource": "true",
          "key": 34,
          "associated": 1,
          "plugin_id": 34,
          "assets": [{
            "asset_id": 88,
            "enable": "false",
            "name": "BSA_192.168.19.38",
            "create_time": "2019-07-23 04:57:36",
            "key": 88,
            "config": {
              "topic": "ips_tac_log_tmp",
              "max_record": 100,
              "hosts": "192.168.19.38:9092,192.168.19.35:9092,192.168.19.39:9092,192.168.19.40:9092",
              "period": 11,
              "timeout": 10000
            },
            "description": "BSA_192.168.19.38"
          }],
          "config": [{
            "type": "string",
            "name": "topic",
            "desc": "kafka topic name"
          },
          {
            "type": "int",
            "name": "timeout",
            "desc": "\u4e00\u6b21poll\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3ams"
          },
          {
            "type": "int",
            "name": "max_record",
            "desc": "\u5355\u6b21poll\u7684\u6700\u5927\u6570\u636e\u6761\u6570"
          },
          {
            "type": "string",
            "name": "hosts",
            "desc": "eg: ip:9092"
          },
          {
            "type": "int",
            "name": "period",
            "desc": "poll\u5468\u671f"
          }
          ],
          "description": "\u5bf9\u63a5bsa\u5e73\u53f0\u7684\u63d2\u4ef6"
        },
        {
          "enable": "true",
          "vendor": "nsfocus",
          "name": "agent",
          "actions": [{
            "params": [
              {
                "type": "string",
                "name": "endpoint_ip",
                "desc": "\u7ec8\u7aefip"
              },
              {
                "type": "string",
                "name": "objects",
                "desc": "\u5f85\u6740\u8fdb\u7a0b\u5217\u8868"
              }
            ],
            "name": "kill_process",
            "description": "\u6740\u8fdb\u7a0b"
          },
          {
            "params": [
              {
                "type": "string",
                "name": "endpoint_ip",
                "desc": "\u7ec8\u7aefip"
              },
              {
                "type": "string",
                "name": "objects",
                "desc": "\u6ce8\u518c\u8868\u8def\u5f84\u5217\u8868"
              }
            ],
            "name": "query_registry",
            "description": "\u67e5\u8be2\u6ce8\u518c\u8868"
          },
          {
            "params": [{
              "type": "string",
              "name": "endpoint_ip",
              "desc": "\u7ec8\u7aefip"
            },
            {
              "type": "string",
              "name": "objects",
              "desc": "\u5f85\u7ec8\u6b62\u670d\u52a1\u540d\u79f0\u5217\u8868"
            }
            ],
            "name": "stop_service",
            "description": "\u7ec8\u6b62\u670d\u52a1"
          },
          {
            "params": [{
              "type": "string",
              "name": "endpoint_ip",
              "desc": "\u7ec8\u7aefip"
            },
            {
              "type": "string",
              "name": "objects",
              "desc": "\u5f85\u5220\u9664\u670d\u52a1\u540d\u79f0\u5217\u8868"
            }
            ],
            "name": "delete_service",
            "description": "\u5220\u9664\u670d\u52a1"
          },
          {
            "params": [{
              "type": "string",
              "name": "endpoint_ip",
              "desc": "\u7ec8\u7aefip"
            },
            {
              "type": "string",
              "name": "objects",
              "desc": "\u5f85\u5220\u9664\u6587\u4ef6\u5939\u5217\u8868"
            }
            ],
            "name": "delete_dir",
            "description": "\u5220\u9664\u6587\u4ef6\u5939"
          },
          {
            "params": [{
              "type": "string",
              "name": "endpoint_ip",
              "desc": "\u7ec8\u7aefip"
            },
            {
              "type": "string",
              "name": "objects",
              "desc": "\u5f85\u5220\u9664\u6587\u4ef6\u5217\u8868"
            }
            ],
            "name": "delete_file",
            "description": "\u5220\u9664\u6587\u4ef6"
          },
          {
            "params": [{
              "type": "string",
              "name": "endpoint_ip",
              "desc": "\u7ec8\u7aefip"
            },
            {
              "type": "string",
              "name": "objects",
              "desc": "\u5f85\u6267\u884c\u547d\u4ee4\u5217\u8868"
            }
            ],
            "name": "exec_cmd",
            "description": "\u6267\u884c\u7cfb\u7edf\u547d\u4ee4"
          }
          ],
          "version": "v1",
          "create_time": "2019-07-23 15:37:41",
          "is_datasource": "false",
          "key": 33,
          "associated": 1,
          "plugin_id": 33,
          "assets": [{
            "asset_id": 86,
            "enable": "true",
            "name": "AGENT_10.65.150.52",
            "create_time": "2019-07-23 03:45:45",
            "key": 86,
            "config": {
              "ip": "10.65.150.52"
            },
            "description": "AGENT_10.65.150.52"
          }],
          "config": [{
            "type": "string",
            "name": "ip",
            "desc": "agent server address"
          }],
          "description": "\u5bf9\u63a5\u5fae\u871c\u7f50agent\u7684\u63d2\u4ef6"
        },
        {
          "enable": "true",
          "vendor": "nsfocus",
          "name": "isop",
          "actions": [{
            "params": [

            ],
            "name": "on_poll",
            "description": "\u4eceisop\u7684topic\u62c9\u53d6\u5b89\u5168\u4e8b\u4ef6\u6570\u636e"
          }],
          "version": "v1",
          "create_time": "2019-07-23 15:36:27",
          "is_datasource": "true",
          "key": 32,
          "associated": 1,
          "plugin_id": 32,
          "assets": [{
            "asset_id": 85,
            "enable": "true",
            "name": "ISOP_10.65.133.17",
            "create_time": "2019-07-23 03:44:11",
            "key": 85,
            "config": {
              "topic": "ipslog",
              "max_record": 100,
              "hosts": "kafka:9092",
              "period": 11,
              "timeout": 10000
            },
            "description": "ISOP_10.65.133.17"
          }],
          "config": [{
            "type": "string",
            "name": "topic",
            "desc": "kafka topic name"
          },
          {
            "type": "int",
            "name": "timeout",
            "desc": "\u4e00\u6b21poll\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3ams"
          },
          {
            "type": "int",
            "name": "max_record",
            "desc": "\u5355\u6b21poll\u7684\u6700\u5927\u6570\u636e\u6761\u6570"
          },
          {
            "type": "string",
            "name": "hosts",
            "desc": "eg: ip:9092"
          },
          {
            "type": "int",
            "name": "period",
            "desc": "poll\u5468\u671f"
          }
          ],
          "description": "\u5bf9\u63a5isop\u5e73\u53f0\u7684\u63d2\u4ef6"
        },
        {
          "enable": "false",
          "vendor": "nsfocus",
          "name": "nf",
          "actions": [{
            "params": [{
              "type": "string",
              "name": "ip",
              "desc": "\u963b\u65adip"
            }],
            "name": "block_ip",
            "description": "\u963b\u65adip"
          },
          {
            "params": [{
              "type": "string",
              "name": "url",
              "desc": "\u963b\u65adurl"
            }],
            "name": "block_url",
            "description": "\u963b\u65adurl"
          }
          ],
          "version": "v1",
          "create_time": "2019-07-23 10:17:09",
          "is_datasource": "false",
          "key": 27,
          "associated": 1,
          "plugin_id": 27,
          "assets": [{
            "asset_id": 83,
            "enable": "false",
            "name": "NF_10.65.133.252",
            "create_time": "2019-07-23 03:31:53",
            "key": 83,
            "config": {
              "nf_port": 8000,
              "nf_ip": "10.65.133.252",
              "nf_pwd": "ced5cfab-7c6f-11e9-8a30-0010f33f6725",
              "nf_user": "weboper"
            },
            "description": "NF_10.65.133.252"
          }],
          "config": [{
            "type": "string",
            "name": "nf_ip",
            "desc": "nf_ip"
          },
          {
            "type": "int",
            "name": "nf_port",
            "desc": "nf_port"
          },
          {
            "type": "string",
            "name": "nf_user",
            "desc": "nf_user"
          },
          {
            "type": "string",
            "name": "nf_pwd",
            "desc": "token"
          }
          ],
          "description": "\u5bf9\u63a5\u7eff\u76dfnf\u7684\u63d2\u4ef6"
        }
      ]
    }
    return response;
  }

  // kill_prosses的配置参数
  if (method === 'GET' && path === '/node/test/soar/kill_prosses/public_block330/_data') {
    const response = {
      "status": "success",
      "message": [
        {
          "enable": "true",
          "vendor": "nsfocus",
          "name": "agent",
          "actions": [{
            "params": [
              {
                "type": "string",
                "name": "endpoint_ip",
                "desc": "\u7ec8\u7aefip"
              },
              {
                "type": "string",
                "name": "objects",
                "desc": "\u5f85\u6740\u8fdb\u7a0b\u5217\u8868"
              }
            ],
            "name": "kill_process",
            "description": "\u6740\u8fdb\u7a0b"
          },
          {
            "params": [
              {
                "type": "string",
                "name": "endpoint_ip",
                "desc": "\u7ec8\u7aefip"
              },
              {
                "type": "string",
                "name": "objects",
                "desc": "\u6ce8\u518c\u8868\u8def\u5f84\u5217\u8868"
              }
            ],
            "name": "query_registry",
            "description": "\u67e5\u8be2\u6ce8\u518c\u8868"
          },
          {
            "params": [{
              "type": "string",
              "name": "endpoint_ip",
              "desc": "\u7ec8\u7aefip"
            },
            {
              "type": "string",
              "name": "objects",
              "desc": "\u5f85\u7ec8\u6b62\u670d\u52a1\u540d\u79f0\u5217\u8868"
            }
            ],
            "name": "stop_service",
            "description": "\u7ec8\u6b62\u670d\u52a1"
          },
          {
            "params": [{
              "type": "string",
              "name": "endpoint_ip",
              "desc": "\u7ec8\u7aefip"
            },
            {
              "type": "string",
              "name": "objects",
              "desc": "\u5f85\u5220\u9664\u670d\u52a1\u540d\u79f0\u5217\u8868"
            }
            ],
            "name": "delete_service",
            "description": "\u5220\u9664\u670d\u52a1"
          },
          {
            "params": [{
              "type": "string",
              "name": "endpoint_ip",
              "desc": "\u7ec8\u7aefip"
            },
            {
              "type": "string",
              "name": "objects",
              "desc": "\u5f85\u5220\u9664\u6587\u4ef6\u5939\u5217\u8868"
            }
            ],
            "name": "delete_dir",
            "description": "\u5220\u9664\u6587\u4ef6\u5939"
          },
          {
            "params": [{
              "type": "string",
              "name": "endpoint_ip",
              "desc": "\u7ec8\u7aefip"
            },
            {
              "type": "string",
              "name": "objects",
              "desc": "\u5f85\u5220\u9664\u6587\u4ef6\u5217\u8868"
            }
            ],
            "name": "delete_file",
            "description": "\u5220\u9664\u6587\u4ef6"
          },
          {
            "params": [{
              "type": "string",
              "name": "endpoint_ip",
              "desc": "\u7ec8\u7aefip"
            },
            {
              "type": "string",
              "name": "objects",
              "desc": "\u5f85\u6267\u884c\u547d\u4ee4\u5217\u8868"
            }
            ],
            "name": "exec_cmd",
            "description": "\u6267\u884c\u7cfb\u7edf\u547d\u4ee4"
          }
          ],
          "version": "v1",
          "create_time": "2019-07-23 15:37:41",
          "is_datasource": "false",
          "key": 33,
          "associated": 1,
          "plugin_id": 33,
          "assets": [{
            "asset_id": 86,
            "enable": "true",
            "name": "AGENT_10.65.150.52",
            "create_time": "2019-07-23 03:45:45",
            "key": 86,
            "config": {
              "ip": "10.65.150.52"
            },
            "description": "AGENT_10.65.150.52"
          }],
          "config": [{
            "type": "string",
            "name": "ip",
            "desc": "agent server address"
          }],
          "description": "\u5bf9\u63a5\u5fae\u871c\u7f50agent\u7684\u63d2\u4ef6"
        }
      ]
    }
    return response;
  }
  if (method === 'GET' && path === '/node/test/soar/kill_prosses/public_block270/_data') {
    const response = {
      "status": "error",
      "message": [
        {
          "enable": "true",
          "vendor": "nsfocus",
          "name": "agent",
          "actions": [{
            "params": [
              {
                "type": "string",
                "name": "endpoint_ip",
                "desc": "\u7ec8\u7aefip"
              },
              {
                "type": "string",
                "name": "objects",
                "desc": "\u5f85\u6740\u8fdb\u7a0b\u5217\u8868"
              }
            ],
            "name": "kill_process",
            "description": "\u6740\u8fdb\u7a0b"
          },
          {
            "params": [
              {
                "type": "string",
                "name": "endpoint_ip",
                "desc": "\u7ec8\u7aefip"
              },
              {
                "type": "string",
                "name": "objects",
                "desc": "\u6ce8\u518c\u8868\u8def\u5f84\u5217\u8868"
              }
            ],
            "name": "query_registry",
            "description": "\u67e5\u8be2\u6ce8\u518c\u8868"
          },
          {
            "params": [{
              "type": "string",
              "name": "endpoint_ip",
              "desc": "\u7ec8\u7aefip"
            },
            {
              "type": "string",
              "name": "objects",
              "desc": "\u5f85\u7ec8\u6b62\u670d\u52a1\u540d\u79f0\u5217\u8868"
            }
            ],
            "name": "stop_service",
            "description": "\u7ec8\u6b62\u670d\u52a1"
          },
          {
            "params": [{
              "type": "string",
              "name": "endpoint_ip",
              "desc": "\u7ec8\u7aefip"
            },
            {
              "type": "string",
              "name": "objects",
              "desc": "\u5f85\u5220\u9664\u670d\u52a1\u540d\u79f0\u5217\u8868"
            }
            ],
            "name": "delete_service",
            "description": "\u5220\u9664\u670d\u52a1"
          },
          {
            "params": [{
              "type": "string",
              "name": "endpoint_ip",
              "desc": "\u7ec8\u7aefip"
            },
            {
              "type": "string",
              "name": "objects",
              "desc": "\u5f85\u5220\u9664\u6587\u4ef6\u5939\u5217\u8868"
            }
            ],
            "name": "delete_dir",
            "description": "\u5220\u9664\u6587\u4ef6\u5939"
          },
          {
            "params": [{
              "type": "string",
              "name": "endpoint_ip",
              "desc": "\u7ec8\u7aefip"
            },
            {
              "type": "string",
              "name": "objects",
              "desc": "\u5f85\u5220\u9664\u6587\u4ef6\u5217\u8868"
            }
            ],
            "name": "delete_file",
            "description": "\u5220\u9664\u6587\u4ef6"
          },
          {
            "params": [{
              "type": "string",
              "name": "endpoint_ip",
              "desc": "\u7ec8\u7aefip"
            },
            {
              "type": "string",
              "name": "objects",
              "desc": "\u5f85\u6267\u884c\u547d\u4ee4\u5217\u8868"
            }
            ],
            "name": "exec_cmd",
            "description": "\u6267\u884c\u7cfb\u7edf\u547d\u4ee4"
          }
          ],
          "version": "v1",
          "create_time": "2019-07-23 15:37:41",
          "is_datasource": "false",
          "key": 33,
          "associated": 1,
          "plugin_id": 33,
          "assets": [{
            "asset_id": 86,
            "enable": "true",
            "name": "AGENT_10.65.150.52",
            "create_time": "2019-07-23 03:45:45",
            "key": 86,
            "config": {
              "ip": "10.65.150.52"
            },
            "description": "AGENT_10.65.150.52"
          }],
          "config": [{
            "type": "string",
            "name": "ip",
            "desc": "agent server address"
          }],
          "description": "\u5bf9\u63a5\u5fae\u871c\u7f50agent\u7684\u63d2\u4ef6"
        }
      ]
    }
    return response;
  }

  if (method === 'GET' && path === '/test/test') {
    const response = {
      "actionId": "actionId",
      "name": "actionName",
      "selections": [
        { "desctiption": "资产1" },
        { "desctiption": "资产2" },
        { "desctiption": "资产3" }
      ],
      "params": [
        {
          "name": "参数1",
          "datapath": [
            {
              "name": "这是datapath1",
              "value": "datapath1的value"
            },
            {
              "name": "这是datapath2",
              "value": "datapath2的value"
            }
          ],
          "inputValue": "参数1用户手动输入的值"
        },
        // {
        //   "name": "参数2",
        //   "datapath": [
        //     {
        //       "name": "这是datapath1",
        //       "value": "datapath1的value"
        //     },
        //     {
        //       "name": "这是datapath2",
        //       "value": "datapath2的value"
        //     }
        //   ],
        //   "inputValue": "参数2用户手动输入的值"
        // }
      ]
    }

    // const asdf = {
    //   action_id: "actionId",
    //   action_name: "actionName",
    //   assets: ["资产1", "资产2", "资产3"],
    //   assets: [
    //     {
    //       name: '资产1',
    //       value: '资产1'
    //     },
    //     {
    //       name: '资产2',
    //       value: '资产2'
    //     }
    //   ],
    //   params: ["参数1", "参数2"]
    // }
    const asdf = {
      action_id: "actionId",
      action_name: "actionName",
      assets: ["资产1", "资产2", "资产3"],
      // params: ["参数1", "参数2"]
      params: ["参数1"]
    }

    return asdf;
  }


  // 请求datapath的接口
  if (method === 'GET' && path === '/node/test/soar/datapath/_config') {
    const response = [
      "applicationProtocol", "eventType", "eventStage", "destinationAddress", "destinationCountry", "destinationProvince", "destionationCity"
    ]

    const asdf = [
      {
        "name": "源ip",
        "add": "sourceAddress"
      },
      {
        "name": "目的ip",
        "add": "destinationAddress"
      }
    ]
    return asdf;
  }
}

module.exports = handleServerData;