import { Router } from "express";
import Auth from "../middleware/auth.js";
import * as bookingController from '../controllers/booking.js'
const router = Router();

router.route('/createBooking').post(Auth,bookingController.createBooking);
router.route('/getAllBookings').get(bookingController.getAllBookings);
router.route('/deleteBooking/:id').delete(bookingController.deleteBooking);
router.route('/updateBooking/:id').post(bookingController.updateBooking);
router.route('/rejectBooking/:id').post(bookingController.rejectBooking);

router.route('/waiting').post(bookingController.getAcceptedBookings);
router.route('/rejected').post(bookingController.getRejectedBookings);
router.route('/accepted').post(bookingController.getWaitingBookings);

export default router;