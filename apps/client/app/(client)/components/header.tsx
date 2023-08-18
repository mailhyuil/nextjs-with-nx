import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="bg-blue-100 p-5">
        <ul className="flex gap-5 ">
          <Link
            href={''}
            className="font-bold hover:text-yellow-500 hover:cursor-pointer transition-all duration-300 "
          >
            HOME
          </Link>
          <Link
            href={'/user'}
            className="font-bold hover:text-yellow-500 hover:cursor-pointer transition-all duration-300 "
          >
            USER
          </Link>
          <Link
            href={'/test'}
            className="font-bold hover:text-yellow-500 hover:cursor-pointer transition-all duration-300 "
          >
            TEST
          </Link>
        </ul>
      </nav>
    </header>
  );
}
