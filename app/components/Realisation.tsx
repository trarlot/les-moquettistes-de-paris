import Image from 'next/image';

interface RealisationProps {
    image1: string;
    image2: string;
    image3: string;
    alt1: string;
    alt2: string;
    alt3: string;
}

export default function Realisation({
    image1,
    image2,
    image3,
    alt1,
    alt2,
    alt3,
}: RealisationProps) {
    return (
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
            {/* 3 photos empilées verticalement en dessous de sm, côte à côte à partir de sm */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center w-full">
                <div
                    data-aos="fade-up"
                    data-fade-up
                    className="relative max-w-96 max-h-64 mx-auto w-full aspect-[3/2] px-4 sm:w-64 sm:h-40 sm:px-0 md:w-96 md:h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={image1}
                        alt={alt1}
                        fill
                        sizes="(max-width: 640px) 768px, (max-width: 768px) 512px, 640px"
                        className="object-cover"
                    />
                </div>
                <div
                    data-aos="fade-up"
                    data-fade-up
                    className="relative max-w-96 max-h-64 mx-auto w-full aspect-[3/2] px-4 sm:w-64 sm:h-40 sm:px-0 md:w-96 md:h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={image2}
                        alt={alt2}
                        fill
                        sizes="(max-width: 640px) 768px, (max-width: 768px) 512px, 640px"
                        className="object-cover"
                    />
                </div>
                <div
                    data-aos="fade-up"
                    data-fade-up
                    className="relative max-w-96 max-h-64 mx-auto w-full aspect-[3/2] px-4 sm:w-64 sm:h-40 sm:px-0 md:w-96 md:h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={image3}
                        alt={alt3}
                        fill
                        sizes="(max-width: 640px) 768px, (max-width: 768px) 512px, 640px"
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
