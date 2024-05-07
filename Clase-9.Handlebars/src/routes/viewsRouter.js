import router from 'express';
import { __dirname } from '../utils.js';

const viewsRouter = router.Router();

viewsRouter.get('/', (req, res) => {
  res.render(`${__dirname}/src/views/index`);
});

export default viewsRouter;
