/* eslint-disable no-underscore-dangle */
// prefix search only
// case insensitive

// This is how it works....
// searchTerm = 'cat'
// will return 'cat' but not 'bobCat'
function createSearchCache(items) {
  // eslint-disable-next-line no-console
  console.log('Creating SearchCache');
  const hashMap = {};
  const productCache = {};
  items.forEach((product) => {
    const searchWordsArr = product.name.split(' ').concat(product.tags);
    searchWordsArr.forEach((searchWord) => {
      let growingChar = '';
      searchWord.split('').forEach((char) => {
        growingChar = growingChar.concat(char.toLowerCase());
        if (!hashMap[growingChar]) {
          hashMap[growingChar] = [product._id];
        } else if (!hashMap[growingChar].includes(product._id)) {
          hashMap[growingChar] = hashMap[growingChar].concat(product._id);
        }
      });
    });
    productCache[product._id] = product;
  });

  return (searchTerm) => {
    const arrOfIds = hashMap[searchTerm];
    return arrOfIds.map((id) => productCache[id]);
  };
}

module.exports = createSearchCache;
