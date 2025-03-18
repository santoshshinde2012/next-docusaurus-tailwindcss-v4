interface NavigationLink {
  name: string;
  href: string;
}

interface NavigationLinksProps {
  links: NavigationLink[];
}

export default function NavigationLinks({ links }: NavigationLinksProps) {
  return (
    <>
      {links.map((item) => (
        <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
          {item.name}
        </a>
      ))}
    </>
  );
}