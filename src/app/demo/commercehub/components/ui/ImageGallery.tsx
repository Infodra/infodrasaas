"use client";

import Image from "next/image";
import { useState } from "react";

export function ImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(images[0]);

  return (
    <div>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
        <Image
          src={active}
          alt={alt}
          width={900}
          height={700}
          className="h-[380px] w-full rounded-2xl object-cover"
        />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(image)}
            className={`overflow-hidden rounded-xl border ${active === image ? "border-blue-600" : "border-slate-200 dark:border-slate-700"}`}
          >
            <Image src={image} alt={alt} width={180} height={140} className="h-16 w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
