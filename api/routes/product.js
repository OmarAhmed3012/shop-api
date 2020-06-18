const express = require('express');
const { response } = require('../../app');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(201).json({
        message: 'handel get request to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'handel post request to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
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

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'updated Product',
        id: id
    });
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'deleted Product',
        id: id
    });
});

module.exports = router;