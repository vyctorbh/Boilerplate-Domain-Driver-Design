export function setEnvironment() {
  console.log('ww', process.env.NODE_ENV);
  switch (process.env.NODE_ENV) {
    case 'test':
      return ['.env.test', '.env'];
    case 'stage':
      return ['.env.stage', '.env'];
    case 'development':
      return ['.development.env', '.env'];
    case 'production':
    default:
      return '.env';
  }
}
