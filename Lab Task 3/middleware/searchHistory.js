function searchHistory(req, res, next) {
  if (!req.session.recent) {
    req.session.recent = [];
  }
  next();
}

module.exports = searchHistory;
