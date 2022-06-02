let initialState = {
  carUrl: "./img/car/red-car.jpg",
};

export const carReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "magic": {
      state.carUrl = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
