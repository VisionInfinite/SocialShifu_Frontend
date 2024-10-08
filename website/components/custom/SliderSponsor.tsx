import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeSlider = () => {
  const channels = [
    { name: 'What If', subscribers: '7.9M', image: 'https://yt3.googleusercontent.com/vEyXbBHsIUVbamUE1Px8ShJvMFqBQz1w0fVzFNViZpXspsoERAWq94juSk_1bLj8zUpwD40AcQo=s160-c-k-c0x00ffffff-no-rj' },
    { name: 'Jenny Hoyos', subscribers: '4M', image: 'https://yt3.googleusercontent.com/6_E7rK9fLMC4czImyXKRBwmda-R-pzXLJCWsyuq6_WXHwDRpacqXozd4aHvhQO6yY5Xdwdvt=s160-c-k-c0x00ffffff-no-rj' },
    { name: 'Linguamarina', subscribers: '8.52M', image: 'https://yt3.googleusercontent.com/ytc/AIdro_khZgrqVTSi_R9eAk5-MokIr5gBW9PjcqW0rCWne8eiRQ=s160-c-k-c0x00ffffff-no-rj' },
    { name: 'TwoSetViolin', subscribers: '4.3M', image: 'https://yt3.googleusercontent.com/ytc/AIdro_mHmmJdteY-heit7Ock09VJ1cy_L9nI6Xx-Js1fAu75kb8=s160-c-k-c0x00ffffff-no-rj' },
    { name: 'Jon Youshaei', subscribers: '435K', image: 'https://yt3.googleusercontent.com/jiH-hkCKaWKt73eiZWe1HiLYYlsiFzWsrqxw7gt10Z6x-xNxvX4dkx_f8n_xTEGxtntH619Mvfg=s160-c-k-c0x00ffffff-no-rj' },
    { name: 'Armchair Historian', subscribers: '2.2M', image: 'https://yt3.googleusercontent.com/ytc/AIdro_nQXesjV-4llhRkigSh8gqKrgEotwgB33tJanBKfJ3F9go=s160-c-k-c0x00ffffff-no-rj' },
    { name: 'Valuetainment', subscribers: '6M', image: 'https://yt3.googleusercontent.com/ytc/AIdro_m8k9-w93UgQgDTNDD4CjCCroRV_GQqEjEC2997mYKSiNw=s160-c-k-c0x00ffffff-no-rj' },
    { name: 'Grant Cardone', subscribers: '4.8M', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSA22QCIes_MlK5r1VAeb2v_Gjg4VOgndSsoh8BjyQKEVtIz4Xp' },
    { name: 'SaaStr', subscribers: '63K', image: 'https://media.licdn.com/dms/image/v2/D560BAQH6Bo8or3KB_Q/company-logo_200_200/company-logo_200_200/0/1723239682869/saastr_logo?e=1736380800&v=beta&t=qGhRS6U_QGH8jiUFnDfq3r0gbUCRQglnWv2s3NzkY84' },
    { name: 'Sebastien Jefferies', subscribers: '422K', image: 'data:image/jpeg;base64,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' },
 { name: '  FLAGRANT', subscribers: '1.5M', image: 'https://yt3.ggpht.com/8ubfGsVUJdRN1-j8QeAMR_Keqh_mbqZIU0P5ntrXqnxQ7M2efiiVtQ5PCq__Q28lNsS2xu6rpjM=s88-c-k-c0x00ffffff-no-rj' },
    { name: 'Mai Pham', subscribers: '3.3M', image: 'https://yt3.googleusercontent.com/EgfYDHhIPJVHATlHrOZftKrvi-ok4EjZKMRTHiohc6vWZemzxeUTaJG-oMTR3mRGD9p4mSXKvQ=s160-c-k-c0x00ffffff-no-rj' },
];

const brands = [
    {
      name: 'Apple',
      logo: 'https://cdn.brandfetch.io/apple.com/w/419/h/512/theme/light/logo',
    },
    {
      name: 'Amazon',
      logo: 'https://cdn.brandfetch.io/amazon.com/w/512/h/154/theme/light/logo',
    },
    {
      name: 'Microsoft',
      logo: 'https://cdn.brandfetch.io/microsoft.com/w/400/h/400/logo',
    },
    {
      name: 'Google',
      logo: 'https://cdn.brandfetch.io/google.com/w/512/h/161/logo',
    },
    {
      name: 'Walmart',
      logo: 'https://cdn.brandfetch.io/walmart.com/w/512/h/124/logo',
    },
    {
      name: 'ExxonMobil',
      logo: 'https://cdn.brandfetch.io/exxonmobil.com/w/512/h/97/theme/light/logo',
    },
    {
      name: 'Berkshire Hathaway',
      logo: 'https://cdn.brandfetch.io/berkshirehathaway.com/w/512/h/39/logo',
    },
    {
      name: 'Facebook (Meta)',
      logo: 'https://cdn.brandfetch.io/facebook.com/w/512/h/100/logo',
    },
    {
      name: 'Pfizer',
      logo: 'https://cdn.brandfetch.io/pfizer.com/w/512/h/211/theme/light/logo',
    },
    {
      name: 'Procter & Gamble',
      logo: 'https://cdn.brandfetch.io/pg.com/w/512/h/512/theme/light/logo',
    },
    {
      name: 'Visa',
      logo: 'https://cdn.brandfetch.io/visa.com/w/512/h/166/logo',
    },
    {
      name: 'JPMorgan Chase',
      logo: 'https://cdn.brandfetch.io/jpmorganchase.com/w/512/h/73/theme/light/logo',
    },
    {
      name: 'Nvidia',
      logo: 'https://cdn.brandfetch.io/nvidia.com/w/512/h/95/theme/light/logo',
    },
  ];
  

  const YouTubeLogo = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" className="absolute p-[3px] scale-110 flex justify-center items-center bottom-0 right-0 rounded-full bg-black">
      <path fill="#FFFFFF" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );



  return (
   <div> <div className="w-full bg-transparent text-white mb-16">
      <Marquee
        pauseOnClick
        pauseOnHover
        gradient={true}
        gradientColor="black" // Black color
        gradientWidth={100} 
        speed={50}
        className="mt-4 mb-10"
      >
        {channels.map((channel, index) => (
          <div key={index} className="flex flex-col items-center mx-11 relative">
            <div className="relative w-16 h-16">
              <img
                src={channel.image}
                alt={channel.name}
                className="w-16 h-16 rounded-full"
              />
              <YouTubeLogo />
            </div>
            <p className="font-semibold text-sm mt-2">{channel.name}</p>
            <p className="text-xs text-gray-400">{channel.subscribers}</p>
          </div>
        ))}
      </Marquee>
      
      <Marquee
        pauseOnClick
        pauseOnHover
        gradient={true}
        gradientColor="black" // Black color
        gradientWidth={100} 
        speed={40}
        direction="right"
        className="mt-14 mb-4"
      >
        {brands.map((brand, index) => (
          <div key={index} className="mx-10 flex items-center justify-center">
        <img src={brand.logo} alt={brand.name} className="h-10 w-38" />
          
          </div>
        ))}
      </Marquee>
    </div></div> 
  
  );
};

export default MarqueeSlider;