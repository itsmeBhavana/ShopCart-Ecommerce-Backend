const BadRequest = require("../errors/bad_request_error");
const errorResponse = require("../utils/error_response");

function createProductValidator(req, res, next) {
  if (!req.body.title) {
    return res
      .status(400)
      .json(
        errorResponse(
          "Title is not present in the incoming request",
          new BadRequest("Title")
        )
      );
  }

  if (!req.body.category) {
    return res
      .status(400)
      .json(
        errorResponse(
          "Category is not present in the incoming request",
          new BadRequest("Category")
        )
      );
  }

  if (!req.body.author) {
    return res
      .status(400)
      .json(
        errorResponse(
          "Author is not present in the incoming request",
          new BadRequest("Author")
        )
      );
  }

  if (!req.body.genre) {
    return res
      .status(400)
      .json(
        errorResponse(
          "Genre is not present in the incoming request",
          new BadRequest("Genre")
        )
      );
  }
  //If everything looks good
  next();
}

module.exports = { createProductValidator };
