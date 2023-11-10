interface Children {
  children: any;
}

export default function Layout({ children }: Children) {
  return <>{children}</>;
}
