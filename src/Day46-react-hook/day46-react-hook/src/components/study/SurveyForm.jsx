import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import StepName from '../step/StepName';
import StepAge from '../step/StepAge';
import StepGender from '../step/StepGender';

export default function SurveyForm() {
  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md'>
      <h3 className='text-xl font-semibold text-gray-800 mb-6'>설문조사 폼(실습)</h3>
      <FormProvider {...methods}>
        <form className='space-y-4' onSubmit={methods.handleSubmit(onSubmit)}>
          <StepName />
          <StepAge />
          <StepGender />
          <button
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            type='submit'>
            제출
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
