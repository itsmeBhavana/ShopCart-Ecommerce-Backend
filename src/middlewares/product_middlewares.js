const BadRequest = require("../errors/bad_request_error");
const errorResponse = require("../utils/error_response");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

function createProductValidator(req, res, next) {
  if (!req.body.title) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Title")));
  }

  if (!req.body.category) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(
        errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Category"))
      );
  }

  if (!req.body.author) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Author")));
  }

  if (!req.body.genre) {
    return res
      .status(400)
      .json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Genre")));
  }
  //If everything looks good
  next();
}

module.exports = { createProductValidator };
