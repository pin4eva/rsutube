import BlueVideoComp  from "components/BlueVideoComp";
import { IBlueVideo } from "interface/video.interface";
import React, { Fragment } from "react";
import styled from "styled-components";

const HomePage = () => {
	return (
		<Fragment>
			<Wrapper className="front-header mt-3 ">
				<nav className="navbar container">
					<ul className="nav ">
						{navItems.map((nav, i) => (
							<button className="btn btn-light ">
								<li className="nav-item " key={i}>
									{nav.name}
								</li>
							</button>
						))}
					</ul>
				</nav>
				<div className="blue-video container mt-2 d-flex row-cols-md-4">
					{/* {videos.map((video, i) => (
						<BlueVideoComp video={video} key={i} />
					))} */}

					<BlueVideoComp video={videos[0]} />
					<BlueVideoComp video={videos[0]} />
					<BlueVideoComp video={videos[0]} />
					<BlueVideoComp video={videos[0]} />
					<BlueVideoComp video={videos[0]} />
					<BlueVideoComp video={videos[0]} />
					<BlueVideoComp video={videos[0]} />
					<BlueVideoComp video={videos[0]} />
					<BlueVideoComp video={videos[0]} />
					<BlueVideoComp video={videos[0]} />
					<BlueVideoComp video={videos[0]} />
					<BlueVideoComp video={videos[0]} />
				</div>
			</Wrapper>
		</Fragment>
	);
};

export default HomePage;

const Wrapper = styled.div`
	nav {
		.nav {
			display: flex;
			justify-content: center;
			gap: 0.5rem;

			.btn {
				border-radius: 50px;
				&:hover {
					background-color: black;
					color: white;
				}
			}
		}
	}
	.blue-video {
		background-color: #03030308;
		flex-wrap: wrap;
		@media screen and (max-width: 1000px) {
			flex-direction: column;
			width: 100%;
		}
	}
`;

const navItems = [
	{
		name: "All",
	},
	{
		name: "Computer Science",
	},
	{
		name: "Cryptocurrency",
	},
	{
		name: "Linux",
	},
	{
		name: "Computer Hardware",
	},
	{
		name: "Computer Security",
	},
	{
		name: "Digital Processing",
	},
	{
		name: "Programming",
	},
];

const videos: IBlueVideo[] = [
	{
		thumbnail: "/image 3.png",
		user: "/unsplash_mEZ3PoFGs_k.png",
		title: "Data Analytics Course 2022 | Data Analytics For Beginners | Data...",
		desc:  "Data analytics has been rapidly growing, with companies looking to generate insights and drive. Data analytics has been rapidly growing, with companies looking to generate insights and drive",
		slug: "/video/my-first-post",
	},
	
];
