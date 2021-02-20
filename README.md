# react-org-chart

树状组织架构图渲染器

```shell script
npm i @kne/react-org-chart
```

# 使用说明

```js
import OrgChart from '@kne/react-org-chart';

const Node =OrgChart.Node;

const CustomComponent = ()=>{
    return (
        <OrgChart label="root">
            <Node label="Child 1">
                <Node label="Grand Child" />
                <Node label="Grand Child2">
                    <Node label="Grand2 Child" />
                    <Node label="Grand2 Child2" />
                </Node>
            </Node>
        </OrgChart>
    );
};
```
