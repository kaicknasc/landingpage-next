import golden from '../../public/golden.png'
import royal from '../../public/royal.png'
import primier from '../../public/primier.png'
import whiskas from '../../public/whiskas.png'
import natural from '../../public/natural.png'
import Image from 'next/image'
import { FacebookLogoIcon, InstagramLogoIcon } from '@phosphor-icons/react/dist/ssr'
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]

export function Footer() {
    return (
        <section className='bg-[#E84c3d] py-16 text-white'>
            <div className='container mx-auto px-4' data-aos="fade-left">
                <div className='border-b border-white/20 pb-8'>
                <h4 className='text-3xl font-semibold mb-8 text bg-center'>Brands we work with</h4>
                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {brands.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center' >
                                <Image
                                src={item.logo}
                                alt="Brand Image"
                                width={100}
                                height={50}
                                quality={100}
                                style={{
                                    width: "auto",
                                    height: "auto",
                                }}
                                className='object-contain' />
                            </div>
                        ))}
                    </div>
                </div>

                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Pet Shop Dev</h3>
                            <p className='mt-4'>Caring for your best friend with love and dedication</p>
                            <br />
                            <a href="https://wa.me/+12129792532" className=' bg-green-500 px-4 py-3 rounded-md hover:bg-green-700 duration-300 transition-colors'>Contact Via WhatsApp</a>
                        </div>

                        <div>
                            <h3>Contacts</h3>
                            <p>Email: Petshopdevcontact@hotmail.com</p>
                            <p>Tel: +1 (212) 9792532</p>
                            <p>235 E 9th St, New York, NY 10003, United States</p>
                        </div>

                        <div>
                            <h3>Social Midias</h3>
                            <div className='flex gap-4'>
                                <a href="/" ><FacebookLogoIcon className='w-8 h-8' /></a>
                                <a href="/" ><InstagramLogoIcon className='w-8 h-8' /></a>
                            </div>
                        </div>
                </footer>
            </div>
        </section>
    )
}