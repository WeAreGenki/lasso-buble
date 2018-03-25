/**
 * lasso-buble
 * @overview Lasso plugin to transform JS using Buble.
 * @author Max Milton <max@wearegenki.com>
 *
 * Copyright 2018 We Are Genki
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// TODO: Add source map support once lasso supports it
//  ↳ https://buble.surge.sh/guide/#using-the-javascript-api

'use strict'; // eslint-disable-line

const buble = require('buble');

/**
 * @typedef {object} PluginConfig
 * @property {object.<string>|Array.<require|Function>} PluginConfig.plugins
 * @property {boolean|string} PluginConfig.map
 */

/**
 * Transform JS passed in by Lasso.js
 * @param {object} lasso Lasso.js plugin execution context.
 * @param {PluginConfig} config Lasso.js plugin configuration options.
 */
module.exports = (lasso, config) => {
  lasso.addTransform({
    contentType: 'js',
    name: module.id,
    stream: false,

    /**
     * @param {string} input The JS code being processed.
     * @returns {string} ES5 JS code.
     */
    transform: input => (buble.transform(input, config)).code,
  });
};
