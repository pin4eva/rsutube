import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IBlueVideo } from "interface/video.interface";



const VideoComp = ({ video }: { video: IBlueVideo }) => {
	return (
		<Wrapper>
			<div className="container  ">
				<div className="video-wrapper ">
					<img className="mt-4" src={video?.thumbnail} alt="" />
					<div className="video-image d-flex mx-1 mt-3">
						<img src={video?.user} className="img-fluid" alt="" />

						<Link className="link text-decoration-none link-dark" to={video.slug}>
							<p className=" ">{video?.title}</p>
						</Link>
					</div>

					<div className="text-content">
						<div className="combine d-flex justify-content-center">
							<small className="fw-light">Simplilearn</small>
							<i className="fas fa-check-circle fa-xs mt-1"></i>
						</div>
						<div className="combine2  mx-2">
							<small className="fw-light">721K views </small>
							<small className="fw-light">Streamed 6 days ago</small>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default VideoComp;

const Wrapper = styled.div`
	.video-wrapper {
		/* background-color: red; */
		.mt-4 {
			width: 100%;
		}
		.video-image {
			gap: 1rem;
			img {
				height: 37px;
				width: 37px;
				border-radius: 100%;
			}
		}
	}
	.combine {
		gap: 7px;
	}
	.combine2 {
		display: flex;
		justify-content: end;
		gap: 7px;
	}
`;
