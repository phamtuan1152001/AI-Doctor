class InformationController {

    // [GET] /information
    info(req, res){
        res.render('Information')
    }

    about(req, res) {
        res.render('Information');
    }
    faq(req, res){
        res.render('Information')
    }

}

module.exports = new InformationController