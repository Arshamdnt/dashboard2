import React from 'react';
import './WidgetLg.css'
import { Transactions } from '../../datas';
const WidgetLg = () => {
    const Button = ({type})=>{
        return <button className={'WidgetLgButton ' +type} > {type}</button>
    }
    return (
        <div className='WidgetLg'>
            <h3 className='WidgetLgTitle'>Letest Transactions</h3>
            <table className="WidgetLgLgTable">
                <tr className="WidgetLgTr">
                    <th className="WidgetLgTh"> Customer</th>
                    <th className="WidgetLgTh">Date</th>
                    <th className="WidgetLgTh">Amount</th>
                    <th className="WidgetLgTh">Status</th>
                </tr>
              {Transactions.map((transaction)=>(
                  <tr className='WidgetLgTr'>
                  <td className='WidgetLgUser'>
                      <img src={transaction.img} className='WidgetLgImg'/>
                      <span className='WidgetLgName'>{transaction.customer}</span>
                  </td>
                  <td className="WidgetLgDate">{transaction.date}</td>
                  <td className="WidgetLgAmount">{transaction.amount}</td>
                  <td classN ame="WidgetLgStatus"> <Button type={transaction.status}/> </td>
              </tr>
              ))}
            </table>
        </div>
    );
}

export default WidgetLg;
