from flask import Flask
from flask import request
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

@app.route("/users/<username>", methods=["GET"])
def users_get(username):
    exists = False
    user = user_collection.find_one({"username" : username})
    if(user):
        exists = True
    if exists == False:
        return { 'message' : 'User not found!'}, 404
    response_data = {}
    response_data["username"] = user["username"]
    response_data["name"] = user["name"]
    response_data["password"] = user["password"]   
    return response_data, 200

@app.route("/reviews/<cafe_type>/<username>", methods=["GET"])
def reviews_get(cafe_type, username):
    if not user_collection.find_one({"username" : username}):
        return {"message": "user does not exists!"}, 400
    reviews = review_collection.find({"username" : username, "cafe_type" : cafe_type})
    output = []
    for data in reviews:
        temp = {
            "username": data['username'],
            "taste_rating": data['taste_rating'],
            "visual_rating": data['visual_rating'],
            "nutrition_rating": data['nutrition_rating'],
            "cafe_type" : data['cafe_type'],
            "review" : data['review']
        }
        output.append(temp)
    return {"result": output}, 200

@app.route("/reviews/<cafe_type>", methods=["GET"])
def reviews_get_by_cafe(cafe_type):
    reviews = review_collection.find({"cafe_type" : cafe_type})
    output = []
    for data in reviews:
        temp = {
            "username": data['username'],
            "taste_rating": data['taste_rating'],
            "visual_rating": data['visual_rating'],
            "nutrition_rating": data['nutrition_rating'],
            "cafe_type" : data['cafe_type'],
            "review" : data['review']
        }
        output.append(temp)
    return {"result": output}, 200

@app.route("/ratings/<cafe_type>", methods=["GET"])
def ratings_get(cafe_type):
    reviews = review_collection.find({"cafe_type" : cafe_type})
    output = {
        "cafe_type" : cafe_type,
        "taste_rating_avg" : 0,
        "visual_rating_avg" : 0,
        "nutrition_rating_avg" : 0
    }
    taste_rating_sum = 0
    visual_rating_sum = 0
    nutrition_rating_sum = 0
    count = 0
    for data in reviews:
        taste_rating_sum += data['taste_rating']
        visual_rating_sum += data['visual_rating']
        nutrition_rating_sum += data['nutrition_rating']
        count += 1
    output['taste_rating_avg'] = round(taste_rating_sum / count, 1)
    output['visual_rating_avg'] = round(visual_rating_sum / count, 1)
    output['nutrition_rating_avg'] = round(nutrition_rating_sum / count, 1)
    return output, 200

@app.route("/reviews", methods=["POST"])
def reviews_post():
    data = request.json
    if user_collection.find_one({"username" : data['username'], "cafe_type" : data['cafe_type']}):
        return {"message": "review for this cafe is already posted by this user"}, 400
    post = {
        "username": data['username'],
        "taste_rating": data['taste_rating'],
        "visual_rating": data['visual_rating'],
        "nutrition_rating": data['nutrition_rating'],
        "cafe_type" : data['cafe_type'],
        "review" : data['review']
    }
    post_id = review_collection.insert_one(post).inserted_id
    print(str(post_id))
    return {"message": "review added successfully"}, 200

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