import React from "react";

const GetStartedPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Welcome to the Next Step</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700">
            We are here to help you transform your ideas into reality. Our team
            specializes in providing the tools and support you need to succeed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Easy-to-use tools for project management</li>
            <li>Comprehensive analytics and insights</li>
            <li>Dedicated support to guide you through every step</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Get Started Today</h2>
          <p className="text-gray-700">
            Join us and become part of a growing community that believes in
            turning ideas into impactful realities. Click the button below to
            start your journey!
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
            Join Now
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GetStartedPage;
