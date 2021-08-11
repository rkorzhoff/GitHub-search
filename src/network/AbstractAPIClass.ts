export interface APIType {
  readonly API_URL: string
  readonly searchQuery: string
  readonly page: string
  readonly sortQuery?: string
}

export default abstract class AbstractAPIClass implements APIType {
  readonly API_URL = 'https://api.github.com/search/' //TODO - ПЕРЕМЕСТИТЬ В ENV
  readonly searchQuery: string = ''
  readonly sortQuery?: string = ''
  readonly page!: string
  protected constructor(searchQuery: string, page: string, sortQuery?: string) {
    this.searchQuery = searchQuery
    this.page = page
    page ? (this.page = `&page=${this.page}`) : (this.page = '')
    sortQuery ? (this.sortQuery = '&sort=' + sortQuery) : (this.sortQuery = '')
  }
}
