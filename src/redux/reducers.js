const initialState = {
    headline: '',
    subheadline: '',
    body: '',
    font: 'Arial',
    color: '#000000',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_TEXT':
      case 'UPDATE_STYLE':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
  