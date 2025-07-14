import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { NavItem } from './NavItem';

export default function InterviewForm() {
  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md'>
      <h3 className='text-xl font-semibold text-gray-800 mb-6'>면접 지원 폼</h3>
      <FormProvider {...methods}>
        <form className='space-y-4' onSubmit={methods.handleSubmit(onSubmit)}>
          <nav className='flex space-x-4 mb-6'>
            <NavItem to='notice-1'>❶ 기본정보</NavItem>
            <NavItem to='notice-2'>❷ 희망부서</NavItem>
            <NavItem to='notice-3'>❸ 경력 유무</NavItem>
            <NavItem to='notice-4'>❹ 자기소개</NavItem>
          </nav>
          <Outlet context={{ onSubmit }} />
        </form>
      </FormProvider>
    </div>
  );
}
