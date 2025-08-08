import WriteForm from '@/components/WriteForm';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <h1>Post 요청</h1>
      <WriteForm />
    </div>
  );
}
