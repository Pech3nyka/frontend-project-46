export default (data, ext) => {
  switch (ext) {
    case '.json':
      return JSON.parse(data);
    default:
      throw new Error(`Unknown file format: ${ext}`);
  }
};
