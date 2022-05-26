import createApp from './utils/createApp';
import appCallback from './utils/appCallback';
import config from '../config';
const PORT =
  config.env == 'dev' ? config.port.dev || 3001 : config.port.prod || 80;

const main = async () => {
  try {
    const app = createApp();

    app.listen(PORT, appCallback);
  } catch (error) {
    console.error(error);
  }
};

main();
