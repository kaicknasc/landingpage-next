import Image from "next/image"
import aboutImage1 from "../../public/about-1.png"
import aboutImage2 from "../../public/about-2.png"
import { CheckIcon } from "@phosphor-icons/react/dist/ssr"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import { MapPinIcon } from "@phosphor-icons/react/dist/ssr"

export function About() {

    return (
        <section className="bg-[#FDF6EC] py-16">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-aos="fade-up-right">
                    <div className="relative">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={aboutImage1}
                                alt="about"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
                            <Image
                                src={aboutImage2}
                                alt="about"
                                fill
                                quality={100}
                                className=""
                                priority
                            />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10">
                        <h2 className="text-4xl font-bold">About</h2>
                        <p>Until one has loved an animal, a part of one's soul remains unawakened. We believe in it and we believe in easy acess to things that are good for our mind, body and spirit. With a clever offering, superb support and a secure checkout you're in good hands.</p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <CheckIcon className="text-red-500" />
                                Open since 2006.
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon className="text-red-500" />
                                Team with more than 10 veterinarians.
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckIcon className="text-red-500" />
                                Quality is our priority.
                            </li>
                        </ul>
                        <div className="flex
                    gap-2">
                            <a target="_blank" href="https://wa.me/+12129792532" className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md  hover:bg-red-800 duration-300 transition-colors">
                                <WhatsappLogoIcon className="h-5 w-5 text-white" />
                                Contact via Whastsapp
                            </a>

                            <a target="_blank" href="https://maps.app.goo.gl/ABPTeK8842qKsRVU9" className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:text-red-600 duration-300 transition-colors">
                                <MapPinIcon className="h-5 w-5 text-black" />
                                Store Adress
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}