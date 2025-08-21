interface Person {
  name: string;
  age: number;
  address: string;
}

const person1: Person = {
  name: 'shami',
  age: 22,
  address: '부산시 북구',
};

const person2: Partial<Person> = {
  name: 'Bob',
};

const person3: Partial<Person> = {
  address: '경기도 화성시 동탄',
};

const person4: Partial<Person> = {
  // 모두 생략 가능합니다.
};

// 실제 실무에서는 함수에서 많이 사용한다.
// DB에 있는 기존 사용자 정보와 업데이트 내용을 병합
// 어떤 사람은 핸드폰번호만 변경 , 어떤 사람은 주소만 변경 , 어떤사람은 주민번호변경할 수있다
// 비밀번호랑 이메일만 변경
function updatePerson(id: number, updates: Partial<Person>) {
  const ex = { id, name: 'seohee', address: '서울시 종로구' };
  const updatedPerson = { ...ex, ...updates };

  return updatedPerson;
}
const person5 = updatePerson(1, { address: '서울시 강남구 삼성동' });
// 함수가 실행 됬을 때 address만 변경한다.
