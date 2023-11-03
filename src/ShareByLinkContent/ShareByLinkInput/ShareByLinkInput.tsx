import React, {
FunctionComponent,
} from 'react';
import './ShareByLinkInput.css';
import * as clipboardy from 'clipboardy';

interface ShareByLinkInputComponentProps {
link?: string;
}

const ShareByLinkInput: FunctionComponent<ShareByLinkInputComponentProps> = ({
    link
}) => {
    const handleButtonClick = async () => {
    if (link) {
        await clipboardy.write(String(link));
    }
    };

return ( 
    <div
        className={`shareByLinkInputContainer`}
        >
            <input value={link} className='shareByLinkInput'/>
            <button
              className='shareByLinkButtonCopy'
              type="button"
              onClick={handleButtonClick}
            >
              Copy link
            </button>
    </div>
);
};

ShareByLinkInput.displayName = 'ShareByLinkInput';

export default ShareByLinkInput;
