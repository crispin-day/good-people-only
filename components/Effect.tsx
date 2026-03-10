import React, { useEffect, useRef, FC } from 'react';
import { EffectComposer, RenderPass, ShaderPass } from 'three-stdlib';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { DistortionPass } from './postprocessing/DistortionPass';
import { RipplePass } from './postprocessing/RipplePass';

extend({ EffectComposer, RenderPass, ShaderPass })

const attachToPassesArray = (parent: any, self: any) => {
	parent.passes.push(self);
	return () => {
		const idx = parent.passes.indexOf(self);
		if (idx >= 0) parent.passes.splice(idx, 1);
	};
};

export const Effect: FC = () => {
	const composerRef = useRef<EffectComposer>(null)
	const { gl, scene, camera, size } = useThree()

	useEffect(() => {
		if (composerRef.current) {
			composerRef.current.setSize(size.width, size.height)
		}
	}, [size])

	useFrame(() => {
		if (composerRef.current) {
			gl.autoClear = false
			gl.clear()
			composerRef.current.render()
		}
	}, 1)

	return (
		<effectComposer ref={composerRef} args={[gl]}>
			<renderPass attach={attachToPassesArray} args={[scene, camera]} />
			<DistortionPass />
			<RipplePass />
		</effectComposer>
	)
}
