import Image from 'next/image'

interface ImagePairProps {
  src1: string
  alt1: string
  src2: string
  alt2: string
  caption1?: string
  caption2?: string
}

export default function ImagePair({ src1, alt1, src2, alt2, caption1, caption2 }: ImagePairProps) {
  return (
    <div className="image-pair my-8">
      <figure className="relative">
        <div className="relative h-[50vh] flex items-center justify-center">
          <Image
            src={src1}
            alt={alt1}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {caption1 && (
          <figcaption className="text-center text-sm text-gray-600 mt-2">
            {caption1}
          </figcaption>
        )}
      </figure>
      
      <figure className="relative">
        <div className="relative h-[50vh] flex items-center justify-center">
          <Image
            src={src2}
            alt={alt2}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {caption2 && (
          <figcaption className="text-center text-sm text-gray-600 mt-2">
            {caption2}
          </figcaption>
        )}
      </figure>
    </div>
  )
}
