function Loading() {
	return (
		<div className="absolute w-full h-full bg-white">
			<div className="flex justify-center absolute top-0 bottom-0 left-0 right-0 h-20 m-auto">
				<span className="w-2 h-full rounded bg-green-400 my-0 mx-1.5 animate-scale"></span>
				<span className="w-2 h-full rounded bg-green-400 my-0 mx-1.5 animate-scale-1.2"></span>
				<span className="w-2 h-full rounded bg-green-400 my-0 mx-1.5 animate-scale-1.4"></span>
				<span className="w-2 h-full rounded bg-green-400 my-0 mx-1.5 animate-scale-1.6"></span>
				<span className="w-2 h-full rounded bg-green-400 my-0 mx-1.5 animate-scale-1.8"></span>
			</div>
		</div>
	)
}

export default Loading
