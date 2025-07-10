export async function FetchTodo() {
  //API 통신
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  if (!response.ok) {
    throw new Error('데이터 불러오기 실패');
  }

  const data = await response.json();
  return data;
}
