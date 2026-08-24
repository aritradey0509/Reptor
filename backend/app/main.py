from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.models import User
from app.routers.workouts import router as workouts_router
from app.routers.stitch import router as stitch_router

try:
    Base.metadata.create_all(bind=engine)
except Exception:
    pass

app = FastAPI(
    title="Reptor Gym Analytics API",
    version="1.0.0",
)

# CORS middleware allowing React Vite frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(workouts_router)
app.include_router(stitch_router)

@app.get("/")
def root():
    return {
        "message": "Reptor Gym Analytics API Running 🚀"
    }

@app.get("/health")
@app.get("/api/health")
def health():
    return {
        "status": "ok",
        "service": "Reptor Gym Analytics API"
    }