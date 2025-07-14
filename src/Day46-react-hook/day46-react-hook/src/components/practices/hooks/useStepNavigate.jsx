import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function useStepNavigate() {
  const navigate = useNavigate();
  const { trigger } = useFormContext();

  const goToNext = async (nextPath, fieldsToValidate) => {
    if (fieldsToValidate) {
      const isValid = await trigger(fieldsToValidate);
      if (!isValid) return; // 검증 실패
    }
    navigate(nextPath);
  };

  const goToPrev = (prevPath) => {
    navigate(prevPath);
  };

  return { goToNext, goToPrev };
}
