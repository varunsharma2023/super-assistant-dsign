import React, { useState } from 'react';
import './App.css';
import { Breadcrumb, Layout, theme, Button, Radio, Input } from 'antd';
import myImage from './image/web.png';

const { Header, Content } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['Option 1']); // Initial option

  const handleAddOption = () => {
    const newOption = `Option ${options.length + 1}`;
    setOptions([...options, newOption]);
  };

  const [clozeContent, setClozeContent] = useState('');

  return (
    <Layout>
      <Header>
        <div className='header'>
          <div className="demo-logo">
            <img src={myImage} alt="Webform Logo" style={{ width: '200px', height: '60px' }} />
          </div>
          <div className='profile'>
            <button className=' btn btn-primary mt-2 mb-2'>My profile</button>
          </div>
        </div>
      </Header>
      <Layout>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <h2>Untitled Quiz</h2>

            {/* 1. Categorize Question */}
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Categorize Question</h5>
                <Input
                  placeholder="Type your categorize question here..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  style={{ width: '100%', marginBottom: '10px' }}
                />

                {/* Radio buttons for options */}
                {options.map((option, index) => (
                  <div key={index}>
                    <Radio>{option}</Radio>
                  </div>
                ))}

                {/* Add more options button */}
                <Button type="primary" onClick={handleAddOption}>
                  Add Option
                </Button>
              </div>
            </div>

            {/* 2. Cloze Question */}
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Cloze Question</h5>
                <p className="card-text">Here is your cloze question description.</p>
                {/* Fill in the blank content */}
                <Input
                  placeholder="Type your fill in the blank content here..."
                  value={clozeContent}
                  onChange={(e) => setClozeContent(e.target.value)}
                  style={{ width: '100%', marginBottom: '10px' }}
                />
              </div>
            </div>

            {/* 3. Comprehension Type Question */}
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Comprehension Type Question</h5>
                <textarea
                  placeholder="Type your comprehension question here..."
                  
                  
                  style={{ width: '100%', marginBottom: '10px' }}
                  rows={4}
                >
                </textarea>
                {/* Add the content for the comprehension question */}
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
