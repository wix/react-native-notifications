from urllib2 import *
import urllib
import json
import sys

API_KEY = "AIzaSyBVtqdO_SgPVhhXnyNGC_VXSbIX-fxk1YY"
TOKEN = "c70LL7cNR-0:APA91bFja9qHDqLFtKYGCKNZRBcgHAQrmcPE-XNIIctnFnsEKJml9tgbuQql15ORoJc4drw6fAA38_JFx1X3s3wF9FlArPO_laPTXmaCC4_ZFm1QzfgmoJ5hXUhDFsArJpTVFIonEOHR"

data={
    "to": TOKEN,
    "data" : {
        "body": "A very tiny one",
        "title": "A tiny notification"
    }
}
dataAsJSON = json.dumps(data)

request = Request(
    "https://gcm-http.googleapis.com/gcm/send",
    dataAsJSON,
    {
      "Authorization" : "key="+API_KEY,
      "Content-type" : "application/json"
    }
)

print urlopen(request).read()
