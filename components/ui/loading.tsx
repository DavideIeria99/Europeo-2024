import React from "react";

export default function Loading() {
	return (
		<p className="mx-10 w-24  ">
			<svg
				className="animate-spin h-10 w-10 mx-3 border-t-4 border-b-4  border-euroPrimary rounded-full "
				viewBox="0 0 24 24"></svg>
		</p>
	);
}
