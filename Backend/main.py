from flask import Flask, Blueprint, request, jsonify
from flask_cors import CORS

# Initialize Flask App
app = Flask(__name__)
CORS(app, origins=[
    "http://localhost:5173", 
    "http://127.0.0.1:5173", 
    "https://foodieai-1-0dcz.onrender.com"
])

# Create Blueprint
food_bp = Blueprint('food_bp', __name__)

def calculate_daily_targets(weight_kg, height_cm, age, gender, activity_level):
    if gender.lower() == 'male':
        bmr = (10 * weight_kg) + (6.25 * height_cm) - (5 * age) + 5
    else:
        bmr = (10 * weight_kg) + (6.25 * height_cm) - (5 * age) - 161

    multipliers = {
        'sedentary': 1.2,
        'light': 1.375,
        'moderate': 1.55,
        'active': 1.725
    }
    tdee = bmr * multipliers.get(activity_level, 1.375)
    
    target_calories = round(tdee)
    target_protein = round((target_calories * 0.30) / 4)
    target_carbs = round((target_calories * 0.40) / 4)
    target_fat = round((target_calories * 0.30) / 9)

    return {
        "calories": target_calories,
        "protein": target_protein,
        "carbs": target_carbs,
        "fat": target_fat
    }

@app.route('/', methods=['GET'])
def index():
    return {"status": "success", "message": "NutriScan-AI Backend is online!"}

@food_bp.route('/api/analyze-meal', methods=['POST'])
def analyze_meal():
    data = request.json or {}
    image_name = data.get('image', 'pasta.jpg')
    clean_name = image_name.split('.')[0].replace('-', ' ').title()
    
    weight = float(data.get('weight', 70))
    height = float(data.get('height', 170))
    age = int(data.get('age', 22))
    gender = data.get('gender', 'male')
    activity = data.get('activity', 'moderate')
    
    daily_goals = calculate_daily_targets(weight, height, age, gender, activity)
    
    scanned_meal = {
        "food_name": clean_name if clean_name else "Pasta",
        "calories": 380,
        "protein": 12,
        "carbs": 55,
        "fat": 8
    }
    
    return jsonify({
        "scanned_meal": scanned_meal,
        "daily_target_intake": daily_goals,
        "status": "Success"
    })

# Register blueprint to the app
app.register_blueprint(food_bp)

if __name__ == '__main__':
    app.run(debug=True, port=5000)