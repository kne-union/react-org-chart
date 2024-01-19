import * as component_10 from '@kne/react-org-chart';
import '@kne/react-org-chart/dist/index.css';
const readmeConfig = {
    name: `@kne/react-org-chart`,
    description: ``,
    summary: `<p>这里填写组件概要说明</p>`,
    api: `<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
</table>`,
    example: {
        isFull: false,
        className: `react_org_chart_8ded7`,
        style: ``,
        list: [{
    title: `这里填写示例标题`,
    description: `这里填写示例说明`,
    code: `const {default:OrgChart} = ReactOrgChart;

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

`,
    scope: [{
    name: "ReactOrgChart",
    packageName: "@kne/react-org-chart",
    component: component_10
},{
    name: "",
    packageName: "@kne/react-org-chart/dist/index.css",
    component: null
}]
}]
    }
};
export default readmeConfig;
