from fastapi import APIRouter, HTTPException
import pandas as pd
from pathlib import Path
from typing import Dict, Any, List

router = APIRouter(prefix="/api/workouts", tags=["Workouts"])

# Path to workout_data.csv relative to backend directory
BASE_DIR = Path(__file__).resolve().parent.parent.parent
DATA_PATH = BASE_DIR / "data" / "workout_data.csv"

@router.get("")
@router.get("/")
def get_workouts() -> Dict[str, List[Dict[str, Any]]]:
    """
    Loads workout_data.csv using Pandas, cleans missing values,
    and returns JSON payload structured as {"data": [...]}.
    """
    if not DATA_PATH.exists():
        # Fallback path if data directory is located in app/data
        alt_path = BASE_DIR / "app" / "data" / "workout_data.csv"
        target_path = DATA_PATH if DATA_PATH.exists() else alt_path
        if not target_path.exists():
            raise HTTPException(
                status_code=404,
                detail=f"Workout dataset not found at path: {DATA_PATH}"
            )
        file_to_load = target_path
    else:
        file_to_load = DATA_PATH

    try:
        df = pd.read_csv(file_to_load)
        
        # Clean missing values (fillna with defaults)
        df["bodyweight_kg"] = pd.to_numeric(df["bodyweight_kg"], errors="coerce").fillna(0.0)
        df["exercise"] = df["exercise"].fillna("Unknown Exercise").astype(str)
        df["weight_kg"] = pd.to_numeric(df["weight_kg"], errors="coerce").fillna(0.0)
        df["notes"] = df["notes"].fillna("").astype(str)
        
        records = df.to_dict(orient="records")
        return {"data": records}
    
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to process workout data: {str(e)}"
        )
