import { fonts } from '@theme/fonts';
import { size } from '@theme/size';

export interface ITextProps {
  text: string;
  fontSize: keyof typeof size;
  color?: string;
  variant: keyof typeof fonts;
}
