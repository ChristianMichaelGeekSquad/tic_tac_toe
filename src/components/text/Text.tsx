import { TextProp } from 'components/text/types';
import { styleBuilder } from 'components/text/utils';
import { tailwindMerge } from 'general_utils/utils';
import { Text as ReactText } from 'react-native';

const Text = ({ color, variant, children, ...restProps }: TextProp) => {
  const textStyle =
    `${styleBuilder(color, variant, restProps.className)} ${restProps.className}`.trim();
  const mergedStyle: string = tailwindMerge(textStyle);

  return <ReactText className={mergedStyle}>{children}</ReactText>;
};

export default Text;
