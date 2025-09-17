import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import DogImg from "../../public/hero-dog.webp"
import CatImg from "../../public/cat-hero.png"
import Image from "next/image"

export function Hero() {
    return (
        <section className="bg-[#E84C3D] text-white relative overflow-hidden px-4">
            <div>
                <Image
                    src={DogImg}
                    alt="Dog Picture"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover opacity-60 lg:hidden" />
                <div className="absolute inset-0 bg-black opacity-40 lg:hidden"></div>
            </div>
            <div className="container mx-auto pt-16 pb-4 md:pb-0 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8
                 ">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10" data-aos="fade-down">
                            Your pet deserves care, affection and protection.
                        </h1>
                        <p className="lg:text-lg" data-aos="fade-right">
                            We offer the best services to ensure the well-being and happiness of your four-legged friend.
                        </p>

                        <a target="_blank" href="https://wa.me/+12129792532" className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center w-fit  hover:bg-green-700 duration-300 transition-colors"><WhatsappLogoIcon className="w-5 h-5" />Contact via Whatsapp</a>

                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> discount on the first purchase
                            </p>
                            <div className="flex mt-4">
                                <div className="w-32 hidden lg:block">
                                    <Image
                                        src={CatImg}
                                        alt="Cat Image"
                                        quality={100}
                                        className="object-fill" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block h-full relative">
                        <Image
                            src={DogImg}
                            alt="Picture of Dog"
                            className="object-contain"
                            fill
                            sizes="(max-width: 768px) 0vw, 50vw"
                            quality={100}
                            priority
                        />
                    </div>
                </article>
            </div>
        </section>
    )
}