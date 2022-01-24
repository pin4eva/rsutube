import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderComp = () => {
	return (
		<Wrapper className="">
			<div className="top-wrapper d-flex justify-content-between ">
				<Link to="/" className="text-decoration-none link-dark">
					<div className="tube d-flex mx-5 ">
						<i className="fab fa-youtube fa-2x"></i>
						<h2>RsuTube </h2>
						<span>
							<sup>CMS</sup>
						</span>
					</div>
				</Link>
				<div className="form">
					<form>
						<div className="input-group">
							<input
								type="text"
								placeholder="Search"
								className="form-control "
							/>
							<button className="btn btn-outline-dark">
								<i className="fas fa-search mt-2 "></i>
							</button>
						</div>
					</form>
				</div>

				<div className="image ">
					<img src="unsplash_mEZ3PoFGs_k.png" alt="" />
				</div>
			</div>
		</Wrapper>
	);
};

export default HeaderComp;

const Wrapper = styled.div`
	.top-wrapper {
		margin-top: 2rem;

		/* background-color: blue; */
		width: 100%;
		.tube {
			.fab {
				color: red;
				margin-top: 0.3rem;
			}
		}
		form {
			.input-group {
				width: 42rem;

				@media screen and (max-width: 768px) {
					width: 100%;
				}
				.btn {
					/* border-radius: 0; */
					border: 1px solid #aca8a8;
				}
			}
		}

		img {
			margin-right: 5rem;
			height: 37px;
			width: 37px;
			border-radius: 100%;
		}
	}
`;
