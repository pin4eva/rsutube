
import HeaderComp from "components/HeaderComp";
import SidebarComp from "components/SidebarComp";
import React from "react";
import styled from "styled-components";

const FrontLayout = ({ children }: { children: React.ReactChild }) => {
	return (
		<Wrapper className='d-flex  '>
			<SidebarComp/>
			
			<div className="main-wrapper">
			<HeaderComp/>
				{children}</div>

				
		</Wrapper>
	);
};

export default FrontLayout;

const Wrapper = styled.div`

	.main-wrapper{
	/* display: flex; */
	flex: 1;

}
`