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
