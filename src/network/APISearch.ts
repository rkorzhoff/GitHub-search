import AbstractAPIClass from '@/network/AbstractAPIClass'
import axios from 'axios'

export default class APISearch extends AbstractAPIClass {
  constructor(searchQuery: string, page: string, sortQuery?: string) {
    super(searchQuery, page, sortQuery)
  }
  APICall() {
    const qParams = 'q=' + encodeURIComponent(`${this.searchQuery} in:login `)
    return axios({
      method: 'get',
      url: `${this.API_URL}users?${qParams}${this.page}${this.sortQuery}`,
    })
  }
}
