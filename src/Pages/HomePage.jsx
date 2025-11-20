import { useRef, useState } from "react"

export default function HomePage() {
  const amountInput = useRef();
  const [balance,] = useState(1000);
  const [balanceIndex, setBalanceIndex] = useState(false)
  const toggelBalance = () => {
    balanceIndex ? setBalanceIndex(false) : setBalanceIndex(true)
  }
  const depositAmount = () => {
    let amount = amountInput.current.value;
    console.log(amount)
  }
  return (
    <div className="w-full h-dvh  overflow-auto bg-amber-300">
      <p> Balance{balanceIndex ? balance : '*******'}</p>
      <button className={` w-75  ${balanceIndex ? "btn btn-warning" : "btn btn-primary"}`}
        onClick={toggelBalance}>{balanceIndex ? 'Hid Balance' : 'Show Balance'}</button>
      <input ref={amountInput} className="input bg-success" placeholder='Enter Amount' />
      <button className=" btn btn-info" onClick={depositAmount}>Deposit</button>
      <button className=" btn btn-error">Withdraw</button>
    </div>
  )
}
