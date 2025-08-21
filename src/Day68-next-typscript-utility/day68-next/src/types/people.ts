/** ?를 왜 쓰는지?
 * 실제 운용하는 서버에서 데이터를 불러오기 전 상태에서는 id와 이름이 없을 수 있음
 * 서버에서 다 불러온 뒤에는 id와 name이 반드시 존재해야함!
 *  => Required 는 이때 사용!!!
 */
interface UserData {
  id?: number;
  name?: string;
}

// ?를 사용할시 아래처럼 원하는 값만 넣어도 되었다.
const u1: UserData = {};
const u2: UserData = { id: 2 };
const u3: UserData = { name: 'minsu' };

// 하지만 required를 해두면 ?를 사용해도 무조건 추가가 되어야함
type FullUserData = Required<UserData>;
