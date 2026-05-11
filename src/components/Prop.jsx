import React from 'react';

function Prop({day, time}) {
    return(
        <React.Fragment>
            <div className="card flex flex-col items-center justify-center gap-1 px-4 py-1 bg-[#743A18] rounded-lg shadow-md  cursor-pointer">
                 <h2 className="text-[10px] text-[#D19A17]">{day}</h2>
                 <p className="text-[12px] text-white font-bold"  >{time}</p>
            </div>
          
        </React.Fragment>
    )
}

export default Prop