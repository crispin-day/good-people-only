import React, { FC, useState, useEffect } from 'react';
import { TCanvas } from './TCanvas';

export const Test: FC = () => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true)
	}, [])

	return (
		<div className="hero" style={{ 
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100vw', 
			height: '100vh',
			zIndex: 0
		}}>
			{loaded && <TCanvas />}			
		</div>
	)
}
