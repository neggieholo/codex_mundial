import Image from "next/image";
import Link from "next/link";
import { products } from "../../utlis/ProductsIntro";

// Show only first 6 or manually pick featured ones
const featured = products.slice(0, 6);

export default function MobileFeaturedProducts() {
  return (
    <section className="w-full py-12 px-4 sm:px-8 bg-base-100">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-4">
        Popular Medical Equipment
      </h2>
      <p className="text-center text-sm text-base-content/70 mb-8">
        Trusted hospital and lab essentials — top picks for fast purchase.
      </p>

      {/* Horizontal Scroll Preview Cards */}
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-2 px-1">
        {featured.map((product, idx) => (
          <div
            key={idx}
            className="flex-none w-56 sm:w-64 bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-40 sm:h-48 bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "contain" }}
                className="p-4"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm sm:text-base">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Single CTA Button */}
      <div className="text-center mt-8">
        <Link
          href="/products"
          className="inline-block px-6 py-3 bg-primary text-white text-sm sm:text-base font-bold rounded-lg hover:bg-primary-focus transition-colors duration-300"
        >
          View All Products →
        </Link>
      </div>
    </section>
  );
}
