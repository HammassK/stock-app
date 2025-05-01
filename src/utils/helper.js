export const handleReturnKey = (event, ref, fieldName, type, func) => {
  if (event.keyCode === 13) {
    if (event.target.id === fieldName && type === "next") {
      return ref.current.focus();
    } else if (type === "submit") {
      return func();
    }
  }
};
