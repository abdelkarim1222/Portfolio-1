// Importation des modules nécessaires
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes'); // Importer les routes des administrateurs

// Charger les variables d'environnement à partir du fichier .env
dotenv.config();

// Création de l'application Express
const app = express();

// Middleware pour permettre les requêtes CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware pour analyser le JSON dans les requêtes
app.use(express.json());

// Définir le port à partir des variables d'environnement ou par défaut à 5000
const PORT = process.env.PORT || 5000;

// Connexion à la base de données MongoDB
connectDB();

// Définir les routes
app.use('/api/admin', adminRoutes); // Utiliser les routes des administrateurs

// Démarrer le serveur Express sur le port défini
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
