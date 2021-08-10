import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import Item from '@/entities/Item'
import APISearch from '@/network/APISearch'

@Module({ namespaced: true })
class Items extends VuexModule {
  public users: Item[] = []

  @Mutation
  public fillUsersList(items: Item[]): void {
    this.users = items
  }

  @Action
  public async APISearch(searchQuery: string) {
    try {
      const searchResult = await new APISearch(searchQuery).APICall()
      this.context.commit('fillUsersList', searchResult.data.items)
    } catch (err) {
      console.log(err)
    }
  }
}

export default Items
