function pingController(req, res) {
  return res.json({ message: "Ok" });
}

module.exports = { pingController };
