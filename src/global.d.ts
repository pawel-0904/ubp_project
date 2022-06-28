// declare module '*.module.scss' {
//   import { CSSResult } from 'lit-element';
//   const scss: CSSResult;
//   export default css;
// }

declare module "*.png" {
  const value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  export = value;
}

declare module "*.module.scss";