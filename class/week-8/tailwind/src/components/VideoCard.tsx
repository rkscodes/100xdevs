export function VideoCard(props: any) {
	return <div className="flex flex-col">
		<div className="flex flex-col relative">
			<img className="rounded-xl" src={props.image} alt="thumbnail" />
			<div className="absolute bottom-2 right-2 bg-black rounded text-sm px-0.5">{props.time}</div>
		</div>
		<div className="flex">
			<div className="pl-5 pt-5">
				<img className="w-10 h-10 rounded-full" src={props.image} alt="image" />
			</div>
			<div className="pl-4 pt-3">
				{props.title}
				<div className="text-gray-400 text-base">{props.author}</div>
				<div className="text-gray-400 text-base">{props.view} | {props.age} Days </div>
			</div>
		</div>
	</div>
}
