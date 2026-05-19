import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 6
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const particleCount = 600
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20

      colors[i * 3] = 1.0
      colors[i * 3 + 1] = 0.2 + Math.random() * 0.5
      colors[i * 3 + 2] = 1.0
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xea3ffc,
      transparent: true,
      opacity: 0.25,
    })

    const lineGeometry = new THREE.BufferGeometry()
    const linePositions = new Float32Array(6)
    for (let i = 0; i < 6; i++) {
      linePositions[i] = (Math.random() - 0.5) * 20
    }
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))

    const line = new THREE.Line(lineGeometry, lineMaterial)
    scene.add(line)

    let mouseX = 0
    let mouseY = 0

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    const animate = () => {
      requestAnimationFrame(animate)

      particles.rotation.y += 0.0007
      line.rotation.y -= 0.0004

      particles.rotation.x += (mouseY * 0.05 - particles.rotation.x) * 0.02
      particles.rotation.y += (mouseX * 0.05 - particles.rotation.y) * 0.02

      renderer.render(scene, camera)
    }

    animate()
    window.addEventListener('mousemove', onMouseMove)

    const handleResize = () => {
      if (!rendererRef.current || !cameraRef.current) return
      const width = window.innerWidth
      const height = window.innerHeight
      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', handleResize)
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
      rendererRef.current?.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  )
}

