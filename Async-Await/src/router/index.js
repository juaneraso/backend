const { Router } = require("express");
const usersRouter = require("./userRouter");
const postsRouter = require("./postsRouter");

const router = Router();

router.use("/users", usersRouter);

router.use("/posts", postsRouter);

module.exports = router;
