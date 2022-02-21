import json
from flask import Flask
import os
from reset_data import reset

####################
### This block initializes the arrays "Users" and "Pleets" from the json file storage system
### To edit any data, just edit these arrays, and call the update() method
####################

Users = []
Pleets = []

here = os.path.dirname(os.path.abspath(__file__))
data = os.path.join(here, "data.json")

with open(data,"r", encoding='utf-8') as datafile:
    rawdata = json.load(datafile)
    Users = rawdata["users"]
    Pleets = rawdata["pleets"]

def update():
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

# Testing purposes
@app.route("/reset", methods=["POST"])
def reset_data():
    global Users, Pleets
    reset()
    with open(data,"r", encoding='utf-8') as datafile:
        rawdata = json.load(datafile)
        Users = rawdata["users"]
        Pleets = rawdata["pleets"]
    return {"success": True}


@app.route("/", methods=["GET"])
def hello_world():
    return {"data": "Hello World"}

app.run(port=5001)
