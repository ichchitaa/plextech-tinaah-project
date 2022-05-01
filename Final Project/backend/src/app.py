from flask import Flask
from pymongo import MongoClient
import certifi
from flask_cors import CORS
from flask import request

app = Flask(__name__)
CORS(app)
client = MongoClient("mongodb+srv://tinaah:OgJ3sWDC8Oc03WUp@plextech-tinaah-project.wcszi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", tlsCAFile=certifi.where())
db_user = client.users
user_collection = db_user.user_collection
db_review = client.reviews
review_collection = db_review.review_collection

@app.route("/")
def home_page():
    if(user_collection.find_one({"username" : "howardm12138"})):
        return {"message": "user already exists!"}, 400
    post = {"name": "Howard",
            "username": "howardm12138",
            "password": "helloworld123"
        }
    post_id = user_collection.insert_one(post).inserted_id
    print(str(post_id))
    return {"message": "user added successfully"}, 200


@app.route("/<username>", methods=["GET"])
def get_reviews_of_user(username):
    exists = False
    if(user_collection.find_one({"username" : username})):
        exists = True
    if exists == False:
        return { 'message' : 'User not found!'}, 404
    thisuser = user_collection.find_one({"username" : username})
    response_data = {}
    response_data["username"] = username
    response_data["name"] = thisuser["name"]
    response_data["password"] = thisuser["password"]
    # response_data['reviews'] = []
    # reviews = review_collection.find({'username': username})
    # for rev in reviews:
    #     response_data['reviews'].append(rev)      
    return response_data, 200

@app.route("/users", methods=["POST"])
def post():
    data = request.json
    exists = False
    if(user_collection.find_one({"username" : data["username"]})):
        exists = True
    if exists == True:
        return { 'message' : 'User already exists!'}, 404
    post = {
        "name": "",
        "username": "",
        "password": ""
    }
    post["username"] = data["username"]
    post["name"] = data["name"]
    post["password"] = data["password"]
    user_collection.insert_one(post)
    return {"message": "User profile created successfully!"}, 200

app.run(port=5001, debug=True)