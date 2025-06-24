import React, { useState } from 'react';
import ProductInfo from '../components/ProductInfo';
import ProductSelect from '../components/ProductSelect';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

/**d Application Error!
(intermediate value)() is undefined */
export default function Product() {
  // context나 한 곳에서 이벤트 처리를 할 수 있게 or 클래스
  const [selected, setSelectedOption] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  function handleAddToCart(prd) {
    console.log('click!!', prd);
    console.log(selected);
    console.log(quantity);

    if (!selected || quantity < 1) return;

    const label = selected == prd.membersPrice ? `[켈리멤버스] ${prd.title}` : prd.title;

    const item = {
      id: prd.title,
      title: label,
      price: Number(selected),
      quantity: Number(quantity),
    };

    addToCart(item);
    alert('장바구니에 추가되었습니다!');
    navigate('/cart');
  }

  return (
    <div className='flex justify-center items-center shadow-lg  bg-white '>
      <section>
        <figure>
          <img
            className=''
            src='https://product-image.kurly.com/hdims/resize/%5E%3E720x%3E936/cropcenter/720x936/quality/85/src/product/image/c4d41015-d188-4c68-b3e9-36968bf2110a.jpeg'
            alt='제품 이미지'
          />
        </figure>
        <article>
          <figure></figure>
          <div>
            <p>브랜드관</p>
            <p>사미헌 ＞</p>
            <p>부산 서면의 소고기 명가</p>
          </div>
        </article>
      </section>
      {productInfo.map((prd, index) => (
        <section key={index}>
          <article>
            <span className='text-xs font-bold text-zinc-500'>
              {prd.ship} ｜ {prd.seller}＞
            </span>
          </article>
          <article className='flex justify-between'>
            <div>
              <h4 className='text-2xl font-bold'>{prd.title}</h4>
              <p className='text-sm text-zinc-500'>{prd.subtitle}</p>
            </div>
            <figure>
              <div className='border-1 border-zinc-400 rounded-full p-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-share'
                  viewBox='0 0 16 16'>
                  <path d='M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3' />
                </svg>
              </div>
            </figure>
          </article>
          <article className='mt-4'>
            <span className='text-2xl font-bold text-red-400'>{prd.off}%</span>
            <span className='text-2xl font-bold ml-2'>{prd.membersPrice.toLocaleString()}</span>
            <span>원~</span>
            <p className='text-sm text-zinc-400 line-through'>{prd.originPrice.toLocaleString()}원</p>
            <h2 className='text-2xl'>원산지: 상품설명/상세정보 참조</h2>
          </article>
          <article>
            <table className='table-auto'>
              <tbody>
                <ProductInfo
                  title={'배송'}
                  content={prd.ship}
                  subContent={'23시 전 주문 시 수도권/충청 내일 아침 7시 전 도착\n(그 외 지역 아침 8시 전 도착)'}
                />
                <ProductInfo title={'판매자'} content={prd.seller} />
                <ProductInfo
                  title={'포장타입'}
                  content={prd.package}
                  subContent={'택배배송은 에코 포장이 스티로폼으로 대체됩니다.'}
                />
                <ProductInfo title={'판매단위'} content={prd.sellMount} />
                <ProductInfo title={'중량/용량'} content={prd.sellKg} />
                <ProductInfo title={'알레르기정보'} content={prd.allerge} />
                <ProductInfo title={'안내사항'} content={prd.infomation} />
                <tr className='align-top pr-4 text-base text-zinc-600 font-semibold'>
                  <td>구매 수량</td>
                  <td>
                    <ProductSelect
                      prd={prd}
                      onSelectChange={(val) => setSelectedOption(val)}
                      onQuantityChange={(val) => setQuantity(Number(val))}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article></article>
          <section className='mt-5'>
            <h4 className='mb-4 text-right'>
              <span>총 상품금액</span>
              <span className='text-2xl font-bold'>{(selected * quantity).toLocaleString()}</span>
              <span>원</span>
            </h4>
            <button onClick={() => handleAddToCart(prd)} className='bg-purple-500 text-white px-4 py-1 rounded w-full'>
              장바구니 담기
            </button>
          </section>
        </section>
      ))}
    </div>
  );
}

const productInfo = [
  {
    title: '[사미헌] 갈비탕',
    subtitle: '진짜 갈비로 우려낸 전통 갈비탕',
    originPrice: 13000,
    offPrice: 11700,
    membersPrice: 11050,
    off: 15,
    ship: '샛별배송',
    seller: '컬리',
    package: '냉동 (종이포장)',
    sellMount: '1팩',
    sellKg: '1Kg',
    allerge: '소고기,대두,밀,우유 함유',
    infomation: '뼈조각이 있을 수 있으니 섭취시 주의부탁드립니다.',
  },
];
