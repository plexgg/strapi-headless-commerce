import pluginPkg from '../../../package.json'

const pluginId = pluginPkg.name.replace(
  /^(@[^-,.][\w,-]+\/|strapi-)plugin-/i,
  '',
)

export const PLUGIN_ID = pluginId
export const BASE_URL = `/plugins/${pluginId}`
