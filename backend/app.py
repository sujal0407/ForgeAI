from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import traceback

app = FastAPI(title="ForgeAI Backend")

print("🔥 ForgeAI Backend Started 🔥")

# -----------------------------
# CORS
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Configuration
# -----------------------------
N8N_WEBHOOK = "http://localhost:5678/webhook/generate-project"

# -----------------------------
# Models
# -----------------------------
class ProjectRequest(BaseModel):
    idea: str

# -----------------------------
# Routes
# -----------------------------
@app.get("/")
def home():
    return {
        "status": "running",
        "message": "ForgeAI Backend Running 🚀"
    }


@app.post("/generate")
def generate_project(data: ProjectRequest):

    try:
        print("\n" + "=" * 60)
        print("🚀 New Request")
        print("Idea:", data.idea)

        response = requests.post(
            N8N_WEBHOOK,
            json={
                "idea": data.idea
            },
            timeout=900
        )

        print("\nStatus Code:")
        print(response.status_code)

        print("\nHeaders:")
        print(dict(response.headers))

        print("\nRaw Response:")
        print(response.text)

        response.raise_for_status()

        if response.text.strip() == "":
            raise HTTPException(
                status_code=500,
                detail="n8n returned an empty response."
            )

        # Try parsing JSON
        try:
            data = response.json()

            print("\n✅ JSON Parsed Successfully")

            return data

        except Exception as json_error:

            print("\n❌ JSON Parse Failed")
            print(json_error)

            return {
                "success": False,
                "message": "n8n did not return valid JSON.",
                "raw_response": response.text
            }

    except Exception as e:

        print("\n❌ EXCEPTION OCCURRED")
        traceback.print_exc()

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )