import styled from "styled-components";

const WatchedVideoComp = () => {
  return (
    <Wrapper>
      <div className='general-wrapper  d-flex'>
        <img src='/image 3.png' alt='' />
        <div className='text-content mt-2'>
          <p className='fw-bold'>
            Data Analytics Full Course 2022 | Data Analytics For Beginners |
            Data Analytics Course | Simplilearn
          </p>
          <p>
            Data analytics has been rapidly growing, with companies looking to
            generate insights and drive. Data analytics h as been rapidly
            growing, with companies looking to generate insights and drive
          </p>
          <div className=' d-flex justify-content-between'>
            <div className=' views d-flex'>
              <p>721K views </p>
              <p>Streamed 6 days ago</p>
            </div>
            <div className='btn  '>
              <button className='btn btn-light'>REMOVE</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default WatchedVideoComp;

const Wrapper = styled.div`
  .general-wrapper {
    gap: 2rem;
    margin-top: 5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }

    .views{
      gap: 1rem;
    }
  }
`;
