import {ImageResponse} from 'next/server'
import {FONTS} from '../constants/fonts'
import config from '../tailwind.config'

export const runtime = 'edge'

export const contentType = 'image/png'
export const size = {
	height: 32,
	width: 32
}

const offWhite = config.theme.colors['off-white']

export default async function Icon() {
	return new ImageResponse(
		(
			<div
				style={{
					alignItems: 'center',
					background: 'black',
					color: 'white',
					display: 'flex',
					fontSize: 28,
					height: '100%',
					justifyContent: 'center',
					paddingBottom: '5px',
					width: '100%'
				}}>
				v𝚫
			</div>
		),
		{
			...size,
			fonts: [
				{
					data: await (await fetch(FONTS.calSansURL)).arrayBuffer(),
					name: 'cal-sans'
				}
			]
		}
	)
}
