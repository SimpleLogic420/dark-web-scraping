import React from 'react'
import { Alert } from '../../types/paste'
import './alerts.scss'
interface props{
    alerts:Alert[];
}
function Alerts({alerts}:props) {
  return (
      <div className="alertsPage">
          <h1 className="alertsTitle">Alerts:</h1>
          <div className="alertsList">
        {alerts.map((alert,i)=>{
            console.log(alert)
            return <div key={i} className="alertDiv">
                <h3 className="alertDivTitle">{alert.title}</h3>
                <p className="alertContent">{alert.content}</p>
                <p className="alertDetails"><code>{alert.details}</code></p>
            </div>
        })}
    </div>
      </div>
    
  )
}

export default Alerts