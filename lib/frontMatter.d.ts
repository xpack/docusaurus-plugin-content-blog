/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/// <reference path="../src/plugin-content-blog.d.ts" />
import type { BlogPostFrontMatter } from '@ilg/docusaurus-plugin-content-chronology';
export declare function validateBlogPostFrontMatter(frontMatter: {
    [key: string]: unknown;
}): BlogPostFrontMatter;
