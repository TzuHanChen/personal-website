import { Noto_Sans_TC } from 'next/font/google';
// import { Noto_Serif_TC, Noto_Color_Emoji, Fira_Code } from 'next/font/google';

export const NotoSansTC = Noto_Sans_TC({
	subsets: ['latin'],
	weight: ['400', '700'],
	display: 'swap',
	fallback: ['sans-serif']
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

// export const FiraCode = Fira_Code({
// 	subsets: ['latin'],
// 	weight: ['400', '700'],
// 	display: 'swap',
// 	fallback: ['monospace']
// });