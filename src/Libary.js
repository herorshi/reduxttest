const reducer1 = (state = 1, action) => {
  console.log("reducer1");
  console.log(action, "REDUCER1");
  switch (action.type) {
    case "ADD":
      console.log("ADD");
      return action.number;
      break;

    default:
      break;
  }
  console.log("action.number");
  return state;
};
const reducer2 = (state = 2, action) => {
  console.log("reduecer2");
  switch (action.type) {
    case "GET":
      break;

    default:
      break;
  }
  return state;
};

const reducer3 = (state = 3, action) => {
  console.log("reducer3");
  switch (action.type) {
    case "PUT":
      console.log("PUT");
      break;

    default:
      break;
  }
  return state;
};

const reducer4 = (state = 4, action) => {
  console.log("reducer4");
  switch (action.type) {
    case "PUT":
      console.log("PUT");
      break;

    default:
      break;
  }
  return state;
};

const reducer5 = (state = 5, action) => {
  console.log("reducer5");
  switch (action.type) {
    case "PATCH":
      console.log("PATCH");
      break;

    default:
      break;
  }
  return state;
};

export default {
  reducer1,
  reducer2,
  reducer3,
  reducer4,
  reducer5
};
