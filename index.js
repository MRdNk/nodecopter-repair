/* 
  nodecopter-repair
  Rule of Repair: Repair what you can — but when you must fail, fail noisily and as soon as possible.
*/

var arDrone = require('ar-drone')
var client = arDrone.createClient()

var repair = function (opts) {

  var opts = opts || {}
  opts.killafter = opts.killafter || 1000

  process.on('SIGINT', function () {
    client.stop() && client.land()
    setTimeout( function () {
      process.exit(0)
    }, opts.killafter)
  })

  process.on('uncaughtException', function () {
    client.stop() && client.land()
    setTimeout( function (err) {
      console.error(err)
      process.exit(1)
    }, opts.killafter)
  })

}

module.exports = repair