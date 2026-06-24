export const IMAGES = {
	logo: '/images/logo.png',
	logoWhite: '/images/logo_mono_white.png',
	logoBlack: '/images/logo_mono_black.png',
	logoIcon: '/images/logo_icon.png',
	background: '/images/background.jpg',

	// Add real worksite/machinery photos here when available.
	// Place files in static/images/ and reference them as '/images/filename.jpg'
	gallery: [
		{
			src: 'https://placehold.co/800x600/11304d/ff752f?text=Chantier+Ferroviaire',
			alt: 'Chantier ferroviaire PL Rail'
		},
		{
			src: 'https://placehold.co/800x600/1a4a70/ffffff?text=Pelle+Rail-Route',
			alt: 'Pelle Rail-Route PL Rail'
		},
		{
			src: 'https://placehold.co/800x600/11304d/ff752f?text=Équipes+PL+Rail',
			alt: 'Équipes PL Rail sur chantier'
		}
	]
} as const;
