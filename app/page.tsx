import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-100 text-black'>
      {/* Header */}
      <header className='flex justify-between items-center mb-12 bg-gray-200 px-20 py-5'>
        <div className='flex items-center gap-2 text-3xl font-bold text-green-800'>
          <Image src='/logo.png' alt='Spotter' width={32} height={32} />
          <h1 className='text-3xl font-bold text-[#008080]'>Spotter</h1>
        </div>
        <nav className='flex gap-8 text-sm text-gray-800'>
          <span>Product</span>
          <span>Use Cases</span>
          <span>Developers</span>
          <span>Resources</span>
          <span>Demo</span>
          <span>Pricing</span>
        </nav>
        <div className='flex gap-4 text-sm'>
          <button className='text-[#008080]'>Login</button>
          <button className='border border-[#008080] px-3 py-1 rounded'>
            Contact Sales
          </button>
          <button className='bg-[#008080] text-white px-3 py-1 rounded'>
            Get Started
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main className='flex gap-16 px-20 py-10'>
        {/* Left */}
        <div className='w-[60%] border rounded-xl px-12 py-14 border-gray-300'>
          <h1 className='text-4xl font-semibold leading-snug'>
            The internet&apos;s most{' '}
            <span className='text-[#008080]'>accurate</span> visitor identifier
          </h1>
          <p className='mt-4 text-gray-700 font-semibold'>
            Industry-leading accuracy that lasts for months or years, even when
            cookies are cleared.
          </p>
          <button className='mt-6 px-4 py-2 bg-gray-100 rounded border border-gray-300 text-sm'>
            Learn More
          </button>

          {/* Mock Graph */}
          <div className='mt-12 w-full h-48 relative'>
            {/* X Axis */}
            <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-gray-300' />

            {/* Graph lines (mocked with divs) */}
            <svg
              className='absolute inset-0'
              viewBox='0 0 400 150'
              preserveAspectRatio='none'
            >
              {/* Red line (high accuracy) */}
              <path
                d='M0,40 C50,45 100,42 150,46 C200,43 250,45 300,42 C350,44 400,43 400,43'
                stroke='#ff5c00'
                fill='none'
                strokeWidth='2'
              />
              {/* Blue line (drops) */}
              <path
                d='M0,42 C50,44 100,60 150,90 C200,100 250,105 300,108 C350,110 400,112 400,112'
                stroke='#6b7280'
                fill='none'
                strokeWidth='2'
              />
            </svg>

            <div className='absolute bottom-[-1.5rem] text-xs text-gray-500 w-full flex justify-between'>
              <span>0</span>
              <span>30</span>
              <span>60</span>
              <span>90</span>
              <span>120</span>
            </div>
            <div className='absolute left-[-6rem] bottom-1/2 text-xs rotate-[-90deg] text-gray-500'>
              ACCURACY DROPOFF
            </div>
            <div className='absolute bottom-[-3rem] left-1/2 text-xs text-gray-500 -translate-x-1/2'>
              DAYS AFTER INITIAL IDENTIFICATION
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='w-[40%] flex flex-col gap-6'>
          <div className='border rounded-xl p-5 shadow-sm border-gray-300'>
            <h2 className='font-semibold'>🔍 Any browser, any device.</h2>
            <p className='text-sm mt-1 text-gray-600'>
              Identify returning web and mobile app visitors on all browsers,
              iOS, and Android, with exceptional accuracy.
            </p>
          </div>

          <div className='border rounded-xl shadow-sm border-gray-300 overflow-hidden'>
            <img
              src='/pattern.jpg'
              alt='Pattern background'
              className='inset-0 w-full h-[150px] object-cover opacity-40 pointer-events-none'
            />
            <div className='p-5'>
              <h2 className='font-semibold'>
                🧠 Identify all anonymous visitors.
              </h2>
              <p className='text-sm mt-1 text-gray-600'>
                Get details on suspicious visitors even when VPN, incognito
                mode, or a tampered browser or device is used.
              </p>
            </div>
          </div>

          <div className='border rounded-xl p-5 shadow-sm border-gray-300'>
            <h2 className='font-semibold'>🎯 Delight your trusted users.</h2>
            <p className='text-sm mt-1 text-gray-600'>
              Personalize user experience and reduce 2FA and OTP requirements by
              identifying logged-out users.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
