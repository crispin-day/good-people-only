import React, { FC } from 'react';
import * as THREE from 'three';
import { Plane, useTexture } from '@react-three/drei';

export const ImagePlane: FC = () => {
	const path = (name: string) => `/images/${name}.png`;
	const textures = useTexture([path('good')])

	const material = (texture: THREE.Texture) => {
		texture.wrapS = THREE.ClampToEdgeWrapping;
		texture.wrapT = THREE.ClampToEdgeWrapping;
		return new THREE.ShaderMaterial({
			uniforms: {
				u_texture: { value: texture }
			},
			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
			transparent: true,
		})
	}

	return (
		<>
			{textures.map((texture, i) => (
				<Plane key={i} material={material(texture)} scale={1.05} position={[0, 0, 0]} />
			))}
		</>
	)
}

const vertexShader = `
varying vec2 v_uv;

void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`

const fragmentShader = `
uniform sampler2D u_texture;
varying vec2 v_uv;

void main() {
  vec2 uv = clamp(v_uv, 0.0, 1.0);
  vec4 color = texture2D(u_texture, uv);
  // Fade edges to prevent visible plane boundary
  float edge = 0.02;
  float alpha = smoothstep(0.0, edge, uv.x) * smoothstep(1.0, 1.0 - edge, uv.x)
              * smoothstep(0.0, edge, uv.y) * smoothstep(1.0, 1.0 - edge, uv.y);
  gl_FragColor = vec4(color.rgb, color.a * alpha);
}
`
