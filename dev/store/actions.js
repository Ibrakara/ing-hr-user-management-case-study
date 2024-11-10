export const setState = (action = {type: '', value: ''}) => {
  return {
    type: action.type,
    value: action.value,
  };
};
