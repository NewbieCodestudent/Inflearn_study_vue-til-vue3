module.exports = {
  env: {
    node: true,
  },
  extends: [
    // add more generic rulesets here, such as:
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    // "plugin:prettier/recommended",
    // 'plugin:vue/vue3-essential', // This option doesn't impose formatting rules
    // 'plugin:vue/vue3-strongly-recommended', // This option imposes formatting rules on your code to improve readability
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'nenerator-start-spacing': 'off',
    'semi': ["error", "never"],
    'no-unsafe-finally': 0,
    'no-return-assign': 0,
    'comma-dangle': ['error', "always-multiline"],
    'space-before-function-paren': ['error', 'never'],
    'space-before-blocks': ['error', 'never'],
    'keyword-spacing': ['error', { before: true, after: true}],
  },
}
