#!/usr/bin/python
from urllib2 import *
import json
import sys

if len(sys.argv) < 2:
    print 'Error: missing token argument'
    sys.exit(1)

API_KEY = 'AIzaSyBVtqdO_SgPVhhXnyNGC_VXSbIX-fxk1YY'
TOKEN = sys.argv[1]
data = {
    "to": TOKEN,
    "data" : {
        "body": "SUCCESS! Sent from script :)",
        "title": "Wix Example Project"
    }
}
dataJson = json.dumps(data)

request = Request(
    'https://gcm-http.googleapis.com/gcm/send',
    dataJson,
    {
      "Authorization" : "key="+API_KEY,
      "Content-type" : "application/json"
    }
)

print "Sending notification..."
print urlopen(request).read()
