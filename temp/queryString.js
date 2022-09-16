const formatSelectors = (queryString) =>
  queryString.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

const data = {
  difficulty: 'easy',
  durration: { gte: 15 },
};

data;

let queryString = JSON.stringify(data);
console.log(`stringify`, { queryString });

queryString = formatSelectors(queryString);
console.log(`stringify`, { queryString });

const queryObj = JSON.parse(queryString);
console.log(`obj`, { queryObj });
