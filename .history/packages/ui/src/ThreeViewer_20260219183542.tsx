import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeViewer() {
  const mount = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mount.current) return;
    const width = mount.current.clientWidth;
    const height = mount.current.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mount.current.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xb8860b, metalness: 0.8, roughness: 0.2 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    let frameId: number;
    const animate = () => {
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!mount.current) return;
      const w = mount.current.clientWidth;
      const h = mount.current.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
      if (mount.current && renderer.domElement.parentElement === mount.current) {
        mount.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mount} className="w-full h-full" />;
}
