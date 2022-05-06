const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [isDevelopment && 'react-refresh/babel'].filter(Boolean),
};
