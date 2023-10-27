import React, {
FunctionComponent,
} from 'react';
import './Button.css';

interface ButtonComponentProps {
onClick?: React.MouseEventHandler<HTMLButtonElement>;
isLoading?: boolean;
}

const Button: FunctionComponent<React.PropsWithChildren<ButtonComponentProps>> = ({
    onClick = () => null,
    children,
    isLoading = false
}) => {
return ( 
    <button
        className={`shareByLinkButton ${isLoading ? 'shareByLinkButtonCursor' : null}`}
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
