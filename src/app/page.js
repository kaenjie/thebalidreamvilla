import Image from "next/image";
import Link from "next/link"; // Panduan navigasi di Section 5

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 p-8 font-sans dark:bg-zinc-950 dark:text-zinc-100">
      <main className="max-w-2xl mx-auto space-y-8 py-12">
        {/* Header */}
        <header className="border-b pb-4 border-zinc-200 dark:border-zinc-800">
          <h1 className="text-3xl font-bold tracking-tight">
            Cheat Sheet Next.js & Tailwind
          </h1>
          <p className="text-zinc-500 mt-1">
            Panduan singkat struktur file dan penulisan kode.
          </p>
        </header>

        {/* Section 1: Lokasi File */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            1. Struktur & Peletakan File
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
            <li>
              <strong>Halaman Baru:</strong> Buat folder baru di dalam{" "}
              <code className="bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
                src/app/
              </code>{" "}
              (misal: <code className="text-xs">src/app/about/</code>), lalu
              letakkan file <code className="text-xs">page.js</code> di dalamnya
              agar bisa diakses via URL <code className="text-xs">/about</code>.
            </li>
            <li>
              <strong>Komponen Reusable:</strong> Buat folder{" "}
              <code className="bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
                src/components/
              </code>{" "}
              secara manual untuk menyimpan komponen seperti Navbar, Footer,
              atau Button.
            </li>
            <li>
              <strong>File Gambar/Aset:</strong> Wajib diletakkan di dalam
              folder{" "}
              <code className="bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
                public/
              </code>
              .
            </li>
          </ul>
        </section>

        {/* Section 2: Cara Menampilkan Gambar */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            2. Menampilkan Gambar
          </h2>
          <p className="text-sm">
            Gunakan komponen{" "}
            <code className="bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
              {"<Image />"}
            </code>{" "}
            dari Next.js. Path gambarnya langsung dimulai dari root folder
            public (tidak perlu tulis kata {'"public"'} di jalurnya).
          </p>

          {/* Contoh Pemanggilan Gambar */}
          <div className="p-4 border rounded-xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-3">
            <Image
              src="/window.svg"
              alt="Contoh Gambar dari folder public"
              width={40}
              height={40}
              className="dark:invert"
            />
            <span className="text-xs text-zinc-400 block text-center">
              Gambar di atas diambil dari{" "}
              <code className="text-xs">public/window.svg</code> dengan properti
              width & height wajib diisi.
            </span>
          </div>
        </section>

        {/* Section 3: Aturan Tailwind */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            3. Tips Styling Tailwind CSS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
              <strong className="block mb-1">Layout & Spacing</strong>
              <code className="text-xs text-zinc-500">
                flex, items-center, justify-between, p-4, m-2, space-y-4
              </code>
            </div>
            <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
              <strong className="block mb-1">Typography & Color</strong>
              <code className="text-xs text-zinc-500">
                text-lg, font-bold, text-zinc-600, bg-blue-500
              </code>
            </div>
          </div>
        </section>

        {/* Section 4: Perbedaan Page & Layout */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            4. Perbedaan page.js vs layout.js
          </h2>
          <div className="p-4 border rounded-xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-sm space-y-2">
            <p>
              <strong>page.js:</strong> Berisi konten spesifik utama untuk
              halaman tersebut.
            </p>
            <p>
              <strong>layout.js:</strong> Bingkai luar komponen yang tidak
              berubah saat pindah halaman (cocok untuk meletakkan Navbar dan
              Footer).
            </p>
          </div>
        </section>

        {/* Section 5: Cara Navigasi */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            5. Navigasi Antar Halaman
          </h2>
          <p className="text-sm">
            Jangan gunakan tag HTML biasa{" "}
            <code className="text-xs">{"<a>"}</code> karena membuat reload.
            Gunakan komponen <code className="text-xs">{"<Link>"}</code> bawaan
            Next.js agar perpindahan halaman instan tanpa reload:
          </p>
          <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-xs font-mono">
            {"import Link from 'next/link';"}
            <br />
            {"<Link href='/about'>Ke Halaman About</Link>"}
          </div>
        </section>

        {/* Section 6: Server vs Client Component */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            6. Server vs Client Component
          </h2>
          <p className="text-sm">
            Secara default, komponen Next.js diproses di Server. Jika kamu butuh
            fitur interaktif (seperti <code className="text-xs">useState</code>,{" "}
            <code className="text-xs">useEffect</code>, atau{" "}
            <code className="text-xs">onClick</code>), wajib tulis teks berikut
            di baris paling atas (baris 1) file:
          </p>
          <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-xs font-mono text-red-500 dark:text-red-400">
            {'"use client";'}
          </div>
        </section>
      </main>
    </div>
  );
}
