from fastapi import APIRouter
from app.services.stitch_client import query_stitch_mcp, STITCH_SERVER_URL, STITCH_API_KEY

router = APIRouter(prefix="/api/stitch", tags=["Stitch MCP"])

@router.get("/status")
def get_stitch_status():
    """Returns configured Google Stitch MCP server status and endpoint."""
    return {
        "status": "configured",
        "serverUrl": STITCH_SERVER_URL,
        "hasApiKey": bool(STITCH_API_KEY),
        "header": "X-Goog-Api-Key"
    }

@router.post("/query")
def execute_stitch_query(payload: dict):
    """Proxies MCP requests to Google Stitch Server."""
    return query_stitch_mcp(payload)
