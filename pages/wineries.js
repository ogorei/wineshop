import React, { useState }  from 'react'
import { client, urlFor  } from '../lib/client'
import Link from 'next/link'

const Wineries = ({ wineries }) => {
	return (
		<div className="flex flex-wrap justify-center p-4">
			{wineries.map(winery => {
				return (
					<Link href={`/winery/${winery.slug.current}`}>
						<div className="w-full md:max-w-[20%] mx-2 my-4 bg-white shadow-lg rounded-lg overflow-hidden p-4 transition duration-300 delay-150 hover:delay-300">
								<img className="w-full h-36 object-center" src={urlFor(winery.image[0])} />
							<div>
								<p className="text-sm text-red-800 mt-4">
									{winery.title}
								</p>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export const getServerSideProps = async () => {
  const query = '*[_type == "wineries"]'
  const wineries = await client.fetch(query)

  return {
    props: { wineries}
  }
}

export default Wineries;