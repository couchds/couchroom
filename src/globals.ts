
export interface AppProps {
    appName: string,
    appDescription: string,
    appHref: string
};

export const appList: Array<AppProps> = [
  {
    appName: 'Simple Hiragana',
    appDescription: 'A simple quiz app to learn the Hiragana.',
    appHref: 'simple-hiragana'
  }
]
