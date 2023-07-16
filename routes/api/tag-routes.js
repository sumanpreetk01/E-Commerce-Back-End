const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
    include: Product
    })
    res.json(tagData)
  } catch (error) {
    res.json(error)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: Product
      })
      res.json(tagData)
  } catch (error) {
    res.json(error)
  }
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create({
    tag_name: req.body.tag_name
    })
    res.json(tagData)
  } catch (error) {
    res.json(error)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where:{
          id: req.params.id
        }
      },
    )
    res.json(tagData)
  } catch (error) {
    res.json(error)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy(
      {
        where:{
          id: req.params.id
        }
      },
    )
    res.json(tagData)
  } catch (error) {
    res.json(error)
  }
});

module.exports = router;
