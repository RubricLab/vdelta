import {ToastProvider} from '@rubriclab/ui'
import {Metadata} from 'next'
import localFont from 'next/font/local'
import BackgroundGrid from '../components/BackgroundGrid'
import {DEFAULT_META, META} from '../constants/metadata'
import './styles.css'

const calSans = localFont({
	src: '../public/fonts/CalSans-SemiBold.woff2',
	variable: '--font-cal-sans'
})

export const metadata: Metadata = {
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US'
		}
	},
	...DEFAULT_META,
	metadataBase: new URL(META.siteURL)
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body
				className={`${calSans.variable} relative flex h-full min-h-screen w-full flex-col items-center`}>
				<BackgroundGrid className='fixed h-full w-full' />
				<ToastProvider />
				<div className='z-10 w-full max-w-6xl p-5 pt-0'>{children}</div>
			</body>
		</html>
	)
}
