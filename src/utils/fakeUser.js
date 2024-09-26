const { Faker, el, en, pl, ka_GE, de } = require("@faker-js/faker"); // Use the default instance of faker

const generateFakeUser = (region = "", seed = "") => {
  let localeInfo = "";
  if (region === "german") {
    localeInfo = de;
  } else if (region === "georgian") {
    localeInfo = ka_GE;
  } else if (region === "poland") {
    localeInfo = pl;
  } else if (region === "greek") {
    localeInfo = el;
  } else if (region === "english") {
    localeInfo = en;
  } else {
    localeInfo = en;
  }

  const faker = new Faker({ locale: [localeInfo, en] });

  if (seed) {
    faker.seed(Number(seed));
  }

  const userInfo = {
    name: faker.person.fullName(),
    address: `${faker.location.country()},${faker.location.city()}, ${faker.location.streetAddress()}`,
    phone: faker.phone.number(),
    region: region || "english",
  };
  return userInfo;
};

module.exports = {
  generateFakeUser,
};
