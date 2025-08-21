interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

export type TodoPreview = Omit<Todo, 'description'>;

// function 함수명(입력): 반환 타입( Array<Omit<Todo,"description">>)
