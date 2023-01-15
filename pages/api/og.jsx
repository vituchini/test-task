import { ImageResponse } from '@vercel/og'

export const config = {
	runtime: 'experimental-edge',
}

export default async function handler() {
	return new ImageResponse(
		(
			<div
				style={{
					backgroundColor: '#fff',
					backgroundSize: '100px 100px',
					height: '100%',
					width: '100%',
					textAlign: 'center',
					alignContent: 'center',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					display: 'flex',
				}}
			>
				<img
					alt="Vercel"
					width={255}
					height={225}
					src="https://www.shutterstock.com/image-photo/beauty-portrait-african-american-girl-260nw-1845326779.jpg"
					style={{ margin: '0 75px' }}
				/>
				<div
					style={{
						fontSize: 60,
						marginTop: 30,
						lineHeight: 1.8,
					}}
				>
					Playback
				</div>
			</div>
		),
		{
			width: 1200,
			height: 600,
		}
	)
}
