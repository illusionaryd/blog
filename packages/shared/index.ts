import { loadConfig as _loadConfig } from 'unconfig'
import { SiteConfiguration } from './config.js'

export function loadConfig() {
  return _loadConfig<SiteConfiguration>({
    sources: [
      {
        files: 'scantpress.config',
        extensions: ['ts', 'js', 'mjs', 'cjs', 'json'],
      },
    ],
  })
}

export * from './config.js'
export * from './pageData.js'
