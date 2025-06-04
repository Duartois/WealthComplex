import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function LuckyBlock() {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

            
        const width = mount.clientWidth;
        const height = mount.clientHeight;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0); // fundo transparente
        mount.appendChild(renderer.domElement);

        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        const group = new THREE.Group();
        const pivotGroup = new THREE.Group();
        pivotGroup.add(group);
        scene.add(pivotGroup);

        const loader = new GLTFLoader();
        loader.load('/lucky_block.glb', (gltf) => {
            const model = gltf.scene;

            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    if (child.material?.map) {
                        child.material.map.flipY = false;
                        child.material.map.needsUpdate = true;
                    }
                }
            });

            // centraliza a geometria dentro do model
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            model.position.sub(center);

            // detecta desvio visual e corrige
            const visualCenter = box.getCenter(new THREE.Vector3());
            const offsetX = visualCenter.x;

            // forçar modelo a não sair do eixo X visual
            group.position.x = -offsetX;

            group.add(model);
            // Inclinar o cubo para trás
            group.rotation.x = THREE.MathUtils.degToRad(-15);
            group.rotation.z = THREE.MathUtils.degToRad(-15);

            // Escala responsiva com base na tela
            const screenWidth = window.innerWidth;
            let scale = 1;
            if (screenWidth > 1280) {
                scale = 1.2;
            } else if (screenWidth > 1024) {
                scale = 1.0;
            } else if (screenWidth > 768) {
                scale = 0.8;
            }
            group.scale.set(scale, scale, scale);
        });

        // iluminação
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
        directionalLight.position.set(2, 0, 5);
        directionalLight.target.position.set(0, 0, 0);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.set(2048, 2048);
        directionalLight.shadow.bias = -0.001;
        scene.add(directionalLight);
        scene.add(directionalLight.target);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableRotate = true;
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        const clock = new THREE.Clock();

        const animate = () => {
            requestAnimationFrame(animate);

            const elapsed = clock.getElapsedTime();

            group.position.x = 0;
            group.position.y = Math.sin(elapsed * 0.8) * 0.1; // animação suave de subida e descida
            pivotGroup.rotation.y = elapsed * 0.6 ; // rotação suave

            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            const newWidth = mount.clientWidth;
            const newHeight = mount.clientHeight;
            renderer.setSize(newWidth, newHeight);
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            while (mount.firstChild) mount.removeChild(mount.firstChild);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 50,
                pointerEvents: 'auto',
                touchAction: 'none',
            }}
        />
    );
}
