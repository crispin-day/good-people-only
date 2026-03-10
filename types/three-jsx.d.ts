import { EffectComposer, RenderPass, ShaderPass } from 'three-stdlib'
import { ReactThreeFiber } from '@react-three/fiber'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      effectComposer: ReactThreeFiber.Object3DNode<EffectComposer, typeof EffectComposer>
      renderPass: ReactThreeFiber.Object3DNode<RenderPass, typeof RenderPass>
      shaderPass: ReactThreeFiber.Object3DNode<ShaderPass, typeof ShaderPass>
      color: ReactThreeFiber.Object3DNode<THREE.Color, typeof THREE.Color>
    }
  }
}
