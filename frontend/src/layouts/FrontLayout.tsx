import React from "react";

const FrontLayout = ({ children }: { children: React.ReactChild }) => {
	return (
		<div>
			<div>{children}</div>
		</div>
	);
};

export default FrontLayout;
