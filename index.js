const tf = require('@tensorflow/tfjs');

// Cargar el modelo desde Teachable Machine
async function loadModel() {
    const modelURL = './model/model.json';  // Ruta al archivo model.json exportado desde Teachable Machine
    const model = await tf.loadGraphModel(modelURL);
    console.log('Modelo cargado exitosamente');
    return model;
}

// Ejecutar el modelo con un tensor de ejemplo
async function runModel(model) {
    const input = tf.tensor([1, 2, 3, 4]);  // Reemplaza este tensor con tus datos reales
    const prediction = model.predict(input);
    prediction.print();  // Imprime la predicción en la consola
}

// Cargar y ejecutar el modelo
loadModel().then(model => runModel(model));
