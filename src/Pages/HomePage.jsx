import { useRef, useState } from "react"
import moment from "moment";

export default function HomePage() {
  const amountInput = useRef();
  const [balance, setBalance] = useState(1000);
  const [balanceIndex, setBalanceIndex] = useState(false)
  const [transactionIndex, showTransActionindex] = useState(false)
  const [transactions, setTransaction] = useState([])


  const toggelBalance = () => {
    balanceIndex ? setBalanceIndex(false) : setBalanceIndex(true)
  }
  const depositAmount = () => {
    let time = moment().format('YYYY-MM-DD  -  hh: mm: ss A')
    let amount = +amountInput.current.value;
    let newBalance = balance + amount;

    let newTransaction = {
      beforBalance: balance,
      amount: amount,
      type: 'diposit',
      afterBalance: newBalance,
      date: time,
    };

    let copy = [...transactions];
    copy.push(newTransaction);
    setTransaction(copy)

    setBalance(newBalance);
    amountInput.current.value = '';
  };



  const withdrawAmount = () => {
    let time = moment().format('YYYY-MM-DD  -  hh: mm: ss A')
    let amount = +amountInput.current.value;
    if (amount <= balance) {
      let newBalance = balance - amount;
      let newTransaction = {
        beforBalance: balance,
        amount: amount,
        type: 'withdraw',
        afterBalance: newBalance,
        date: time,
      };

      let copy = [...transactions];
      copy.push(newTransaction);
      setTransaction(copy);

      setBalance(newBalance)
      amountInput.current.value = '';
    } else {
      alert('رصيدك لا يكفى')
    }
  };
  return (

    <div className="w-full h-dvh overflow-auto bg-amber-300 ">
      <p> Balance{balanceIndex ? balance : '*******'}</p>
      <button className={` w-75  ${balanceIndex ? "btn btn-warning" : "btn btn-primary"}`}
        onClick={toggelBalance}>{balanceIndex ? 'Hid Balance' : 'Show Balance'}</button>
      {
        balanceIndex && (
          <div className=" w-full flex">
            <input ref={amountInput} className="input bg-success" placeholder='Enter Amount' />
            <button className=" btn btn-info" onClick={depositAmount}>Deposit</button>
            <button className=" btn btn-error" onClick={withdrawAmount}>Withdraw</button>
            < div className="">
              <button className="btn btn-error" onClick={() => { showTransActionindex(true) }}>Trans Action</button>
              {transactionIndex &&
                (transactions.length == 0 ? (<div className="  text-black">There are no Transactions</div>) : (<table className="table">
                  <thead className=" text-black">
                    <tr>
                      <th>#</th>
                      <th>Befor</th>
                      <th>Amount</th>
                      <th>Type</th>
                      <th>After Balance</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((el, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{el.beforBalance}</td>
                          <td>{el.amount}</td>
                          <td>{el.type}</td>
                          <td>{el.afterBalance}</td>
                          <td>{el.date}</td>
                        </tr>

                      )
                    })

                    }
                  </tbody>
                </table>))

              }
            </div>
          </div>
        )
      }


    </div >

  )
};