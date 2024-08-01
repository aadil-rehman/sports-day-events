import Events from "./Events";
import Header from "./Header";
import SelectedEvents from "./SelectedEvents";

function AppLayout() {
	return (
		<div className=" bg-slate-50">
			<Header />
			<div className="grid grid-cols-[3fr_2fr] h-screen max-w-[1200px] mx-auto">
				<Events />
				<SelectedEvents />
			</div>
		</div>
	);
}

export default AppLayout;
