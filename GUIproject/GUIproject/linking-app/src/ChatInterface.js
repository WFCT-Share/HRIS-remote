import React, { useState, useEffect, useRef } from 'react';
import { Input, Button } from 'antd';
import './ChatStyles2.css'; // 引入CSS样式
// fakeAIResponse函数，返回一个模拟的AI响应
const fakeAIResponse = async (userInput) => {
  // 假设根据用户输入返回一个模拟响应字符串
  return `这是对"${userInput}"的模拟回答。`;
};

// 假设我们有一个AI聊天API的函数
async function fetchAIResponse(message) {
  // 使用fakeAIResponse函数模拟API调用
  const response = await fakeAIResponse(message);
  return response; // 确保这里返回的是字符串
}

// 聊天消息组件
const ChatMessage = ({ message, isUser }) => (
  <div style={{ textAlign: isUser ? 'right' : 'left', padding: '5px' }}>
    <div style={{ 
      display: 'inline-block', 
      padding: '10px', 
      borderRadius: '10px', 
      background: isUser ? '#4A90E2' : '#f0f0f0', 
      color: isUser ? 'white' : 'black', 
      maxWidth: '60%' 
    }}>
      {message}
    </div>
  </div>
);

// 聊天界面组件
const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    const trimmedInput = inputValue.trim();
    if (trimmedInput) {
      // 添加用户消息
      setMessages([...messages, { message: trimmedInput, isUser: true }]);
      setInputValue('');

      // 获取AI回复
      const aiResponse = await fetchAIResponse(trimmedInput);
      // 添加AI回复消息
      setMessages(messages => [...messages, { message: aiResponse, isUser: false }]);
    }
  };
  useEffect(() => {
    const handle = document.querySelector('.resize-handle');
    const chatContainer = document.querySelector('.chat-container');
  
    let startX, startY, startWidth, startHeight;
  
    const onMouseDown = (e) => {
      startX = e.clientX;
      startY = e.clientY;
      startWidth = parseInt(document.defaultView.getComputedStyle(chatContainer).width, 10);
      startHeight = parseInt(document.defaultView.getComputedStyle(chatContainer).height, 10);
      document.documentElement.addEventListener('mousemove', onMouseMove);
      document.documentElement.addEventListener('mouseup', onMouseUp);
    };
  
    const onMouseMove = (e) => {
      chatContainer.style.width = startWidth + e.clientX - startX + 'px';
      chatContainer.style.height = startHeight + e.clientY - startY + 'px';
    };
  
    const onMouseUp = () => {
      document.documentElement.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseup', onMouseUp);
    };
  
    handle.addEventListener('mousedown', onMouseDown);
  
    return () => {
      handle.removeEventListener('mousedown', onMouseDown);
    };
  }, []);
  
  return (
    <div className="chat-container"> {/* 应用样式类 */}
    <div className="resize-handle"></div>
    <div style={{ height: '60vh', display: 'flex', flexDirection: 'column' }}>
      <div id="chat-messages" style={{ flex: 1, overflow: 'auto', padding: '10px' }}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.message} isUser={msg.isUser} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ display: 'flex', padding: '10px' }}>
        <Input
          style={{ marginRight: '10px', flex: 1 }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleSendMessage}
          placeholder="输入你的问题"
        />
        <Button type="primary" onClick={handleSendMessage}>发送</Button>
        
         </div>

      </div>
    </div>
    
  );
};

// 正确的导出方式
export default ChatInterface; // 默认导出ChatInterface组件
// 不需要再次导出ChatInterface，移除 export { ChatInterface }; 行