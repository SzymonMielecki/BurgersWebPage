/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			textColor: {
				skin: {
					accent: 'var(--accent-color)',
					accentHover: 'var(--accent-color-hover)',
					accentDimmed: 'var(--accent-color-dimmed)',
					accentDimmedHover: 'var(--accent-color-dimmed-hover)',
					selection: 'var(--selection-color)',
					selectionHover: 'var(--selection-color-hover)',
					selectionDimmed: 'var(--selection-color-dimmed)',
					background: 'var(--background-color)',
					backgroundDimmed: 'var(--background-color-dimmed)',
					backgroundDimmed2: 'var(--background-color-dimmed2)',
					textDimmed: 'var(--text-color-dimmed)',
					text: 'var(--text-color)'
				}
			},
			backgroundColor: {
				skin: {
					accent: 'var(--accent-color)',
					accentHover: 'var(--accent-color-hover)',
					accentDimmed: 'var(--accent-color-dimmed)',
					accentDimmedHover: 'var(--accent-color-dimmed-hover)',
					selection: 'var(--selection-color)',
					selectionHover: 'var(--selection-color-hover)',
					selectionDimmed: 'var(--selection-color-dimmed)',
					background: 'var(--background-color)',
					backgroundDimmed: 'var(--background-color-dimmed)',
					backgroundDimmed2: 'var(--background-color-dimmed2)',
					textDimmed: 'var(--text-color-dimmed)',
					text: 'var(--text-color)'
				}
			},
			borderColor: {
				skin: {
					accent: 'var(--accent-color)',
					accentHover: 'var(--accent-color-hover)',
					accentDimmed: 'var(--accent-color-dimmed)',
					accentDimmedHover: 'var(--accent-color-dimmed-hover)',
					selection: 'var(--selection-color)',
					selectionHover: 'var(--selection-color-hover)',
					selectionDimmed: 'var(--selection-color-dimmed)',
					background: 'var(--background-color)',
					backgroundDimmed: 'var(--background-color-dimmed)',
					backgroundDimmed2: 'var(--background-color-dimmed2)',
					text: 'var(--text-color)',
					textDimmed: 'var(--text-color-dimmed)'
				}
			},
			fill: {
				skin: {
					accent: 'var(--accent-color)',
					accentHover: 'var(--accent-color-hover)',
					accentDimmed: 'var(--accent-color-dimmed)',
					accentDimmedHover: 'var(--accent-color-dimmed-hover)',
					selection: 'var(--selection-color)',
					selectionHover: 'var(--selection-color-hover)',
					selectionDimmed: 'var(--selection-color-dimmed)',
					background: 'var(--background-color)',
					backgroundDimmed: 'var(--background-color-dimmed)',
					backgroundDimmed2: 'var(--background-color-dimmed2)',
					text: 'var(--text-color)',
					textDimmed: 'var(--text-color-dimmed)'
				}
			}
		}
	},
	plugins: []
}
