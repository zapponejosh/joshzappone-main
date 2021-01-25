import Link from 'next/link'

export default function Header() {
  return (
    <div className="container mx-auto px-5">
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Home.</a>
      </Link>&nbsp;|&nbsp; 
      <Link href="/portfolio">
        <a className="hover:underline">Work.</a>
      </Link>&nbsp;|&nbsp;
      <Link href="/blog">
        <a className="hover:underline">Blog.</a>
      </Link>
      
    </h2>
    </div>
  )
}
