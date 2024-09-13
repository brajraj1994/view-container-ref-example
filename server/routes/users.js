var express = require('express');
var router = express.Router();

const users = [
  { id: 1,
    name: "Himani"
  },
  { id: 2,
    name: "Brajraj"
  },
  { id: 3,
    name: "Gunjan"
  },
  { id: 4,
    name: "Madhav"
  },
]
/* GET users listing. */
router.get('/', async function(req, res, next) {
    await delay(2900);
    res.send(users);
});

router.get('/:id', async function(req, res, next) {
  const id = +req.params.id;
  await delay(1500);
  const user = {...users.find(u => u.id === id)};
  res.send(user)
});

router.delete('/:id', async function(req, res, next) {
  const id = +req.params.id;
  await delay(1200);
  const user = users.filter(u => u.id !== id);
  res.status(500).send(user)
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = router;
