<template>
  <div>
    <div class="form-group">
      <input 
        type="text" 
        class="form-control"
        v-model="title"
        @keyup.enter="addItem" 
        placeholder="할일을 입력하세요">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState([
      'todoList',
    ]),
  },
})
export default class ItemInput extends Vue {
  public title: string = '';
  public todoList!: any[];

  public addItem() {
    this.$store.commit('addItem', {
      id: this.todoList.length + 1,
      title: this.title,
      status: 'active',
    });
  }
}
</script>

<style scoped>

</style>