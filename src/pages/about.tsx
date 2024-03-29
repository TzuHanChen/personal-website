import Image from 'next/image'
import useSWR from 'swr';

import SEO from '@/components/seo'
import Text from '@/components/text'
import Button from '@/components/button'
import TextSection from '@/layouts/text-section'
import BlockSection, { BlockArea } from '@/layouts/block-section'
import styles from '@/design-tokens/utilities.module.scss'

function Intro() {
	return (
		<TextSection>
			<Image src="/images/photo.png" alt="photo"
				width={120} height={120} priority={true}
				className={`${styles.center} ${styles.circle}`} />

			<Text type="h2" align="center">你好，我是
				<Text type="teal">陳子涵</Text>
			</Text>
			<Text type="h3" align="center">現在是前端工程師</Text>
			<Text>　　我目前使用 Next.js, React, TypeScript, SWR, SCSS 等前端工具，完成實習、接案、新創的專案與任務。能夠使用 React 製作元件、開發功能、串接資料、組成畫面。之前有接觸過介面設計、使用者體驗、後端開發，現在仍有持續利用過往經歷，與負責這些職位的夥伴討論、溝通與合作。如果你想找我聊聊新的合作機會，請聯繫我！</Text>
		</TextSection>
	)
}

function Experience() {
	return (
		<TextSection>
			<Text type="h2">經歷</Text>

			<Text type="h3">
				<Text type="teal">前端工程師</Text>　
				樂倍達數位科技股份有限公司
			</Text>
			<Text><Text type="mediumGray">2023/09 ~ 現今</Text></Text>

			<Text type="h3">
				<Text type="teal">前端工程師</Text>　Teamie
			</Text>
			<Text><Text type="mediumGray">2022/09 ~ 現今</Text></Text>
			<Text>Teamie 是一個學生新創團隊，我們的目標是打造一個專案夥伴媒合平台。</Text>
			<Text type="ul">
				<li>擔任技術組長，與行政策略組、行銷設計組合作。</li>
			</Text>

			<Text type="h3">
				<Text type="teal">前端網頁實習生</Text>　亞瑞特數位社群行銷有限公司
			</Text>
			<Text><Text type="mediumGray">2022/11 ~ 2023/04</Text></Text>
			<Text type="ul">
				<li>使用 JavaScript + SCSS + PHP，網頁切版、前後端分離、功能實作。</li>
				<li>獨立完成：製作公司的電子報模板、調整公司的內部報表產出網站、<br />
					製作客戶的產品介紹頁面。協助正職員工：開發客戶的心理測驗網站。</li>
			</Text>

			<Text type="h3">
				<Text type="teal">UI/UX設計團隊-實習生</Text>　
				眾匯智能健康股份有限公司
			</Text>
			<Text><Text type="mediumGray">2020/07 ~ 08</Text></Text>
			<Text type="ul">
				<li>使用 XAMPP + MySQL + PHP，建置資料庫、實作各項功能。</li>
				<li>開發論壇網站的帳號、文章、留言、收藏、追蹤等功能。</li>
				<li>參與使用者體驗規劃，負責後端，與介面設計和前端的同學合作。</li>
			</Text>
		</TextSection>
	)
}

function Skills() {
	return (
		<BlockSection>
			<Text type="h2">技能</Text>
			<BlockArea column={3}>
				<div>
					<Text type="h3">網站前端</Text>
					<Text>Next.js, React, TypeScript, SWR, SCSS</Text>
					<Text type="h3">版本控制</Text>
					<Text>Git, GitHub, GitLab</Text>
				</div>

				<div>
					<Text type="h3">部署</Text>
					<Text>Vercel, GitHub Pages</Text>
					<Text type="h3">網站後端</Text>
					<Text>Hasura, Neon (Serverless Postgres), PHP, MySQL</Text>
				</div>

				<div>
					<Text type="h3">介面設計、使用者體驗</Text>
					<Text>Figma, FigJam, Miro</Text>
				</div>
			</BlockArea>
		</BlockSection>
	)
}

