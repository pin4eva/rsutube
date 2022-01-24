import React, { Fragment } from "react";
import styled from "styled-components";
import SidebarComp from "components/SidebarComp";
import HeaderComp from "components/HeaderComp";


const VideoLayout = ({ children}: {children: React.ReactChild}) => {
  return (
    <Fragment>
        <Wrapper className='d-flex'>
        <SidebarComp/>
			
			<div className="main-wrapper">
			<HeaderComp/>
				{children}</div>

        </Wrapper>
    </Fragment>
  );
};

export default VideoLayout;

const Wrapper = styled.div`
.main-wrapper{
	/* display: flex; */
	flex: 1;}
`;
