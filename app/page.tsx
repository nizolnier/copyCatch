import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-wavy bg-no-repeat bg-cover w-screen  h-screen">
      <Link className="px-5 py-2.5 font-medium bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-600 text-indigo-500 rounded-lg text-sm" href='/login'>Log In</Link>
      <Link className="px-5 py-2.5 font-medium bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-600 text-indigo-500 rounded-lg text-sm" href='/sign-up'>Sign Up</Link>
    </main>
  );

}
