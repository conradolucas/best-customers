var express = require('express');
var router  = express.Router();

// router.get('/', function(request, response){
//   response.send('yes, router' + ' funfa');
// });

router.post('/', require('./services/create'));

router.get('/:id?', require('./services/find'));
router.put('/:id', require('./services/update'));
router.patch('/:id', require('./services/update'));
router.delete('/:id', require('./services/remove'));

module.exports = router;
