<template>
    <div>
        {{ count }}
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import { Getter, State }from 'vuex-class'

@Component
export default class Count extends Vue {
    @State readonly count!: number; 
}
</script>
