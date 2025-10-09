const formatDateTime = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

export default formatDateTime;