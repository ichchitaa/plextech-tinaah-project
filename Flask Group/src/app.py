import json
from flask import Flask
import os

####################
### This block initializes the arrays "Users" and "Pleets" from the json file storage system
### To edit any data, just edit these arrays, and call the update() method
### If you ever entirely screw up your data file, just copy data.json from testing into src
####################

Users = []
Pleets = []

here = os.path.dirname(os.path.abspath(__file__))
data = os.path.join(here, "data.json")

def pull_updates():
    global Users, Pleets
    with open(data,"r", encoding='utf-8') as datafile:
        rawdata = json.load(datafile)
        Users = rawdata["users"]
        Pleets = rawdata["pleets"]

def update_file():
    with open(data,"w", encoding='utf-8') as datafile:
        json.dump({
            "users": Users,
            "pleets": Pleets
        }, datafile)

####################
### Flask work starts here
### A Hello World method has been provided as starter, and can be replaced
####################

app = Flask(__name__)

@app.before_request
def before():
    pull_updates()

@app.after_request
def after(response):
    update_file()
    return response

@app.route("/", methods=["GET"])
def hello_world():
    return {"data": "Hello World"}

app.run(port=5001)
