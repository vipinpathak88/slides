import React, { useState, useEffect } from 'react';

const Slides = () => {
    var [img, setImg] = useState("images/Int01/")
    var [a, setA] = useState(0);
    var [show, setShow] = useState(false)
    var [count, setCount] = useState(0)
    
    useEffect(() => {        
        const interval = setInterval(()=>{
            setImg("images/Int01/")
            setA(a += 1)
            if(a == 175){
                a = 0;
                clearInterval(interval)
                setShow(true);
            }
        }, 20);        
        return () => clearInterval(interval);
    }, []);

    
    const next = () =>{
        a=1
        setCount(count+=1)
        if(count==1){
            const interval1 = setInterval(()=>{                
                setImg("images/Int02/")
                setShow(false);
                setA(a += 1)
                if(a == 196){
                    a = 0;
                    clearInterval(interval1)
                    setShow(true);
                }
            }, 20);        
            return () => clearInterval(interval1);
        }
        else if(count==2){
            const interval2 = setInterval(()=>{
                setImg("images/Int03/")
                setShow(false);
                setA(a += 1)
                if(a == 178){
                    a = 0;
                    clearInterval(interval2)
                    setShow(true);
                }
            }, 20);        
            return () => clearInterval(interval2);
        }
        else if(count==3){
            const interval3 = setInterval(()=>{
                setImg("images/Non_Int_png/")
                setShow(false);
                setA(a += 1)
                if(a == 249){
                    a = 0;
                    clearInterval(interval3)
                    setShow(true);
                }
            }, 20);        
            return () => clearInterval(interval3);
        }
        else if(count==4){
            const interval = setInterval(()=>{
                setImg("images/Int01/")
                setA(a += 1)
                setCount(count=1)
                if(a == 175){
                    a = 0;
                    clearInterval(interval)
                    setShow(true);
                }
            }, 20);        
            return () => clearInterval(interval);
        }
    }

    return (
        <div className="slider">
            <img src={`${img}${a}.png`} alt="emoji" width="480" />
            {show?<button type="submit" className="n_btn" onClick={next}>
                Next {count}
                <span id="result"></span>
            </button>:null}
        </div>
    );
}

export default Slides;
