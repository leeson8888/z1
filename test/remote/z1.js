const assert = require('assert')
const s = require('var-server')(8082)

describe('constants in worker', function () {

  const z1Dir = local.resolve('index')
  const z1 = local('index')
  const exampleServer = local.resolve('example')

  beforeEach(function () {
    return z1.start(exampleServer)
  })

  afterEach(function () {
    return z1.exit()
  })

  it('should set process.env.PORT', function () {
    return s.run('process.env.PORT').then(port => {
      assert.strictEqual(+port, 8080)
    })
  })

  it('should set z1.app', function () {
    return s.run(`require("${z1Dir}")`).then(app => {
      assert(app)
    })
  })

  it('should set z1.app.name', function () {
    return s.run(`require("${z1Dir}").app.dir`).then(dir => {
      assert.strictEqual(dir, exampleServer)
    })
  })
})