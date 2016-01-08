// This is a noop middleware for Redux (basic structure)
export default function noop({
  // getState,
  // dispatch,
}) {
  return (next) => (action) => {
    return next(action);
  };
}
