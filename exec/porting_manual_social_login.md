## 소셜로그인 포팅매뉴얼

<hr>

**package 설치**

```bash
$ npm i @react-native-seoul/kakao-login

# ios는 종속성 추가 필요
$ npx pod-install
# or
$ cd ios
$ pod install
$ cd ..
```

<br>

**카카오** **APP 등록**

- Android - 패키지명 / iOS - bundle ID 일치 시켜서 등록

💡 보통 `com.{프로젝트 이름}`인데 iOS는 XCode에서 별도로 바꿔줘야함

<br>
### Android

**카카오 개발자 내 애플리케이션에 키 해시 등록**

```bash
keytool -exportcert -alias androiddebugkey -keystore ~./android/app/debug.keystore -storepass android -keypass android | openssl sha1 -binary | openssl base64
```

- 나오는 해시값을 등록해주면 됨
  <br>

**Redirect URI 추가**

```xml
<!-- horangFire/android/app/src/main/AndroidManifest.xml -->

-			android:allowBackup="false"
+     android:allowBackup="true"

<!-- application 태그 안에 추가 -->
			<activity
			  android:name="com.kakao.sdk.auth.AuthCodeHandlerActivity"
			  android:exported="true">
			  <intent-filter>
			      <action android:name="android.intent.action.VIEW" />
			      <category android:name="android.intent.category.DEFAULT" />
			      <category android:name="android.intent.category.BROWSABLE" />

			      <!-- Redirect URI: "kakao{NATIVE_APP_KEY}://oauth“ -->
			      <data android:host="oauth"
			          android:scheme="kakao297532d35a71139a06030a19aa85b7e9" />
			  </intent-filter>
			</activity>
```

<br>

**카카오 네이티브 앱 키 리소스 추가**

```xml
<!-- horangFire/android/app/src/main/res/values/strings.xml -->
<!-- resources 안에 추가 -->

<string name="kakao_app_key">297532d35a71139a06030a19aa85b7e9</string>
```

<br>

**build 환경 추가 (+kotlin)**

```java
// kotlin 버전 낮으면 빌드 안 됨(!@$!#%!#$!@#$)
+ kotlinVersion = '1.6.10'

+ classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion"

// 얘는 이제 안 해도 되는 거 같긴한데(원래 m1만 하던 거)
+ maven { url 'https://devrepo.kakao.com/nexus/content/groups/public/' }
```

<br>

### iOS

**iOS project bundle ID 수정**

- bundle ID가 안드로이드, iOS 동일해야 정상 동작

<br>

**kakao 네이티브 앱 키 등록**

```xml
<key>CFBundleURLTypes</key>
<array>
	<dict>
		<key>CFBundleTypeRole</key>
		<string>Editor</string>
		<key>CFBundleURLSchemes</key>
		<array>
			<string>kakao297532d35a71139a06030a19aa85b7e9</string>
		</array>
	</dict>
</array>

...

<key>KAKAO_APP_KEY</key>
<string>297532d35a71139a06030a19aa85b7e9</string>

<key>LSApplicationQueriesSchemes</key>
<array>
	<string>kakaokompassauth</string>
	<string>storykompassauth</string>
	<string>kakaolink</string>
</array>
```

- 키 관련해서 필요한 정보들하고 키를 추가해주면 된다
  <br>

**카카오톡 앱 정보 받아오기**

```cpp
// horangFire/ios/horangFire/AppDelegate.mm

// 파일 상단 import 부분에 추가해주면 된다
#import <RNKakaoLogins.h>

// 파일 최하단 @end 바로 위에 추가하면 된다
- (BOOL)application:(UIApplication *)app
     openURL:(NSURL *)url
     options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
 if([RNKakaoLogins isKakaoTalkLoginUrl:url]) {
    return [RNKakaoLogins handleOpenUrl: url];
 }

 return NO;
}
```

**Swift Bridge Header 추가**
