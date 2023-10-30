import {Header} from '@rubriclab/ui'
import {Metadata} from 'next'
import Link from 'next/link'
import {DEFAULT_META} from '../../constants/metadata'

export const metadata: Metadata = {
	...DEFAULT_META
}

export default async function Home() {
	return (
		<div className='flex flex-col'>
			<div className='flex min-h-screen max-w-5xl flex-col justify-end gap-3 pb-5'>
				<Header text='v𝚫' />
				<p className='mb-9 text-3xl font-extralight sm:text-6xl md:text-5xl'>
					We take privacy seriously.
				</p>
				<h3>Privacy Policy</h3>
				<p>Last updated: October 30, 2023</p>
				<div>
					Our Chrome Extension (&quot;Extension&quot;) is designed to modify page
					style without collecting, storing, or transmitting any personal
					information. We respect your privacy and are committed to protecting it.
					This Privacy Policy outlines our practices concerning data protection. The
					Extension does not collect or process any user information, use cookies or
					external/third-party APIs.
				</div>
				<div>
					As an open-source project, our code is available publicly for you to
					review, under the RubricLab GitHub organization. Since the Extension is
					provided free of charge, we do not engage in any form of data monetization.
					This is a side project and is not affiliated with Vercel.
				</div>
				<div>
					By using the Extension, you acknowledge and agree to the terms outlined in
					this Privacy Policy. We reserve the right to amend this policy at any time
					by posting an updated version on our website. Your continued use of the
					Extension after such changes constitutes your acceptance of the updated
					policy.
				</div>
				<Link href='/support'>Need support?</Link>
			</div>
		</div>
	)
}
