// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  balanceDeduction = value => {
    this.setState(oldValue => ({
      balance: oldValue.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const firstLetter = name.slice(0, 1)
    return (
      <div className="app-container">
        <div className="cash-withdraw-app">
          <div className="profile-card">
            <div className="profile-letter">
              <p>{firstLetter}</p>
            </div>
            <h1 className="profile-name">{name}</h1>
          </div>
          <div className="balance-card">
            <p className="rupees-heading">Your Balance</p>
            <div className="rupees-card">
              <p className="balance">{balance}</p>
              <p className="in-rupee">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-card">
            <p className="withdraw-heading">Withdraw</p>
            <p className="description">CHOOSE SUM (IN RUPEES)</p>
            <div>
              <ul className="value-list">
                {denominationsList.map(eachValue => (
                  <DenominationItem
                    denominationsList={eachValue}
                    key={eachValue.id}
                    balanceDeduction={this.balanceDeduction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
