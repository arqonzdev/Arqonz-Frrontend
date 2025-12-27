import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

export default function RegisterRoleCard({ title, image }: Props) {
  return (
    <div className="min-w-[240px] rounded-xl bg-white p-2 shadow-md hover:shadow-lg transition">
      <div className="relative h-40 w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 240px, 300px"
          className="object-cover"
        />
      </div>

      <p className="mt-3 text-center text-sm font-semibold text-gray-800">
        {title}
      </p>
    </div>
  );
}
