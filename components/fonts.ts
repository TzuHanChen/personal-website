import { Noto_Sans_TC } from 'next/font/google';
import { Noto_Serif_TC } from 'next/font/google';
 
export const NotoSansTC = Noto_Sans_TC({
	subsets: ['latin'], 
	weight: ['400', '700'],
	display: 'swap',
});

export const NotoSerifTC = Noto_Serif_TC({
	subsets: ['latin'], 
	weight: ['400', '700'],
	display: 'swap',
});