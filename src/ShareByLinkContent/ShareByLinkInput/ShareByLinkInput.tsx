import React, {
FunctionComponent,
} from 'react';
import './Button.css';

interface ShareByLinkInputComponentProps {
onClick?: React.MouseEventHandler<HTMLButtonElement>;
isLoading?: boolean;
}

const ShareByLinkInput: FunctionComponent<ShareByLinkInputComponentProps> = ({
    onClick = () => null,
    isLoading = false
}) => {
return ( 
    <div
        className={`shareByLinkInput`}
        >
            <input />
    </div>
);
};

ShareByLinkInput.displayName = 'ShareByLinkInput';

export default ShareByLinkInput;
