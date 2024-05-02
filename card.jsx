import Image from "next/image";
import Link from "next/link";

const Card = ({ title, image, description}) => {
  return (
    <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
      <div className="relative">
        <Link href="/mountain">
          <Image
            src={image}
            width={330}
            height={330}
            className='w-full object-cover brightness-90 hover:brightness-100 transition duration-300 ease-in-out'
            alt="mountain photo"
          />
        </Link>
      </div>
      <div className="px-6 py-4">
        <Link href="/mountain"
            className="font-semibold text-lg inline-block transition duration-500 ease-in-out">{title}</Link>
        <p className="text-gray-500 text-sm">
            {description}
        </p>
      </div>
    </div>
  );
}

export default Card;