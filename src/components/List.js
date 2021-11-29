import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../stores';
import InfiniteScroll from 'react-infinite-scroll-component';
import { List, Skeleton, Divider } from 'antd';
import styled from 'styled-components';

const Img = styled.img`
  width: 100px;
  height: 100px;
  bject-fit: contain;
  border: 1px solid #eee;
`;
const Div = styled.div`
  margin: 0 20px;
`;

const Component = observer(() => {
  const { HistoryStore } = useStores()

  const loadNext = () => {
    HistoryStore.find()
  }
  useEffect(() => {
    loadNext();
    return () => { HistoryStore.reset() };
  }, []);
  return (
    <div id="scrollableDiv"
      style={{
        height: 500,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
        borderRadius: '4px',
      }}
    >
      <InfiniteScroll
        loader={HistoryStore.isLoading && HistoryStore.hasMore && <Skeleton avatar paragraph={{ rows: 1 }} active />}
        next={loadNext}
        dataLength={10}
        hasMore={!HistoryStore.isLoading&&HistoryStore.hasMore}
        endMessage={<Divider plain>以上是你所有的图片，下面没有咯 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={HistoryStore.list}
          renderItem={item => (
            <List.Item key={item.cid}>
              <Div>
                <Img src={item.attributes.url.attributes.url} alt="" />
              </Div>
              <Div>
                <h5>{item.attributes.filename}</h5>
              </Div>
              <Div>
                <a target='_blank'rel="noreferrer" href={item.attributes.url.attributes.url}>{item.attributes.url.attributes.url}</a>
              </Div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  )
})

export default Component
