import pytest
import requests

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

