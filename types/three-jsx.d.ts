import React from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      effectComposer: any
      renderPass: any
      shaderPass: any
      color: any
    }
  }
}
