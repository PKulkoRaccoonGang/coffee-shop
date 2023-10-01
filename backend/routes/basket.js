const { Router } = require('express');
const { BasketController } = require('../controllers');

const router = Router();

router.get('/basket', BasketController.getBasketData);

router.post('/add', BasketController.addProductToBasket);

router.delete('/remove/:id', BasketController.deleteProductFromBasket);

module.exports = router;
