export default function StartupPage({ params }) {
  return (
    <main className="bg-black text-white min-h-screen px-4 md:px-6 py-20">

      <h1 className="text-4xl font-bold mb-4">
        {params.slug}
      </h1>

      <p className="text-gray-400">
        This is the startup page. You will add video, description, and links here.
      </p>

    </main>
  );
}