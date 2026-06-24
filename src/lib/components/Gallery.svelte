<script lang="ts">
	import { reveal } from '$lib/actions/reveal.js';
	import { IMAGES } from '$lib/config/images.js';

	let { title = 'Nos chantiers', sectionLabel = 'Galerie' }: { title?: string; sectionLabel?: string } = $props();

	// Replace these placeholder items with real images once available.
	const images = IMAGES.gallery;
</script>

<!-- Gallery section — add real photos to IMAGES.gallery in src/lib/config/images.ts -->
<section id="gallery" class="section gallery">
	<div class="container">
		<div use:reveal>
			<span class="section__label">{sectionLabel}</span>
			<h2 class="section__title">{title}</h2>
		</div>

		<div class="gallery__grid">
			{#each images as img, i}
				<div class="gallery__item" use:reveal={{ delay: i * 80 }}>
					<img
						src={img.src}
						alt={img.alt}
						class="gallery__img"
						width="800"
						height="600"
						loading="lazy"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.gallery__grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: var(--sp-4);
	}

	.gallery__item {
		border-radius: var(--r-lg);
		overflow: hidden;
		box-shadow: var(--shadow-md);
		transition: transform var(--ease), box-shadow var(--ease);
		aspect-ratio: 4 / 3;
	}

	.gallery__item:hover {
		transform: scale(1.02);
		box-shadow: var(--shadow-xl);
	}

	.gallery__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
</style>
