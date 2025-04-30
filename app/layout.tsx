import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Europeo2024",
	description: "Europeo2024",
	icons: "/icon.png",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={inter.className + " bg-repeat bg-[url(/media/campo.png)]"}>
				{children}
			</body>
		</html>
	);
}
