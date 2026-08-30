import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // The next-themes hydration guard (`useState(false)` + `useEffect(() =>
    // setMounted(true), [])`) is the officially recommended pattern and
    // deliberately trips this rule; allow it project-wide.
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
  // Vendored UI primitives from React Bits / shadcn. These are copied in
  // as-is; the gradient-wave WebGL port uses `any` and `this` aliasing, the
  // React Bits components use plain <img> and deliberate reflow reads.
  {
    files: ["src/components/ui/**"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "react-hooks/exhaustive-deps": "off",
      "@next/next/no-img-element": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
