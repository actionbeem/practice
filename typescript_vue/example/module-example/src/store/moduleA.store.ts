import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({namespaced: true, name: 'moduleA'})
export default class ModuleA extends VuexModule {
  data: string = 'moduleA';

  @Mutation
  setData(data: string){
    this.data = data;
  }

  @Action
  editData(data: string){
    this.context.commit('setData', data)
  }

  get moduleAdata(){
    return this.data;
  }
}