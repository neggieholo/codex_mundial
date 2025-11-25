import { EquipmentInventory } from '@/app/utlis/EquipmentInventory';
import ProductDetailClient from '@/app/landingpagecomponents/PorductDetail';
import ProductDetailMobile from '@/app/landingpagecomponents/mobile/MobProductDetail';
import { isMobile } from '@/app/landingpagecomponents/mobile/ismobile';
import { headers } from 'next/headers';

interface Params {
  id: string;
}

export default async function ProductPage({ params }: { params: Params }) {
    const { id } = await params;
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const mobileCheck = isMobile(userAgent);

  // Find product by id
  const product = EquipmentInventory.find(p => p.id.toString() === id);
  console.log("Product ID:", id);   

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-xl text-gray-700 dark:text-gray-300">Equipment not found.</p>
      </div>
    );
  }

  return mobileCheck ? <ProductDetailMobile product={product} /> : <ProductDetailClient product={product} />;
}
