const { generateFakeUser } = require("../utils/fakeUser");
const FakeUserModel = require("../model/fakeUserModel");
const { introduceErrors } = require("../utils/utils");
const getUsers = async (page, limit, region = "") => {
  const filter = region ? { region } : {};
  try {
    const userList = await FakeUserModel.find(filter)
      .sort({
        createdAt: -1,
      })
      .skip(limit * page)
      .limit(limit);
    const count = await FakeUserModel.countDocuments(filter);
    return {
      userList,
      count,
    };
  } catch (err) {
    const error = new Error("Server Error Occured");
    error.status = 500;
    throw error;
  }
};

const createFakeUsersService = async (region = "", errors = "", seed = "") => {
  try {
    const fakeUserData = generateFakeUser(region, seed);
    if (errors > 0) {
      fakeUserData.name = introduceErrors(fakeUserData.name, errors);
      fakeUserData.address = introduceErrors(fakeUserData.address, errors);
      fakeUserData.phone = introduceErrors(fakeUserData.phone, errors);
    }
    const randomUser = new FakeUserModel({
      name: fakeUserData.name,
      address: fakeUserData.address,
      phone: fakeUserData.phone,
      region: fakeUserData.region,
    });
    await randomUser.save();
    return randomUser;
  } catch (err) {
    const error = new Error("Server Error Occured");
    error.status = 500;
    throw error;
  }
};

module.exports = { getUsers, createFakeUsersService };
