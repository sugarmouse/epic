import React from 'react';
import { useStores } from '../stores/index';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const Warning = styled.div`
  background: orange;
  padding: 10px;
  margin: 10px 0;
  color: #fff;
  border-radius: 4px;
`;
const Hello = styled.div`
  background: #0073bf;
  padding: 10px;
  margin: 10px 0;
  color: #fff;
  border-radius: 4px;
`;

const SayHello = observer(()=>{
  const { UserStore } = useStores();
  return (
    <Hello>Hello {UserStore.currentUser.attributes.username}</Hello>
  )
})

const Component = observer(() => {
  const { UserStore } = useStores();
  return(
    <>
      {UserStore.currentUser?<SayHello/>:<Warning>请先登陆再上传 </Warning>}
    </>
  )
});

export default Component;

// return (
//     <>
//     {UserStore.currentUser ? <Hello>Hello {UserStore.currentUser.attributes.username}<Hello /> : <Warning>请先登陆再上传 </Warning>}
//     </>
//   );