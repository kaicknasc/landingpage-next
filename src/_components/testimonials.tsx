"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, MapPin, Clock } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react"
import tutor1 from "../../public/tutor1.png"
import tutor2 from "../../public/tutor2.png"
import Image from "next/image"

const testimonials = [
    {
        content:
            "Since I started taking Luna here for baths and grooming, she's never been happier! The service is impeccable, the professionals are incredibly attentive, and they always leave my furry friend looking beautiful and smelling great. I highly recommend them!",
        author: "Emilly Brown Jr.",
        role: "Luna's guardian (Golden Retriever)",
        image: tutor2,
    },
    {
        content:
            "The pet boarding service was an incredible experience! I had to travel, and I felt at ease knowing that Thor was being well cared for. I received daily photos and updates, and he came home super happy! Without a doubt, the best pet shop in the area.",
        author: "John S.",
        role: "Thor's Tutor (French Bulldog)",
        image: tutor1,
    },
]

export function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-[#FFD449] py-16">
            <div className="container mx-auto px-4" data-aos="fade-down" data-aos-delay="100">
                <div>
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Testimonials from our customers
                    </h2>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {testimonials.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                        <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                            <div className="flex flex-col items-center text-center space-y-4">
                                                <div className="relative w-24 h-24">
                                                    <Image
                                                        src={item.image}
                                                        alt="Item content"
                                                        fill
                                                        sizes="96px"
                                                        className="object-cover rounded-full"
                                                    />
                                                </div>

                                                <p className="text-gray-200">{item.content}</p>
                                                <div>
                                                    <p className="font-bold">{item.author}</p>
                                                    <p className="text-sm text-gray-500">{item.role}</p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button>
                            <ChevronLeft onClick={scrollPrev} className="cursor-pointer w-10 h-10 bg-white text-gray-600 items-center flex justify-center rounded-full shadow-lg absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-100" />
                        </button>

                        <button>
                            <ChevronRight onClick={scrollNext} className="cursor-pointer w-10 h-10 bg-white text-gray-600 items-center flex justify-center rounded-full shadow-lg absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-100" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}