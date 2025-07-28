import ButtonClsx from './components/clsxTest/ButtonClsx';
import ClsxTest1 from './components/clsxTest/ClsxTest1';
import TeamCard from './components/TeamCard/TeamCard';
import TeamCard2 from './components/TeamCard2/TeamCard2';
import members from './data/members';

function App() {
  return (
    <>
      {/* {members.map((member) => (
        // <TeamCard key={member.id} name={member.name} role={member.role} image={member.image} />
        <TeamCard2 key={member.id} image={member.image} name={member.name} role={member.role} level={member.level} />
      ))} */}
      <ClsxTest1 />
    </>
  );
}

export default App;
/*
요즘 서버사이드 렌더링이 대세가 됨

*/
