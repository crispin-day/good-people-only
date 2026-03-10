import React, { Suspense, FC } from 'react';
import { Canvas } from '@react-three/fiber';
import { Effect } from './Effect';
import { ImagePlane } from './ImagePlane';
import useWindowSize from '../utils/useWindowSize.js'

export const TCanvas: FC = () => {
	const size = useWindowSize();

	return (
		<Canvas
			camera={{
				position: [0, 0, (size.width ?? 0) < 768 ? 2 : 1],
				fov: 50,
				aspect: window.innerWidth / window.innerHeight,
				near: 0.1,
				far: 2000
			}}
			dpr={window.devicePixelRatio}
			>
			{/* canvas color */}
			<color attach="background" args={['#000']} />
			{/* object */}
			<Suspense fallback={null}>
				<ImagePlane />
			</Suspense>
			{/* effect */}
			<Effect />
		</Canvas>
	)
}
