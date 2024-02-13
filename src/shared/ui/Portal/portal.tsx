import {ReactNode} from 'react';
import {createPortal} from 'react-dom';

interface portalProps {
    children: ReactNode;
    element?: HTMLLIElement;
}

const portal = (props: portalProps) => {
    const {
        children,
        element = document.body,
    } = props;
    return createPortal(children, element);
};

export default portal;