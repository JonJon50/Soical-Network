const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
 
} = require('../../controllers/userController');

// getAll and createRoutes for the Url /api /user *not by ID
// all post - create require a req.body which is JSON in Insomnia
// all PUT Routes require a req.body and a ID in the URL
router.route('/').get(getUser).post(createUser);

// /api/users/:userId   //req.params indicated by : in url and is a changeable value to indicate aelector (id in this case)
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friend').post(addFriend);


module.exports = router;
