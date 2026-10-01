from fastapi import FastAPI
from models import students,Staff
from database import student_collection,staff_collection



app = FastAPI()
def student_details(student):
    return{
        "id":str(student["-id"]),
        "name":student["name"],
        "email":Student["email"],
        "marks":student["mark"],
}
        

@app.get("/getstudents")
def getstudents():
    student=student_collection.find()
    return [student_details(student) for student in students]
    



@app.post("/register")
def register( stu:Student):
    result=student_collection.insert_one(stu.model_dump())
    return {"message":"data inserted success"}

@app.put("/updateprofile")
def updateprofile():
    return "update profile called"

@app.get("/getstudentdet/{userid}")
def getstudentdet(userid: int):
    return {"user_id": userid}


@app.get("/getstudentdetails")
def getstudentdetails(page: int = 1, limit: int = 10):
    return {"page": page, "limit": limit}