'use strict';

const express = require('express');

const router = express.Router();
// cria as rotas

// router.get = obter informações
// router.post = enviar informações
// router.put = atualizar informações
// router.delete = deleter informações

// res.status(200).send
// 200 = ok
// 201 = created 
// 400 = bad request
// 401 = não autenticado
// 403 = acesso negado 

const controller = require('../controllers/productControllers');

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;