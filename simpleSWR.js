import axios from 'axios';

const simpleSWR = (() => {
  // The default cache validity period is 8 hours
  let cacheDuration = 1000 * 60 * 60 * 8;
  const urlObjs = {};

  return {
    setup: (options = {}) => {
      cacheDuration = options.cacheDuration || cacheDuration;
    },
    get: async (url) => {
      const now = Date.now();
      const cachedObj = urlObjs[url];

      if (cachedObj && now - cachedObj.lastUpdated < cacheDuration) {
        return cachedObj.response;
      }

      try {
        const response = await axios.get(url);
        if (response) {
          urlObjs[url] = { response, lastUpdated: now };
          return response;
        }
      } catch (error) {
        throw error;
      }
    },
  };
})();

export default simpleSWR;
