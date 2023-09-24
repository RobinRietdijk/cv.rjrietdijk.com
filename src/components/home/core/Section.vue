<template>
    <v-row tag="section" class="pa-5 mx-0" v-bind="$attrs">
        <slot />
    </v-row>
</template>
  
<script>
export default {
    inheritAttrs: false,
};
</script>

<style scoped>
.v-row {
    position: relative;
}
</style>
  