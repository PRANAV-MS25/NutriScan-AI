from flask import Flask
from flask_cors import CORS
from api.track_food import track_food_bp

app = Flask(__name__)

# Allow both local frontend and deployed production frontend
CORS(app, origins=[
    "http://localhost:5173", 
    "http://127.0.0.1:5173", 
    "https://foodieai-1-0dcz.onrender.com"
])

# Register the blueprint (you can optionally add a url_prefix if needed, e.g., url_prefix='/api')
app.register_blueprint(track_food_bp)

if __name__ == '__main__':
    app.run(debug=True, port=5000)