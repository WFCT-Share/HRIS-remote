// ChatPage.js
import React from 'react';
import { Input, Button } from 'antd';

const ChatPage = () => {
  return (
    <div>
      <h2>AI 聊天窗口</h2>
      <div>
        {/* 聊天界面及相关功能 */}
        <div>这里是聊天界面</div>
        <Input placeholder="输入你的问题" />
        <Button type="primary">发送</Button>
        {/* 根据需求添加切换AI模式的按钮或其他功能 */}
      </div>
    </div>
  );
};

export default ChatPage;
