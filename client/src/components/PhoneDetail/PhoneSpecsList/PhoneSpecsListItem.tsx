import React from 'react';
import './PhoneSpecsListItem.module.scss';

interface ListItemProps {
    title: string;
    specs: string;
}


const PhoneSpecsListItem: React.FC<ListItemProps> = ( { title, specs } ) => {
    return (
        <li>
            <div>
                <span>
                    { title }
                </span>
            </div>

            <div>
                <span>
                    { specs }
                </span>
            </div>
        </li>
    );
};

export default PhoneSpecsListItem;