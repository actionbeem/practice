<template>
    <div>
        <h2>{{ passData.title }}</h2>
        <template v-for="radio in passData.radios">
          <input :id="radio" type="radio" name="radio">
          <label :for="radio">{{ radio }}</label>
        </template>
    </div>
</template>

<script>
export default {
    props: [
      'passData'
    ],
}
</script>