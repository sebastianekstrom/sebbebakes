const IGNORED_PATHS = [
  "src/pages/",
  "src/types/recipe\\.d\\.ts",
  "playwright\\.config\\.ts",
  "src/components/.*\\.stories\\.tsx?",
  "tooling/tests/index.ts",
].join("|");

module.exports = {
  ignore: IGNORED_PATHS,
};
