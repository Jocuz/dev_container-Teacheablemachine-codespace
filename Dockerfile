# Usar una imagen base de Node.js
FROM mcr.microsoft.com/devcontainers/javascript-node:18

# Instalar dependencias adicionales, como Python
RUN apt-get update && apt-get install -y python3 python3-pip

# Establecer el directorio de trabajo
WORKDIR /workspace

# Instalar globalmente TensorFlow.js si lo necesitas
RUN npm install -g @tensorflow/tfjs

# Exponer el puerto que tu aplicación va a utilizar
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["npm", "start"]
