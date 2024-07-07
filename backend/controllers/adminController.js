const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Inscription d'un administrateur
const registerAdmin = async (req, res) => {
    const { firstName, lastName, username, password, avatar } = req.body;

    try {
        // Vérifier si l'administrateur existe déjà
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hasher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créer un nouvel administrateur
        const newAdmin = new Admin({ firstName, lastName, username, password: hashedPassword, avatar });
        await newAdmin.save();

        // Générer un token JWT
        const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Répondre avec le token JWT
        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Connexion d'un administrateur
const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Rechercher l'administrateur dans la base de données
        const admin = await Admin.findOne({ username });
        if (!admin || !(await bcrypt.compare(password, admin.password))) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Générer un token JWT pour l'administrateur authentifié
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Répondre avec le token JWT
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { registerAdmin, loginAdmin };
