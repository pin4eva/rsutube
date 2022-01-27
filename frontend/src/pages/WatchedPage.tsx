import WatchedVideoComp from "components/WatchedVideoComp";
import styled from "styled-components";

const WatchedPages = () => {
  return (
    <Wrapper className='container'>
        <nav className="navbar container mt-5">
					<ul className="nav ">
						{navItems.map((nav, i) => (
							<button className="btn btn-light ">
								<li className="nav-item " key={i}>
									{nav.name}
								</li>
							</button>
						))}
					</ul>
				</nav>
       <div className="watched-vidoes">
         <WatchedVideoComp/>
         <WatchedVideoComp/>
         <WatchedVideoComp/>
         <WatchedVideoComp/>
         <WatchedVideoComp/>
       </div>

    </Wrapper>
  );
};

export default WatchedPages;

const Wrapper = styled.div`
nav {
		.nav {
			display: flex;
			justify-content: center;
			gap: 0.5rem;

			.btn {
				border-radius: 50px;
				&:hover {
					background-color: black;
					color: white;
				}
			}
		}
	}

`;

const navItems = [
	{
		name: "All",
	},
	{
		name: "Computer Science",
	},
	{
		name: "Cryptocurrency",
	},
	{
		name: "Linux",
	},
	{
		name: "Computer Hardware",
	},
	{
		name: "Computer Security",
	},
	{
		name: "Digital Processing",
	},
	{
		name: "Programming",
	},
];
