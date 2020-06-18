const express = require('express');
const { response } = require('../../app');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(201).json({
        message: 'handel get request to /orders'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'handel post request to /orders'
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    if(id === '123') {
        res.status(200).json({
            message: 'done with id 123',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'not found id 123',
            id: id
        });
    }
});

router.patch('/:orderId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'updated Order',
        id: id
    });
});

router.delete('/:orderId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'deleted Order',
        id: id
    });
});

module.exports = router;