
import { IBlueVideo } from "interface/video.interface";
import CommentsComp from "components/CommentsComp";
import StaticSideComp from "components/StaticSideComp";
import { Fragment } from "react";
import styled from "styled-components";

const SingleVideoPage = ({ video }: { video: IBlueVideo }) => {
  return (
    <Fragment>
      <Wrapper className='container'>
        <div className='general-wrapper container mt-5 d-flex'>
          <div className='moving-side'>
            <div className='image-comments '>
              <div className='thumbnail-title mb-5 '>
                <img src='/Frame 71.png' className='mt-4' alt='' />
                <p className='blue'>
                  #DataAnalyticsFullCourse #2022 #DataAnalyticsForBeginners
                </p>
                <p className='fw-bold'>
                  Data Analytics Full Course 2022 | Data Analytics For Beginners
                  | Data Analytics Course | Simplilearn
                </p>
                <div className='likes-date d-flex justify-content-between '>
                  <div className='views d-flex'>
                    <p>35,064 views</p>
                    <p>Dec 18, 2021</p>
                  </div>
                  <div className='likes d-flex mx-5'>
                    <div className='first d-flex'>
                      <i className='far fa-thumbs-up mt-1'></i>
                      <p>7.8K</p>
                    </div>
                    <div className='second d-flex'>
                      <i className='far fa-thumbs-down mt-1'></i>
                      <p>DISLIKE</p>
                    </div>
                    <div className='third d-flex'>
                      <i className='fas fa-download mt-1'></i>
                      <p>WATCH LATER</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className='subscribe d-flex'>
                <img src='/unsplash_mEZ3PoFGs_k.png' alt='' />
                <div className='text-content'>
                  <div className='d-flex'>
                    <p>Simplilearn</p>
                    <i className='fas fa-check-circle fa-xs mt-2'></i>
                  </div>
                  <p>1.7M subscribers</p>
                  <p className='fw-bold'>
                    Data analytics has been rapidly growing, with companies
                    looking to generate insights and drive
                  </p>
                  <p>SHOW MORE</p>
                </div>
                <div>
                  <button className='btn btn-danger mx-5'>SUBSCRIBE</button>
                </div>
              </div>
            </div>
            <hr />

            <div className='comments mt-5 '>
              <p className='fw-bold'>16 Comments</p>

              <div className='img-form mb-5'>
                <img src='/unsplash_mEZ3PoFGs_k.png' alt='' />
                <form className='form-group w-100 '>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Add a public comment...'
                  />
                </form>
              </div>

              <CommentsComp />
              <CommentsComp />
              <CommentsComp />
              <CommentsComp />
              <CommentsComp />
              <CommentsComp />
            </div>
          </div>

          <div className='static-side mt-5'>
            <div className='mt-3'>
              <StaticSideComp />
            </div>
            <div className='mt-3'>
              <StaticSideComp />
            </div>
            <div className='mt-3'>
              <StaticSideComp />
            </div>
            <div className='mt-3'>
              <StaticSideComp />
            </div>
            <div className='mt-3'>
              <StaticSideComp />
            </div>
            <div className='mt-3'>
              <StaticSideComp />
            </div>
            <div className='mt-3'>
              <StaticSideComp />
            </div>
            <div className='mt-3'>
              <StaticSideComp />
            </div>
            <div className='mt-3'>
              <StaticSideComp />
            </div>
          </div>
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default SingleVideoPage;

const Wrapper = styled.div`
  /* background-color: #03030308; */

  .general-wrapper {
    
    position: relative;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
  }

  .moving-side {
    /* flex: 1; */

    .thumbnail-title {
      img {
        @media screen and (max-width: 1000px) {
          width: 100%;
        }
        @media screen and (max-width: 1300px) {
          width: 600px;
        }
        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }
  .static-side {
  }

  .thumbnail-title {
    .blue {
      color: #076fd9;
      display: block;
    }
    .likes-date {
      .views {
        gap: 1rem;
      }
      .likes {
        gap: 1rem;
      }
    }
  }

  .subscribe {
    gap: 2rem;
    img {
      height: 37px;
      width: 37px;
      border-radius: 50%;
    }
  }

  .comments {
    .img-form {
      display: flex;
      gap: 1rem;
      input[type="text"] {
        border: none;
        border-bottom: 2px solid #a3a3a3;
        background-color: transparent;
        border-radius: 0;
      }
    }
  }
`;
