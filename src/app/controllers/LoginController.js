class LoginController{
    //[Get] /Login
    index(req,res){
        res.render('Login');
    }
}
module.exports = new LoginController;