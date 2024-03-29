import Head from 'next/head'
import type { GetServerSideProps } from 'next'

import SEO from '@/components/seo'
import Text from '@/components/text'
import Button from '@/components/button'
import Card, { CardImage, CardText, CardButton } from '@/components/card'
import Block from '@/components/block'
import BlockSection, { BlockArea } from '@/layouts/block-section'
import TextSection from '@/layouts/text-section'
import { getRecordsCards } from '@/lib/records'
import styles from '@/design-tokens/utilities.module.scss'

function Hero() {
	return (
		<BlockSection>
			{/* <BlockArea type='flex'> */}
				<Block addPadding>
				<Text type="h3" align="center">你好，我是</Text>
				<Text type="h1" align="center">
					<Text type="teal">陳子涵</Text>
				</Text>
				<Text type="h2" align="center">現在是前端工程師</Text>
				</Block>
			{/* </BlockArea> */}
		</BlockSection>
	)
}

type RecordsCards = {
	id: string, image: string, name: string,
	type: string, intro: string, highlight: string,
	records_links: {
		outsideText: string, outsideLink: string, newTab: boolean
	}[]
}[];

export const getServerSideProps: GetServerSideProps<
	{ recordsCards: RecordsCards }> = async () => {
		const recordsCards = await getRecordsCards();
		return { props: { recordsCards } };
	}

function InsideButton({ id }: { id: string }) {
	return <Button href={`/records/${id}`} type='secondary'>
		詳細說明</Button>
}

function OutsideButton(
	{ records_link: { outsideText, outsideLink, newTab } }:
		{ records_link: { outsideText: string, outsideLink: string, newTab: boolean } }) {
	let result;
	if (outsideText == null) {
		result = null;
	} else {
		const type = (outsideText == '敬請期待') ? 'tertiary' : 'primary';
		result = (
			<Button href={outsideLink} newTab={newTab} type={type}>
				{outsideText}
			</Button>
		);
	}
	return result;
}

function Records(
	{ recordsCards }: { recordsCards: RecordsCards }) {
	const result = recordsCards.map((
		{ id, image, name, type, intro, highlight, records_links }
	) => (
		<Card key={id}>
			<CardImage image={image} alt={name} />
			<CardText>
				<div className={styles.jcsb}>
					<Text type="h3">{name}</Text>
					<Text><Text type="mediumGray"># {type}</Text></Text>
				</div>
				<Text type="p">{intro}</Text>
				<Text><Text type="mediumGray">{highlight}</Text></Text>
			</CardText>
			<CardButton>
				<InsideButton id={id} />
				<OutsideButton records_link={records_links[0]} />
			</CardButton>
		</Card>
	))

	return (
		<BlockSection id='records'>
			<Text type="h2">職涯紀錄</Text>
			<BlockArea marginTop column={3}>{result}</BlockArea>
		</BlockSection>
	)
}

function About() {
	return (
		<TextSection id="about">
			<Text type="h2">關於我</Text>
			<Text>參與過產品開發流程的各項工作後，我選擇以前端工程作為本人職業。</Text>
			<Text>期許自己能夠利用過往經驗，與來自各領域的同事順利合作。</Text>
			<Text align="right">
				<Button href="/about">詳細自我介紹</Button>
			</Text>
		</TextSection>
	)
}

export default function Index(
	{ recordsCards }: { recordsCards: RecordsCards }) {
	return (
		<>
			<SEO title="陳子涵 TzuHan_Chen"
				description="陳子涵的個人網站"
				url="/"
				image="/images/personal-website-preview.png" />
			<Head>
				<link rel="canonical" href="https://tzuhanchen.vercel.app" />
			</Head>

			<main>
				<Hero />
				<Records recordsCards={recordsCards} />
				<About />
			</main>
		</>
	)
}