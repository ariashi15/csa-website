import "./SectionHeader.css"

function SectionHeader({title, subtitle}) {
    return (
        <div className="header">
            <div className="header__subtitle">{subtitle}</div>
            <div className="header__title">{title}</div>
        </div>
    );
}

export default SectionHeader;