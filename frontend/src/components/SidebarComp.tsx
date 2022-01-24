import styled from "styled-components";


const SidebarComp = () => {
  return (
    <Wrapper className='mx-3'>
      <div className='d-flex flex-column justify-content-between '>
        <div className='bars'>
          <i className='fas fa-bars fa-2x'></i>
        </div>

        <div className='home'>
          <i className='fas fa-home fa-2x '></i>
          <p className='text-center'>Home</p>
        </div>
        <div className='liked'>
          <i className='far fa-thumbs-up fa-2x '></i>
          <p className='text-center'>Liked Videos</p>
        </div>
        <div className='watch'>
          <i className='far fa-clock fa-2x'></i>
          <p className='text-center'>Watched Videos</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default SidebarComp;

const Wrapper = styled.div`
  .d-flex {
    /* background-color: red; */
    height: 20rem;
    margin-top: 2.4rem;
  }
  .bars {
    display: flex;
    justify-content: center;
  }

  .home {
    .fas {
      display: flex;
      justify-content: center;
    }
  }
  .liked {
    .far {
      display: flex;
      justify-content: center;
    }
  }
  .watch {
    .far {
      display: flex;
      justify-content: center;
    }
  }
`;
