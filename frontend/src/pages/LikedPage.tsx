import LikedVideoComp from "components/LikedVideoComp";
import styled from "styled-components";




const LikedPages = () => {
  return (
    <Wrapper>
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

        <div className="liked-videos">
          <LikedVideoComp/>
          <LikedVideoComp/>
          <LikedVideoComp/>
          <LikedVideoComp/>
          <LikedVideoComp/>
        </div>
    </Wrapper>
  );
};

export default LikedPages;

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
