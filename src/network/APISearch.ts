import AbstractAPIClass from '@/network/AbstractAPIClass'
import axios from 'axios'

export default class APISearch extends AbstractAPIClass {
  constructor(searchQuery: string, sortQuery?: string) {
    super(searchQuery, sortQuery)
  }
  APICall() {
    const queryString =
      'q=' +
      encodeURIComponent(`${this.searchQuery} in:login ${this.sortQuery}`)
    return axios({
      method: 'get',
      url: `${this.API_URL}users?${queryString}`,
    })
  }
}
