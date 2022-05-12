import React from "react";

//probs->condistional statement
function Cond(probs) {
    const getToGether = probs.status;
    if (getToGether) {
        return <h2>The current moth is :{probs.month}</h2>
    }
    return <div>
        <h2>The current moth is :{probs.month}</h2>
    </div>
}
export default Cond