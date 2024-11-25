import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  console.log(config)
  return  ({
    ...config,
    slug: 'my-app',
    name: 'My App',
  })
};