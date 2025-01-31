import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow unused variables if they start with "_"
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // Allow console logs (e.g., console.log)
      "no-console": "off",

      // Warn when <img> is used instead of <Image> (Next.js best practice)
      "@next/next/no-img-element": "warn",

      // Disable rule that requires escaping quotes (optional, based on preference)
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
