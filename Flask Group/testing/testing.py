
### Very Basic assert based testing
### Don't judge please

### DONT USE THIS, KEEPING FOR NOW IN CASE I FORGOT SOMETHING

import requests
from time import sleep, time


url = "http://127.0.0.1:5001"

sample_pleet = {
    "pleet_id": "45be55eb-27d1-4350-8d51-9ca2512229ea",
    "user": {
        "user_id": "714edd71-799d-4c25-bb55-9dba9b095ae9",
        "display name": "Dev Bali",
        "username": "devbali"
    },
    "text": "Sample pleet",
    "datetime": 1642567497
}
num_pleets = 3

def status(r, status):
    assert r.status_code == status, f"Status code not {status} when it should be"

def not_found (r, what):
    status(r,404)
    response = r.json()
    assert "message" in response, "Wrong format in error response"
    assert response["message"] == f"{what} not found!"

# Basic Get All
r = requests.get(f"{url}/pleets")
status(r,200)
response = r.json()
assert "pleets" in response, "Wrong format in /pleets"
assert len(response["pleets"]) == num_pleets, "Incorrect number of pleets returned in /pleets"
assert sample_pleet in response["pleets"], "Sample pleet not found in response"

# Add new pleet
r = requests.post(f"{url}/pleets", data={"username": "incorrectusername","text":"New pleet"})
not_found(r, "User")
r = requests.post(f"{url}/pleets", data={"username": "devbali","text":"New pleet"})
status(r, 200)
response = r.json()
assert "message" in response, "Wrong format in response"
assert response["message"] == "Pleet successfully added!"

pleet_id = response["pleet_id"]
sleep(1)

# Get by user
r = requests.get(f"{url}/users/trashuuid/pleets")
not_found(r, "User")
r = requests.get(f"{url}/users/{sample_pleet['user']['user_id']}/pleets")
status(r, 200)
response = r.json()
assert "pleets" in response, "Wrong format in pleets for a user"
assert len(response["pleets"]) == 2, "Incorrect number of pleets returned in pleets for a user"
assert sample_pleet in response["pleets"], "Sample pleet not found in response"
assert pleet_id in [x["pleet_id"] for x in response["pleets"]], "Newly added pleet not given back"

# Put edit profile
r = requests.put(f"{url}/users/45be55eb-27d1-4350-8d51-9ca2512229ea", data={"display name": "New Dev Bali"}) # a pleet uuid
not_found(r, "User")
r = requests.put(f"{url}/users/{sample_pleet['user']['user_id']}", data={
    "display name": "New Dev Bali", 
    "otherfield":"ignore",
    "username": "DONT CHANGE"
})
status(r, 200)
response = r.json()
assert "message" in response, "Wrong format in update user"
assert response["message"] == "User Profile Successfully edited!"
sleep(1)

# Get one
r = requests.get(f"{url}/pleets/trashuuid")
not_found(r, "Pleet")
r = requests.get(f"{url}/pleets/{pleet_id}")
status(r, 200)
response = r.json()
assert response["text"] == "New pleet"
 # Date time of the pleet should be very close to current datetime
assert response["datetime"] > time() - 10 and response["datetime"] <= time()
assert response["user"]["display name"] == "New Dev Bali"
assert response["user"]["username"] == "devbali"
assert response["user"]["user_id"] == sample_pleet["user"]["user_id"]

# Delete
r = requests.delete(f"{url}/pleets/trashuuid")
not_found(r, "Pleet")
r = requests.delete(f"{url}/pleets/{pleet_id}")
status(r, 200)
response = r.json()
assert "message" in response, "Wrong format in delete pleet"
assert response["message"] == "Pleet successfully deleted!"

# Get All Limit Test
for i in range(1,11):
    requests.post(f"{url}/pleets", data={"username": "devbali","text":f"New pleet {i}"})
    sleep(0.1)
sleep(1)

r = requests.get(f"{url}/pleets")
status(r,200)
response = r.json()
assert len(response["pleets"]) == 10, "10 pleets not returned in top 10"

# Check if deleted pleet deleted
r = requests.get(f"{url}/pleets/{pleet_id}")
not_found(r, "Pleet")

print("ALL TESTS PASS")
