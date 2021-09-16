import React from 'react';
import Layout from './shared/Layout';
import Typewriter from 'typewriter-effect';

const Landing = () => {
	return (
		<Layout>
			<div className="container">
				<div className="flex flex-col md:flex-row mt-20">
					<div className="p-8 md:w-7/12 lg-8/12 w-full flex justify-center content-center">
						<h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center xl:pt-10 xl:pl-14 md:text-left font-semibold text-gray-500">
							<Typewriter
								onInit={(typewriter) => {
									typewriter
										.typeString('Welcome to Olutunde.')
										.pauseFor(2000)
										.deleteAll()
										.typeString('Your comfort is our Priority!!')
										.start();
								}}
							/>
						</h2>
					</div>
					<div className="md:w-5/12 lg:4/12 w-full">
						<img className="w-90 mx-auto" src="https://media.istockphoto.com/vectors/shopping-people-vector-id1175445207?k=20&m=1175445207&s=612x612&w=0&h=-5SvY2wGisIvE6h8ZT4nCvr9zlyhuZosWKy4eUhWBsk=" alt="shopingImage" />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Landing;
