import pytest
import requests
from time import time, sleep

url = "http://127.0.0.1:5001"

@pytest.fixture
def cleanup():
    requests.post(f"{url}/reset")

@pytest.mark.usefixtures("cleanup")
def test_hello_world():
    r = requests.get(f"{url}/")
    response = r.json()

    assert r.status_code == 200
    assert response["data"] == "Hello World"

@pytest.mark.usefixtures("cleanup")
def test_get_all():
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

    r = requests.get(f"{url}/pleets")
    assert r.status_code == 200
    
    response = r.json()
    assert "pleets" in response, "Wrong format in /pleets"
    assert len(response["pleets"]) == 3, "Incorrect number of pleets returned in /pleets"
    assert sample_pleet in response["pleets"], "Sample pleet not found in response"

@pytest.mark.usefixtures("cleanup")
def test_add_new_pleet():
    r = requests.post(f"{url}/pleets", data={"username": "incorrectusername","text":"New pleet"})
    assert r.status_code == 404, "Status code should be 404"
    r = requests.post(f"{url}/pleets", data={"username": "devbali","text":"New pleet"})
    assert r.status_code == 200, "Status code should be 200"
    response = r.json()
    assert "message" in response, "Wrong format in response"
    assert response["message"] == "Pleet successfully added!"

@pytest.mark.usefixtures("cleanup")
def test_get_by_user():
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

    r = requests.post(f"{url}/pleets", data={"username": "incorrectusername","text":"New pleet"})
    assert r.status_code == 404, "Status code should be 404"
    r = requests.post(f"{url}/pleets", data={"username": "devbali","text":"New pleet"})
    assert r.status_code == 200, "Status code should be 200"
    response = r.json()
    assert "message" in response, "Wrong format in response"
    assert response["message"] == "Pleet successfully added!"

    pleet_id = response["pleet_id"]

    r = requests.get(f"{url}/users/trashuuid/pleets")
    assert r.status_code == 404, "Status code should be 404"
    r = requests.get(f"{url}/users/{sample_pleet['user']['user_id']}/pleets")
    assert r.status_code == 200, "Status code should be 200"
    response = r.json()
    assert "pleets" in response, "Wrong format in pleets for a user"
    assert len(response["pleets"]) == 2, "Incorrect number of pleets returned in pleets for a user"
    assert sample_pleet in response["pleets"], "Sample pleet not found in response"
    assert pleet_id in [x["pleet_id"] for x in response["pleets"]], "Newly added pleet not given back"

@pytest.mark.usefixtures("cleanup")
def test_put_edit_profile():
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

    r = requests.put(f"{url}/users/45be55eb-27d1-4350-8d51-9ca2512229ea", data={"display name": "New Dev Bali"}) # a pleet uuid
    assert r.status_code == 404, "Status code should be 404"
    r = requests.put(f"{url}/users/{sample_pleet['user']['user_id']}", data={
        "display name": "New Dev Bali", 
        "otherfield":"ignore",
        "username": "DONT CHANGE"
    })
    assert r.status_code == 200, "Status code should be 200"
    response = r.json()
    assert "message" in response, "Wrong format in update user"
    assert response["message"] == "User Profile Successfully edited!"

@pytest.mark.usefixtures("cleanup")
def test_get_one():
    r = requests.post(f"{url}/pleets", data={"username": "incorrectusername","text":"New pleet"})
    assert r.status_code == 404, "Status code should be 404"
    r = requests.post(f"{url}/pleets", data={"username": "devbali","text":"New pleet"})
    assert r.status_code == 200, "Status code should be 200"
    response = r.json()
    assert "message" in response, "Wrong format in response"
    assert response["message"] == "Pleet successfully added!"

    pleet_id = response["pleet_id"]

    r = requests.get(f"{url}/pleets/trashuuid")
    assert r.status_code == 404, "Status code should be 404"
    r = requests.get(f"{url}/pleets/{pleet_id}")
    assert r.status_code == 200, "Status code should be 200"
    response = r.json()
    assert response["text"] == "New pleet"
    # Date time of the pleet should be very close to current datetime
    assert response["datetime"] > time() - 20 and response["datetime"] <= time()
    assert response["user"]["display name"] == "New Dev Bali"
    assert response["user"]["username"] == "devbali"
    assert response["user"]["user_id"] == sample_pleet["user"]["user_id"]

@pytest.mark.usefixtures("cleanup")
def test_delete():
    r = requests.post(f"{url}/pleets", data={"username": "incorrectusername","text":"New pleet"})
    assert r.status_code == 404, "Status code should be 404"
    r = requests.post(f"{url}/pleets", data={"username": "devbali","text":"New pleet"})
    assert r.status_code == 200, "Status code should be 200"
    response = r.json()
    assert "message" in response, "Wrong format in response"
    assert response["message"] == "Pleet successfully added!"

    pleet_id = response["pleet_id"]

    r = requests.delete(f"{url}/pleets/trashuuid")
    assert r.status_code == 404, "Status code should be 404"
    r = requests.delete(f"{url}/pleets/{pleet_id}")
    assert r.status_code == 200, "Status code should be 200"
    response = r.json()
    assert "message" in response, "Wrong format in delete pleet"
    assert response["message"] == "Pleet successfully deleted!"

    r = requests.get(f"{url}/pleets/{pleet_id}")
    assert r.status_code == 404, "Status code should be 404" 

@pytest.mark.usefixtures("cleanup")
def test_get_all_limit():
    for i in range(1,11):
        requests.post(f"{url}/pleets", data={"username": "devbali","text":f"New pleet {i}"})
        sleep(0.1)
    sleep(1)

    r = requests.get(f"{url}/pleets")
    assert r.status_code == 200, "Status code should be 200"
    response = r.json()
    assert len(response["pleets"]) == 10, "10 pleets not returned in top 10"