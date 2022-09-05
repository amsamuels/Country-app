import React from "react";
import Switch from "./Switch";

export const Header = () => {
	return (
		<div className="dark:bg-gray-500 ">
			<div className="fixed w-full h-[80px]  sm:px-12 px-4 py-4 flex justify-between items-center shadow-none bg-slate-100 dark:bg-slate-500  transition duration-500">
				<div className="flex flex-row gap-x-8 justify-between">
					<div className="md:px-6 px-2 m-2 rounded-lg border-solid truncate bg-sky-200 dark:bg-slate-400 ">
						Where in the World?
					</div>
				</div>
				<div className="flex flex-row md:gap-x-4 justify-between ">
					<Switch />
				</div>
			</div>
		</div>
	);
};
