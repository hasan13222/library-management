import express from 'express';
import { bookControllers } from './book.controller';
import { validateRequest } from '../../middleware/validateRequest';
import { bookValidations } from './book.validation';

const router = express.Router();

router.post('/',validateRequest(bookValidations.createBookValidationSchema), bookControllers.createBook);
router.get('/', bookControllers.getAllBook);
router.get('/:bookId', bookControllers.getSingleBook);
router.put('/:bookId',validateRequest(bookValidations.updateBookValidationSchema), bookControllers.updateSingleBook);
router.delete('/:bookId', bookControllers.deleteBook);

export const bookRoutes = router;