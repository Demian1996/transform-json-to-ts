import stripJsonComments from 'strip-json-comments';
import { Json2Ts } from 'json2ts/src/json2ts';

/**
 * @description 检测是否是json
 */
const isJson = (str: string) => {
  try {
    JSON.parse(str);
  } catch (error) {
    return new Error(error);
  }
  return true;
};

/**
 * @description 检测是否是带有注释的json
 * @param {string} str
 * @returns
 */
const isJsonWithComments = (str: string) => {
  try {
    JSON.parse(stripJsonComments(str));
  } catch (error) {
    return new Error(error);
  }
  return true;
};

const parse = (str: string) => {
  if (!str) {
    return str;
  }
  const checkJsonRes = isJson(str);
  const checkJsonWithCommentsRes = isJsonWithComments(str);
  if (typeof checkJsonRes !== 'boolean' && typeof checkJsonWithCommentsRes !== 'boolean') {
    return typeof checkJsonRes !== 'boolean' ? checkJsonRes : checkJsonWithCommentsRes;
  }
  // 先去除注释，再转为ts类型
  const transformedStr = new Json2Ts().convert(stripJsonComments(str));
  console.log(transformedStr);
  return transformedStr.replace(/\t/g, '  ');
};

export { parse };
