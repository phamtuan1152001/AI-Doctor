router.get('/Resetpwd/:id', (req, res) => {
    // console.log(id)
    res.render('Resetpwd', { id: req.params.id })
});