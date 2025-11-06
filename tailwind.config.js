/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 't-', // Prefijo de todas las clases Tailwind
    content: [
        './**/*.liquid',
        './**/*.html',
        './**/*.js',
    ],

    theme: {
        extend: {
            colors: {
                brand: '#EC4899',
                accent: '#22D3EE',
            },
        },
    },

    plugins: [
        require('daisyui'),
    ],

    daisyui: {
        prefix: 'd-', // Prefijo para las clases DaisyUI
        themes: [
            {
                playlove: {
                    primary: '#8B5CF6',
                    secondary: '#EC4899',
                    accent: '#22D3EE',
                    neutral: '#1E293B',
                    'base-100': '#FFFFFF',
                },
            },
        ],
    },
}