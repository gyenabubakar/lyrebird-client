const {mergeConfig, defineConfig} = require("vite");
const {resolve} = require("path");

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|vue)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    framework: "@storybook/vue3",
    core: {
        builder: "@storybook/builder-vite",
        enableCrashReports: true
    },
    features: {
        storyStoreV7: true
    },
    viteFinal(config) {
        return mergeConfig(config, defineConfig({
            resolve: {
                alias: {
                    "@lyrebird/ui": resolve(__dirname, "../src")
                }
            },
            build: {
                sourcemap: false
            }
        }));
    }
};
