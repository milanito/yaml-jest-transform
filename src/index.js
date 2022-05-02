const yaml = require('js-yaml')
const crypto = require('crypto')

const process = src => {
  const json = yaml.load(src, { json: true })

  return {
    code: `module.exports = ${JSON.stringify(json, null, 2)};`
  }
}

const getCacheKey = (data, path, config) =>
  crypto.createHash('md5')
    .update(data)
    .update(JSON.stringify(config, null, 2))
    .digest('hex')

module.exports = {
  process,
  getCacheKey
}
