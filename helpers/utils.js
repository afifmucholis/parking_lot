let search = async (registratonNo, prop, carArray) => {
    for (var i = 0; i < carArray.length; i++) {
      if (carArray[i][prop] == registratonNo) {
        return carArray[i];
      }
    }
    return false;
  }
  
  let remove = async (registratonNo, prop, carArray) => {
    var i = carArray.length;
    while (i--) {
      if (carArray[i]
        && carArray[i].hasOwnProperty(prop)
        && (arguments.length > 2 && carArray[i][prop] == registratonNo)) {
        carArray.splice(i, 1);
      }
    }
    return carArray;
  }

  module.exports = {
    search,
    remove
  }
  
  
