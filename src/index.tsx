import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Textarea from './components/Textarea';
import Output from './components/Output';
import { useDebounce } from 'use-debounce';
import { parse } from './lib/utils';

const defaultTemplate = `{
  "name": "xiaoming",
  "age": 24,
  "interests": [
    {
      "type": "play game",
      "desc": "玩游戏"
    },
    {
      "type": "read",
      "desc": "读书"
    }
  ]
}
`;

function App() {
  const [jsonStr, setJsonStr] = useState(defaultTemplate);
  const [error, setError] = useState<Error>();

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setError(undefined);
    const value = e.target.value;
    setJsonStr(value);
  }, []);

  const [debouncedJsonStr] = useDebounce(jsonStr, 300);

  const parsedStr = useMemo(() => {
    const parsedResult = parse(debouncedJsonStr);
    if (typeof parsedResult !== 'string') {
      setError(parsedResult);
      return '';
    }
    return parsedResult;
  }, [debouncedJsonStr]);

  return (
    <div styleName="container">
      <Textarea jsonStr={jsonStr} onChange={onChange} styleName="left" setJsonStr={setJsonStr} />
      <div styleName="center">转换为</div>
      <Output jsonStr={error ? error.message : parsedStr} styleName="right" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// 模块热更新
if (module.hot) {
  module.hot.accept();
}
