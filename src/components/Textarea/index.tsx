import React, { FC } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

interface Props {
  jsonStr: string;
  className?: string;
  styleName?: string;
}

const Textarea: FC<Props> = ({ jsonStr, className }) => {
  return <TextArea className={className} placeholder="在此输入json字符串..." />;
};

export default Textarea;
