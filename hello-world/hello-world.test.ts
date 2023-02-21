import { hello } from './hello-world'

describe('Hello World', () => {
  xit('says hello world', () => {
    expect(hello()).toEqual('Hello, World!')
  })
})
