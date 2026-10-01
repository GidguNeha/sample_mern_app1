from pymongo import MongoClient 
import os
from dotenv import load_dotenv
load_dotenv()
client=MangoClient(os.getenv("MONGO_URL"))
#create a database in mongodb
db=client["Vignan"]
#create 
student_collection=db["student"]
staff_collection=db["staff"]
