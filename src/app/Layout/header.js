import Link from 'next/link'

export default function Header() {

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <p className="font-bold italic text-black">FORM</p>
          </a>
        </div>
        <div className="">
          <Link href="/register" className="-mx-3 block rounded-lg px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Register <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </nav>
    </header>
  )
}
