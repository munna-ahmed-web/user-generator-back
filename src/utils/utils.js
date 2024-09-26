const introduceErrors = (data, numErrors) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const deleteCharacter = (str) => {
    if (str.length === 0) return str;
    const pos = Math.floor(Math.random() * str.length);
    return str.slice(0, pos) + str.slice(pos + 1);
  };

  const addCharacter = (str) => {
    const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
    const pos = Math.floor(Math.random() * (str.length + 1));
    return str.slice(0, pos) + randomChar + str.slice(pos);
  };

  const swapCharacters = (str) => {
    if (str.length < 2) return str;
    const pos = Math.floor(Math.random() * (str.length - 1));
    const charArray = str.split("");
    [charArray[pos], charArray[pos + 1]] = [charArray[pos + 1], charArray[pos]];
    return charArray.join("");
  };

  for (let i = 0; i < numErrors; i++) {
    const errorType = Math.floor(Math.random() * 3);

    if (errorType === 0) {
      data = deleteCharacter(data);
    } else if (errorType === 1) {
      data = addCharacter(data);
    } else if (errorType === 2) {
      data = swapCharacters(data);
    }
  }

  return data;
};

module.exports = { introduceErrors };
