function create_product(req, res) {
  try {
    //db processing
    return res.json({
      success: true,
      error: {},
      message: "Successfully created a product",
      data: {
        id: Math.random() * 20,
        title: req.body.title,
        category: req.body.category,
        author: req.body.author,
        genre: req.body.genre,
      },
    });
  } catch (err) {
    console.log("Something went wrong", err);
  }
}

module.exports = { create_product };
