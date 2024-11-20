function pingController(req, res) {
  return res.json({ message: "Pinging V1" });
}

function pingControllerV2(req, res) {
  return res.json({ message: "Pinging V2 controller" });
}

module.exports = { pingController, pingControllerV2 };
