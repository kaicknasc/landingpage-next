
"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, MapPin, Clock } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react"

const services = [
    {
        title: "Bath and Grooming",
        description: "Includes bathing with specific products for the animal's coat and skin type, nail trimming, ear cleaning and personalized grooming (hygienic or stylish).",
        duration: "1h",
        price: "$50",
        icon: <Scissors />,
        linkText: 'Hello, I saw on the website about Bathing and Grooming and would like more information.'
    },
    {
        title: "Veterinary Consultation",
        description: "Provides basic or specialized clinical care for your pet's health. Includes disease diagnosis and mandatory vaccinations.",
        duration: "1h",
        price: "$45",
        icon: <Syringe />,
        linkText: 'Hello, I saw on the website about Veterinary Consultation and would like more information.'
    },
    {
        title: "Pet Taxi",
        description: "Pet transportation service for pet shops, veterinary clinics, and other locations. Ideal for pet owners who don't have the time or adequate transportation to transport their pets.",
        duration: "2h",
        price: "$80",
        icon: <CarTaxiFront />,
        linkText: 'Hello, I saw on the website about Veterinary Consultation and would like more information.'
    },
    {
        title: "Pet hotel",
        description: "Pet boarding service, ideal for when pet owners need to travel or be away for a few days. Pets stay in safe, comfortable spaces.",
        duration: "1h",
        price: "$60",
        icon: <Hotel />,
        linkText: 'Hello, I saw on the website about Veterinary Consultation and would like more information.'
    },
]

export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-4xl font-bold mb-12">Services</h2>

                    <div className="relative" data-aos="fade-up" data-aos-delay="100">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {services.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                        <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                            <div className="flex-1 flex items-start justify-between">

                                                <div className="flex gap-3">
                                                    <span className="text-3xl select-none">{item.icon}</span>
                                                    <div>
                                                        <h3 className="font-bold text-xl my-1 select-none">{item.title}</h3>
                                                        <p className="text-gray-400 text-sm select-none">{item.description}</p>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Clock className="w-4 h-4" />
                                                    <span className="select-none">{item.duration}</span>
                                                </div>

                                                <a target="_blank" href="https://wa.me/+12129792532" className="select-none flex items-center justify-center gap-2 hover:bg-red-600 px-4 py-1 rounded-md duration-300">Get in touch
                                                    <WhatsappLogoIcon className="w-5 h-5" /></a>
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