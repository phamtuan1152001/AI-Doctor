class SiteController {
  // [GET] site
  index(req, res) {
    res.render("Booking");
  }
}

module.exports = new SiteController();
