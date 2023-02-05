# Containers

containers 폴더에는 비즈니스 로직을 포함하는 컴포넌트를 보관합니다.

## Rule

- `/components`의 컴포넌트들을 import하여 해당 컴포넌트에 data를 전달합니다.
- 동일한 데이터를 사용하는 경우 `/commons`, `/presenters`의 컴포넌트를 2개 이상 포함하여 구성할 수 있습니다.
- 데이터 페칭에는 React-query를 사용합니다.
- 해당 컴포넌트는 `/templates` 파일에서만 사용할 수 있습니다.

### Naming

- 폴더명은 카멜케이스(camelCase)으로 작성합니다.
- 파일명은 파스칼케이스(PascalCase)으로 작성하며 서픽스로 `container`를 추가해주세요.
