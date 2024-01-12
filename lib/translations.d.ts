/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference path="../src/plugin-content-blog.d.ts" />
import type { TranslationFile } from '@docusaurus/types';
import type { PluginOptions, BlogContent } from '@ilg/docusaurus-plugin-content-chronology';
export declare function getTranslationFiles(options: PluginOptions): TranslationFile[];
export declare function translateContent(content: BlogContent, translationFiles: TranslationFile[]): BlogContent;
