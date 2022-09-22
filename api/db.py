
import firebase_admin
import os
from firebase_admin import credentials, firestore

path = os.path.dirname(os.path.realpath(__file__))
cred = credentials.Certificate(f"{path}\serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
