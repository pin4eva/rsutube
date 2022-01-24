import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { Link } from "react-router-dom";


export interface IBlueVideo {
  image1: string;
  image2: string;
  desc: string;
  slug: string;
}

const BlueVideoComp = ({ video }: { video: IBlueVideo }) => {
  return (
    <Wrapper>
      <div className='container  '>
        <div className='video-wrapper '>
          <img className='mt-4' src={video?.image1} alt='' />
          <div className='video-image d-flex mx-1 mt-3'>
            <img src={video?.image2} className='img-fluid' alt='' />
            {/* <Link to={`/pages/${video?.slug}`}> */}
               <a className='link' href='/pages/[slug].tsx'>
               <p className=''>{video?.desc}</p>
               </a>
            {/* </Link> */}
          </div>

          <div className='text-content'>
            <div className='combine d-flex justify-content-center'>
              <small className='fw-light'>Simplilearn</small>
              <i className='fas fa-check-circle fa-xs mt-1'></i>
            </div>
            <div className='combine2  mx-2'>
              <small className='fw-light'>721K views </small>
              <small className='fw-light'>Streamed 6 days ago</small>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BlueVideoComp;

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
