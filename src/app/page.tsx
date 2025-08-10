import { desc } from "drizzle-orm";
import Image from "next/image";

import CategorySelector from "@/components/common/category-selector";
import ProductList from "@/components/common/products-list";
import { db } from "@/db";
import { productTable } from "@/db/schema";

export default async function Home() {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  const newlyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    limit: 8,
    with: {
      variants: true,
    },
  });
  const categories = await db.query.categoryTable.findMany({});

  return (
    <>
      <div className="space-y-6">
        <div className="px-5">
          <Image
            src="/banner-01.png"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
        <div className="px-5">MARCAS PARCEIRAS</div>
        <ProductList products={products} title={"Mais vendidos"} />
        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>
        <div className="px-5">
          <Image
            src="/banner-02.png"
            alt="Seja autêntico"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
        <ProductList products={newlyCreatedProducts} title={"Novos produtos"} />
      </div>
    </>
  );
}
