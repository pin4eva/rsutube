import FrontLayout from "layouts/FrontLayout";
import HomePage from "pages";
import LoginPage from "pages/LoginPage";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";

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
					path="/login"
					exact
					proctected={false}
					isAuth={false}
					component={LoginPage}
					layout={FrontLayout}
				/>
			</Switch>
		</Router>
	);
};

export default Routes;
