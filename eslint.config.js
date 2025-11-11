import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";

import stylistic from "@stylistic/eslint-plugin"
export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    languageOptions: { globals: globals.node },
    plugins:{
      "@stylistic": stylistic
    },
    rules:{
    semi: "error",
    "no-var": "error",
    "@stylistic/quotes": ["error", "double"],
    "getter-return": "warn",// mengharuskan membuat return statement pada metod get/getter
    "no-dupe-keys": "warn"// mengharuskan membuat nama keys yg berbeda/tidak boleh ada duplikasi
    },
  },
  globalIgnores(["eslint.config.js"]),
]);
