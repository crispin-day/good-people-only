import React, { useEffect, useRef, FC } from 'react';
import { EffectComposer, RenderPass, ShaderPass } from 'three-stdlib';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { DistortionPass } from './postprocessing/DistortionPass';
import { RipplePass } from './postprocessing/RipplePass';

extend({ EffectComposer, RenderPass, ShaderPass })

export const Effect: FC = () => {
	const composerRef = useRef<EffectComposer>(null)
	const { gl, scene, camera, size } = useThree()

	useEffect(() => {
		composerRef.current!.setSize(size.width, size.height)
	}, [size])

	useFrame(() => {
		composerRef.current!.render()
	}, 1)

	return (
		<effectComposer ref={composerRef} args={[gl]}>
			<renderPass attach={(parent: any, self: any) => { parent.passes.push(self); return () => { const i = parent.passes.indexOf(self); if (i >= 0) parent.passes.splice(i, 1); }; }} args={[scene, camera]} />
			<DistortionPass />
			<RipplePass />
		</effectComposer>
	)
}
