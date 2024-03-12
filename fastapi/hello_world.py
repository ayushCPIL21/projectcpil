import subprocess
from fastapi import FastAPI,HTTPException

app = FastAPI()

@app.get("/api/run-batch-file/")
async def run_batch_file():
    try:
        # running the batch file using subprocess
        
        subprocess.run(["run_prog.bat","ls"], shell=True, check=True)
        return {"message": "Batch file executed successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))