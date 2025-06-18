import { Router } from 'express';
import { getHome, ping} from '../controllers/index.controller';


const router = Router();

router.get('/', getHome);
router.get('/ping', ping);


export default router;
