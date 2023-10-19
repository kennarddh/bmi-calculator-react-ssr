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
				rgb(188, 32, 32) 0deg 57.6deg,
				rgb(211, 136, 136) 57.6deg 61.2deg,
				rgb(255, 228, 0) 61.2deg 66.6deg,
				rgb(0, 129, 55) 66.6deg 90deg,
				rgb(255, 228, 0) 90deg 108deg,
				rgb(211, 136, 136) 108deg 126deg,
				rgb(188, 32, 32) 126deg 144deg,
				rgb(138, 1, 1) 144deg 180deg
			);

	--width: 600px;

	width: var(--width);
	aspect-ratio: 2/1;
	border-radius: calc(var(--width) / 2) calc(var(--width) / 2) 0 0;

	position: relative;
`

const Arrow = styled.div<{ rotate: number }>`
	width: 10px;
	height: 175px;
	background-color: #000;
	margin-top: -175px;

	transform-origin: 50% 100%;
	rotate: ${props => props.rotate}deg;

	position: absolute;
	top: 300px;
	left: calc(300px - 10px / 2);
`

const TextContainer = styled.div<{ rotate: number }>`
	width: 25px;
	height: 275px;
	margin-top: -275px;

	transform-origin: 50% 100%;
	rotate: ${props => props.rotate}deg;

	position: absolute;
	top: 300px;
	left: calc(300px - 25px / 2);
`

const Text = styled.p`
	color: #fff;
`

const App: FC = () => {
	return (
		<Gauge>
			<Arrow rotate={0} />
			<TextContainer rotate={57.6 - 90}>
				<Text>16</Text>
			</TextContainer>
			<TextContainer rotate={61.2 - 90}>
				<Text>17</Text>
			</TextContainer>
			<TextContainer rotate={66.6 - 90}>
				<Text>18.5</Text>
			</TextContainer>
			<TextContainer rotate={90 - 90}>
				<Text>25</Text>
			</TextContainer>
			<TextContainer rotate={108 - 90}>
				<Text>30</Text>
			</TextContainer>
			<TextContainer rotate={126 - 90}>
				<Text>35</Text>
			</TextContainer>
			<TextContainer rotate={144 - 90}>
				<Text>40</Text>
			</TextContainer>
		</Gauge>
	)
}

export default App
