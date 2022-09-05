import React, { useState, useEffect } from "react";
import axios from "axios";
import { ArrowSmLeftIcon } from "@heroicons/react/solid";
import { Link, useParams } from "react-router-dom";

const Country = () => {
	const [country, setCountry] = useState([]);
	const { name } = useParams();

	useEffect(() => {
		const fecthCountryData = async () => {
			try {
				const url = await axios.get(
					`https://restcountries.com/v3.1/name/${name}`
				);
				const data = url.data;
				setCountry(data);
				console.log(data);
			} catch (err) {
				console.log("Unable to get country Data");
			}
		};
		fecthCountryData();
	}, []);

	return (
		<div className="pt-[90px] md:px-11 px-6 dark:bg-slate-600">
			<Link
				to="/"
				className="flex flex-row justify-start items-center font-bold"
			>
				<ArrowSmLeftIcon className="w-12 h-12" />
				Back Home
			</Link>
			{country.map((country) => {
				const name = country.name.common;
				const languages = country.languages[0];
				return (
					<Link to={`/countries/${name}`}>
						<div className="container mx-auto ">
							<div className="flex justify-center  ">
								<div className=" flex flex-col md:flex-row w-full p-0 md:space-x-4 space-x-0 md:space-y-0 space-y-4">
									<div className="w-full h-auto bg-gray-400  lg:block lg:w-1/2 bg-cover rounded-l-lg">
										<img src={country.flags.svg} className=" w-full h-auto" />
										<img
											src={country.coatOfArms.svg}
											className=" w-full h-auto"
										/>
									</div>
									<div className="w-full lg:w-1/2 rounded-lg bg-sky-200 dark:bg-gray-800">
										<div className="px-8 mb-4 text-center">
											<h3 className="pt-4 mb-2 text-2xl">{name}</h3>
											<div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 space-x-0 md:space-y-0 space-y-4">
												<div className="flex flex-col items-start space-y-4">
													<div className="flex flex-row items-center justify-center truncate space-x-2">
														<h2 className="dark:text-gray-200 text-base font-semibold">
															Native Name:
														</h2>
														<p className=" text-gray-400 text-base">
															{country.name.official}
														</p>
													</div>
													<div className="flex flex-row items-center justify-center truncate space-x-2">
														<h2 className="text-gray-200 text-base font-semibold">
															Car Side:
														</h2>
														<p className="text-gray-400 text-base capitalize">
															{country.car.side}
														</p>
													</div>
													<div className="flex flex-row items-center justify-center truncate space-x-2">
														<h2 className="text-gray-200 text-base font-semibold">
															Area Code:
														</h2>
														<p className="text-gray-400 text-base capitalize">
															{country.area}
														</p>
													</div>
													<div className="flex flex-row items-center justify-center truncate space-x-2">
														<h2 className="text-gray-200 text-base font-semibold">
															Currencies:
														</h2>
														<p className="text-gray-400 text-base capitalize">
															{country.currencies.GTQ}
														</p>
													</div>
												</div>
												<div className="flex flex-col items-start space-y-4">
													<div className="flex flex-row items-center justify-center truncate space-x-2">
														<h2 className="text-gray-200 text-base font-semibold">
															Continent:
														</h2>
														<p className="text-gray-400 text-base capitalize">
															{country.continents}
														</p>
													</div>
													<div className="flex flex-row items-center justify-center truncate space-x-2">
														<h2 className="text-gray-200 text-base font-semibold">
															Population:
														</h2>
														<p className="text-gray-400 text-base capitalize">
															{country.population}
														</p>
													</div>
													<div className="flex flex-row items-center justify-center truncate space-x-2">
														<h2 className="text-gray-200 text-base font-semibold">
															Languages:
														</h2>
														<p className="text-gray-400 text-base capitalize">
															{languages}
														</p>
													</div>
													<div className="flex flex-row items-center justify-center truncate space-x-2">
														<h2 className="text-gray-200 text-base font-semibold">
															Region:
														</h2>
														<p className="text-gray-400 text-base capitalize">
															{country.region}
														</p>
													</div>
												</div>
											</div>
											<div className="flex md:flex-row flex-col items-center justify-center truncate space-x-2 p-2">
												<h2 className="text-gray-200 text-base font-semibold border-2 rounded-lg p-2">
													Border Countries
												</h2>
												<h1 className="border-2 rounded-lg m-2 p-2">
													{country.borders[0]}
												</h1>
												<h1 className="border-2 rounded-lg m-2 p-2">
													{country.borders[1]}
												</h1>
												<h1 className="border-2 rounded-lg m-2 p-2">
													{country.borders[2]}
												</h1>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Country;
