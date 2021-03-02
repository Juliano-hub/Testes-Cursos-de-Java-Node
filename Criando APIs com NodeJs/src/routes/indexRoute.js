'use strict';

const app = express();
// app vai receber o express

const router = express.Router();
// cria as rotas

const route = router.get('/', (req, res, next) => {

    res.status(200).send({
        tittle: "Node API",
        version: "0.0.1"
    });

});

module.exports = router;