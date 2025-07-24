import { useState } from 'react';

/**
 // 입력필드의 값 관리
 // 검색어 값 관리
 // 입력 필드의 onChange 
 */

export function useInputWithSearch() {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchTerm(value);
    console.log(inputValue);
  };

  /* 입력필드 초기화 할일 추가 후 초기화 */
  const resetInput = () => {
    setInputValue('');
    setSearchTerm('');
  };

  // 검색어만 입력할 때
  const resetSearchTerm = () => {
    setSearchTerm('');
  };
  return {
    inputValue,
    setInputValue,
    searchTerm,
    setSearchTerm,
    handleInputChange,
    resetInput,
    resetSearchTerm,
  };
}
