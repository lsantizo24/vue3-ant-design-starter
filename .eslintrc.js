module.exports = {
  "root": true,
  "env": {
      "node": true
  },
  "extends": [
      "plugin:vue/vue3-essential",
      "eslint:recommended",
      "@vue/typescript/recommended"
  ],
  plugins: [
      'vue',
      '@typescript-eslint'
  ],
  "parserOptions": {
      "parser": "babel-eslint"
  },
  "rules": {
      '@typescript-eslint/no-unused-vars': ['off'],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-explicit-any': ['off'],

  }
}