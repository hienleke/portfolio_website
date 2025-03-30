const initialState = {
  data: null, // Mặc định chưa có component nào được chọn
};

const currentComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_COMPONENT':
      return {
        ...state,
        data: action.payload, 
      };
    default:
      return state;
  }
};

export default currentComponentReducer;
