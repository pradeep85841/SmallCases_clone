export function NewsReducer(state = { data: "" }, action) {
  switch (action.type) {
    case "NEWS_DATA":
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
