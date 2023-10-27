import React, {
FunctionComponent,
} from 'react';
import './Button.css';

interface ButtonComponentProps {
onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FunctionComponent<React.PropsWithChildren<ButtonComponentProps>> = ({
onClick = () => null,
children
}) => {

return ( 
    <button
        className='shareByLinkButton'
        type="button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            if (onClick) {
            onClick(e);
            }
        }}
        >
            {children}
    </button>
);
};

Button.displayName = 'Button';

export default Button;
