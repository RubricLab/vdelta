import {ImageResponse} from 'next/server'

export const runtime = 'edge'

export const alt = 'Rubric logo with subtitle: We build software.'
export const contentType = 'image/png'
export const size = {
	height: 630,
	width: 1200
}

type Props = {
	params: object
}

export default async function Image({}: Props) {
	const font = fetch(
		new URL('../public/fonts/CalSans-SemiBold.ttf', import.meta.url)
	).then(res => res.arrayBuffer())

	return new ImageResponse(
		(
			<div
				style={{
					alignItems: 'center',
					background: 'black',
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					justifyContent: 'center',
					overflowY: 'hidden',
					position: 'relative',
					width: '100%'
				}}>
				<div style={{color: 'white', fontSize: 128}}>v𝚫</div>
				<div style={{color: 'white', fontSize: 48}}>Built with Rubric.</div>
			</div>
		),
		{
			...size,
			fonts: [
				{
					data: await font,
					name: 'cal-sans'
				}
			]
		}
	)
}
