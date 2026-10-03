<<<<<<< HEAD
from flask import Flask
=======
from flask import Flask, Blueprint, request, jsonify
>>>>>>> 4e319eb (Add UI preview screenshots)
from flask_cors import CORS

# Initialize Flask App
app = Flask(__name__)
<<<<<<< HEAD

# Allow both local frontend and deployed production frontend
CORS(app, origins=[
    "http://localhost:5173", 
    "http://127.0.0.1:5173", 
    "https://foodieai-1-0dcz.onrender.com"
])

# Register the blueprint (you can optionally add a url_prefix if needed, e.g., url_prefix='/api')
app.register_blueprint(track_food_bp)
=======
CORS(app)  # Enable CORS for frontend-backend communication

# Create Blueprint
food_bp = Blueprint('food_bp', __name__)

def calculate_daily_targets(weight_kg, height_cm, age, gender, activity_level):
    # Mifflin-St Jeor Equation for BMR
    if gender.lower() == 'male':
        bmr = (10 * weight_kg) + (6.25 * height_cm) - (5 * age) + 5
    else:
        bmr = (10 * weight_kg) + (6.25 * height_cm) - (5 * age) - 161

    # Activity multipliers
    multipliers = {
        'sedentary': 1.2,
        'light': 1.375,
        'moderate': 1.55,
        'active': 1.725
    }
    tdee = bmr * multipliers.get(activity_level, 1.375)
    
    # Target macros distribution (40% carbs, 30% protein, 30% fat)
    target_calories = round(tdee)
    target_protein = round((target_calories * 0.30) / 4) # 4 kcal per gram
    target_calories_carbs = target_calories * 0.40
    target_carbs = round(target_calories_carbs / 4)     # 4 kcal per gram
    target_fat = round((target_calories * 0.30) / 9)       # 9 kcal per gram

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
    
    # User metrics
    weight = float(data.get('weight', 70))
    height = float(data.get('height', 170))
    age = int(data.get('age', 22))
    gender = data.get('gender', 'male')
    activity = data.get('activity', 'moderate')
    
    # Computed custom target intake based on current input parameters
    daily_goals = calculate_daily_targets(weight, height, age, gender, activity)
    
    # Scanned meal macros (from your OpenCV/USDA pipeline)
    scanned_meal = {
        "food_name": data.get('food_name', 'Grilled Chicken Salad'),
        "calories": 350,
        "protein": 30,
        "carbs": 15,
        "fat": 12
    }
    
    return jsonify({
        "scanned_meal": scanned_meal,
        "daily_target_intake": daily_goals,
        "status": "Success"
    })

# Register blueprint to the app
app.register_blueprint(food_bp)
>>>>>>> 4e319eb (Add UI preview screenshots)

if __name__ == '__main__':
    app.run(debug=True, port=5000)