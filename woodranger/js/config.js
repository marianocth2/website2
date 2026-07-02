// Auto-generated from src/config.ts
// WARNING: This contains DEMO API keys only!
// For production, use your own configuration
window.nextConfig = {
  apiKey: "XiK5G0rgfGt7w5F7d9DMLIJqeCWeWK3OHjXwECq2",
  debug: false, // Always true since this file only loads in debug mode
  currencyBehavior: "auto",
  // auto: Change currency when country changes (current)
  // manual: Never auto-change currency
  paymentConfig: {
    expressCheckout: {
      requireValidation: true,
      requiredFields: ["email", "fname", "lname"],
    },
  },
  // addressConfig: {
  //   defaultCountry: "US",
  //   showCountries: ["US", "CA", "GB", "AU", "NL"],
  //   dontShowStates: ["AS", "GU", "PR", "VI"],
  // },
  discounts: {
    DEMO10: {
      code: "SAVE10",
      type: "percentage",
      value: 10,
      scope: "package",
      packageIds: [2, 3], // Only applies to these package IDs
      description: "10% off entire order",
      combinable: true,
    },
  },
  addressConfig: {
    enableAutocomplete: true,
  }, // Google Maps integration (for address autocomplete)

  googleMaps: {
    apiKey: "",
    region: "US",
  },
  tracking: "auto",
  analytics: {
    enabled: true,
    mode: "auto", // auto | manual | disabled
    providers: {
      nextCampaign: {
        enabled: true,
      },
      gtm: {
        enabled: true,
        settings: {
          containerId: "", // leave empty, netlify will inject the correct ID in production
          dataLayerName: "dataLayer",
        },
      },
      facebook: {
        enabled: false,
        settings: {
          pixelId: "", // leave empty, netlify will inject the correct ID in production
        },
      },
      rudderstack: {
        enabled: false,
        settings: {
          // RudderStack configuration is handled by the RudderStack SDK itself
          // This just enables the adapter
        },
      },
      custom: {
        enabled: false,
        settings: {
          endpoint: "https://your-analytics.com/track",
          apiKey: "endtvcRFYD670NNmD9OImQgz0YybMrUNcPbaWyS9",
        },
      },
    },
  },
  // Error monitoring removed - add externally via HTML/scripts if needed,
  utmTransfer: {
    enabled: true,
    applyToExternalLinks: false,
    debug: true,
    // excludedDomains: ['example.com', 'test.org'],
    // paramsToCopy: ['utm_source', 'utm_medium']
  },
};
