import './ExecNavBar.css'

function ExecNavBar({ category, options, selectedOption, onOptionChange }) {
    return (
        <nav className="exec-nav" aria-label={category}>
            <div className={`exec-nav__options ${category}`}>
                {options.map((option) => (
                    <button
                        key={option}
                        className={selectedOption === option ? 'exec-nav__option active' : 'exec-nav__option'}
                        type="button"
                        onClick={() => onOptionChange(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default ExecNavBar
