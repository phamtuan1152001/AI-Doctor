class LoginFormController{
    //[Get] /Login
    index(req,res){
        res.render("Login");
    }
    //[GET] /Register
    index(req,res){
        res.render("Register")
    }
    //[GET] /Forgotpwd
    index(req,res){
        res.render("Forgotpwd")
    }
    

}
module.exports = new LoginFormController();