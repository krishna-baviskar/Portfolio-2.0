"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  particleSpeed: number;
  shapeComplexity: number;
}

const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ particleSpeed, shapeComplexity }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let animationFrameId: number;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const particleCount = 5000;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const velocityArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
      velocityArray[i] = (Math.random() - 0.5) * 0.002;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: 0x8A2BE2, // Accent color: Violet
    });
    const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleMesh);
    
    const shapeGeometry = new THREE.IcosahedronGeometry(1, Math.max(1, Math.floor(shapeComplexity / 20)));
    const shapeMaterial = new THREE.MeshBasicMaterial({ color: 0x4B0082, wireframe: true });
    const shape = new THREE.Mesh(shapeGeometry, shapeMaterial);
    scene.add(shape);

    const handleResize = () => {
      if (!currentMount) return;
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      const positions = particleMesh.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] += velocityArray[i3] * particleSpeed;
        positions[i3+1] += velocityArray[i3+1] * particleSpeed;
        
        if (positions[i3+1] < -7.5) positions[i3+1] = 7.5;
        if (positions[i3] > 7.5 || positions[i3] < -7.5) velocityArray[i3] *= -1;
      }
      particleMesh.geometry.attributes.position.needsUpdate = true;

      shape.rotation.x = elapsedTime * 0.1;
      shape.rotation.y = elapsedTime * 0.2;
      
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      
      scene.remove(particleMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      
      scene.remove(shape);
      shapeGeometry.dispose();
      shapeMaterial.dispose();
      
      renderer.dispose();
    };
  }, [particleSpeed, shapeComplexity]);

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
};

export default ThreeCanvas;
