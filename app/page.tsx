import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
				Three.js samples
			</div>
			<ul>
				<li className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
					<Link href={"/green-cube"}>green cube</Link>
				</li>
				<li className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
					<Link href={"/white-line"}>white-line</Link>
				</li>
			</ul>
		</>
	);
}
