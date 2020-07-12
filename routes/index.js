const express = require('express')
const router = express.Router()
const authenticator = require('../polices/authenticator');

const { CompanyController, JobController, ApplicationController, UserController } = require('../controllers/index');
//Define all our router
router.post('/companies', authenticator, CompanyController.create);
router.get('/companies', authenticator, CompanyController.find);
router.get('/companies/:id', authenticator, CompanyController.findOne);
router.delete('/companies/:id', authenticator, CompanyController.destroy);
router.put('/companies/:id', authenticator, CompanyController.update);

//Jobs
router.post('/jobs', authenticator, JobController.create);
router.get('/jobs', authenticator, JobController.find);

//Application
router.post('/application', authenticator, ApplicationController.create);

//User
router.post('/signUp', UserController.signUp);
router.post('/signIn', UserController.signIn);



module.exports = router;