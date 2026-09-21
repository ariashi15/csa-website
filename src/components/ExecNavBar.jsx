import './ExecNavBar.css'

function ExecNavBar({ category, positionIds, positions, selectedPosition, onPositionChange }) {
    return (
        <nav className="exec-nav" aria-label={category}>
            <div className={`exec-nav__options ${category}`}>
                {positionIds.map((positionId) => (
                    <button
                        key={positionId}
                        className={selectedPosition === positionId ? 'exec-nav__option active' : 'exec-nav__option'}
                        type="button"
                        onClick={() => onPositionChange(positionId)}
                    >
                        {positions[positionId].alias}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default ExecNavBar
