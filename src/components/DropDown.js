import React,{useState, useEffect,useRef} from 'react';

const DropDown = ({label,options,selected,onSelectedChange}) => {
    const [open,SetOpen] = useState(false);
    //
    const ref =useRef();
    useEffect(() => {
        const onBodyClick = (event) =>{
            if(ref.current.contains(event.target)){
                return ;
            }
             SetOpen(false);
         };
        
        document.body.addEventListener('click',onBodyClick, { capture:true });
        
        return () => {
            document.body.removeEventListener('click',onBodyClick,{capture:true});
        };
    },[]);
    const renderOptions = options.map((option) => {
        if(option.value===selected.value){
            return null;
        }
        return(
            <div
            key ={option.value}
            onClick ={() => onSelectedChange(option)}
            className="item">
             {option.label}
             </div>
        )
    })
    
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">
                    {label}
                </label>
                <div
                onClick = {() =>SetOpen(!open)}
                 className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">
                        {selected.label}
                    </div>
                    <div className={`menu ${open ?'visible transition' : ''}`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DropDown;