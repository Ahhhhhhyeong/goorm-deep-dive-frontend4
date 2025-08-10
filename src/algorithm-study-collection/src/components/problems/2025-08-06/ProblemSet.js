import ProblemOne from './ProblemOne';

export default function ProblemSet20250806() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='border p-4 bg-white rounded shadow'>
        <h3 className='text-lg font-bold mb-2'>문제 1: 숫자의 표현</h3>
        <ProblemOne />
      </div>
      {/* <div className='border p-4 bg-white rounded shadow'>
        <h3 className='text-lg font-bold mb-2'>문제 2: 짝지어 제거하기</h3>
        <ProblemTwo />
      </div> */}
    </div>
  );
}
