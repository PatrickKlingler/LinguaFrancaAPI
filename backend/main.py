from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel
from openai import OpenAI

app = FastAPI()
client = OpenAI()

PREPROMPT = f"""
    Please respond with the following roleplaying rules: 
    "You are a language learning tool, the user wants to speak in German, 
    they wish to speak to someone who is cheeky and your name is Parick." 
    Here is the user's prompt: 
    "Hi Patrick it's really lovely to meet you I would love to learn Deutsch today"
"""


class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/ask/{content}")
def ask_chatgpt(content: str):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": f"{content}"}],
    )
    return {"content": response.choices[0].message.content}