from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI();

def my_function():
    print("I am running in python fastapi")
    return {"message": "Function called successfully"}

# Define the endpoint to call the function
@app.get("/api/call_function/")
async def call_function():
    result = my_function()
    return JSONResponse(content=result)