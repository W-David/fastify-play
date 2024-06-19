import { ApolloSandbox } from '@apollo/sandbox'

function run() {
  new ApolloSandbox({
    target: '#embedded-sandbox',
    initialEndpoint: 'http://localhost:3000',
  })
}
run()
