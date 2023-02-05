/* eslint-disable no-import-assign */
import '../styles/globals.css'
import ko from 'axe-core/locales/ko.json'
import { RouterContext } from 'next/dist/shared/lib/router-context'

// Next.js 이미지
import * as NextImage from 'next/image'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})
// end

export const parameters = {
  a11y: {
    config: { locale: ko },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#fff' },
      { name: 'dark', value: '#000' },
    ],
  },
  controls: {
    // 속성 별 문서 기술 내용을 Controls 패널에서 바로 표시되도록 설정
    // 참고: https://storybook.js.org/docs/react/essentials/controls#show-full-documentation-for-each-property
    expanded: true,
    // 컨트롤이 없는 컴포넌트에서 경고 메시지 출력되지 않도록 설정
    // 참고: https://storybook.js.org/docs/react/essentials/controls#hide-nocontrols-warning
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}
