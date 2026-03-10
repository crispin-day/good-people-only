import { EffectComposer, RenderPass, ShaderPass } from 'three-stdlib'
import { Object3DNode } from '@react-three/fiber'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      effectComposer: Object3DNode<EffectComposer, typeof EffectComposer>
      renderPass: Object3DNode<RenderPass, typeof RenderPass>
      shaderPass: Object3DNode<ShaderPass, typeof ShaderPass>
      color: any
    }
  }
}
