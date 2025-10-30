import { useEffect, useRef } from "react";

export default function LuckyBlock() {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        let cleanup = () => {};
        let loaded = false;

        const initThree = async () => {
            if (loaded) return;
            loaded = true;

            const [THREE, { OrbitControls }, { GLTFLoader }] =
                await Promise.all([
                    import("three"),
                    import("three/addons/controls/OrbitControls.js"),
                    import("three/addons/loaders/GLTFLoader.js"),
                ]);

            const width = mount.clientWidth;
            const height = mount.clientHeight;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(
                35,
                width / height,
                0.1,
                100,
            );
            camera.position.z = 4.5;

            const renderer = new THREE.WebGLRenderer({
                alpha: true,
                antialias: true,
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
            renderer.setSize(width, height);
            renderer.setClearColor(0x000000, 0);
            mount.appendChild(renderer.domElement);

            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;

            const group = new THREE.Group();
            const pivotGroup = new THREE.Group();
            pivotGroup.add(group);
            scene.add(pivotGroup);

            const loader = new GLTFLoader();
            loader.load("/lucky_block.glb", (gltf) => {
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

                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                model.position.sub(center);

                const visualCenter = box.getCenter(new THREE.Vector3());
                const offsetX = visualCenter.x;
                group.position.x = -offsetX;

                group.add(model);
                group.rotation.x = THREE.MathUtils.degToRad(-15);
                group.rotation.z = THREE.MathUtils.degToRad(-15);

                const screenWidth = window.innerWidth;
                let scale = 1;
                if (screenWidth > 1280) {
                    scale = 1;
                } else if (screenWidth > 1024) {
                    scale = 1;
                } else if (screenWidth < 768) {
                    scale = 0.5;
                }
                group.scale.set(scale, scale, scale);
            });

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
            directionalLight.position.set(2, 0, 5);
            directionalLight.target.position.set(0, 0, 0);
            directionalLight.castShadow = true;
            directionalLight.shadow.mapSize.set(1024, 1024);
            directionalLight.shadow.bias = -0.001;
            scene.add(directionalLight);
            scene.add(directionalLight.target);

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enableZoom = false;
            controls.enablePan = false;
            controls.enableRotate = false;
            controls.dampingFactor = 0.05;

            const clock = new THREE.Clock();

            const animate = () => {
                requestAnimationFrame(animate);

                const elapsed = clock.getElapsedTime();

                group.position.x = 0;
                group.position.y = Math.sin(elapsed * 0.8) * 0.1;
                pivotGroup.rotation.y = elapsed * 0.6;

                controls.update();
                renderer.render(scene, camera);
            };
            animate();

            const handleResize = () => {
                const newWidth = mount.clientWidth;
                const newHeight = mount.clientHeight;
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
                renderer.setSize(newWidth, newHeight);
                camera.aspect = newWidth / newHeight;
                camera.updateProjectionMatrix();
            };
            window.addEventListener("resize", handleResize);

            cleanup = () => {
                window.removeEventListener("resize", handleResize);
                renderer.dispose();
                while (mount.firstChild) mount.removeChild(mount.firstChild);
            };
        };

        const handleInteraction = () => {
            if (!loaded) {
                observer.disconnect();
                initThree();
            }
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    handleInteraction();
                }
            });
        });

        observer.observe(mount);

        ["click", "pointerenter"].forEach((eventName) => {
            mount.addEventListener(eventName, handleInteraction, {
                once: true,
            });
        });

        return () => {
            observer.disconnect();
            ["click", "pointerenter"].forEach((eventName) => {
                mount.removeEventListener(eventName, handleInteraction);
            });
            cleanup();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                top: 0,
                left: 0,
                zIndex: 50,
                // pointerEvents: 'none',
                touchAction: "pan-y",
            }}
        />
    );
}