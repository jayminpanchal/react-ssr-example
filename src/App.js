import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import logo from './logo.svg';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
        <Layout className="layout">
            <Header>
              <div className="logo" style={{ width: 120,float: 'left'}}>
                <img src={logo} alt="logo" style={{ width: 90}}/>
              </div>
              <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
                <Menu.Item key="1">
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/contact">Contact</Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content>
              <div style={{minHeight:520,background: '#fafafa'}}>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              ©2017 Created by Jaymin Panchal
            </Footer>
        </Layout>
    );
  }
}

export default App;
