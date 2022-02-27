import './PhoneSpecsListItem.module.scss';

const PhoneSpecsListItem = ({ title, specs }) => {
    return (
        <li>
            <div>
                <span>
                    {title}
                </span>
            </div>

            <div>
                <span>
                    {specs}
                </span>
            </div>
        </li>
    )
}

export default PhoneSpecsListItem;