module.exports = function(api) {
  api.cache(true);

  const presets = ['next/babel', '@zeit/next-typescript/babel'];

  const plugins = [];

  return {
    presets,
    plugins,
  };
};
