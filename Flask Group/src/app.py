import json
from re import M
from flask import Flask
import os
from flask import request
from reset_data import reset
import uuid
import time

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

@app.route("/pleets/<pleet_id>", methods=["GET"])
def get_pleets_by_id(pleet_id):
    for pleet in Pleets:
        if pleet['_id'] == pleet_id:
            msg = {
                'pleet_id' : '',
                'user' : {},
                'text' : '',
                'datetime' : ''
            }
            msg['pleet_id'] = pleet_id
            associate_user = {}
            for user in Users:
                if user['_id'] == pleet['user_id']:
                    associate_user = user
            msg['user'] = associate_user
            msg['text'] = pleet['text']
            msg['datetime'] = pleet['datetime']
            return msg, 200
    return {"message": "Pleet not found!"}, 404

@app.route("/pleets", methods=["GET"])
def get_pleets_top_ten():
    pleets_data = {}
    for pleet in Pleets:
        pleets_data[pleet['_id']] = pleet['datetime']
    sorted_pleets = sorted(pleets_data, key=lambda k: pleets_data[k], reverse=True)
    
    response_data = {}
    response_data['pleets'] = []
    for i in range(0, min(len(sorted_pleets), 10)):
        for j in range(len(Pleets)):
            if (Pleets[j]['_id'] == sorted_pleets[i]):
                response_data['pleets'].append(Pleets[j])
    return response_data, 200

@app.route("/users/<user_id>/pleets", methods=["GET"])
def all_part_id(user_id):
    exists = False
    for user in Users:
        if user['_id'] == user_id:
           exists = True
    if exists == False:
        return { 'message' : 'User not found!'}, 404
    response_data = {}
    response_data['pleets'] = []
    for pleet in Pleets:
        if pleet['user_id'] == user_id:
           response_data['pleets'].append(pleet)     
    #if len(response_data['pleets']) == 0:    
    return response_data, 200

@app.route("/pleets", methods=["POST"])
def post():
    data = request.json
    exist = False
    user_id = ""
    for user in Users:
        if user["username"] == data["username"]:
            exist = True
            user_id = user["_id"]
    if not exist:
        return { "message" : "User not found!" }, 404
    new_pleet = {
        'id' : '',
        'user_id' : '',
        'text' : '',
        'datetime' : ''
    }
    new_pleet["_id"] = str(uuid.uuid4())
    new_pleet["user_id"] = user_id
    new_pleet["text"] = data["text"]
    new_pleet["datetime"] = time.time()
    Pleets.append(new_pleet)
    update()
    return {"message": new_pleet["text"], "pleet_id": new_pleet["_id"]}, 200
    

@app.route("/pleets/<pleet_id>", methods=["DELETE"])
def delete_plete(pleet_id):
    index = 0
    for pleet in Pleets:
        # index += 1
        if pleet["_id"] == pleet_id:
            Pleets.remove(pleet)
            update()
            return {"message": "Pleet succesfully deleted"}, 200
    return {"message": "Pleet not found!"}, 404
    
@app.route("/users/<user_id>", methods=["PUT"])
def edit_put(user_id):
    data = request.json
    for user in Users:
        if user["_id"] == user_id:
            user["display name"] = data["display name"]
            update()
            return {"message": "User Profile Successfully edited!"}, 200
    return {"message": "User not found!"}, 404


app.run(port=5001, debug=True)

