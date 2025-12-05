
"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeCanvas: React.FC = () => {
  const mountRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let animationFrameId: number;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: currentMount, 
      alpha: true,
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 10;

    // Lights
    scene.add(new THREE.AmbientLight(0x404040, 2));
    const pointLight1 = new THREE.PointLight(0xa855f7, 2, 30);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0xec4899, 2, 30);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);
    const pointLight3 = new THREE.PointLight(0x06b6d4, 2, 30);
    pointLight3.position.set(0, 0, -5);
    scene.add(pointLight3);

    // Particle System
    const particleCount = 5000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50;
      positions[i + 1] = (Math.random() - 0.5) * 50;
      positions[i + 2] = (Math.random() - 0.5) * 50;

      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i] = 0.66; colors[i + 1] = 0.33; colors[i + 2] = 1; // Purple
      } else if (colorChoice < 0.66) {
        colors[i] = 0.93; colors[i + 1] = 0.29; colors[i + 2] = 0.58; // Pink
      } else {
        colors[i] = 0.02; colors[i + 1] = 0.71; colors[i + 2] = 0.83; // Cyan
      }
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Rotating Geometric Shapes
    const geometries = [
      new THREE.TorusKnotGeometry(0.8, 0.25, 128, 16),
      new THREE.OctahedronGeometry(1),
      new THREE.IcosahedronGeometry(0.9),
      new THREE.DodecahedronGeometry(0.8),
    ];

    const materials = [
      new THREE.MeshStandardMaterial({ color: 0xa855f7, roughness: 0.4, metalness: 0.6 }),
      new THREE.MeshStandardMaterial({ color: 0xec4899, roughness: 0.5, metalness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.6, metalness: 0.4 }),
      new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.7, metalness: 0.3, wireframe: true }),
    ];

    const meshes: THREE.Mesh[] = [];
    geometries.forEach((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, materials[index]);
      mesh.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      scene.add(mesh);
      meshes.push(mesh);
    });

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2);
      mouseY = (event.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      particleSystem.rotation.y += 0.0005;

      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.005 * (index * 0.5 + 1);
        mesh.rotation.y += 0.005 * (index * 0.5 + 1);
        
        const bounceFactor = Math.sin(elapsedTime * (0.5 + index * 0.1));
        mesh.position.y += bounceFactor * 0.01;
      });
      
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      pointLight1.position.x = Math.sin(elapsedTime * 0.5) * 10;
      pointLight1.position.y = Math.cos(elapsedTime * 0.3) * 10;
      pointLight2.position.x = Math.cos(elapsedTime * 0.2) * 10;
      pointLight2.position.y = Math.sin(elapsedTime * 0.4) * 10;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.children.forEach(child => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach(m => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      particles.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return <canvas ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-60" style={{ pointerEvents: 'none' }} />;
};

export default ThreeCanvas;
