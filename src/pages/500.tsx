import Head from "next/head"

import FullSection from "@/layouts/full-section"
import Text from "@/components/text"
import Button from "@/components/button"

export default function Custom500() {
	return (
		<>
			<Head>
				<title>500</title>
				<meta name="robots" content="noindex" />
			</Head>
			<main>
				<FullSection>
					<Text type="h1" align="center">500 Internal Server Error</Text>
					<Text align="center">網站伺服器有錯誤。<br />
					你可以重新整理頁面，或者</Text>
					<Button href="/">回到首頁</Button>
				</FullSection>
			</main>
		</>
	)
}