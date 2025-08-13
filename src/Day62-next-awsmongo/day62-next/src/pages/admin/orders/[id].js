import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function AdminOrderDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // id가 있을 때만 API 호출
    if (id) {
      getDetailOrder();
    }
  }, [id]);

  // 상세 내용 불러오기
  const getDetailOrder = async () => {
    console.log('id값: ', id);
    try {
      setLoading(true);
      const res = await axios.get(`/api/admin/orders/${id}`);
      // console.log(res);
      setOrders(res.data);
    } catch (error) {
      console.log('error 발생: ', error);
    } finally {
      setLoading(false);
    }
  };

  // 상태에 따른 배지 스타일
  const getStatusBadge = (status) => {
    const statusStyles = {
      주문접수: 'bg-blue-100 text-blue-800 border-blue-200',
      배송준비: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      배송중: 'bg-purple-100 text-purple-800 border-purple-200',
      배송완료: 'bg-green-100 text-green-800 border-green-200',
      취소: 'bg-red-100 text-red-800 border-red-200',
      반품: 'bg-gray-100 text-gray-800 border-gray-200',
    };

    return statusStyles[status] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center space-y-4'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
          <p className='text-gray-600'>주문 정보를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen '>
      {/* 헤더 영역 */}
      <div className='bg-white shadow-sm border-b'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <Link
                href={'/admin/orders'}
                className='inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200'>
                <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                </svg>
                주문 목록으로 돌아가기
              </Link>
            </div>
            <div className='text-sm text-gray-500'>주문 ID: #{id}</div>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='bg-white rounded-lg shadow-sm border overflow-hidden'>
          {/* 제목 섹션 */}
          <div className='bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4'>
            <h1 className='text-2xl font-bold text-white flex items-center'>
              <svg className='w-6 h-6 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
              주문 상세 정보
            </h1>
          </div>

          {/* 주문 정보 */}
          {orders ? (
            <div className='p-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* 고객 정보 카드 */}
                <div className='bg-gray-50 rounded-lg p-4 border'>
                  <h3 className='text-lg font-semibold text-gray-800 mb-3 flex items-center'>
                    <svg className='w-5 h-5 mr-2 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                    고객 정보
                  </h3>
                  <div className='space-y-2'>
                    <p className='text-gray-700'>
                      <span className='font-medium'>고객명:</span>
                      <span className='ml-2 text-gray-900'>{orders.user}</span>
                    </p>
                  </div>
                </div>

                {/* 주문 상태 카드 */}
                <div className='bg-gray-50 rounded-lg p-4 border'>
                  <h3 className='text-lg font-semibold text-gray-800 mb-3 flex items-center'>
                    <svg className='w-5 h-5 mr-2 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    주문 상태
                  </h3>
                  <div className='space-y-2'>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusBadge(
                        orders.status
                      )}`}>
                      {orders.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* 상품 정보 섹션 */}
              <div className='mt-8'>
                <h3 className='text-lg font-semibold text-gray-800 mb-4 flex items-center'>
                  <svg className='w-5 h-5 mr-2 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
                    />
                  </svg>
                  상품 정보
                </h3>
                <div className='bg-white border rounded-lg overflow-hidden'>
                  <div className='px-6 py-4 bg-gray-50 border-b'>
                    <div className='grid grid-cols-3 gap-4 text-sm font-semibold text-gray-700'>
                      <div>상품명</div>
                      <div>수량</div>
                      <div>상태</div>
                    </div>
                  </div>
                  <div className='px-6 py-4'>
                    <div className='grid grid-cols-3 gap-4 items-center'>
                      <div>
                        <p className='font-medium text-gray-900'>{orders.product}</p>
                      </div>
                      <div>
                        <span className='inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-medium'>
                          {orders.quantity}개
                        </span>
                      </div>
                      <div>
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusBadge(
                            orders.status
                          )}`}>
                          {orders.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 액션 버튼 */}
              <div className='mt-8 flex flex-col sm:flex-row gap-3'>
                <button className='inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200'>
                  <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                    />
                  </svg>
                  주문 수정
                </button>
                <button className='inline-flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200'>
                  <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                  배송 처리
                </button>
                <button className='inline-flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200'>
                  <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                    />
                  </svg>
                  주문 취소
                </button>
              </div>
            </div>
          ) : (
            <div className='p-8 text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4'>
                <svg className='w-8 h-8 text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>주문을 찾을 수 없습니다</h3>
              <p className='text-gray-600 mb-4'>요청하신 주문 정보가 존재하지 않습니다.</p>
              <Link
                href={'/admin/orders'}
                className='inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200'>
                주문 목록으로 돌아가기
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
