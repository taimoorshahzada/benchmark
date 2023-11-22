interface ChildrenProps {
  children: any;
}

export default function Container({ children }: ChildrenProps) {
  return (
		<div className="px-[10px] md:px-5 grid grid-cols-12 gap-x-5 mx-auto w-full">
			{children}
		</div>
	);
}
