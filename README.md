# inko-cli
![inkojs_logo](https://github.com/JonJee/inko/blob/master/images/inkojs_logo.png?raw=true)

[![GitHub license](https://img.shields.io/github/license/jonjee/inko-cli.svg)](https://github.com/jonjee/inko-cli/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/inko-cli.svg)](https://npmjs.com/package/inko-cli)

Use [Inko](https://github.com/JonJee/inko) on the Command Line
[Inko.js(잉꼬JS)](https://github.com/JonJee/inko)는 영타를 한글로 혹은 한타를 영어로 변환해주는 자바스크립트 오픈소스 라이브러리입니다. [inko-cli](https://github.com/JonJee/inko-cli)는 터미널에서 inko를 쉽게 쓰게 해주는 커맨드라인 인터페이스 모듈입니다.

## How to Install
```bash
npm install -g inko-cli
```

## How to Use

### 영타를 한글로
```bash
$ inko -k "dkssudgktpdy ggg"
안녕하세요 ㅎㅎㅎ
```

### 한타를 영어로
```bash
$ inko -e "ㅗ디ㅣㅐ 재깅!"
hello world!
```

### Example
![inko-cli](https://raw.githubusercontent.com/JonJee/inko-cli/master/images/inko_cli_example.png)

## License
MIT