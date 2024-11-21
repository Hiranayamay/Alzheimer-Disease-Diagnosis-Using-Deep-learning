from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import os
import numpy as np

app = Flask(__name__)
CORS(app)
model = load_model('alzheimer_model.h5')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    filepath = os.path.join('uploads', file.filename)
    file.save(filepath)

    # Process the image
    img = load_img(filepath, target_size=(128, 128))
    img_array = img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    # Get prediction
    prediction = model.predict(img_array)
    labels = ['Non-Demented', 'Mild-Demented', 'Moderate-Demented', 'Severe-Demented']
    result = labels[np.argmax(prediction)]

    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)
