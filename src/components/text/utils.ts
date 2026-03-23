import { COLOR, VARIANT } from 'components/text/types';

export const styleBuilder = (
  color = COLOR.DEFAULT,
  variant = VARIANT.DEFAULT,
  classNameExtraProps = '',
): string => {
  let className: string = '';
  let textSize: string = '';
  let textColor: string = !color ? `color-${COLOR.WHITE}` : `color-${color}`;
  const textSizeOverwritten: boolean = classNameExtraProps.includes('text-');

  if (classNameExtraProps.includes('color-')) {
    textColor = '';
  }

  switch (variant) {
    case VARIANT.RG: {
      textSize = textSizeOverwritten ? '' : 'text-rg';
      className += `${textSize} font-nunito-reg`;
      break;
    }
    case VARIANT.MD: {
      textSize = textSizeOverwritten ? '' : 'text-md';
      className += `${textSize} font-nunito-bold`.trim();
      break;
    }
    case VARIANT.LG: {
      textSize = textSizeOverwritten ? '' : 'text-lg';
      className += `${textSize} font-nunito-bold`.trim();
      break;
    }
    case VARIANT.XL: {
      textSize = textSizeOverwritten ? '' : 'text-xl';
      className += `${textSize} font-nunito-black`;
      break;
    }
  }

  return `${className.trim()} ${textColor} ${textSize}`;
};
