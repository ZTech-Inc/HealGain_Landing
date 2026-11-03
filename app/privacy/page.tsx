import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy - HealGain',
  description: 'How this site handles personal data.',
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy</h1>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>This page describes the site as it is built today. The booking form is a sample: it does not send, collect or store anything. What you type stays in your browser tab and is gone when you close it.</p>
          <p>The site uses no analytics, no advertising and no cookies of its own.</p>
          <p>The only outside request your browser makes is for the Inter font, which is downloaded when the site is built and served from the same address as the page.</p>
          <p>If the booking form is connected to a real service later, this page will be updated first.</p>
        </div>
        <p className="mt-10">
          <Link href="/" className="text-[#4985DE] underline">Back to the home page</Link>
        </p>
      </div>
    </main>
  );
}
