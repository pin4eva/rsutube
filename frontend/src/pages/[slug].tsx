import { IBlueVideo } from "components/BlueVideoComp";
import { Fragment } from "react";
import styled from "styled-components";

const SingleVideoPage = ({ video }: { video: IBlueVideo }) => {
	return (
		<Fragment>
			<Wrapper>
				<h1>slug</h1>
			</Wrapper>
		</Fragment>
	);
};

export default SingleVideoPage;

const Wrapper = styled.div``;
