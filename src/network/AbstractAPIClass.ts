export interface APIType {
   readonly API_URL: string
   readonly searchQuery: string
 readonly sortQuery?: string
}


export default abstract class AbstractAPIClass implements APIType{
    readonly API_URL = 'https://api.github.com/search/' //TODO - ПЕРЕМЕСТИТЬ В ENV
    readonly searchQuery:string = ''
    readonly sortQuery?: string = ''
    protected constructor(searchQuery: string, sortQuery?:string) {
        this.searchQuery = 'q=' + searchQuery
        sortQuery ? this.sortQuery = 'sort' + sortQuery : this.sortQuery = ''
    }

}

