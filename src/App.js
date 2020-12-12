import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import AppHeader from './component/common/AppHeader';
import AppFooter from './component/common/AppFooter';
import Home from './views/Home';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Home></Home>
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
