import {ContactButton, Header} from '@rubriclab/ui'
import {Metadata} from 'next'
import Link from 'next/link'
import {DEFAULT_META} from '../constants/metadata'

export const metadata: Metadata = {
	...DEFAULT_META
}

export default async function Home() {
	return (
		<div className='flex flex-col'>
			{/* Section: Hero */}
			<div className='flex min-h-screen max-w-3xl flex-col justify-end gap-3 pb-5'>
				<Header text={'Welcome to v𝚫'} />
				<p className='mb-9 text-3xl font-extralight sm:text-6xl md:text-5xl'>
					Visualize your Vercel build logs.
				</p>
				<Link href='https://chromewebstore.google.com/detail/vdelta/eopaemjhhlglgcdeeincohklolojdock'>
					<button className='rounded-md bg-black px-6 py-3 text-white opacity-100'>
						Install on Chrome
					</button>
				</Link>
				<p className='text-sm text-gray-500'>(Not affiliated with Vercel)</p>
			</div>

			{/* Section */}
			<div className='flex min-h-screen flex-col items-end justify-end gap-3 pb-5'>
				<div className='flex max-w-xl flex-col gap-10'>
					<div className='flex justify-end'>
						<ContactButton body='hello@rubriclab.com' />
					</div>
				</div>
			</div>
		</div>
	)
}
