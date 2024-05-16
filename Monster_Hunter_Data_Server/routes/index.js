const UserController = require('../controllers/UserController');
const Controller = require('../controllers/controller');
const EquimentController = require('../controllers/equipmentController');
const roleAuthenticate = require('../middlewares/roleAuthenticate')

const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'Tester 2'})
})
router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.post('/login/google', UserController.loginGoogle)
router.use(roleAuthenticate)
router.get('/generate-midtrans-token', Controller.midtransToken)
router.get('/weapons', EquimentController.weaponsData)
router.get('/weapons/:id', EquimentController.weaponsDataId)
router.get('/armors', EquimentController.armorsData)
router.get('/armors/:id', EquimentController.armorsDataId)

module.exports = router;