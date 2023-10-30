import {ContactButton, Header} from '@rubriclab/ui'
import {Metadata} from 'next'
import {DEFAULT_META} from '../../constants/metadata'

export const metadata: Metadata = {
	...DEFAULT_META
}

export default async function Home() {
	return (
		<div className='flex flex-col'>
			{/* Section: Hero */}
			<div className='flex min-h-screen max-w-5xl flex-col justify-end gap-3 pb-5'>
				<Header text='v𝚫' />
				<p className='mb-9 text-3xl font-extralight sm:text-6xl md:text-5xl'>
					Need support?
				</p>
				<p>To get help, please get in touch.</p>
				<div className='max-w-xl'>
					<ContactButton body='ted@rubriclab.com' />
				</div>
				<p className='text-sm text-gray-500'>(Not affiliated with Vercel)</p>
			</div>
		</div>
	)
}
