@track_food_bp.route('/api/track-food-spatial', methods=['POST'])
def track_food_spatial():
    data = request.json or {}
    image_name = data.get("image_name", "").lower()

    # Map dataset images to their respective nutrition data
    if "pasta" in image_name:
        detected_items = [{
            "id": "item_1",
            "name": "Creamy Alfredo Pasta",
            "calories": 420,
            "protein": 12,
            "carbs": 62,
            "fats": 14,
            "density": "high",
            "box": {"top": 20, "left": 20, "width": 60, "height": 60}
        }]
    elif "burger" in image_name:
        detected_items = [{
            "id": "item_1",
            "name": "Classic Cheeseburger",
            "calories": 550,
            "protein": 25,
            "carbs": 45,
            "fats": 30,
            "density": "high",
            "box": {"top": 20, "left": 20, "width": 60, "height": 60}
        }]
    else:
        # Default fallback or original list
        detected_items = [
            {
                "id": "item_1",
                "name": "Grilled Chicken Salad",
                "calories": 350,
                "protein": 30,
                "carbs": 10,
                "fats": 12,
                "density": "low",
                "box": {"top": 15, "left": 10, "width": 40, "height": 45}
            }
        ]

    total_calories = sum(item["calories"] for item in detected_items)
    
    return jsonify({
        "status": "success",
        "total_calories": total_calories,
        "items": detected_items
    }), 200