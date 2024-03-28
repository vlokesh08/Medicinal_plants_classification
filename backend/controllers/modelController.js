const tf = require('@tensorflow/tfjs');

const path = require('path');

const modelPath = 'path/to/model.h5';
const loadModel = async () => {
    try {
        const model = await tf.loadLayersModel(`file://${modelPath}`);
        console.log('Model loaded successfully');
        return model;
    } catch (error) {
        console.error('Error loading the model:', error);
        throw error;
    }
};

let kerasModel;

const predict_data = async () => { {
        try {
            const inputData = req.body.inputData; // Assuming you send data in JSON format
            const inputTensor = tf.tensor(inputData);
            const prediction = kerasModel.predict(inputTensor);
            res.json({ prediction: prediction.dataSync() });
        } catch (error) {
            console.error('Error making prediction:', error);
            res.status(500).json({ error: 'Failed to make prediction' });
        }
    };
};

export default predict_data;