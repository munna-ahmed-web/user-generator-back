const userService = require("../service/userService");

const getUsers = async (req, res, next) => {
  const page = parseInt(req.query.page) - 1 || 0;
  const limit = parseInt(req.query.limit) || 20;
  const region = req.query.region || "";
  try {
    const { userList, count } = await userService.getUsers(page, limit, region);
    res.status(200).json({
      message: "Success",
      total: count,
      page: page + 1,
      limit,
      data: userList,
    });
  } catch (error) {
    next(error);
  }
};

const createFakeUsers = async (req, res, next) => {
  let { region, errors, seed } = req.body;
  errors = errors == 0 || errors === "0" ? null : errors;
  try {
    const user = await userService.createFakeUsersService(region, errors, seed);
    res.status(200).json({ message: "Success", data: user });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  createFakeUsers,
};
