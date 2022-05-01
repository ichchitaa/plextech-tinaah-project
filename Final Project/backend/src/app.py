from flask import Flask
from pymongo import MongoClient
import certifi
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
client = MongoClient("mongodb+srv://tinaah:OgJ3sWDC8Oc03WUp@plextech-tinaah-project.wcszi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", tlsCAFile=certifi.where())
db_user = client.users
user_collection = db_user.user_collection

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

app.run(port=5001, debug=True)