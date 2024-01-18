import React from 'react';
import { Layout } from 'antd';
import CopyForm from './components/CopyForm';
import Preview from './components/Preview';
import { Provider } from 'react-redux';
import store from './redux/store';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Content style={{ padding: '20px' }}>
          <CopyForm />
          <Preview />
        </Content>
      </Layout>
    </Provider>
  );
};

export default App;

