/* eslint-disable react/no-unknown-property */
import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import * as THREE from 'three'
import HighHeels from './HighHeels'
import Lights from './Lights'
import { Suspense } from 'react'

const ModelView = () => {
  return (
    <View
      className='w-full h-full cursor-pointer select-none'
    >
      <ambientLight intensity={0.8} />

      <PerspectiveCamera makeDefault position={[-3, 0, 3]} />

      <Lights />

      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        target={new THREE.Vector3(0, 0 ,0)}
        autoRotate
        autoRotateSpeed={1.5}
      />

      <group position={[0, -1 ,0]}>
        <Suspense fallback={<Html><div>Loading...</div></Html>}>
          <HighHeels scale={[12, 12, 12]} />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView