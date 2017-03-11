const tabtab = require('tabtab')

function complete(program) {

  const tab = tabtab({
    name: 'z1',
    cache: false
  })

  tab.start()

  tab.on('z1', (data, done) => {
    console.log(data)
    done()
  })
}

module.exports = complete
