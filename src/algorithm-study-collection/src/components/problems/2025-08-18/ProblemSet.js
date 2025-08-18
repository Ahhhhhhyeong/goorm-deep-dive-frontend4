import ProblemOne from './ProblemOne';
import ProblemTwo from './ProblemTwo';

export default function ProblemSet20250818() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='border p-4 bg-white rounded shadow'>
        <h3 className='text-lg font-bold mb-2'>문제 1: 할인 행사</h3>
        <ProblemOne />
      </div>
      <div className='border p-4 bg-white rounded shadow'>
        <h3 className='text-lg font-bold mb-2'>문제 2: 괄호 회전하기 </h3>
        <ProblemTwo />
      </div>
    </div>
  );
}
