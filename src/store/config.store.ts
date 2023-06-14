import { defineStore } from 'pinia'
import configSample from '../config'
import get from 'lodash/get'

export interface Config {
  [key: string]: Entity
}

export interface Entity {
  enabled: true | false // BE only?
  options?: {
    [key: string]: any
  }
  permissions?: string[] // BE only?
  children?: Config
}

export const useConfigStore = defineStore('config', {
  state: (): { config: Config } => ({ config: configSample }),
  getters: {
    getEntityConfig: (state) => {
      return (path: string): Entity => {
        const parts = path.split('.').join('.children.')
        return get(state.config, parts)
      }
    }
  }
})
