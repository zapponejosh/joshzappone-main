import Link from 'next/link';

export default function Header() {
  return (
    <h2 className="">
      <Link href="/">
        <a className="hover:underline">Home.</a>
      </Link>
      &nbsp;|&nbsp;
      <Link href="/portfolio">
        <a className="hover:underline">Work.</a>
      </Link>
      &nbsp;|&nbsp;
      <Link href="/blog">
        <a className="hover:underline">Blog.</a>
      </Link>
    </h2>
  );
}
