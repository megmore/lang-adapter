'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Created by nocoolyoyo on 2018/11/6.
 */
var map = {
  'zh-CN': '简体中文',
  'zh-TW': '繁体中文',
  'ar': 'العربية',
  'de': 'Deutsch',
  'en': 'English',
  'es': 'Español',
  'fr': 'Français',
  'id': 'Indonesia',
  'it': 'Italiano',
  'ja': '日本語',
  'ko': '한국어',
  'nl': 'Nederlands',
  'po': 'Polski',
  'pt': 'Português',
  'ro': 'română',
  'ru': 'Русский',
  'sv': 'Svenska',
  'th': 'ไทย',
  'tr': 'Türkçe',
  'vi': 'Tiếng Việt'
};

/**
 * 业务多语言适配器
 * 
 * @param {string} lang 需要被适配的语言字符串 ,为空则返回英语
 * @returns 适配结果，没有适配结果则返回输入的字符串
 * 
 * @author nocoolyoyo
 * @since 2018-05-23
 */
function adapter (lang) {
  if (typeof lang !== 'string') {
    throw error('lang is not a string');
  }

  var result = lang.toLowerCase(); //中文

  if (lang.indexOf('zh-') !== -1) {
    //某些安卓设备语言返回的是zh-rCN，zh-rTW
    if (lang.indexOf('zh-rCN') !== -1) {
      result = 'zh-CN';
    } //繁体中文适配


    if (lang.indexOf('zh-rTW') !== -1) {
      result = 'zh-TW';
    }

    if (lang.indexOf('zh-cn') !== -1) {
      result = 'zh-CN';
    }

    if (lang.indexOf('zh-tw') !== -1) {
      result = 'zh-TW';
    }
  } else if (lang.indexOf('ja') !== -1 || lang.indexOf('jp') !== -1) {
    //日语
    result = 'ja';
  } else {
    //其他语言
    //中线处理
    if (lang.indexOf('-') !== -1) {
      result = lang.split('-')[0];
    }
  }

  return result;
}

/**
 * 业务多语言适配器
 * 
 * @param {string} lang 需要被适配的语言字符串 ,为空则返回英语
 * @returns 适配结果，没有适配结果则返回输入的字符串
 * 
 * @author nocoolyoyo
 * @since 2018-05-23
 */

exports.default = adapter;
exports.adapter = adapter;
exports.LANG_MAP = map;
