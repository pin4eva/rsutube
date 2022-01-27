import styled from "styled-components";
import { Link } from "react-router-dom";


const SidebarComp = () => {
  return (
    <Wrapper className=''>
      <div className='d-flex flex-column justify-content-between '>
        <div className='bars'>
          <i className='fas fa-bars fa-2x'></i>
        </div>

        <div className='home'>
          <Link className="link text-decoration-none link-dark" to='/'>
          <i className='fas fa-home fa-2x '></i>
          <p className='text-center'>Home</p>
          </Link>
        </div>
        <div className='liked'>
          <Link className="link text-decoration-none link-dark"  to='/liked'>
          <i className='far fa-thumbs-up fa-2x '></i>
          <p className='text-center'>Liked Videos</p>
          </Link>
        </div>
        <div className='watch'>
          <Link className='link text-decoration-none link-dark' to='/watched'>
          <i className='far fa-clock fa-2x'></i>
          <p className='text-center'>Watched Videos</p>
          </Link>
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
    @media screen and (max-width:768px){
      display: none;
    }
    .fas {
      display: flex;
      justify-content: center;
    }
  }
  .liked {
    @media screen and (max-width:768px){
      display: none;
    }
    .far {
      display: flex;
      justify-content: center;
    }
  }
  .watch {
    @media screen and (max-width:768px){
      display: none;
    }
    .far {
      display: flex;
      justify-content: center;
    }
  }
`;
