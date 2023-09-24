<template>
	<section>
		<v-container class="pl-0">
			<v-row :justify="mdAndUp ? 'end' : undefined" class="fill-height text-right pa-md-5 pa-3 mx-0">
				<div class="pb-6">
					<div :class="`display-${mdAndUp ? '3' : '1'}`" class="text-uppercase">Robin Rietdijk</div>

					<h1 :class="`display-${mdAndUp ? '4' : '2'}`" class="primary--text text-uppercase">Student Computer Science and Engineering at TU Delft</h1>
				</div>
			</v-row>
			<v-img :src="gradient" class="gradient" min-width="100%" />
		</v-container>

		<HeroAnimation class="mx-0" style="position: absolute; top: 0px; z-index: 0" />
	</section>
</template>

<script>
import HeroAnimation from "@/components/home/animation/Animation.vue";
import Gradient from "@/assets/gradient.png"
export default {
	name: "Hero",
	components: {
		HeroAnimation,
	},
	data: () => ({
		isHydrated: false,
		gradient: Gradient,
	}),

	computed: {
		mdAndUp() {
			return this.isHydrated ? this.$vuetify.display.mdAndUp : undefined;
		},
	},

	mounted() {
		this.isHydrated = true;
	},
}
</script>

<style scoped>
.v-container {
	height: 100vh;
	min-width: 100%;
	position: relative;
	z-index: 2;
}

.gradient {
	margin-top: -100px;
	position: absolute;
	bottom: 0;
}
</style>
