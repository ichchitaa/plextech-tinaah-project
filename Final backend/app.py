import json
from re import M
from flask import Flask
import os
from flask import request
from reset_data import reset
import uuid
import time

Users = []
Reviews = []

here = os.path.dirname(os.path.abspath(__file__))
data = os.path.join(here, "data.json")

with open(data,"r", encoding='utf-8') as datafile:
    rawdata = json.load(datafile)
    Users = rawdata["users"]
    Reviews = rawdata["reviews"]

def update():
    with open(data,"w", encoding='utf-8') as datafile:
        json.dump({
            "users": Users,
            "reviews": Reviews
        }, datafile)

app = Flask(__name__)

#how to add in json file and do all the setup above
#will it be a similar json setup
#all the python logic??

@app.route("/<user_id>", methods=["GET"])
def get_reviews_of_user(user_id):
    exists = False
    for user in Users:
        if user['_id'] == user_id:
           exists = True
    if exists == False:
        return { 'message' : 'User not found!'}, 404
    response_data = {}
    response_data['reviews'] = []
    for rev in Reviews:
        if rev['user_id'] == user_id:
           response_data['reviews'].append(rev)      
    return response_data, 200

@app.route("/<id>", methods=["POST"])
def post(id):
    #are we posting a review of the stated id?


@app.route("/<user_id>", methods=["PUT"])
def put(user_id):
    data = request.json
    for user in Users:
        if user["_id"] == user_id:
            user["name"] = data["name"]
            update()
            return {"message": "User information successfully updated!"}, 200
    return {"message": "User not found!"}, 404





app.run(port=5001, debug=True)