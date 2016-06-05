module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'no-underscore-dangle': ['error', { 'allow': ['_id'] }]
  }
}
