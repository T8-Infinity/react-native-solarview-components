/* @flow */

const path = require('path');
const fs = require('fs');
const types = require('@babel/types');
const parser = require('@babel/parser');

const packageJson = require('../package.json');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'lib/mappings.json');
const source = fs.readFileSync(path.resolve(root, 'src', 'index.ts'), 'utf8');
const ast = parser.parse(source, {
  sourceType: 'module',
  plugins: [
    'jsx',
    'typescript',
    'objectRestSpread',
    'classProperties',
    'asyncGenerators',
  ],
});

const index = packageJson.module;
const relative = (value /* : string */) =>
  path.relative(root, path.resolve(path.dirname(index), value));

const mappings = ast.program.body.reduce((acc, declaration, index, self) => {
  if (types.isExportNamedDeclaration(declaration)) {
    if (declaration.source) {
      declaration.specifiers.map((specifier) => {
        acc[specifier.exported.name] = {
          path: relative(declaration.source.value),
          name: specifier.local.name,
        };
      });
    } else {
      declaration.specifiers.map((specifier) => {
        const name = specifier.exported.name;

        self.map((it) => {
          if (
            types.isImportDeclaration(it) &&
            it.specifiers.some(
              (s) =>
                types.isImportNamespaceSpecifier(s) &&
                s.local.name === specifier.local.name
            )
          ) {
            acc[name] = {
              path: relative(it.source.value),
              name: '*',
            };
          }
        });
      });
    }
  }

  return acc;
}, {});

fs.existsSync(path.dirname(output)) || fs.mkdirSync(path.dirname(output));
fs.writeFileSync(
  output,
  JSON.stringify({ name: packageJson.name, index, mappings }, null, 2)
);
