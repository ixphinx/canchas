const exress = require('express');
const router = exress.Router();


router.get('/', (req, res)=>{
    res.render('index.ejs');
});

router.get('/login', (req, res)=>{
    res.render('login.ejs');
})

router.get('/registro', (req, res)=>{
    res.render('registro.ejs');
})

router.get('/contacto', (req, res)=>{
    res.render('contacto.ejs');
})

router.get('/user', (req, res)=>{
    res.render('user.ejs');
})

router.get('/panel', (req, res)=>{
    res.render('panel.ejs');
})



module.exports = router;
