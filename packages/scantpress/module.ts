// used to fix typescript errors

import { type MarkdownItHeader } from '@mdit-vue/plugin-headers'

export interface Module<T> {
  default: T
  __headers?: MarkdownItHeader[]
}
