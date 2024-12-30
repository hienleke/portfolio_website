const initialState = {
  currentComponent: null, // Mặc định chưa có component nào được chọn
};

const currentComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_COMPONENT':
      return {
        ...state,
        currentComponent: action.payload, // Cập nhật tên component hiện tại
      };
    default:
      return state;
  }
};

export default currentComponentReducer;
