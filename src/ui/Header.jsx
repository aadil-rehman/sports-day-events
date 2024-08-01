import { MdOutlineEvent } from "react-icons/md";

function Header() {
	return (
		<div className=" bg-slate-100 border-b border-slate-200">
			<div className="max-w-[1200px] mx-auto flex text-3xl font-bold px-8 py-6 gap-2 items-center ">
				<MdOutlineEvent />
				<h2>Sports Day - Events </h2>
			</div>
		</div>
	);
}

export default Header;
