const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mens");

router.get("/", (req, res) => {
  res.send("Working");
});

router.post("/mens", async (req, res) => {
  try {
    const addMensData = new MensRanking(req.body);
    const insertMens = await addMensData.save();
    res.send(addMensData);
    res.status(201).send(insertMens);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/mens", async (req, res) => {
  const user = await MensRanking.find({}).sort({ ranking: 1 });
  res.send(user);
});
router.get("/mens/:id", async (req, res) => {
  const _id = req.params.id;
  const user = await MensRanking.findById(_id);
  res.send(user);
});

router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateData = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateData);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteData = await MensRanking.findByIdAndDelete(_id);
    res.send(deleteData);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
