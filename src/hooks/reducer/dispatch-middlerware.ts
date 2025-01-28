const composeMiddleware =
  (...middlewares) =>
  (dispatch) => {
    return middlewares.reduceRight((next, middleware) => {
      console.log("next:", next, "middleware:", middleware);
      return middleware(next);
    }, dispatch);
  };

const logger = (next) => (action) => {
  console.log("Logger middleware:", action);
  next(action); // Calls the next middleware.
};

const analytics = (next) => (action) => {
  console.log("Analytics middleware:", action.type);
  next(action);
};

const dispatch = (action) => console.log("Final dispatch:", action);

const composed = composeMiddleware(logger, analytics)(dispatch);

composed({ type: "TEST_ACTION" });
