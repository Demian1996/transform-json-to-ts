import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Textarea from './components/Textarea';
import Output from './components/Output';

function App() {
  return (
    <div styleName="container">
      <Textarea jsonStr="123" styleName="left" />
      <Output jsonStr="{name: string}" styleName="right" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// 模块热更新
if (module.hot) {
  module.hot.accept();
}
