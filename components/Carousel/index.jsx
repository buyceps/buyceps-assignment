import React from "react";
import SliderItem from "./SliderItem";
import { Carousel } from "react-responsive-carousel";

const movieList = [
	{
		id: "tt0816692",
		path: "/interstellar.webp",
	},
	{
		id: "tt0451279",
		path: "/wonderWoman.webp",
	},
	{
		id: "tt0974015",
		path: "/justiceLeague.webp",
	},
];

export default function CarouselWrapper(props) {
	function dots(clickHandler, isSelected, index, label) {
		if (isSelected) {
			return <li onClick={clickHandler} className="h-1 w-3 cursor-pointer bg-gray-100" />;
		} else {
			return <li onClick={clickHandler} className="h-1 w-3 cursor-pointer bg-gray-500" />;
		}
	}

	return (
		<>
			<Carousel
				autoPlay
				emulateTouch
				infiniteLoop
				showArrows={false}
				showThumbs={false}
				renderIndicator={dots}>
				{movieList.map((item) => (
					<SliderItem key={item.id} bgPath={item.path} id={item.id} />
				))}
			</Carousel>
		</>
	);
}
