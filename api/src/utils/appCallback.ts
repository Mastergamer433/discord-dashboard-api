import logger from '../helpers/logger';
import config from '../../config';
const PORT =
  config.env == 'dev' ? config.port.dev || 3001 : config.port.prod || 80;

const callback = () => {
  logger.info(`Server started on port ${PORT}`);
  logger.info(`Running in ${config.env} mode`);
};

export default callback;
