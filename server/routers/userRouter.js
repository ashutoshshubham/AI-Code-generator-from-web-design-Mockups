const { Router } = require('express');

const Model = require('../models/userModel')

const router = Router();

router.post('/add', (req, res) => {
    console.log(req.body)
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });
});  

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.post('/auth', (req, res) => {
    console.log(req.body)
    Model.findOne(req.body)
    .then((result) => {
        if(result){
            res.status(200).json(result);
        }
        else{
            res.status(401).json({status : 'failed'})
        }
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });
})

router.put('/update/:userid', (req, res) => {
    Model.findByIdAndUpdate(req.params.userid, req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err);
    });
})

router.delete('/delete/:userid', (req, res) => {
    Model.findByIdAndDelete(req.params.userid)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;  





