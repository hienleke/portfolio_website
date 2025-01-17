const initialState = {
  currentComponent: null, 
};

const currentComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_COMPONENT':
      return {
        ...state,
        currentComponent: action.payload, 
      };
    default:
      return state;
  }
};

export default currentComponentReducer;
