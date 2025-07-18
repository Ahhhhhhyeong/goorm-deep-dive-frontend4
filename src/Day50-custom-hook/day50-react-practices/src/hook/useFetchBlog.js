import { useQuery } from '@tanstack/react-query';

// 검색 타입에 따른 URL 생성 함수
const getSearchUrl = (searchType, searchTerm) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  // 검색 타입에 따라 다른 파라미터 적용
  switch (searchType) {
    case 'detail':
      return `${baseUrl}/${searchTerm}`;
    default:
      return baseUrl;
  }
};

// fetch 함수
export async function fetchPosts(searchType, searchTerm) {
  const url = getSearchUrl(searchType, searchTerm);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('검색에 실패했습니다.');
  }

  const json = await response.json();
  return json;
}

// 커스텀 훅
export function usePostQuery({ searchType, searchTerm }) {
  let actualId;
  if (searchType === 'detail') {
    // searchTerm이 객체인 경우와 문자열인 경우 모두 처리
    actualId = typeof searchTerm === 'object' ? searchTerm.id : searchTerm;
  }

  return useQuery({
    queryKey: ['posts', searchType, actualId || searchTerm], // 검색 타입과 검색어 모두 키에 포함
    queryFn: () => fetchPosts(searchType, searchTerm),
    enabled: true, // 항상 활성화 (검색어 없으면 전체 조회)
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
  });
}
