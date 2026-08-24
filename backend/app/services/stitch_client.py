import os
import urllib.request
import json
from typing import Dict, Any

STITCH_SERVER_URL = os.getenv("STITCH_SERVER_URL", "https://stitch.googleapis.com/mcp")
STITCH_API_KEY = os.getenv("STITCH_API_KEY", "AQ.Ab8RN6L5DLwBL1X47FJu8zxulD1wOCMUvJfDYBdLRI6aYfiLaA")

def query_stitch_mcp(payload: Dict[str, Any]) -> Dict[str, Any]:
    """
    Sends JSON-RPC or tool invocation payloads to Google Stitch MCP Server.
    """
    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": STITCH_API_KEY,
    }
    
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(STITCH_SERVER_URL, data=data, headers=headers, method="POST")
    
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            res_body = response.read().decode("utf-8")
            return json.loads(res_body)
    except Exception as e:
        return {
            "status": "error",
            "message": f"Failed to connect to Stitch MCP Server ({STITCH_SERVER_URL}): {str(e)}"
        }
