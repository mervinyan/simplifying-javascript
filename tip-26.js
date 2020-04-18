const dogs = [
  {
    name: 'max',
    size: 'small',
    breed: 'boston terrier',
    color: 'black'
  },
  {
    name: 'don',
    size: 'large',
    breed: 'labrador',
    color: 'black'
  },
  {
    name: 'shadow',
    size: 'medium',
    breed: 'labrarod',
    color: 'chocolate'
  }
];

const colors = dogs.reduce((colors, dog) => {
  if (colors.includes(dog.color)) {
    return colors;
  }
  return [...colors, dog.color];
}, []);

console.log(colors);

const filters = dogs.reduce((filters, item) => {
  filters.breed.add(item.breed);
  filters.size.add(item.size);
  filters.color.add(item.color);
  return filters;
}, {
  breed: new Set(),
  size: new Set(),
  color: new Set()
});

console.log(filters);

const developers = [
  {
    name: 'Jeff',
    language: 'php'
  },
  {
    name: 'Ashley',
    language: 'python'
  },
  {
    name: 'Sara',
    language: 'python'
  },
  {
    name: 'Joe',
    language: 'javascript'
  }
];

const aggregated = developers.reduce((specialities, developer) => {
  const count = specialities[developer.language] || 0;
  return {
    ...specialities,
    [developer.language]: count + 1
  };
}, {});

console.log(aggregated);