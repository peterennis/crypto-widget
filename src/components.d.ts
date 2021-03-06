/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  CryptoInterface,
} from './components/crypto-view/crypto.interface';

export namespace Components {
  interface CryptoRefresher {}
  interface CryptoTable {
    'cryptoCurrencies': string[];
    'cryptoData': CryptoInterface;
  }
  interface CryptoView {
    /**
    * Valid API key obtained from cryptocompare.com
    */
    'apiKey': string;
    'refreshCryptoData': () => Promise<void>;
  }
}

declare global {


  interface HTMLCryptoRefresherElement extends Components.CryptoRefresher, HTMLStencilElement {}
  var HTMLCryptoRefresherElement: {
    prototype: HTMLCryptoRefresherElement;
    new (): HTMLCryptoRefresherElement;
  };

  interface HTMLCryptoTableElement extends Components.CryptoTable, HTMLStencilElement {}
  var HTMLCryptoTableElement: {
    prototype: HTMLCryptoTableElement;
    new (): HTMLCryptoTableElement;
  };

  interface HTMLCryptoViewElement extends Components.CryptoView, HTMLStencilElement {}
  var HTMLCryptoViewElement: {
    prototype: HTMLCryptoViewElement;
    new (): HTMLCryptoViewElement;
  };
  interface HTMLElementTagNameMap {
    'crypto-refresher': HTMLCryptoRefresherElement;
    'crypto-table': HTMLCryptoTableElement;
    'crypto-view': HTMLCryptoViewElement;
  }
}

declare namespace LocalJSX {
  interface CryptoRefresher extends JSXBase.HTMLAttributes<HTMLCryptoRefresherElement> {
    'onRefreshCryptoData'?: (event: CustomEvent<any>) => void;
  }
  interface CryptoTable extends JSXBase.HTMLAttributes<HTMLCryptoTableElement> {
    'cryptoCurrencies'?: string[];
    'cryptoData'?: CryptoInterface;
  }
  interface CryptoView extends JSXBase.HTMLAttributes<HTMLCryptoViewElement> {
    /**
    * Valid API key obtained from cryptocompare.com
    */
    'apiKey'?: string;
  }

  interface IntrinsicElements {
    'crypto-refresher': CryptoRefresher;
    'crypto-table': CryptoTable;
    'crypto-view': CryptoView;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


