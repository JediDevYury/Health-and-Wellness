import 'ts-node/register'; // Add this to import TypeScript files
import { ExpoConfig, ConfigContext } from 'expo/config';

const getBundleID = () => {
  if (process.env.APP_VARIANT === "production") {
    return "com.jedidevyury.health.and.wellness";
  }

  if (process.env.APP_VARIANT === "preview") {
    return "com.jedidevyury.health.and.wellness.preview";
  }

  return "com.jedidevyury.health.and.wellness.dev";
};

const getAppName = () => {
  if (process.env.APP_VARIANT === "production") {
    return "Health and Wellness Mobile";
  }

  if (process.env.APP_VARIANT === "preview") {
    return "Health and Wellness (Preview)";
  }

  return "Health and Wellness (Dev)";
};

const bundleID = getBundleID();

export default ({ config }: ConfigContext): ExpoConfig => {
  return  ({
    ...config,
    slug: "health_and_wellness",
    name: getAppName(),
    scheme: "health.and.wellness",
    ios: {
      buildNumber: "1.0.0",
      bundleIdentifier: bundleID,
      supportsTablet: true,
    },
    android: {
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: bundleID
    },
    extra: {
      eas: {
        "projectId": "8c1ac0bf-2d47-430a-bc46-7a1225f26411"
      }
    },
    updates: {
      url: "https://u.expo.dev/8c1ac0bf-2d47-430a-bc46-7a1225f26411"
    },
    owner: "jedidevyury",
    runtimeVersion: {
      policy: "appVersion"
    }
  })
};