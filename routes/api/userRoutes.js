const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addAssignment,
  removeAssignment,
} = require('../../controllers/userController');

// getAll and createRoutes for the Url /api /user *not by ID
// all post - create require a req.body which is JSON in Insomnia
// all PUT Routes require a req.body and a ID in the URL
router.route('/').get(getUser).post(createUser);

// /api/users/:userId   //req.params indicated by : in url and is a changeable value to indicate aelector (id in this case)
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/students/:studentId/assignments
router.route('/:userId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
