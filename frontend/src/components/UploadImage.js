import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setResult(response.data.prediction);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Alzheimer's Diagnosis</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            {result && <h2>Prediction: {result}</h2>}
        </div>
    );
};

export default UploadImage;
