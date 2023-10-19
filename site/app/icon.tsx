import {ImageResponse} from 'next/server'

export const runtime = 'edge'

export const contentType = 'image/png'
export const size = {
	height: 32,
	width: 32
}

export default async function Icon() {
	return new ImageResponse(
		(
			<div
				style={{
					alignItems: 'center',
					background: 'black',
					color: 'white',
					display: 'flex',
					fontSize: 20,
					height: '100%',
					justifyContent: 'center',
					paddingBottom: '2px',
					width: '100%'
				}}>
				v𝚫
			</div>
		),
		{
			...size
		}
	)
}
