//reducers normally dealing with data like state 
export default (state=[], action) => {
//  if(action.type === 'FETCH_POSTS'){
//    return action.payload;
//  }
//  //if we don't find the action we just return state
//  return state;
//---coders use switch statement instead of above --we can add more cases in general as we have more reducer 
  switch(action.type){
    case 'FETCH_POSTS': 
    return action.payload;
    default:
      return state;
  }
};