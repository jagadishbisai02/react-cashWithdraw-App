// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, balanceDeduction} = props
  const {value} = denominationsList

  const totalUpdate = () => {
    balanceDeduction(value)
  }

  return (
    <li className="values-list-item">
      <div className="btn-container">
        <button type="button" onClick={totalUpdate} className="value-btn">
          {value}
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
