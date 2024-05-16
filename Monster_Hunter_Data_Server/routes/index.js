const UserController = require('../controllers/UserController');
const EquimentController = require('../controllers/equipmentController');

const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'Tester 2'})
})
router.post('/midtranstoken')
router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.post('/login/google', UserController.loginGoogle)
router.get('/weapons', EquimentController.weaponsData)
router.get('/weapons/:id', EquimentController.weaponsDataId)
router.get('/armors', EquimentController.armorsData)
router.get('/armors/:id', EquimentController.armorsDataId)

module.exports = router;