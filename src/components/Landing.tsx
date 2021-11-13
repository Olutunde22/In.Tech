import React from 'react';
import Layout from './shared/Layout';
import Typewriter from 'typewriter-effect';

const Landing = () => {
	return (
		<Layout>
			<div className="">
				<div className="flex flex-col md:flex-row mt-10">
					<div className="p-8 lg:pl-28 md:w-7/12 lg:w-8/12 w-full flex flex-col justify-center content-center">
						<h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 text-center md:text-left font-semibold text-gray-500">
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
						<p className="uppercase font-medium text-gray-600 text-lg text-center md:text-left tracking-wide">
							Let us handle it.{' '}
						</p>
					</div>
					<div className="md:w-5/12 lg:w-8/12 w-ful place-items-stretch">
						<img
							className="w-90 lg:w-full "
							src="https://cdni.iconscout.com/illustration/premium/thumb/family-doing-shopping-2681393-2239882.png"
							alt="shopingImage"
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Landing;
