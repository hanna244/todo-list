# Components

components 폴더에는 UI 컴포넌트들을 보관합니다.

## Rule

- UI 컴포넌트를 보관하며 해당 폴더의 컴포넌트들은 비즈니스 로직을 포함하지 않습니다.
  - 비즈니스 로직은 `/containers` 파일에 작성합니다.
- 컴포넌트 설계는 presentational & container 디자인 패턴을 참고하였습니다.
- style은 기본적으로 `*.tsx`파일에 작성하며 스타일 코드가 길어질 경우 스타일 파일(`*.styled.tsx`)을 추가 생성합니다.
- 스토리북을 위한 defaultProps는 컴포넌트 파일에 작성하지 않고 스토리북의 `args` 옵션에 작성합니다
- <ins>특정한 경우(컴파운드 컴포넌트)를 제외한</ins> 모든 컴포넌트는 기본 내보내기(`export default`)를 사용합니다.

### Naming

- 폴더명은 카멜케이스(camelCase)으로 작성합니다.
- 파일명은 파스칼케이스(PascalCase)으로 작성합니다.

### Directory Tree

#### Default tree

```shell
components
├── assets                            #SVG 컴포넌트
│   └── Snipper.tsx
├── commons                           #가장 작은단위 컴포넌트
│   ├── SampleButton.stories.tsx
│   ├── SampleButton.tsx
│   ├── SampleButton.styled.tsx
│   └── index.tsx
├── layouts                           #Layout 컴포넌트
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   └── index.tsx
└── presenters                        #Presenters 컴포넌트
    ├── SampleCategories.stories.tsx
    ├── SampleCategories.tsx
    ├── SampleCategories.styled.tsx
    └── index.ts
```

#### Rule

- Layouts
  - 2개 이상의 레이아웃 버전이 생긴다면 Header, Footer, Layout을 프리픽스로 사용하여 파일명을 작성해주세요
    예시)
    ```shell
    layouts
    ├── Footer.tsx
    ├── FooterVersion2.tsx
    ├── Header.tsx
    ├── HeaderVersion2.tsx
    ├── Layout.tsx
    ├── LayoutVersion2.tsx
    └── index.tsx
    ```
