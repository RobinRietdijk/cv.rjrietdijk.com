<template>
    <v-row class="mx-0" v-bind="$attrs">
        <slot />
    </v-row>
</template>

<script>
export default {
    inheritAttrs: false,
};
</script>
