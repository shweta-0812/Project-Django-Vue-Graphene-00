import os
import json
import requests

import datetime
import jwt

def json_print(data):
    print(json.dumps(data, indent=2))
@@ -34,3 +35,17 @@ def assert_is_json(string):
        json.loads(string)
    except ValueError:
        raise AssertionError("String is not a valid JSON")


def generate_jwt_token(JWT_SECRET_KEY: str, user_data):
    payload = {
        'user_id': user_data["user_id"],
        'google_id': user_data["google_id"],
        'email': user_data["email"],
        'name': user_data["name"],
        'picture': user_data["picture"],
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1),
        'iat': datetime.datetime.utcnow()
    }
    token = jwt.encode(payload, JWT_SECRET_KEY, algorithm='HS256')
    return token
