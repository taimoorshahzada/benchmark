interface ChildrenProps {
  children: any;
}

export default function Container({ children }: ChildrenProps) {
  return (
		<div className="px-5 grid grid-cols-12 gap-x-5 mx-auto w-full mb-5">
			{children}
		</div>
	);
}
