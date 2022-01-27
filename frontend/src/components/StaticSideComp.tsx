import styled from "styled-components";
import { truncateWord } from "utils";


const StaticSideComp = () => {
  return (
    <Wrapper className='container'>
        <div className="general d-flex">
            <img src="/image 3.png" alt="" />
            <div className="text-content mt-2 ">
                <p className='fw-bold fs-12'>{ truncateWord("Data Analytics Course 2022 | Data Analytics For Beginners | Data...", 4)}</p>
                <div className="simpli d-flex  fs-12">
                    <small>Simplilearn</small>
                    <i className="fas fa-check-circle fa-xs mt-1"></i>
                </div>
                <div className="views d-flex fs-12">
                    <small>721K views  </small>
                    <small>Streamed 6 days ago </small>
                </div>
            </div>
        </div>
    </Wrapper>
  );
};

export default StaticSideComp;

const Wrapper = styled.div`

      .general{
          /* background-color: blue; */
          gap: 0.5rem;
          @media screen and (max-width:1300px){
              flex-direction: column;
          }
          @media screen and (max-width: 1000px){
                flex-direction: row;
            }

          
          
          img{
              
              height:122px ;
              width:231px ;
              /* @media screen and (max-width:1500px){
                height:100px ;
              width:150px ;
              } */

          }
          .text-content{
              /* background-color: red; */
              .simpli{
                  gap: 0.5rem;
              }
              .views{
                  gap: 1rem;
              }
          }
      }

`;
