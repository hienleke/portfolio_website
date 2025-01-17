const initialState = {
    iconSource: "https://skillicons.dev/icons",
    iconSource_temp   : "https://go-skill-icons.vercel.app/api/icons"
    //  // Mặc định chưa có component nào được chọn
  };
  
  const iconSourceReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ICON_SOURCE':
        return {
          ...state,
          iconSource: action.payload, // Cập nhật tên component hiện tại
        };
      default:
        return state;
    }
  };
  
  export default iconSourceReducer;
  