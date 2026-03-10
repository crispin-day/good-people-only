import React, { FC, useState, useEffect } from 'react';
import { TCanvas } from './TCanvas';

export const Test: FC = () => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true)
	}, [])


	return (
		<div className="hero" style={{ width: '100vw', height: '100vh', maxWidth: '1600px' }}>
			{loaded && <TCanvas />}			
		</div>
	)
}
