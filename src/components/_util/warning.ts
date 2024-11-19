const warning = (show: boolean, message: string) => {
  if (show) {
    console.warn(message);
  }
};

export default warning;
