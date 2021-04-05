import React from "react";
import dynamic from "next/dynamic";
const SliderItem = dynamic(() => import("./SliderItem"));
import { Carousel } from "react-responsive-carousel";

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
				{props.movie.map((item) => (
					<SliderItem key={item.movie.imdbID} bgPath={item.path} movie={item.movie} />
				))}
			</Carousel>
		</>
	);
}
