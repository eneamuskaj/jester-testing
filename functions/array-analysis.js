const array = {
  average: (object) => {
    var total = 0;
    for (var i = 0; i < object.length; i++) {
      total += object[i];
    }
    var avg = total / object.length;
    return avg;
  },
  min: (object) => {
    return Math.min(...object);
  },
  max: (object) => {
    return Math.max(...object);
  },
  length: (object) => {
    return object.length;
  },
};

module.exports = array;
