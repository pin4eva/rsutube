import FrontLayout from "layouts/FrontLayout";
import HomePage from "pages";
import LoginPage from "pages/LoginPage";
import SingleVideoPage from "pages/[slug]";
import RegisterPage from "pages/RegisterPage";
import LikedPage from "pages/LikedPage";

import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import WatchedPage from "pages/WatchedPage";

interface IPageProps {
	//   component: React.ReactNode;
	//   layout: React.ReactNode;
	component: React.ElementType;
	layout: React.ElementType;
	path?: string;
	exact?: boolean;
	isAuth?: boolean;
	proctected: boolean;
}

const AppRoute = ({
	component: Component,
	layout: Layout,
	isAuth,
	proctected,
	...rest
}: IPageProps): JSX.Element => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (proctected) {
					if (isAuth) {
						return (
							<Layout>
								<Component {...props} />
							</Layout>
						);
					} else {
						return <Redirect to="/login" />;
					}
					
				} else {
					return (
						<Layout>
							<Component {...props} />
						</Layout>
					);
				}
			}}
		/>
	);
};

const Routes = () => {
	return (
		<Router>
			<Switch>
				<AppRoute
					path="/"
					exact
					proctected={false}
					isAuth={false}
					component={HomePage}
					layout={FrontLayout}
				/>
				<AppRoute
					path="/video/:slug"
					exact
					proctected={false}
					isAuth={false}
					component={SingleVideoPage}
					layout={FrontLayout}
				/>
				<AppRoute
					path="/login"
					exact
					proctected={false}
					isAuth={false}
					component={LoginPage}
					layout={FrontLayout}
				/>
				<AppRoute
					path="/register"
					exact
					proctected={false}
					isAuth={false}
					component={RegisterPage}
					layout={FrontLayout}
				/>
				<AppRoute
					path="/liked"
					exact
					proctected={false}
					isAuth={false}
					component={LikedPage}
					layout={FrontLayout}
				/>
				<AppRoute
					path="/watched"
					exact
					proctected={false}
					isAuth={false}
					component={WatchedPage}
					layout={FrontLayout}
				/>
			</Switch>
		</Router>
	);
};

export default Routes;
