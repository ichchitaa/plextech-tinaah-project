import json
from flask import Flask
import os
from flask import request
from reset_data import reset
import uuid
import time

app = Flask(__name__)
app.run(port=5001, debug=True)