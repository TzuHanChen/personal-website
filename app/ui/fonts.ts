import { Noto_Sans_TC, Fira_Code } from 'next/font/google';
// import { Noto_Serif_TC, Noto_Color_Emoji } from 'next/font/google';

export const notoSansTC = Noto_Sans_TC({
	subsets: ['latin'],
	weight: ['400', '700'],
	fallback: ["sans-serif"],
	display: 'swap',
	variable: '--font-noto-sans-tc'
});

// export const NotoSerifTC = Noto_Serif_TC({
// 	subsets: ['latin'],
// 	weight: ['400', '700'],
// 	display: 'swap',
// 	fallback: ['serif']
// });

// export const NotoColorEmoji = Noto_Color_Emoji({
// 	subsets: ['emoji'],
// 	weight: ['400'],
// 	display: 'swap',
// });

export const firaCode = Fira_Code({
	subsets: ["latin"],
	weight: ['400', '700'],
	fallback: ["monospace"],
	display: 'swap',
	variable: "--font-fira-code",
});