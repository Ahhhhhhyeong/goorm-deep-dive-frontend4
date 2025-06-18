import React from 'react';
//index.css => 커스텀한 css 추가
//셋팅이 필요ㅠ
export default function OverView() {
  return (
    <main className='box-content h-[45rem]'>
      <section className='h-full '>
        <article
          className='flex flex-row items-end  rounded-2xl
          h-full bg-cover bg-center bg-blend-soft-light
        bg-[url(https://images.pexels.com/photos/1525039/pexels-photo-1525039.jpeg)] 
        bg-no-repeat '>
          <section className='grow-2 text-white m-6'>
            <h2 className='text-wrap w-1/2 text-4xl/13'>
              Your Private Sanctuary Awaits
            </h2>
            <p className='text-wrap w-2/3 text-sm mt-5 mb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              quae atque sapiente sequi vel labore cumque perspiciatis at magnam
              nam iste consectetur, velit, aliquid, nobis facilis itaque.
              Repellat, eum dolore?
            </p>
            <button className='text-center w-40 p-3 bg-white rounded-full font-medium text-black'>
              Booking Now
            </button>
          </section>
          <section className='grow-1 w-3/10 m-6 text-wrap text-white text-[12px] '>
            <article className='p-4 border border-whit rounded-lg backdrop-blur-sm'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
            <article className='p-4 my-3 border border-white rounded-lg backdrop-blur-sm'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
            <article className='p-4 border border-white rounded-lg backdrop-blur-sm'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
          </section>
          <section className='grow-1 w-3/10 p-4 m-6 border border-white rounded-lg text-white text-wrap backdrop-blur-sm'>
            <img
              className='overflow-hidden w-full h-6/10'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjfUaxpXDPZpM1gjkKytKdzJebfvafCheKUQ&s'
              alt=''
            />
            <p className='text-[12px] my-4 font-semibold'>
              We Believe True Indulgence is Personal
            </p>
            <p className='text-[10px] font-light'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              rerum quidem sed ex dignissimos fugit consectetur commodi
            </p>
          </section>
        </article>
      </section>
    </main>
  );
}
