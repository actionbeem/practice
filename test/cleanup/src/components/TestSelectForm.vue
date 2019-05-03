<template>
    <div>
        <h2>{{ passData.title }}</h2>
        <select>
          <option v-for="(opt, index) in passData.options" :value="opt" :key="index">{{ opt }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: [
        'passData'
    ],
}
</script>