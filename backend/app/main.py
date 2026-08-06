from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Reptor API",
    description="Backend API for the Reptor Developer Productivity Platform",
    version="1.0.0",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this later for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "Welcome to Reptor API 🚀",
        "status": "running",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }