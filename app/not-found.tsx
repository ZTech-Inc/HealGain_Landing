import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-bold mb-6">Page not found</h1>
        <p className="text-xl text-gray-600 mb-8">That page does not exist. The home page has everything on one scroll.</p>
        <Link href="/" className="inline-block bg-gradient-to-r from-[#4985DE] to-[#C0A5EF] text-white px-8 py-3 rounded-full font-semibold">
          Back to the home page
        </Link>
      </div>
    </main>
  );
}
