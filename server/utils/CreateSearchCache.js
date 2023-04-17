function createSearchCache(items) {
  console.log("Creating SearchCache");
  const hashMap = {};
  const productMap = items.map((product) => {
    const searchWordsArr = product.name.split(" ").concat(product.tags);
    searchWordsArr.forEach((searchWord) => {
      let growingChar = "";
      searchWord.split("").forEach((char) => {
        growingChar = growingChar.concat(char.toLowerCase());
        if (!hashMap[growingChar]) {
          hashMap[growingChar] = [product._id];
        } else if (!hashMap[growingChar].includes(product._id)) {
          hashMap[growingChar] = hashMap[growingChar].concat(product._id);
        }
      });
    });
  });
  console.log("hashMap =", hashMap);
  return (searchTerm) => {
    const arrOfIds = hashMap[searchTerm];
    return arrOfIds.map((id) => {
      productMap[id];
    });
  };
}

module.exports = createSearchCache;
