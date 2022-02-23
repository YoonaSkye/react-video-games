const initState = {
  detail: [],
  screenshot: [],
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload.detail,
        screenshot: action.payload.screenshot,
      };
    default:
      return state;
  }
};

export default detailReducer;
