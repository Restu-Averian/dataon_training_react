import axios from "axios";

/**
 * @typedef useOnFetchProps
 * @property {string} url
 * @property {Object} [data]
 * @property {'POST'|'GET'} [method]
 *
 */

const useOnFetch = () => {
  /** @param {useOnFetchProps} param */
  return async ({ ...config }) => {
    try {
      return await axios({
        method: "POST",
        ...config,
      });
    } catch (e) {
      return e;
    }
  };
};
export default useOnFetch;
