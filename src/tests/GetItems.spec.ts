import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import APISearch from '../network/APISearch'
describe('APISearch', () => {
  it('returns data when sendMessage is called', async () => {
    const status = 200
    const mock = new MockAdapter(axios)
    mock
      .onGet('https://api.github.com/search/users?q=dev%20in%3Alogin%20&page=1')
      .reply(200, status)
    const APICall = await new APISearch('dev', '1').APICall()

    await expect(APICall.status).toEqual(status)
  })
})
