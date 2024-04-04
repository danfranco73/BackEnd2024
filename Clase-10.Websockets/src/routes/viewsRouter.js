import router from "express";

const viewsRouter = router.Router();

viewsRouter.get("/", (req, res) => {
  res.render("index", {});
});

export default viewsRouter;
