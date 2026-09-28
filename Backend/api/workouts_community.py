from flask import Blueprint, request, jsonify

workouts_bp = Blueprint('workouts_bp', __name__)
community_bp = Blueprint('community_bp', __name__)

workouts_db = [
    {"id": 1, "activity": "Morning Jog", "duration": "30 mins", "caloriesBurned": 250},
    {"id": 2, "activity": "Weight Training", "duration": "45 mins", "caloriesBurned": 320}
]

community_db = [
    {"id": 1, "author": "Alex", "text": "Hit a new personal record on bench press today! 🏋️‍♂️", "timestamp": "2h ago"},
    {"id": 2, "author": "Sarah", "text": "Tried the AI meal scanner—super fast macro estimates!", "timestamp": "5h ago"}
]

# --- WORKOUT ENDPOINTS ---
@workouts_bp.route('/api/workouts', methods=['GET'])
def get_workouts():
    return jsonify(workouts_db), 200

@workouts_bp.route('/api/workouts', methods=['POST'])
def add_workout():
    data = request.json or {}
    workout = {
        "id": len(workouts_db) + 1,
        "activity": data.get("activity", "Workout"),
        "duration": data.get("duration", "30 mins"),
        "caloriesBurned": int(data.get("caloriesBurned", 200))
    }
    workouts_db.append(workout)
    return jsonify({"status": "success", "data": workouts_db}), 201

# --- COMMUNITY ENDPOINTS ---
@community_bp.route('/api/community', methods=['GET'])
def get_community():
    return jsonify(community_db), 200

@community_bp.route('/api/community', methods=['POST'])
def add_post():
    data = request.json or {}
    post = {
        "id": len(community_db) + 1,
        "author": data.get("author", "You"),
        "text": data.get("text", ""),
        "timestamp": "Just now"
    }
    community_db.insert(0, post)
    return jsonify({"status": "success", "data": community_db}), 201