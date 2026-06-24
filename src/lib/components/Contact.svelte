<script lang="ts">
	import { reveal } from '$lib/actions/reveal.js';
	import type { Dict } from '$lib/i18n/types.js';

	let { dict }: { dict: Dict } = $props();

	const PHONE_RAW = '+33641356570';
	const PHONE_DISPLAY = '06 41 35 65 70';
	const EMAIL = 'contact@plrail.fr';
</script>

<section id="contact" class="section section--dark contact">
	<div class="container">
		<div class="contact__inner">
			<div class="contact__intro" use:reveal>
				<span class="section__label">{dict.nav.contact}</span>
				<h2 class="section__title">{dict.contact.title}</h2>
				<p class="contact__body">{dict.contact.body}</p>
			</div>

			<div class="contact__card" use:reveal={{ delay: 120 }}>
				<div class="contact__person">
					<div class="contact__avatar" aria-hidden="true">
						<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="36" height="36">
							<circle cx="24" cy="18" r="10"/>
							<path d="M6 42c0-9.94 8.06-18 18-18s18 8.06 18 18"/>
						</svg>
					</div>
					<div>
						<p class="contact__person-name">{dict.contact.manager}</p>
						<p class="contact__person-role">{dict.contact.role}</p>
					</div>
				</div>

				<div class="contact__actions">
					<a href="mailto:{EMAIL}" class="contact__action contact__action--email">
						<span class="contact__action-icon" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
								<polyline points="22,6 12,13 2,6"></polyline>
							</svg>
						</span>
						<span>
							<strong class="contact__action-label">{dict.contact.cta_email}</strong>
							<span class="contact__action-value">{EMAIL}</span>
						</span>
					</a>

					<a href="tel:{PHONE_RAW}" class="contact__action contact__action--phone">
						<span class="contact__action-icon" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
							</svg>
						</span>
						<span>
							<strong class="contact__action-label">{dict.contact.cta_call}</strong>
							<span class="contact__action-value">{PHONE_DISPLAY}</span>
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.contact__inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(3rem, 6vw, 6rem);
		align-items: center;
	}

	.contact__body {
		color: rgba(255, 255, 255, 0.75);
		font-size: var(--text-lg);
		line-height: 1.7;
		margin-top: var(--sp-2);
	}

	.contact__card {
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--r-xl);
		padding: var(--sp-10);
		display: flex;
		flex-direction: column;
		gap: var(--sp-8);
	}

	.contact__person {
		display: flex;
		align-items: center;
		gap: var(--sp-5);
	}

	.contact__avatar {
		flex-shrink: 0;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: rgba(255, 117, 47, 0.15);
		border: 2px solid rgba(255, 117, 47, 0.4);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--orange);
	}

	.contact__person-name {
		font-size: var(--text-xl);
		font-weight: 700;
		color: var(--white);
	}

	.contact__person-role {
		font-size: var(--text-sm);
		color: rgba(255, 255, 255, 0.6);
		margin-top: var(--sp-1);
	}

	.contact__actions {
		display: flex;
		flex-direction: column;
		gap: var(--sp-4);
	}

	.contact__action {
		display: flex;
		align-items: center;
		gap: var(--sp-4);
		padding: var(--sp-5) var(--sp-6);
		border-radius: var(--r-lg);
		text-decoration: none;
		transition: background var(--ease), transform var(--ease);
	}

	.contact__action:hover {
		transform: translateX(4px);
	}

	.contact__action--email {
		background: var(--orange);
	}

	.contact__action--email:hover {
		background: var(--orange-dark);
	}

	.contact__action--phone {
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(255, 255, 255, 0.15);
	}

	.contact__action--phone:hover {
		background: rgba(255, 255, 255, 0.14);
	}

	.contact__action-icon {
		flex-shrink: 0;
		width: 40px;
		height: 40px;
		border-radius: var(--r-md);
		background: rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}

	.contact__action-icon :global(svg) {
		width: 20px;
		height: 20px;
	}

	.contact__action span:last-child {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.contact__action-label {
		font-size: var(--text-sm);
		font-weight: 700;
		color: var(--white);
		display: block;
	}

	.contact__action-value {
		font-size: var(--text-base);
		color: rgba(255, 255, 255, 0.85);
	}

	@media (max-width: 800px) {
		.contact__inner {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.contact__card {
			padding: var(--sp-6);
		}
	}
</style>
