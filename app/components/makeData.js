import namor from "namor";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const lastContactChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    company: namor.generate({ words: 2, numbers: 0 }),
    school: namor.generate({ words: 2, numbers: 0 }),
    notes: namor.generate({ words: 4, numbers: 0 }),
    lastContact:
      lastContactChance > 0.66
        ? "4/25/2020 5:20 PM"
        : lastContactChance > 0.33
        ? "4/23/2020 3:18 PM"
        : "4/24/2020 9:26 PM",
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
