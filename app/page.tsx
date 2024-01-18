import Image from 'next/image'

export default function Home() {
  return (
    <>
        <div className="bg-[url('/OurMarketing.png')] h-screen bg-cover">

            <header className="">
                <Image className="ms-[60px] pt-[60px]" src="/Group 1.png" alt="Logo" width={177} height={28}/>
                <Image className="mt-[120px]" src="/Frame 25.png" width={1806} height={384} alt="content"/>
            </header>

            {/* Add your content below the header */}
        </div>
    </>
  )
}
