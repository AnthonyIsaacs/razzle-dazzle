
// existInLocalStorage :: String -> Bool
function existInLocalStorage(name) {
  if (localStorage.getItem(name)) {
    return true;
    //populateStorage();
  }
  // } else {
  //   //setStyles();
  //   return false
  // }
  return false
}

module.exports = { existInLocalStorage }


