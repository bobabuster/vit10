from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  

quotes = [
    "Keep moving forward.",
    "Every day is a fresh start.",
    "Believe in yourself.",
    "Small steps lead to big changes.",
    "Stay curious and keep learning.",
    "Progress, not perfection.",
    "Embrace the journey.",
    "Mistakes are proof that you are trying.",
    "Focus on what you can control.",
    "Take it one day at a time.",
    "Patience is a superpower.",
    "Do something that scares you today.",
    "Your effort matters more than the outcome.",
    "Let go of what you can’t change.",
    "Find joy in the little things."
]


@app.route('/api/quote', methods=['GET'])
def get_quote():
    quote = random.choice(quotes)
    return jsonify({"quote": quote})

if __name__ == '__main__':
    app.run(debug=True)
