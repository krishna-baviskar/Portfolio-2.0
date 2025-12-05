
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
    const pointLight1 = new THREE.PointLight(0xa855f7, 1.5, 40);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0xec4899, 1.5, 40);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);
    const pointLight3 = new THREE.PointLight(0x06b6d4, 1.5, 40);
    pointLight3.position.set(0, 0, 15);
    scene.add(pointLight3);

    // Symbols and logos
    const symbols = ['</>', '{}', '=>', '()', 'JS', '⚛', '⬢', 'git', '0', '1', 'PY', 'C++', 'java', 'npm', 'db', 'TS', 'HTML', 'CSS', 'SQL', 'RUST', 'PHP', '...', '&&', '||'];
    const symbolTextures = symbols.map(symbol => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) return null;
      canvas.width = 64;
      canvas.height = 64;
      context.font = 'bold 32px monospace';
      context.fillStyle = 'white';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(symbol, 32, 32);
      return new THREE.CanvasTexture(canvas);
    }).filter(t => t !== null) as THREE.CanvasTexture[];


    // Particle System
    const particleCount = 2000;
    const particles = new THREE.Group();
    const fallArea = { x: 30, y: 40, z: 30 };

    const colors = [
        new THREE.Color(0xa855f7), // Purple
        new THREE.Color(0xec4899), // Pink
        new THREE.Color(0x06b6d4), // Cyan
    ];

    for (let i = 0; i < particleCount; i++) {
        const texture = symbolTextures[i % symbolTextures.length];
        const color = colors[i % colors.length];

        const material = new THREE.SpriteMaterial({
            map: texture,
            color: color,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.8
        });
        const sprite = new THREE.Sprite(material);

        sprite.position.set(
            (Math.random() - 0.5) * fallArea.x,
            (Math.random() - 0.5) * fallArea.y,
            (Math.random() - 0.5) * fallArea.z
        );

        sprite.scale.set(0.5, 0.5, 1);

        (sprite as any).velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.01,
            -0.02 - Math.random() * 0.05,
            (Math.random() - 0.5) * 0.01
        );
        particles.add(sprite);
    }
    scene.add(particles);
    
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

      // Animate particles
      particles.children.forEach(child => {
        const sprite = child as THREE.Sprite;
        sprite.position.add((sprite as any).velocity);
        
        // Wrap around
        if (sprite.position.y < -fallArea.y / 2) {
            sprite.position.y = fallArea.y / 2;
        }
        if (Math.abs(sprite.position.x) > fallArea.x / 2) {
            sprite.position.x *= -0.99;
        }
         if (Math.abs(sprite.position.z) > fallArea.z / 2) {
            sprite.position.z *= -0.99;
         }
      });
      particles.rotation.y += 0.0005;
      
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      pointLight1.position.x = Math.sin(elapsedTime * 0.5) * 20;
      pointLight1.position.y = Math.cos(elapsedTime * 0.3) * 20;
      pointLight2.position.x = Math.cos(elapsedTime * 0.2) * 20;
      pointLight2.position.y = Math.sin(elapsedTime * 0.4) * 20;
      
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
        if (child instanceof THREE.Mesh || child instanceof THREE.Sprite || child instanceof THREE.Points) {
          if ((child as any).geometry) (child as any).geometry.dispose();
          if ((child as any).material) {
             if (Array.isArray((child as any).material)) {
                (child as any).material.forEach((m: any) => m.dispose());
             } else {
                (child as any).material.dispose();
             }
          }
        }
      });
    };
  }, []);

  return <canvas ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-60" style={{ pointerEvents: 'none' }} />;
};

export default ThreeCanvas;
