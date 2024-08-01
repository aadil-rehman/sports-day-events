function EventCategory({ category }) {
	let style = "";

	if (category === "Swimming") {
		style =
			"bg-green-50 border border-green-300 rounded-xl px-2 py-0.5 text-sm w-fit";
	} else if (category === "Athletics") {
		style =
			"bg-blue-50 border border-blue-300 rounded-xl px-2 py-0.5 text-sm w-fit";
	} else if (category === "Boxing") {
		style =
			"bg-red-50 border border-red-300 rounded-xl px-2 py-0.5 text-sm w-fit";
	}

	return (
		<div className={` ${style} rounded-xl px-2 py-0.5 text-sm w-fit`}>
			{category}
		</div>
	);
}

export default EventCategory;
