import { Link } from "react-router-dom";

const TrustSection = () => {
  return (
    <section id="trust" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Our Commitment to Excellence
        </h2>
        <p className="text-lg text-gray-600">
          We partner with visionary brands to deliver high‑quality digital products that drive growth and innovation.
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
          <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-700 mb-2">Strategic Partnership</h3>
            <p className="text-gray-500">Collaborative approach aligning tech with business goals.</p>
          </div>
          <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-700 mb-2">Scalable Solutions</h3>
            <p className="text-gray-500">Architecture built for future growth.</p>
          </div>
          <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-700 mb-2">Premium Quality</h3>
            <p className="text-gray-500">Meticulous testing and performance optimization.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
