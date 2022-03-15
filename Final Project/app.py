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