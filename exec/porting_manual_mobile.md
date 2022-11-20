## 포팅매뉴얼 for React-Native

<hr/>

관련 내용은 모두 [여기](https://reactnative.dev/docs/environment-setup)에서 확인할 수 있다.

### Windows

#### Android

##### 자바 설치

**Chocolatey 설치**

```shell
$ Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

**Java 설치**

```shell
$ choco install -y nodejs-lts openjdk11
```

<br>
##### 안드로이드 스튜디오 설치

- [여기](https://developer.android.com/studio)에서 설치

<br>

##### 환경변수 설정

- window 환경 변수 편집에서 JAVA_HOME, ANDROID_HOME 설정 필요

<br>

<aside>
💡 <b>Android SDK setting</b>

`Android SDK Platform 31`하고
`Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image` 설치 필요

SDK Tools에서 `Show Package Details`열고 31.0.0 설치

</aside>

<hr>

### macOS

#### Android

```bash
# node & watchman
$ brew install node
$ brew install watchman

# java development Kit
$ brew tap homebrew/cask-versions
$ brew install --cask zulu11
```

<aside>
💡 <b>Android SDK setting</b>

`Android SDK Platform 31`하고 `Google APIs ARM 64 v8a System Image` (본인 OS 맞는 거) 설치 필요

SDK Tools에서 `Show Package Details`열고 31.0.0 설치

</aside>

<br>

##### 터미널 환경 변수 설정

```bash
# ~/.zshrc

export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

....
```

<br>

<aside>
💡 <b>react-native-cli가 global로 설치되어 있다면</b>

`sudo npm uninstall -g react-native-cli`를 실행하고 프로젝트 생성

</aside>

```bash
# terminal 2개 열어서

#vs code
$ npx react-native start

#terminal
$ npx react-naitve run-android
```

<br>

#### iOS

```bash
# ruby 설치

# 2.7.5가 있다면 패스해도 됨
$ ruby --version

# 없으면 다 하면 된다
$ brew update
$ brew install rbenv ruby-build

$ rbenv init
$ rbenv install 2.7.5

$ rbenv global 2.7.5

# m1만
$ sudo arch -x86_64 gem install ffi
$ cd ios
$ arch -x86_64 pod install
$ cd ..

$ npm run start
```

<br>
<hr>
### 실행

```bash
# 공통
$ npm install
$ npm run start

# android
$ npm run android

# ios
$ npx pod-install
$ npm run ios

# release version build (인증키 생성 필요)
$ npm run apk
```
