/* components/lenis-provider.tsx */
"use client";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";
import * as React from "react";

export function LenisProvider({
	children,
	options,
	...props
}: {
	children: React.ReactNode;
	options?: any;
}) {
	return (
		<ReactLenis root {...props}>
			{children}
		</ReactLenis>
	);
}
