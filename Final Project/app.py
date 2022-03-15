import json
from flask import Flask
import os
from flask import request
from reset_data import reset
import uuid
import time

app = Flask(__name__)
app.run(port=5001, debug=True)

#TAIGA'S work
@app.route("/pleets/<pleet_id>", methods=["DELETE"])
def delete_plete(user_id):
    for user in Users:
        if user["_id"] == user_id:
            Users.remove(user)
            update()
            return {"message": "User succesfully deleted"}, 200
    return {"message": "Pleet not found!"}, 404
    
@app.route("/users/<user_id>", methods=["PUT"])
def edit_put(user_id):
    data = request.json
    for user in Users:
        if user["_id"] == user_id:
            user["name"] = data["name"]
            update()
            return {"message": "User Profile Successfully edited!"}, 200
    return {"message": "User not found!"}, 404

#NIDHI's work
@app.route("/users/<user_id>/Reviews", methods=["GET"])
def all_part_id(user_id):
    exists = False
    for user in Users:
        if user['_id'] == user_id:
           exists = True
    if exists == False:
        return { 'message' : 'User not found!'}, 404
    response_data = {}
    response_data['reviews'] = []
    for review in Reviews:
        if review['user_id'] == user_id:
           response_data['reviews'].append(review)         
    return response_data, 200

@app.route("/reviews", methods=["POST"])
def post():
    data = request.json
    anonymous = request.json
    exist = False
    user_id = ""
    if anonymous == 'True': 
        for user in Users:
            if user["username"] == data["username"]:
                exist = True
                user_id = user["_id"]
        if not exist:
            return { "message" : "User not found!" }, 404
    new_review = {}
    new_review["_id"] = str(uuid.uuid4())
    new_review["user_id"] = user_id
    new_review["text"] = data["text"]
    new_review["datetime"] = time.time()
    Reviews.append(new_review)
    update()
    if anonymous == 'True': 
        return {"review": new_review["text"], "user_id": new_review["_id"], "username": new_review["user_id"]}, 200
    else: 
        return {"review": new_review["text"], "user_id": new_review["_id"]}, 200