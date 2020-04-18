const discounter = discount => {
  return price => {
    return price * (1 - discount);
  };
};

const tenPercentOff = discounter(0.1);

console.log(tenPercentOff(100));

const discounter1 = discount => price => price * (1 - discount);

console.log(discounter1(0.1)(100));

const zip = (... left) => (... right) => {
  return left.map((item, i) => [item, right[i]]);
};

const birds = ['bluejay', 'bird1', 'bird2'];

console.log(zip('kansas', 'wisconsin', 'new mexico')(...birds));