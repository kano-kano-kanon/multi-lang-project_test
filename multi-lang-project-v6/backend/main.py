from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import statistics

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

@app.post("/stats")
def stats(data: Numbers):
    nums = data.numbers
    return {
        "median": statistics.median(nums),
        "variance": statistics.variance(nums) if len(nums) > 1 else 0
    }
