
# react-org-chart


### 安装

```shell
npm i --save @kne/react-org-chart
```


### 概述

用于显示一个树形结构，多由于企业的组织结构图


### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- ReactOrgChart(@kne/react-org-chart),(@kne/react-org-chart/dist/index.css),antd(antd)

```jsx
const {default:OrgChart} = ReactOrgChart;
const {Card} = antd;

const BaseExample = ()=>{
    return <OrgChart label={<Card>root</Card>}>
        <OrgChart.Node label={<Card>Child 1</Card>}>
            <OrgChart.Node label={<Card>Grand Child</Card>} />
            <OrgChart.Node label={<Card>Grand Child2</Card>}>
                <OrgChart.Node label={<Card>Grand2 Child</Card>} />
                <OrgChart.Node label={<Card>Grand2 Child2</Card>} />
            </OrgChart.Node>
        </OrgChart.Node>
    </OrgChart>;
};

render(<BaseExample />);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

