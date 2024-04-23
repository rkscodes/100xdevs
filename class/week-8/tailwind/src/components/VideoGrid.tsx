import { VideoCard } from "./VideoCard"

const VIDEOS = [{
	title: 'Ram Krishna Singh Certificate',
	image: 'photo.png',
	author: 'Ram Krishna Singh',
	view: '13 M',
	age: 13,
	time: '11:11'
},
{
	title: 'Rakesh Roushan Certificate',
	image: 'photo.png',
	author: 'Rakesh',
	view: '133 M',
	age: 23,
	time: '12:13'
},
{
	title: 'Rakesh Roushan Certificate',
	image: 'photo.png',
	author: 'Rakesh',
	view: '133 M',
	age: 23,
	time: '12:13'
}, {
	title: 'Rakesh Roushan Certificate',
	image: 'photo.png',
	author: 'Rakesh',
	view: '133 M',
	age: 23,
	time: '10:13'
}, {
	title: 'Rakesh Roushan Certificate',
	image: 'photo.png',
	author: 'Rakesh',
	view: '133 M',
	age: 23,
	time: '10:13'
}, {
	title: 'Rakesh Roushan Certificate',
	image: 'photo.png',
	author: 'Rakesh',
	view: '133 M',
	age: 23,
	time: '10:13'
}
]

export function VideoGrid() {
	return <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 p-5 ">
		{VIDEOS.map((video) => {
			return <VideoCard
				title={video.title}
				image={video.image}
				author={video.author}
				view={video.view}
				age={video.age}
				time={video.time}
			>
			</VideoCard>

		})}
	</div>
}