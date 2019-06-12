export default function({ dispatch, getState }) {
  return next => action => {
    // If the payload does not have a .then property send it on.
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    // Make sure the action's promise resolves
    action.payload
      .then(function(response) {
        // create a new action with the old type, but
        // replace the promise with the reponse data
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      });
  }
}
