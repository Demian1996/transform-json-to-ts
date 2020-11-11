import React, { FC, useCallback, useRef } from 'react';
import './index.less';

interface Props {
  jsonStr: string;
  className?: string;
  styleName?: string;
  setJsonStr: (str: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: FC<Props> = ({ jsonStr, className, onChange, setJsonStr }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onCustomKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = (e.target as any).selectionStart;
        const end = (e.target as any).selectionEnd;
        setJsonStr(jsonStr.substring(0, start) + '  ' + jsonStr.substring(end));

        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 2;
          }
        }, 0);
      }
    },
    [jsonStr]
  );

  return (
    <textarea
      ref={textareaRef}
      styleName="container"
      className={className}
      value={jsonStr}
      onChange={onChange}
      placeholder="在此输入json字符串..."
      onKeyDown={onCustomKeyDown}
    />
  );
};

export default Textarea;
