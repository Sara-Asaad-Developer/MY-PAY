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
    <div className="w-full h-dvh overflow-auto bg-[#4b0d40] flex flex-col gap-4  items-center justify-center pt-10 ">
      <div className="w-[80%] h-dvh overflow-auto bg-[#190c3a] p-[30px]  pt-20 rounded-[20px] shadow-2xl shadow-red-500 ">
        <div className=" flex justify-center gap-5 pb-10">
          <p className="text-3xl font-peto"> Balance EL  {balanceIndex ? balance : '*******'}</p>
          <button className={` w-75 text-[#12023e] ${balanceIndex ? "btn bg-[#f7f4f4]" : "btn bg-[#f93a4a]"}`}
            onClick={toggelBalance}>{balanceIndex ? 'Hid Balance' : 'Show Balance'}</button>
        </div>
        {
          balanceIndex && (
            <div className=" w-full flex flex-col gap-4 justify-center items-center ">
              <input ref={amountInput} className="input w-[35%] h-[8dvh] rounded-[10px]" placeholder='Enter Amount' />

              <div className=" flex gap-5 pt-10 ">
                <button className=" btn bg-[#f93a4a] w-[206px] h-[50px]  text-white  text-[20px]  font-peto rounded-[20px]   transition  duration-300 
               shadow-2xl  shadow-gray-800  border-0 
                 hover:bg-white  hover:text-[#f93a4a]  hover:scale-105 hover:shadow-lg" onClick={depositAmount}>Deposit</button>


                <button className=" btn bg-[#f93a4a] w-[206px] h-[50px]  text-white  text-[20px]  font-peto rounded-[20px]   transition  duration-300 
               shadow-2xl  shadow-gray-800  border-0 
                 hover:bg-white  hover:text-[#f93a4a]  hover:scale-105 hover:shadow-lg" onClick={withdrawAmount}>Withdraw</button>


                <button className="btn bg-[#f93a4a] w-[206px] h-[50px]  text-white  text-[20px]  font-peto rounded-[20px]   transition  duration-300 
                 hover:bg-white  hover:text-[#f93a4a]  hover:scale-105 hover:shadow-lg "
                  onClick={() => { showTransActionindex(true) }}>Trans Action</button>
                {transactionIndex &&
                  (transactions.length == 0 ? (<div className="  text-black">There are no Transactions</div>) : (<table className="table flex items-center ps-10 pt-5">
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
    </div>

  )
};

// )bg - [#4b0d40]
// bg - [#190c3a]