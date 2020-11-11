import React, { FC } from 'react';
import './index.less';

interface Props {
  jsonStr: string;
  className?: string;
  styleName?: string;
}

const Output: FC<Props> = ({ jsonStr, className }) => {
  return <div styleName="container" className={className}>{jsonStr}</div>;
};

export default Output;
