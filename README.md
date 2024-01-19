
# react-org-chart


### 安装

```shell
npm i --save @kne/react-org-chart
```


### 概述

这里填写组件概要说明

[演示地址](https://kne-union.github.io/react-org-chart/)


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- ReactOrgChart(@kne/react-org-chart),(@kne/react-org-chart/dist/index.css)

```jsx
const {default:OrgChart} = ReactOrgChart;

const BaseExample = ()=>{
    return <OrgChart label="root">
        <OrgChart.Node label="Child 1">
            <OrgChart.Node label="Grand Child" />
            <OrgChart.Node label="Grand Child2">
                <OrgChart.Node label="Grand2 Child" />
                <OrgChart.Node label="Grand2 Child2" />
            </OrgChart.Node>
        </OrgChart.Node>
    </OrgChart>;
};

render(<BaseExample />);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

