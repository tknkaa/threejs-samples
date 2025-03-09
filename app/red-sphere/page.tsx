"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import Link from "next/link";

export default function Page() {
	const mountRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(
			45,
			window.innerWidth / window.innerHeight,
			1,
			10000,
		);
		camera.position.set(0, 200, 1000);

		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		mountRef.current?.appendChild(renderer.domElement);

		const geometry = new THREE.SphereGeometry(300, 30, 30);
		const material = new THREE.MeshStandardMaterial({
			color: 0xff0000,
		});
		const mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(0, 0, 100);
		scene.add(mesh);

		const directionalLight = new THREE.DirectionalLight(0xffffff);
		directionalLight.position.set(0, 0, 100);
		scene.add(directionalLight);

		renderer.render(scene, camera);

		return () => {
			if (mountRef.current) {
				mountRef.current.removeChild(renderer.domElement);
			}
			renderer.dispose();
		};
	}, []);
	return (
		<div className="text-white bg-black ">
			<Link href={"/"}>Back to Home</Link>
			<div ref={mountRef}></div>
		</div>
	);
}
