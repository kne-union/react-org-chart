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
