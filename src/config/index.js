
import development from './development';
import production from './production';

const nodeEnv = process.env.NODE_ENV;

let config = development;

console.log(`当前开发环境:${nodeEnv}`);
if (nodeEnv === 'production') {
  config = production;
}
export default config;

