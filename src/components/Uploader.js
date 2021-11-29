import React, { useRef } from 'react';
import { useStores } from '../stores/index';
import { observer, useLocalStore } from 'mobx-react';
import { Upload, message, Spin } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';


const Result = styled.div`
  margin-top: 30px;
  border: 1px dashed #ccc;
  padding: 20px;
`;
const H1 = styled.h1`
  margin: 20px 0;
  text-align: center;
`;
const Image = styled.img`
  max-width: 300px;
`;

const Component = observer(() => {
  const { UserStore, ImgStore } = useStores();
  const { Dragger } = Upload;
  const refWidth = useRef();
  const refHeight = useRef();



  const store = useLocalStore(() => ({
    width: null,
    setWidth(width) {
      store.width = width;
    },
    get widthStr() {
      return store.width ? `/w/${store.width}` : '';
    },

    height: null,
    setHeight(height) {
      store.height = height;
    },
    get heightStr() {
      return store.height ? `/h/${store.height}` : '';
    },
    get thumbnailImgUrl() {
      return ImgStore.serverFile.attributes.url.attributes.url + '?imageView/2' + store.widthStr + store.heightStr + '/q/100/format/png'
    }
  }))
  const bindWidthChange = () => {
    store.setWidth(refWidth.current.value)
  }
  const bindHeightChange = () => {
    store.setWidth(refHeight.current.value)
  }

  const props = {
    showUploadList: false,
    beforeUpload: file => {
      ImgStore.setFile(file);
      ImgStore.setFilename(file.name);
      if (UserStore.currentUser === null) {
        message.warning('请先登陆再上传');
        return false;
      }
      if (!/(png$)|(svg$)|(jpg$)|(jpeg$)|(gif$)/ig.test(file.type)) {
        message.error('只能上传 svg/png/jpg/gif 格式的图片')
        return false;
      }
      if (file.size > 1024 * 1024) {
        message.error('文件大小不能超过 1M');
        return false;
      }
      // 增加文件类型、文件大小判断
      ImgStore.upload()
        .then((serverFile) => {
          message.info('图片上传成功')
        }).catch(err => {
          message.error('图片上传失败')
        });
      return false;
    }
  };

  return (
    <div>
      <Spin tip='上传中' spinning={ImgStore.isUploading}>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击或者拖拽上传图片</p>
          <p className="ant-upload-hint">
            仅支持 .png/.gif/.jpg/.svg 格式图片，图片最大 1M
          </p>
        </Dragger>
      </Spin>

      {
        ImgStore.serverFile ? <Result>
          <H1>上传结果</H1>
          <dl>
            <dt>线上地址</dt>
            <dd><a target='_blank' rel="noreferrer" href={ImgStore.serverFile.attributes.url.attributes.url}>{ImgStore.serverFile.attributes.url.attributes.url}</a></dd>
            <dt>文件名</dt>
            <dd>{ImgStore.filename}</dd>
            <dt>文件预览</dt>
            <dd>
              <Image src={ImgStore.serverFile.attributes.url.attributes.url} alt="加载失败" />
            </dd>
            <dt>尺寸</dt>
            <dd>
              <input ref={refWidth} onChange={bindWidthChange} placeholder="最大宽度（可选）" />
              <input ref={refHeight} onChange={bindHeightChange} placeholder="最大高度（可选）" />
            </dd>
            <dd><a target='_blank' rel="noreferrer" href={store.thumbnailImgUrl}>{store.thumbnailImgUrl}</a></dd>
          </dl>
        </Result> : null
      }
    </div>

  );
})


export default Component