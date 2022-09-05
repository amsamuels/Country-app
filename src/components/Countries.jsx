import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Countries = () => {
	const [countries, setCountries] = useState([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		const fecthCountriesData = async () => {
			try {
				const url = await axios.get("https://restcountries.com/v3.1/all");
				const data = url.data;
				setCountries(data);
			} catch (err) {
				console.log("Unable to get country Data");
			}
		};
		fecthCountriesData();
	}, []);

	return (
		<>
			<div className="pt-[70px] bg">
				<div className=" flex flex-row p-4 justify-between items-center">
					<div className="pt-4">
						<input
							className="rounded-lg xl:w-96 lg:w-72 md:w-60 w-48 h-8 md:h-10 p-2 m-2 bg-gray-100"
							placeholder="Search Country"
							type="text"
							onChange={(e) => setQuery(e.target.value)}
						/>
					</div>
					<div>
						<select className=" bg-gray-100 dark:bg-gray-900 text-white">
							<option>All</option>
							<option>Africa</option>
							<option>Asia</option>
							<option>America</option>
							<option>Europe</option>
							<option>Oceania</option>
						</select>
					</div>
				</div>
			</div>
			<div className="grid md:grid-cols-3 px-10 gap-x-8">
				{countries
					.filter((count) => count.name.common.toLowerCase().includes(query))
					.map((country) => {
						const name = country.name.common;
						return (
							<Link to={`/countries/${name}`}>
								<div className=" bg-sky-200 dark:bg-gray-900 shadow-lg rounded-xl mt-16">
									<div key={country.numericCode} className="flex flex-col p-4">
										<div className="mx-4 -mt-6">
											<img
												src={country.flags.svg}
												className="w-auto rounded-lg"
											/>
										</div>
										<div className="p-4 dark:text-white">
											<div className="text-center ">
												<h4 className=" text- text-3xl font-bold">{name}</h4>
											</div>
											<div className="font-bold text-sm p-2">
												<h1>
													Country Capital:{" "}
													<span className="font-normal text-sm">
														{country.capital}
													</span>
												</h1>
												<h1>
													Country Region:{" "}
													<span className="font-normal">{country.region}</span>
												</h1>
												<h1>
													Country Population:{" "}
													<span className="font-normal">
														{country.population}
													</span>
												</h1>
											</div>
										</div>
									</div>
								</div>
							</Link>
						);
					})}
			</div>
		</>
	);
};

export default Countries;
