const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: Product,
    });
    res.json(categoryData)
  } catch (error) {
     res.json(error)
  }
});

router.get('/:id', async (req, res) => {
  const categoryData = await Category.findByPk(req.params.id, {
    include: Product,
  });
  res.json(categoryData)

});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(400).json(error)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where:{
          id: req.params.id
        }
      },
    )
    res.json(categoryData)
    } catch (error) {
    res.status(400).json(error)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy(
    {
      where:{
        id: req.params.id
      }
    },
  )
  res.json(categoryData)
  } catch (error) {
    res.status(400).json(error)

  }

});

module.exports = router;
