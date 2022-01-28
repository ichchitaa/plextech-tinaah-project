import json
from flask import Flask

####################
### This block initializes the arrays "Users" and "Pleets" from the json file storage system
### To edit any data, just edit these arrays, and call the update() method
### If you ever entirely screw up your data file, just copy data.json from testing into src
####################

with open("data.json","r", encoding='utf-8') as datafile:
    rawdata = json.load(datafile)
    Users = rawdata["users"]
    Pleets = rawdata["pleets"]

def update():
    with open("data.json","w") as datafile:
        json.dump({
            "users": Users,
            "pleets": Pleets
        })

####################
### Flask work starts here
### A Hello World method has been provided as starter, and can be replaced
####################

app = Flask(__name__)

@app.route("/", methods=["GET"])
def hello_world ():
    return "Hello World"

app.run(port=5001)
