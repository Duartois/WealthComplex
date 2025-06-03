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
scene.add(group);

const loader = new GLTFLoader();
loader.load('/lucky_block.glb', (gltf) => {
const model = gltf.scene;

model.traverse((child) => {
if (child.isMesh) {
child.castShadow = true;
child.receiveShadow = true;
if (child.material && child.material.map) {
child.material.map.flipY = false;
child.material.map.needsUpdate = true;
}
}
});

const box = new THREE.Box3().setFromObject(model);
const center = box.getCenter(new THREE.Vector3());
model.position.sub(center);
group.add(model);
});

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
controls.enableRotate = false;

const clock = new THREE.Clock();
let prev = 0;

const animate = () => {
requestAnimationFrame(animate);
const t = clock.getElapsedTime();
const delta = t - prev;
prev = t;
group.rotation.y += THREE.MathUtils.degToRad(1) * delta * 20;
controls.update();
renderer.render(scene, camera);
};
animate();

const handleResize = () => {
const width = mount.clientWidth;
const height = mount.clientHeight;
renderer.setSize(width, height);
camera.aspect = width / height;
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
pointerEvents: 'none', // não bloqueia clique
zIndex: 1,
}}
/>
);
}
