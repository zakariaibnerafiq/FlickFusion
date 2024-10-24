'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ActiveLinkProps {
  name: string;
  href: string;
  activeClassName?: string;
  className?: string;

}
const ActiveLink: React.FC<ActiveLinkProps> = ({ name, href, activeClassName = '', className = '' }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <p className={`${isActive ? activeClassName : ''} ${className}`.trim()}>
        {name}
      </p>
    </Link>
  );
};

export default ActiveLink;