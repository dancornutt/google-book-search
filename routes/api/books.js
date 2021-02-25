const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/books")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(booksController.remove);

// router.route("/google")
//     .get(booksController.googleApi);

module.exports = router;
