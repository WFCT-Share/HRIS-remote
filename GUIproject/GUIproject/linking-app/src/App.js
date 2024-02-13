import React, { useState } from 'react';
import { Layout, Menu,Button,Modal} from 'antd';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import 'antd'; // 修改了导入样式的路径
import logo from './assets/images/logo3.svg';
import ChatInterface from './ChatInterface.js';


const { Header, Content, Footer } = Layout;

// 定义首页组件
const HomePage = () => {
  // 设置首页的样式
  const style = {
    color: '#4A90E2', // 设定字体颜色为深湖蓝色
    fontSize: '30px', // 设定字体大小
    fontWeight: 'bold', // 字体加粗
    textAlign: 'left', // 文本左对齐
    margin: '20px 0 0 20px', // 设定边距
  };
  return <div style={style}>欢迎使用智链人事！为您量身定制的私人AI-HR</div>;
};

// 定义其他页面组件
const ProductsPage = () => {
  // Modal的状态和控制函数
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = () => {
    setIsModalVisible(true);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const containerStyle = {
    display: 'flex',        // 启用 flex 布局
    flexDirection: 'column', // 子元素垂直排列
    alignItems: 'center',    // 水平居中对齐
    justifyContent: 'center', // 垂直居中对齐
    height: '40vh',         // 容器高度，视情况可调整或删除
    padding: '20px',        // 容器内边距，视情况可调整或删除
    };
  const titleStyle = {
    color: '#4A90E2', // 设定字体颜色为深湖蓝色
    fontSize: '30px', // 设定字体大小
    fontWeight: 'bold', // 字体加粗
    margin: '20px 0', // 保持原有的上下边距
    };

      ;
      // 设置按钮区域的样式
  const buttonsContainerStyle = {
    display: 'flex',        // 启用 flex 布局
    justifyContent: 'center', // 水平居中
    alignItems: 'center',    // 垂直居中
    flexDirection: 'column', // 子元素垂直排列
    height: '100%',         // 容器高度（根据需要调整）
    margin: '20px 0',       // 上下边距
      };
      // 设置按钮的样式
  const buttonStyle = {
    padding: '5px 20px', // 按钮内边距（根据需要调整以改变大小）
    margin: '10px 0',     // 按钮之间的边距
    fontSize: '16px',     // 字体大小（根据需要调整）
      };
      return (
        <div style={containerStyle}>
          <div style={titleStyle}>您已购买的功能</div>
          <div style={buttonsContainerStyle}>
            <Button type="primary" style={buttonStyle} onClick={showModal}>基础服务</Button>
            <Button style={buttonStyle}>您的个性化拓展板块</Button>
          </div>
          <Modal title="AI 聊天窗口" visible={isModalVisible} onCancel={handleCancel} footer={null}>
            {/* 将聊天界面组件放置在这里 */}
            <ChatInterface />
          </Modal>
        </div>
          
      );
    
};
const ServicesPage = () => <div>这里是产品中心内容</div>;
const CasesPage = () => <div>这里是开发服务内容</div>;
const FeaturePage = () => <div>这里是实际案例剖析内容</div>;
const AboutPage = () => <div>这里是关于我们的信息内容</div>;
const AccountPage = () => <div>这里是我的账户信息内容</div>;

// 定义菜单组件
const AppMenu = () => {
  const location = useLocation(); // 使用 useLocation 钩子获取当前路由位置
  const selectedKeys = location.pathname === '/' ? ['1'] : [location.pathname];

  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={selectedKeys}
    style={{ lineHeight: '64px', display: 'flex', justifyContent: 'flex-end', 
    marginRight: '130px', // 添加右边距来推移菜单项
    width: 'calc(100% - 130px)' // 调整菜单宽度以适应右边距，防止溢出
  }}>
      <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
      <Menu.Item key="/products"><Link to="/products">功能</Link></Menu.Item>
      <Menu.Item key="/services"><Link to="/services">产品中心</Link></Menu.Item>
      <Menu.Item key="/cases"><Link to="/cases">开发服务</Link></Menu.Item>
      <Menu.Item key="/features"><Link to="/features">实际案例剖析</Link></Menu.Item>
      <Menu.Item key="/about"><Link to="/about">关于</Link></Menu.Item>
      <Menu.Item key="/account"><Link to="/account">我的账户</Link></Menu.Item>
    </Menu>
  );
};

// 应用主组件
function App() {
  return (
    <Router>
      <Layout>
        <Header style={{ width: '100%', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <img src={logo} alt="Logo" style={{ maxHeight: '64px',marginLeft: '450px'}} />
          </div>
          <AppMenu />
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/features" element={<FeaturePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
