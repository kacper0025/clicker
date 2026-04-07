module.exports = (req, res, next) => {
    if (req.session.userId) {
        next(); // Użytkownik zalogowany, idź dalej
    } else {
        res.redirect('/login'); // Brak sesji? Wróć do logowania
    }
};