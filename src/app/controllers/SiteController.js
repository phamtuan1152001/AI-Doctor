class SiteController {
  // [GET] site
  home(req, res) {
    res.render('home');
  }
  contact(req, res) {
    res.render('Contact_us');
  }
  Utilities1(req, res) {
    res.render('Appointment_with_a_doctor');
  }
  Utilities2(req, res) {
    res.render('Immediately_pills_sent');
  }
  Utilities3(req, res) {
    res.render('Multi-function pharmacy');
  }
  Utilities4(req, res) {
    res.render('Online_Health_Diagnosis');
  }
  Utilities5(req, res) {
    res.render('Online_medical_records');
  }
  Utilities6(req, res) {
    res.render('Personal_business_healthcare');
  }
  log(req, res){
    res.render('Login', {layout: 'Login_Reg.hbs'})
  }
  reg(req, res){
    res.render('Register', {layout: 'Login_Reg.hbs'})
  }
  fwd(req, res){
    res.render('Forgotpwd', {layout: 'Login_Reg.hbs'})
  }


 
}

module.exports = new SiteController();
                                 