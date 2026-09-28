from flask import Blueprint, request, jsonify
from datetime import datetime

muscle_bp = Blueprint('muscle_bp', __name__)

# State store for target muscle groups (Strain scale 0.0 - 1.0)
muscle_state = {
    "chest": {"strain": 0.85, "last_worked": "2026-08-17T10:00:00"},
    "deltoids": {"strain": 0.60, "last_worked": "2026-08-17T10:00:00"},
    "triceps": {"strain": 0.70, "last_worked": "2026-08-17T10:00:00"},
    "quads": {"strain": 0.20, "last_worked": "2026-08-15T08:00:00"},
    "lats": {"strain": 0.10, "last_worked": "2026-08-14T18:00:00"},
    "biceps": {"strain": 0.15, "last_worked": "2026-08-14T18:00:00"},
    "abs": {"strain": 0.35, "last_worked": "2026-08-16T12:00:00"}
}

# Exercise to muscle mapping dictionary
EXERCISE_MAPPING = {
    "bench press": [("chest", 0.8), ("triceps", 0.5), ("deltoids", 0.4)],
    "pushups": [("chest", 0.6), ("triceps", 0.4), ("deltoids", 0.3)],
    "squats": [("quads", 0.85), ("abs", 0.3)],
    "pullups": [("lats", 0.85), ("biceps", 0.6)],
    "shoulder press": [("deltoids", 0.85), ("triceps", 0.5)]
}

@muscle_bp.route('/api/muscle-heatmap', methods=['GET'])
def get_muscle_heatmap():
    return jsonify({"status": "success", "muscles": muscle_state}), 200

@muscle_bp.route('/api/log-strain', methods=['POST'])
def log_strain():
    data = request.json or {}
    activity = str(data.get("activity", "")).lower()
    intensity = float(data.get("intensity", 1.0))

    # Match target muscles
    for exercise_key, impacts in EXERCISE_MAPPING.items():
        if exercise_key in activity:
            for group, strain_delta in impacts:
                if group in muscle_state:
                    current = muscle_state[group]["strain"]
                    muscle_state[group]["strain"] = min(1.0, current + (strain_delta * intensity))
                    muscle_state[group]["last_worked"] = datetime.now().isoformat()

    return jsonify({"status": "success", "muscles": muscle_state}), 200