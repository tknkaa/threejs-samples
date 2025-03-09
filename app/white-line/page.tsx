"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import * as THREE from "three";

export default function Page() {
	const mountRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(
			45,
			window.innerWidth / window.innerHeight,
			1,
			500,
		);
		camera.position.set(0, 0, 100);
		camera.lookAt(0, 0, 0);

		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		mountRef.current?.appendChild(renderer.domElement);

		const material = new THREE.LineBasicMaterial({
			color: "white",
		});
		const points: THREE.Vector3[] = [];
		points.push(new THREE.Vector3(-10, 0, 0));
		points.push(new THREE.Vector3(0, 10, 0));
		points.push(new THREE.Vector3(10, 0, 0));

		const geometry = new THREE.BufferGeometry().setFromPoints(points);
		const line = new THREE.Line(geometry, material);

		scene.add(line);
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
