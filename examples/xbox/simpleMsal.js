const { Authflow } = require('reinarpg-auth')

const doAuth = () => {
  const flow = new Authflow('test', './', { flow: 'msal' })
  flow.getXboxToken().then(console.log)
}

doAuth()
