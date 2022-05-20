module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["next/core-web-vitals", "airbnb", "airbnb-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: [
    "@typescript-eslint",
    "unused-imports",
    "tailwindcss",
    "simple-import-sort",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    "react/function-component-definition": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
