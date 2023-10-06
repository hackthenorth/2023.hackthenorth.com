module.exports = {
  ci: {
    assert: {
      assertions: {
        "color-contrast": "off",
        "resource-summary:total:size": ["error", { maxNumericValue: 5750000 }], // 5.5MB
        "categories:accessibility": ["error", { minScore: 1 }],
        "categories:best-practices": ["error", { minScore: 1 }],
        "categories:seo": ["error", { minScore: 1 }],
      },
    },
    collect: {
      staticDistDir: "./build",
      psiStrategy: "desktop",
      settings: {
        chromeFlags: "--no-sandbox --disable-dev-shm-usage --headless",
        preset: "desktop",
      },
      url: ["http://localhost/"],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
