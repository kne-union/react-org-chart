import React, {Children} from 'react';
import classnames from 'classnames';
import style from './style.module.scss';

const TreeNode = ({children, label, className}) => {
    return (<li className={classnames(className, 'node-lines', 'node', style.node, style['node-lines'])}>
        <div className={classnames('node-label', style['node-label'])}>{label}</div>
        {Children.count(children) > 0 && (
            <ul className={classnames('children-container', style['children-container'])}>{children}</ul>)}
    </li>);
};

export default TreeNode;
