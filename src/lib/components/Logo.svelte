<script lang="ts">
	type Variant = 'full' | 'white' | 'black' | 'icon';

	let {
		variant = 'full',
		height = 44
	}: {
		variant?: Variant;
		height?: number;
	} = $props();

	const src = $derived(
		variant === 'white'
			? '/images/logo_mono_white.png'
			: variant === 'black'
				? '/images/logo_mono_black.png'
				: variant === 'icon'
					? '/images/logo_icon.png'
					: '/images/logo.png'
	);
</script>

<img {src} alt="PL Rail" style="height: {height}px; width: auto; display: block;" class="logo" />

<style>
	.logo {
		max-width: 100%;
	}
</style>
