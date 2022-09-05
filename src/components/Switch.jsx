import React, { useState } from "react";
import useDarkSide from "../hook/useDarkSide";
import { SunIcon } from "@heroicons/react/outline";
import { MoonIcon } from "@heroicons/react/solid";

const Switch = () => {
	const [colorTheme, setTheme] = useDarkSide();
	return (
		<div
			className="flex flex-row items-center justify-center md:space-x-3"
			onClick={() => setTheme(colorTheme)}
		>
			{colorTheme === "light" ? (
				<MoonIcon className="md:w-22 w-6  bg-slate-400  rounded border-solid border-2 border-gray-900" />
			) : (
				<SunIcon className="md:w-22 w-6 rounded border-solid border-2 border-sky-400" />
			)}
			<h3 className="font-bold font-sans pl-2 truncate dark:text-slate-800 ">
				{colorTheme === "dark" ? "Light Mode" : "Dark Mode"}
			</h3>
		</div>
	);
};

export default Switch;
