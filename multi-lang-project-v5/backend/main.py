from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Numbers(BaseModel):
    numbers: List[float]

@app.post("/analyze")
def analyze(data: Numbers):
    nums = data.numbers
    return {
        "sum": sum(nums),
        "average": sum(nums)/len(nums),
        "max": max(nums),
        "min": min(nums)
    }
