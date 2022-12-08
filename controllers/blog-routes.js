const router = require("express").Router;
const { Blog, Comment } = require("../models");

router.get("/", async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [{ model: Comment }]
        });
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async(req, res) => {
    try {
      const newBlog = await Blog.create(req.body);
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(400).json(err);
    }
  });