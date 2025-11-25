import Image from "next/image";
import Link from "next/link";
import { products } from "../utlis/ProductsIntro"; // full list from your utils

// Select only first 6 or manually pick popular ones

export default function FeaturedProductsPreview() {
  return (
    <section className="w-full py-12 px-4 sm:px-8 bg-base-100">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-start mb-6">
        Our Inventory Includes
      </h2>
      <p className="text-base text-base-content/70 mb-10 w-full sm:w-[70%]">
        Explore our most requested medical tools, trusted by hospitals, labs, and clinics
        nationwide.
      </p>

      {/* Preview Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 w-full sm:w-[80%] mx-auto">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-32 sm:h-40">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "contain" }}
                className="p-3"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="font-medium text-sm sm:text-base">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* One CTA Button */}
      <div className="text-center mt-10">
        <Link
          href="/products"
          className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-focus transition-colors duration-300"
        >
          View All Products →
        </Link>
      </div>
    </section>
  );
}
