from urllib2 import *
import urllib
import json
import sys

API_KEY = "AIzaSyBVtqdO_SgPVhhXnyNGC_VXSbIX-fxk1YY"
TOKEN = "eB6llQJLpw0:APA91bG3t07UNFyz_NPmGjgTZ8-tAUzwKmBJctKm2qpw973c-3vEINtTC3nVl89uJNv-l2LHzfd7fSmVPjeaVAQBE8tC9Pp2X5foteVMuBlHEiB5cznXqnP5RiCroGo1DdBIdWzBMwHW"

data={
    "to": TOKEN,
    "notification" : {
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