function TotalUsers() {
	const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFIGLw3THQARBNhQTVJnFXcyfOATc3nLL9Z9zXlHKjlZdWSvtT8I1IcShj3x0ARK3XmcwF9OIzoVid/pub?gid=1358621105&single=true&output=tsv";

	const fetcher = (url: string) =>
		fetch(url).then((res) => res.text());
	const { data, error, isLoading } = useSWR(url, fetcher);

	if (error) {
		return ('Failed to load')
	}
	if (isLoading) {
		return ('Loading...')
	}
	if (data) {
		// 字串去除換行符號
		const dataOneline = data.replaceAll('\r\n', '\t');
		// 利用定位鍵把字串分割成陣列
		const dataArray = dataOneline.split('\t');
		const result = dataArray[(dataArray.length - 2)];
		return (result);
	}
}

function Certificate() {
	return (
		<div>
			<Text type="h2">證書</Text>

			<Text>參加{' '}
				<Text type="link" href="https://growonairtw.withgoogle.com/events/digitaleducation">
					Google 數位人才探索計畫 </Text><br />
				於 2023/05 取得</Text>
			<Text type="ul">
				<li><Text type="link" href="https://www.credential.net/e8426561-bf2b-4951-816e-4bdfeeb6a6c7">Google Analytics (分析) 認證</Text></li>
				<li><Text type="link" href="https://oss.uppmkt.com/202305/kep/cer3/ga4/YHhGjM.png">Google 數位人才結業證書</Text></li>
			</Text>
			<Text type="h3">透過 GA4 收集到的<br />
				本網站使用者總數為{' '}
				<Text type="teal"><TotalUsers /></Text>
			</Text>
		</div>
	)
}

function Recognition() {
	return (
		<div>
			<Text type="h2">認可</Text>

			<Text type="h3">
				<Text type="teal">放視大賞　入圍</Text>
			</Text>
			<Text><Text type="mediumGray">2021/05</Text></Text>
			<Text>畢業專題＂珍食力＂於 2021 放視大賞入圍行動應用類 - 軟體內容創意企劃組決賽。</Text>
			<Text type="ul">
				<li>使用者體驗、介面設計，<br />Miro + Figma</li>
			</Text>
			<Text>
				<Text type="link" href="https://www.dcaward-vgw.org.tw/tw/onlineExhibition/winningWorks/detail/31427">
					放視大賞入圍紀錄頁面</Text>
			</Text>
		</div>
	)
}

function Education() {
	return (
		<div>
			<Text type="h2">學歷</Text>

			<Text type="h3">
				<Text type="teal">國立台中教育大學　學士</Text>
			</Text>
			<Text><Text type="mediumGray">2017/09 ~ 2021/06</Text></Text>
			<Text>就讀數位內容科技學系。</Text>
			<Text>選修兩個群組課程：數位技術應用、數位設計。</Text>
		</div>
	)
}

function Contact() {
	return (

		<div>
			<Text type="h2">聯絡資訊</Text>

			<Text>居住地：台灣，台北市</Text>
			<Text>Email：
				<Text type="link" href="mailto:hahachentzuhan@gmail.com">hahachentzuhan@gmail.com</Text>
			</Text>
		</div>
	)
}

function Website() {
	return (
		<div>
			<Text type="h2">網站連結</Text>

			<Text>
				<Text type="link" href="https://github.com/TzuHanChen">GitHub</Text>
			</Text>
			<Text>
				<Text type="link" href="https://www.linkedin.com/in/tzuhanchen/">LinkedIn</Text>
			</Text>
		</div>
	)
}

function Resume() {
	return (
		<div>
			<Text type="h2">履歷</Text>

			<Text>
				<Button href="/TzuHanChen_Resume.pdf" newTab>履歷 PDF 檔案</Button>
			</Text>
			<Text><Text type="mediumGray">更新日期：2023/09/14</Text></Text>
			<Text align="right">© 2023 陳子涵</Text>
		</div>
	)
}

export default function About() {
	return (
		<>
			<SEO title="陳子涵 | 關於我"
				description="陳子涵的自我介紹"
				url="/about"
				image="/images/personal-website-preview.png" />

			<main>
				<Intro />
				<Experience />
				<Skills />

				<BlockSection>
					<BlockArea column={3}>
						<Certificate />
						<Recognition />
						<Education />
						<Contact />
						<Website />
						<Resume />
					</BlockArea>
				</BlockSection>
			</main>
		</>
	)
}