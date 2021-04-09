# simpleEditor

一个简单的富文本编辑器  
在线查看地址：http://121.37.137.28:888/  
## 项目介绍

simpleEditor 是一个简单的编辑器，主要用于学习富文本编辑器


## 安装和使用

### 引入script使用
```html
<script type="text/javascript" src="main.min.js"></script>
<script type="text/javascript">
    const SimpleEditor = window.simpleEditor;
    new SimpleEditor(document.getElementById('root')).init({
        onChange: (html) => {
            console.log('变化啊');
            console.log(html);
        },
        placeHolder:'请输入',
        actions: ['bold', 'underline', 'italic'],
    })
</script>
```

### 配置项
| field      | Description |
| ----------- | ----------- |
| onChange      | 编辑器内容变化后的回调函数，提供当前编辑器的内容       |
| placeHolder   | 编辑器内容为空时显示的字符串       |
| actions   | 菜单栏的功能按钮，目前支持粗体，斜体，下划线三种操作       |

<!-- LICENSE -->
## 许可证

项目在 MIT 的许可证下发布， 查看更多 [MIT](https://en.wikipedia.org/wiki/MIT_license) 许可证信息。

