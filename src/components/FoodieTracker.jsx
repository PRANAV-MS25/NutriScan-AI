from flask import Blueprint, request, jsonify

track_food_bp = Blueprint('track_food_bp', __name__)

@track_food_bp.route('/api/analyze-meal', methods=['POST'])
def analyze_meal():
    data = request.json or {}
    selected_image = data.get("selectedImage", "pasta.jpg").lower()
    
    # Calculate simple daily targets based on user metrics
    weight = float(data.get("weight", 65))
    height = float(data.get("height", 175))
    age = int(data.get("age", 22))
    
    # Base Metabolic Rate (BMR) estimation
    bmr = 10 * weight + 6.25 * height - 5 * age + 5
    daily_calories = int(bmr * 1.375) # Moderate activity multiplier

    # Dynamic meal mapping based on selected dataset image
    if "pasta" in selected_image:
        scanned_meal = {
            "food_name": "Creamy Alfredo Pasta",
            "calories": 420,
            "protein": 12,
            "carbs": 62,
            "fat": 14
        }
    elif "burger" in selected_image:
        scanned_meal = {
            "food_name": "Classic Cheeseburger",
            "calories": 550,
            "protein": 25,
            "carbs": 45,
            "fat": 30
        }
    elif "pizza" in selected_image:
        scanned_meal = {
            "food_name": "Pepperoni Pizza Slice",
            "calories": 320,
            "protein": 14,
            "carbs": 36,
            "fat": 15
        }
    elif "paneer" in selected_image:
        scanned_meal = {
            "food_name": "Shahi Paneer Curry",
            "calories": 410,
            "protein": 18,
            "carbs": 12,
            "fat": 32
        }
    elif "butterchicken" in selected_image or "butter" in selected_image:
        scanned_meal = {
            "food_name": "Authentic Butter Chicken",
            "calories": 490,
            "protein": 34,
            "carbs": 14,
            "fat": 31
        }
    elif "dosa" in selected_image:
        scanned_meal = {
            "food_name": "Crispy Masala Dosa",
            "calories": 280,
            "protein": 6,
            "carbs": 42,
            "fat": 10
        }
    else:
        scanned_meal = {
            "food_name": "Grilled Chicken Salad",
            "calories": 350,
            "protein": 30,
            "carbs": 10,
            "fat": 12
        }

    return jsonify({
        "status": "success",
        "scanned_meal": scanned_meal,
        "daily_target_intake": {
            "calories": daily_calories,
            "protein": int(weight * 1.6),
            "carbs": int(daily_calories * 0.45 / 4),
            "fat": int(daily_calories * 0.25 / 9)
        }
    }), 200