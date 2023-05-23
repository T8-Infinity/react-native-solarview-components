const path = require('path');
const fs = require('fs');
const fg = require('fast-glob');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'src/index.ts');

const atomicDirectories = [
  'Atoms',
  'Molecules',
  'Organisms',
  'Templates'
];

const componentBlacklist = [
  'Collapsible',
  'Indicator',
  'Adornment',
];

const componentsRegex = new RegExp(`src\/Components\/(${atomicDirectories.join('|')})\/([a-zA-Z]+)`);
const componentsBlackListRegex = new RegExp(`(${componentBlacklist.join('|')})$`);

const directories = fg
  .sync('**/src/Components/**', { onlyDirectories: true, deep: 4 })
  .filter((dir) => componentsRegex.test(dir) && !componentsBlackListRegex.test(dir))
  .map((dir) => ({ path: dir.replace('src/', './'), name: dir.replace(componentsRegex, (_, p1, p2) => p2) }));

let contents = [];

atomicDirectories.forEach((dir) => {
  const components = directories
    .filter((subDir) => new RegExp(dir).test(subDir.path))
    .map((component) => `export * from '${component.path}';\n`);

  if (components.length > 0) {
    contents = [...contents, `// ${dir}\n`, ...components, '\n'];
  }
});

// Adds utils
contents.push('// Utils\n');
contents.push("export { AlchemyProvider } from './Utils/AlchemyProvider';\n");
contents.push("export { withTheme } from './Utils/withTheme';\n");

contents = contents.join('').trimEnd();

fs.existsSync(path.dirname(output)) || fs.mkdirSync(path.dirname(output));
fs.writeFileSync(
  output,
  `${contents}\n`,
);
