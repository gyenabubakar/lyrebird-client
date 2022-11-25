module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: [
        "app/docs/",
        "app/web/",
        "packages/ui/",
        "packages/configs/",
        "packages/tsconfigs/",
      ],
    },
  },
};
