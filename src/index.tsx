import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Textarea from './components/Textarea';
import Output from './components/Output';
import { useDebounce } from 'use-debounce';
import { parse } from './lib/utils';

function App() {
  const [jsonStr, setJsonStr] = useState('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    parse(value);
    setJsonStr(value);
  }, []);

  const [debouncedJsonStr] = useDebounce(jsonStr, 300);

  const parsedStr = useMemo(() => parse(debouncedJsonStr), [debouncedJsonStr]);

  return (
    <div styleName="container">
      <Textarea jsonStr={jsonStr} onChange={onChange} styleName="left" setJsonStr={setJsonStr} />
      <div styleName="center">转换为</div>
      <Output jsonStr={parsedStr} styleName="right" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// 模块热更新
if (module.hot) {
  module.hot.accept();
}
