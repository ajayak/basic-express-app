import * as express from 'express';

var router = express.Router();

/* GET About page. */
router.get('/', (req, res, next) => {
  res.render('about', { title: 'about' });
});

export = router;
