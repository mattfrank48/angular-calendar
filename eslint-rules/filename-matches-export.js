/**
 * @fileoverview Enforces exported class name matches filename (e.g., `my-widget.component.ts` → `MyWidgetComponent`)
 */

"use strict";

import path from "node:path";

/** Converts kebab-case to PascalCase */
function kebabToPascalCase(input) {
  return input
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

/** Known Angular suffixes to preserve */
const knownSuffixes = [
  "component",
  "service",
  "directive",
  "pipe",
  "module",
  "guard",
  "resolver",
];

export default {
  meta: {
    type: "problem",
    docs: {
      description:
        "Exported class name must match filename in PascalCase (Angular-style)",
      category: "Best Practices",
      recommended: false,
    },
    schema: [],
  },

  create(context) {
    const filenameWithExt = path.basename(context.getFilename());
    const filename = filenameWithExt.replace(/\.[jt]sx?$/, "");

    const suffix = knownSuffixes.find((suffix) =>
      filename.endsWith(`.${suffix}`),
    );
    let baseName = filename;

    if (suffix) {
      baseName = filename.slice(0, -`.${suffix}`.length);
    }

    const expectedClassName =
      kebabToPascalCase(baseName) +
      (suffix ? suffix.charAt(0).toUpperCase() + suffix.slice(1) : "");

    return {
      ExportNamedDeclaration(node) {
        if (node.declaration && node.declaration.type === "ClassDeclaration") {
          const className = node.declaration.id.name;
          if (className !== expectedClassName) {
            context.report({
              node: node.declaration.id,
              message: `Class name '{{name}}' does not match filename. Expected: '{{expected}}'`,
              data: {
                name: className,
                expected: expectedClassName,
              },
            });
          }
        }
      },
    };
  },
};
