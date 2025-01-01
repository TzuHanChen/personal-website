import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "500 | 陳子涵",
  description: "500 Internal Server Error",
};

export default function ErrorPage() {
  throw new Error('error test');
}