# vue-enum-plus

> 前端常量 枚举工具

## **一、安装及初始化方法**

```
1. npm install vue-enum-plus --save
2. 按以下格式定义您的枚举对象

let enumInfo = {
    MESSAGE_TYPE: {
        SYSTEM_TYPE: {
            value: 1,
            desc: '系统',
            color: '#fff'
        },
        MEETING_TYPE: {
            value: 2,
            desc: '会议',
            color: '#000'
        }
    }
}
3. import Enum from 'vue-enum-plus'
4. Vue.use(Enum,{enumInfo})

```

## **二、使用方法**

目前插件提供三个方法

可在全局使用 this.$Enum.getDescByValue() 、this.$Enum.getList() 、getValueDesc() 调用

根据枚举值获取描述
示例：

> 在表格渲染时经常遇到需要将状态转换成描述的情况,此时可以使用

```
params.row.type=1
this.$Enum.getDescByValue('MESSAGE_TYPE', params.row.type)) //会议类型
```

> 下拉菜单经常需要使用键值对来渲染 select 的 option [{value:desc}]

```
let typeList =this.$Enum.getList('MESSAGE_TYPE')
//[
    {value: 1, desc: "系统", color: '#fff'},
    {value: 2, desc: "会议", color: '#000'}
   ]

   <Select>
       <Option
           v-for="(item,index) in typeList"
           :value="item.value"
           :key="index"
       >{{item.desc}}</Option>
   </Select>

```

> 根据枚举名获取对应的 value 描述键值对{value:desc}

```
this.$Enum.getValueDesc('MESSAGE_TYPE')
//
{
    1:"系统",
    2:"会议"
}
```
