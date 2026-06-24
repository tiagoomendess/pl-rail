<script lang="ts">
	import { reveal } from '$lib/actions/reveal.js';
	import type { Dict } from '$lib/i18n/types.js';

	let { dict }: { dict: Dict } = $props();
</script>

<section id="about" class="section about">
	<div class="container about__inner">
		<div class="about__text" use:reveal>
			<span class="section__label">PL Rail</span>
			<h2 class="section__title">{dict.about.title}</h2>
			<p class="about__body">{dict.about.body1}</p>
			<p class="about__body">{dict.about.body2}</p>
		</div>

		<div class="about__visual" use:reveal={{ delay: 150 }}>
			<div class="about__image-frame">
				<img
					src="https://placehold.co/640x480/11304d/ff752f?text=PL+Rail"
					alt="PL Rail – chantier ferroviaire"
					class="about__image"
					width="640"
					height="480"
					loading="lazy"
				/>
				<!-- Accent stripe decoration -->
				<div class="about__accent" aria-hidden="true"></div>
			</div>
		</div>
	</div>
</section>

<style>
	.about__inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(3rem, 6vw, 6rem);
		align-items: center;
	}

	.about__body {
		color: var(--gray-700);
		font-size: var(--text-lg);
		line-height: 1.75;
		margin-bottom: var(--sp-5);
	}

	.about__body:last-child {
		margin-bottom: 0;
	}

	.about__visual {
		position: relative;
	}

	.about__image-frame {
		position: relative;
		border-radius: var(--r-xl);
		overflow: hidden;
		box-shadow: var(--shadow-xl);
	}

	.about__image {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
		border-radius: var(--r-xl);
	}

	.about__accent {
		position: absolute;
		bottom: -16px;
		right: -16px;
		width: 60%;
		height: 60%;
		border: 3px solid var(--orange);
		border-radius: var(--r-xl);
		opacity: 0.4;
		z-index: -1;
	}

	@media (max-width: 800px) {
		.about__inner {
			grid-template-columns: 1fr;
		}

		.about__visual {
			order: -1;
		}

		.about__accent {
			display: none;
		}
	}
</style>
