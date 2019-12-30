# cordova安装及配置
## node 安装
## cordova安装
```
npm install -g -cordova 
```
::: warning
使用cnpm淘宝镜像会有问题
:::
## java sdk 
## android sdk 
::: tip 下载地址
 http://www.androiddevtools.cn/
:::

## grale
## ant

## 环境变量配置:
```
ANDROID_HOME	D:\android-sdk-windows
ANT_HOME 		D:\cordova\apache-ant-1.9.14
GRADLE_HOME		D:\cordova\gradle-5.6.2
JAVA_HOME		D:\Program Files\Java\jdk1.8.0_212
CLASSPATH		.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tool.jar;%ANT_HOME%\lib
![](cordova_files/1.jpg)
![](cordova_files/2.jpg)
PATH 
	%JAVA_HOME%\bin 
	%ANDROID_HOME%\bin 
	%ANDROID_HOME%\build-tools\29.0.2 
	%ANDROID_HOME%\platform-tools 
	%ANDROID_HOME%\tools %CLASSPATH% 
	%ANT_HOME%\bin 
	%GRADLE_HOME%\bin
```
## 运行命令校验
* npm -v
* java -version
* adb //验证Android 有些需要以管理员身份运行
* grale -v
* ant -v

## 项目创建步骤
```

//创建项目并指定apk
cordova create cloudpmsdk com.ecidi.cloudpm 云平台     //文件名 包名 app名
//添加安卓平台
cordova platform add android
//添加ios平台
cordova platform add ios

//添加插件
cordova plugin add cordova-hot-code-push-plugin
cordova plugin add cordova-plugin-add-swift-support
cordova plugin add cordova-plugin-file
cordova plugin add cordova-plugin-file-opener2
cordova plugin add cordova-plugin-file-transfer
cordova plugin add https://github.com/giantss/cordova-plugin-ImagePicker.git
cordova plugin add cordova-plugin-media-capture
cordova plugin add cordova-plugin-qrscanner //扫码
cordova plugin add cordova-plugin-splashscreen
cordova plugin add cordova-plugin-statusbar
cordova plugin add cordova-plugin-whitelist
cordova plugin add cordova-plugin-fingerprint-aio --save //指纹登录

cordova plugin add jpush-phonegap-plugin --variable APP_KEY=1197367434c755700ea20d2e //极光推送
//打包
cordova build android

cordova run android//连接USB打包到手机
//移除平台
cordova platform rm android
```



## 创建后的处理
1.android 9.0兼容非https的访问
在res目录下新建xml文件夹，创建xml文件network_security_config.xml如下：
```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true">
        <trust-anchors>
            <certificates src="system" />
        </trust-anchors>
    </base-config>
</network-security-config>
```
在清单文件AndroidManifest.xml的application标签里面设置networkSecurityConfig属性如下：
```xml
<application android:networkSecurityConfig="@xml/network_security_config">
</application>
```
2.image-picker插件的问题
直接使用管理员身份运行命令行工具，在对应地址执行
cordova plugin add https://github.com/giantss/cordova-plugin-ImagePicker.git
如果安装成功仍旧不能使用，或者因为网络问题安装失败，直接去网址的realse下，下载最新包。
然后使用管理员身份运行命令行工具，在对应地址执行
cordova plugin add g:/cordova/demo
然后更新平台cordova platform update android 

3.兼容image-picker和qrscanner组件对于相机权限的重复配置
注释掉其中一个插件的plugin.xml文件中的配置,例如：plugins/cordova-plugin-qrscanner/plugin.xml中：
```xml
 <platform name="android">
	...
    <config-file target="AndroidManifest.xml" parent="/*">
      <!-- <uses-permission android:name="android.permission.CAMERA" android:required="false" /> -->//注释这一行
      <uses-feature android:name="android.hardware.camera" android:required="false" />
      <uses-feature android:name="android.hardware.camera.front" android:required="false" />
    </config-file>
	...
  </platform>
```
## cordova一键打包到手机
修改vue项目里webpack配置
文件地址：config/index.js 
```js
build : {
  index: path.resolve(__dirname, '../../../cordova/cloudpmsdk/www/index.html'),//模板地址
  assetsRoot: path.resolve(__dirname, '../../../cordova/cloudpmsdk/www'),//打包后文件要存放的路径（根据本地地址调整）
  assetsSubDirectory: 'static',//除了 index.html 之外的静态资源要存放的路径，
  assetsPublicPath: './',//代表打包后，index.html里面引用资源的的相对地址
  productionSourceMap: true,
  devtool: '#source-map',
  bundleAnalyzerReport: process.env.npm_config_report
}
```

使用脚本，运行后直接打包到手机（注意手机需要连接USB）
```
g:
cd engineering\cloudpm
call npm run build
cd /
cd cordova\cloudpmsdk
call cordova run android
```

使用脚本，运行后删除旧包生成一个新的包
```
g:
cd engineering\cloudpm
call npm run build
cd /
cd cordova\cloudpmsdk\platforms\android\app\build\outputs\apk\debug
del app-debug.apk
cd \
cd cordova\cloudpmsdk
call cordova build android
```

::: tip 进一步设想
将热更新地址指向本地，实现本地编译手机端直接更新
:::
