import * as express from 'express';

var router = express.Router();

/* GET Contact page. */
router.get('/', (req, res, next) => {
  res.render('contact', { title: 'contact' });
});

export = router;
