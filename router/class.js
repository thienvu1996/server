import { Router } from "express";
import * as classController from '../controllers/class.js'
const router = Router();

router.route('/createClass').post(classController.createClass);
router.route('/getAllClasses').get(classController.getAllClasses);
router.route('/deleteClass/:id').delete(classController.deleteClass);


export default router;