export function formatDate(isoString: string) {
	const date = new Date(isoString);

	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
		timeZone: "Asia/Taipei",
	};

	const formatted = new Intl.DateTimeFormat("zh-TW", options)
		.format(date)
		.replace(/\//g, "/") // 保持斜線分隔
		.replace(", ", "_"); // 把日期和時間用 "_" 連接

	return formatted + " (UTC+8)"
}