module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:storybook/recommended",
    "plugin:sebbe-bakes/all",
  ],

  rules: {
    "react/no-unescaped-entities": 0,
    "no-unused-vars": "warn",
    "sebbe-bakes/no-custom-text-elements": "warn",
  },
  overrides: [
    {
      files: ["src/pages/**/**/*.tsx"],
      rules: {
        "react/jsx-key": 0,
      },
    },
    {
      files: ["src/components/Text/Text.tsx"],
      rules: {
        "sebbe-bakes/no-custom-text-elements": 0,
      },
    },
  ],
};