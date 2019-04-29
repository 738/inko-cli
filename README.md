<h1 align="center">
    <img height="200" src="https://github.com/JonJee/inko/blob/master/images/inko_logo.png?raw=true" />
    <br> inko-cli
</h1>

<p align="center">
  <a href="https://github.com/jonjee/inko-cli/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/jonjee/inko-cli.svg" />
  </a>
  <a href="https://npmjs.com/package/inko-cli">
    <img src="https://img.shields.io/npm/v/inko-cli.svg" alt="version" />
  </a>
</p>

<p align="center">
  <b>Use <a href="https://github.com/JonJee/inko">Inko</a> on the Command Line</b></br>
  <sub><a href="https://github.com/JonJee/inko">Inko.js</a>는 영타를 한글로 혹은 한타를 영어로 변환해주는 자바스크립트 오픈소스 라이브러리입니다.<br/><a href="https://github.com/JonJee/inko-cli">inko-cli</a>는 터미널에서 inko를 쉽게 쓰도록 해주는 커맨드라인 인터페이스 모듈입니다.</sub>
</p>

# Getting Started
- [Inko Offical Website](https://inko.holy.kiwi) has been launched!
- [Inko 한영타변환기 Chrome Extension](https://chrome.google.com/webstore/detail/inko-%ED%95%9C%EC%98%81%ED%83%80%EB%B3%80%ED%99%98%EA%B8%B0/bijdbcchfaolmleinaghdbnemmdabbmn?hl=ko) has been launched! (2019.03.25)

## Installation
```bash
npm install -g inko-cli
```

## Usage

### 영어 → 한글
```bash
$ inko -e "dkssudgktpdy ggg"
안녕하세요 ㅎㅎㅎ
```

### 한글 → 영어
```bash
$ inko -k "ㅗ디ㅣㅐ 재깅!"
hello world!
```

## License
inko-cli is released under the MIT License. See [LICENSE](https://github.com/jonjee/inko-cli/blob/master/LICENSE) file for details.
