#!/usr/bin/env bash
/usr/sbin/nginx -c /srv/web/nginx.config
/srv/web/node_modules/.bin/lsc /srv/web/engine/io/postgresql/init.ls
/srv/web/node_modules/.bin/lsc server.ls &> /srv/web/static/error.txt
