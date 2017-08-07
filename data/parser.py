#! /usr/bin/env python
# -*- coding: utf-8 -*-
import os
import re
import csv
import json
import codecs
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import logging


logging.basicConfig(filename='parser.log', level=logging.ERROR)

scope = ['https://spreadsheets.google.com/feeds']
credentials = ServiceAccountCredentials.from_json_keyfile_name('credential.json', scope)
gc = gspread.authorize(credentials)
sh = gc.open_by_key('1868SZMB0dalwMswFyHPzxaQ4U_dZ7mXK-_5Byl_l9YQ')
worksheets = sh.worksheets()
for wks in worksheets[:1]:
    print wks.title
    rows = wks.get_all_records()
    output = []
    headers = [x.encode('utf8') for x in wks.get_all_values()[0]]
    for row in rows[1:]:
        row.pop(u'分數', None)
        row.pop(u'其它評論', None)
        if not row[u'層級']:
            row[u'層級'], row[u'資料集類別'] = level, category 
            output.append(row)
        level, category = row[u'層級'], row[u'資料集類別'] 
with codecs.open('output.json', 'w', 'utf-8') as outfile:
    json.dump(output, outfile, indent=5, ensure_ascii=False, sort_keys=True)

with open('output.csv', 'w') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=headers)
    writer.writeheader()
    for x in output:
        row = {}
        for k, v in x.items():
            try:
                k = k.encode('utf8')
            except:
                pass
            try:
                v = v.encode('utf8')
            except:
                pass
            row[k] = v
        writer.writerow(row)
