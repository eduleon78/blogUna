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
    }
    
}
