import ProblemOne from './ProblemOne';
import ProblemTwo from './ProblemTwo';

export default function ProblemSet20250812() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='border p-4 bg-white rounded shadow'>
        <h3 className='text-lg font-bold mb-2'>문제 1: 점프와 순간 이동</h3>
        <ProblemOne />
      </div>
      <div className='border p-4 bg-white rounded shadow'>
        <h3 className='text-lg font-bold mb-2'>문제 2: 구명보트 </h3>
        <ProblemTwo />
      </div>
    </div>
  );
}
