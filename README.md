# UI 모듈 제작

# 1. 카드 UI
- `세로형`  & `가로형` 레이아웃 제공
- 카드 내 파트별 분리 가능 (유/무)
  - 카드 하단 텍스트 영역
  - 카드 하단 `별점 처리 UI`
- 별점 처리 UI `1~5` 점 사이 처리 (소수 x)
- 카드의 크기 가변. 이미지 영역 `비율 유지`

# 2. 입력 폼 UI
- 텍스트 입력 시 `남은 글자 수` 표시 (최대 글자 수 설정 가능)
- UI 상태별 스타일 및 기능
  - `default` 상태 - 내용이 없으면 `placeholder` 처리
  - `입력 중` 상태 - 내용 변경 시 `Save` 버튼이 활성화 (내용이 초기 값과 같으면 `Save` 버튼 비활성화)
  - `disabled` 비활성화 상태 - 입력 불가 상태
  - `readonly` 읽기 전용 상태 - 입력 불가

## Build Setup

``` bash
# install dependencies
npm install

# 개발환경 로컬서버(lcalhost:8080)
npm run dev

# 운영환경 빌드
npm run build
```
