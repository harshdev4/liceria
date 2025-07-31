import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import products from "../../products.json";
import Link from "next/link";

type Props = {
  params: { productname: string };
};

const page = ({ params }: Props) => {
  const productName = decodeURIComponent(params.productname);
  const product = products.find((item) => item.name === productName);

  if (!product) {
    return (
      <div className="text-center text-red-500 py-10">
        Product not found.
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(`I'm interested in the ${product.name}`);
  const whatsappURL = `https://wa.me/917466986398?text=${whatsappMessage}`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Image and Product Info */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image */}
        <div className="w-full lg:w-1/2 aspect-[2/1.8] lg:aspect-[2/1.6] relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-textColor mb-4">
              {product.name}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(product.properties).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-[#f9f6ef] p-4 rounded-xl shadow-sm"
                >
                  <p className="text-sm text-lightTextColor">{key}</p>
                  <p className="text-lg font-medium text-textColor">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Button */}
          <div>
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-x-2 bg-textColor text-white items-center justify-center rounded-3xl px-6 py-3 hover:opacity-90 transition"
            >
              <FaWhatsapp className="text-2xl" />
              <span className="text-lg">Get Custom Quote</span>
            </a>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-textColor">
          Product Description
        </h2>
        <p className="text-base text-lightTextColor leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Suggested Products */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-textColor">
          You may also like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {product.suggested.map((item, idx) => (
            <Link
              href={`/product/${item.name}`}
              key={idx}
              className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-textColor font-medium">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
