import Image from "next/image";

const brands = [
  { file: "adidas-logo.svg", name: "Adidas" },
  { file: "bewear-logo.svg", name: "Bewear" },
  { file: "fila-logo.svg", name: "Fila" },
  { file: "handm-logo.svg", name: "H&M" },
  { file: "newbalance-logo.svg", name: "New Balance" },
  { file: "nike-logo.svg", name: "Nike" },
  { file: "puma-logo.svg", name: "Puma" },
  { file: "zara-logo.svg", name: "Zara" },
];

const BrandList = () => {
  return (
    <div className="w-full">
      <h3 className="mb-4 px-5 font-bold">Marcas parceiras</h3>
      <div className="flex w-full gap-12 overflow-x-auto px-5 pb-2 [&::-webkit-scrollbar]:hidden">
        {brands.map((brand) => (
          <div
            key={brand.file}
            className="flex min-w-[80px] flex-col items-center"
          >
            <div className="relative mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border bg-white shadow-sm">
              <Image
                src={`/logos/${brand.file}`}
                alt={brand.name}
                height={0}
                width={0}
                className="h-16 w-16 object-contain"
              />
            </div>
            <span className="truncate font-semibold">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandList;
