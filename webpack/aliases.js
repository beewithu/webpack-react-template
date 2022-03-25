const path = require('path');

module.exports = {
  'react-dom': '@hot-loader/react-dom',
  components: path.resolve(__dirname, '../src/components'),
  'custom-stitches': path.resolve(__dirname, '../src/custom-stitches'),
  store: path.resolve(__dirname, '../src/store'),
  pages: path.resolve(__dirname, '../src/pages'),
  layouts: path.resolve(__dirname, '../src/layouts'),
  hooks: path.resolve(__dirname, '../src/hooks'),
};
