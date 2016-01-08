function preDispatch({ action, getState }) {
  console.info('>>> dispatching', action, getState());
}

function postDispatch({ getState }) {
  console.info('>>> next state', getState());
}

// basic logger middleware
export default function logger({ getState, dispatch }) {
  return (next) => (action) => {
    logger.preDispatch({ getState, dispatch, next, action });

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    logger.postDispatch({ getState, dispatch, next, action, returnValue });

    return returnValue;
  };
}
logger.preDispatch = preDispatch;
logger.postDispatch = postDispatch;
