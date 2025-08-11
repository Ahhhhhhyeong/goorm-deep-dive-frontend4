import ProblemOne from './ProblemOne';
import ProblemTwo from './ProblemTwo';

export default function ProblemSet20250811() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='border p-4 bg-white rounded shadow'>
        <h3 className='text-lg font-bold mb-2'>문제 1: 피보나치 수</h3>
        <ProblemOne />
      </div>
      <div className='border p-4 bg-white rounded shadow'>
        <h3 className='text-lg font-bold mb-2'>문제 2: 카펫 </h3>
        <ProblemTwo />
      </div>
    </div>
  );
}
