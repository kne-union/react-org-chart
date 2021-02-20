import TreeNode from './TreeNode';
import style from './style.module.scss';

const Tree = ({
                  children,
                  label,
                  lineHeight = '20px',
                  lineWidth = '1px',
                  lineColor = 'black',
                  nodePadding = '5px',
                  lineBorderRadius = '5px',
              }) => {
    return (
        <ul className={style.tree} style={{
            '--line-height': lineHeight,
            '--line-width': lineWidth,
            '--line-color': lineColor,
            '--node-padding': nodePadding,
            '--line-border-radius': lineBorderRadius
        }}>
            <TreeNode label={label}>{children}</TreeNode>
        </ul>
    );
};

Tree.Node = TreeNode;

export default Tree;