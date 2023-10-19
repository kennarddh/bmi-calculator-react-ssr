import { styled } from 'styled-components'

import { FC } from 'react'

const Gauge = styled.div`
	background: 
  /*black part */
		radial-gradient(
			circle at bottom center,
			#fff 200px,
			#fff,
			transparent 200px
		),
		/*pizza's pieces*/
			conic-gradient(
				from 4.7rad at 50% 100%,
				#3d4640 0deg 57.6deg,
				#9ca92e 57.6deg 61.2deg,
				#eec22a 61.2deg 66.6deg,
				#e07b27 66.6deg 90deg,
				#492d17 90deg 108deg,
				#a5359f 108deg 126deg,
				#39ff49 126deg 144deg,
				#bb9f00 144deg 180deg
			);

	--width: 600px;

	width: var(--width);
	aspect-ratio: 2/1;
	border-radius: calc(var(--width) / 2) calc(var(--width) / 2) 0 0;
`

const App: FC = () => {
	return <Gauge />
}

export default App
