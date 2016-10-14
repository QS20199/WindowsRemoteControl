# WindowsRemoteControl
手机通过局域网遥控Windows

可以调节音量, 关机, 切歌.
其中切歌功能是通过vbs模拟发送快捷键实现的, 快捷键对应了音乐APP设置的快捷键.

```
yarn install
yarn run app
```

然后用局域网下其他设备访问`主机名:12800/`即可

注意: 本工具尚未有鉴权机制, 存在一定风险(被舍友恶搞 etc)
