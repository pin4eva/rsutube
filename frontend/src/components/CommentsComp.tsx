import styled from "styled-components";



const CommentsComp = () => {
  return (
    <Wrapper>
        <div className="emmanuel d-flex">
            <img src="/unsplash_mEZ3PoFGs_k.png" alt="" />
            <div className="text-content">
                <div className="name-date d-flex">
                    <p className='fw-bold'>Emanuel Samuel</p>
                    <p>6 days ago</p>
                </div>
                <p>Thank you for putting so much time into helping others!</p>
                <div className="thumbs d-flex">
                <div className="thumb-up d-flex ">
                    <i className=' far fa-thumbs-up mt-1'></i>
                    <p> 7.8k</p>
                </div>
                <div className="thumbs-down d-flex">
                <i className=' far fa-thumbs-down mt-1'></i>
                    <p>REPLY</p>
                </div>
                </div>

                <div className="view d-flex">
                <i className="fas fa-caret-down fa-2x "></i>
                <p className='mt-1'>View 5 replies</p>
                </div>
            </div>
        </div>
    </Wrapper>
  );
};

export default CommentsComp;

const Wrapper = styled.div`
.emmanuel{
    gap: 1rem;
    img {
      height: 37px;
      width: 37px;
      border-radius: 50%;
    }

    .text-content{
        
       .name-date{
           gap: 1rem;
       } 
       .thumbs{
           gap: 1rem;
       }
       .view{
           gap: 0.5rem;
           color: #076FD9;
       }
    }
}

`;
