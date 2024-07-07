const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin } = require('../controllers/adminController');
const hashPassword = require('../middleware/hashPassword');

// Route pour inscrire un administrateur avec hachage du mot de passe
router.post('/register', hashPassword, registerAdmin);

// Route pour connecter un administrateur
router.post('/login', loginAdmin);

module.exports = router;
