const Util = {
  generateSequence() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sequence = [];

    while (array.length > 0) {
      sequence.push(array.splice(Math.floor(Math.random() * array.length), 1));
    }
    return sequence;
  },
};

export default Util;
