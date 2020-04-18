function* getCairoTrilogy() {
  yield 'Palace Walk';
  yield 'Palace of Desire';
  yield 'Sugar Street';
}

const trilogy = getCairoTrilogy();

console.log(trilogy.next());

console.log(trilogy.next());

console.log(trilogy.next());

console.log(trilogy.next());

console.log([...getCairoTrilogy()]);

const readingList = {
  'Visit from the Goon Squad': true,
  'Manhattan Beach': false,
};

for (const book of getCairoTrilogy()) {
  readingList[book] = false;
}

console.log(readingList);

class FamilyTree {
  constructor() {
    this.family = {
      name: 'Dolores',
      child: {
        name: 'Martha',
        child: {
          name: 'Dyan',
          child: {
            name: 'Bea',
          }
        }
      }
    }
  }

  getMembers() {
    const members = [];
    let node = this.family;
    while (node) {
      members.push(node.name);
      node = node.child;
    }
    return members;
  }

  * [Symbol.iterator]() {
    let node = this.family;
    while (node) {
      yield node.name;
      node = node.child;
    }
  }
}

const family = new FamilyTree();
console.log(family.getMembers());
console.log([...family]);