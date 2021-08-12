import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import Item from '@/entities/Item'
import APISearch from '@/network/APISearch'

@Module({ namespaced: true })
class Items extends VuexModule {
  public users: Item[] = localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users') || '')
    : []

  @Mutation
  public fillUsersList(items: Item[]): void {
    this.users = items
    localStorage.setItem('users', JSON.stringify(this.users))
  }

  @Action
  public async APISearch(params: {
    searchQuery: string
    page: string
    sort?: string
  }) {
    try {
      const searchResult = await new APISearch(
        params.searchQuery,
        params.page,
        params.sort
      ).APICall()
      console.log(searchResult)
      this.context.commit('fillUsersList', searchResult.data.items)
    } catch (err) {
      console.log(err)
    }
  }
}

export default Items
