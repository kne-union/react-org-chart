import {Children} from 'react';
import classnames from 'classnames';
import style from './style.module.scss';

const TreeNode = ({children, label, className}) => {
    return (
        <li className={classnames(className, style.node, style['node-lines'])}>
            {label}
            {Children.count(children) > 0 && (
                <ul className={style['children-container']}>{children}</ul>
            )}
        </li>
    );
};

export default TreeNode;