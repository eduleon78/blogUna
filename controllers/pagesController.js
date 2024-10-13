module.exports = {

    index: (req, res, next) => {
        res.render('index');
      },

    about: (req, res, next) => {
        res.render('about');
      },
    
    contact: (req, res, next) => {
        res.render('contact');
    },

    hardware: (req, res, next) => {
        res.render('hardware');
    },

    computadora: (req, res, next) => {
        res.render('computadora');
    },

    cpu: (req, res, next) => {
        res.render('cpu');
    },

    ergonomia: (req, res, next) => {
        res.render('ergonomia');
    },

    ofimatica: (req, res, next) => {
        res.render('ofimatica');
    },

    terminologia: (req, res, next) => {
        res.render('terminologia');
    },

    sistemas: (req, res, next) => {
        res.render('sistema');
    }

    
}
