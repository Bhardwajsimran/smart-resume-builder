from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import openai
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SuggestionRequest(BaseModel):
    section: str
    content: str

@app.post("/suggest")
async def suggest(req: SuggestionRequest):
    prompt = f"Improve this {req.section} section of a resume:\n{req.content}"
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )
    suggestion = response.choices[0].message.content.strip()
    return {"suggestion": suggestion}
