import { generateErrorMessage } from './utils';
import type { CSSObjectNoCallback, Primitive, ThemeArgs } from './base';
import { BaseInterface } from './css';

interface KeyframesObject {
  [key: string]: CSSObjectNoCallback;
}

type KeyframesFn = (themeArgs: ThemeArgs) => string;
type KeyframesArg = KeyframesObject | string | ((themeArgs: ThemeArgs) => KeyframesObject | string);

interface KeyframesNoOption {
  (arg: TemplateStringsArray, ...templateArgs: (Primitive | KeyframesFn)[]): string;
  (arg: KeyframesArg): string;
}

interface KeyframesWithOption {
  <M extends BaseInterface>(metadata: M): KeyframesNoOption;
}

const keyframes: KeyframesWithOption & KeyframesNoOption = () => {
  throw new Error(generateErrorMessage('keyframes'));
};

export default keyframes;
