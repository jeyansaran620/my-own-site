import React from 'react';
import './dragon.css';

class Dragon extends React.Component
{
    state =
    {
        Lvalue1:19,
        Lvalue2:30,
        Lvalue3:45,
        Lvalue4:0,
        Tvalue1:2,
        Tvalue2:8,
        Tvalue3:14,
        Tvalue4:17,
        Tplayer:0,
        Lplayer:1,
        Points:0,
        Lost:false,
        started:false
    }

    moveUp = () => 
    {
       let  {Tplayer,Lost} = this.state
       if (!Lost && Tplayer > 0)
       {
         Tplayer= Tplayer - 1
       }
        this.setState({ Tplayer })
    }
    moveRight = () => 
    {
       let  {Lplayer,Lost} = this.state

       if (!Lost && Lplayer <19)
       {
         Lplayer= Lplayer + 1
       }
        this.setState({ Lplayer })
    }
    moveDown = () => 
    {
       let  {Tplayer,Lost} = this.state
       if (!Lost && Tplayer < 19)
       {
         Tplayer= Tplayer + 1
       }
        this.setState({ Tplayer })
    }
    moveLeft = () => 
    {
       let  {Lplayer,Lost} = this.state

       if (!Lost && Lplayer >0)
       {
         Lplayer= Lplayer - 1
       }
        this.setState({ Lplayer })
    }
    resetAll = () =>
    {
        clearInterval(this.interval)
        this.setState({
            Tplayer: (18)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0,
            Points:0,
            started : true
        })

        this.interval = setInterval(() => {
            let {Lvalue1,Lvalue2,Lvalue3,Lvalue4,Tvalue1,Tvalue2,Tvalue3,Tvalue4,Points} = this.state
            Points=Points+20
            if(Lvalue1 < 1)
            {
                Lvalue1=Lvalue1 + 19;
                Tvalue1= (20)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0
            }
            else
            {
                Lvalue1=Lvalue1 - 1
            }
            if(Lvalue2 < 1)
            {
                Lvalue2=Lvalue2 + 19;
                Tvalue2= (20)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0
            }
            else
            {
                Lvalue2=Lvalue2 - 1
            }
            if(Lvalue3 < 1)
            {
                Lvalue3=Lvalue3 + 19;
                Tvalue3= (20)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0
            }
            else
            {
                Lvalue3=Lvalue3 - 1
            }
            if(Lvalue4 < 1)
            {
                Lvalue4=Lvalue4 + 19;
                Tvalue4= (20)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0
            }
            else
            {
                Lvalue4=Lvalue4 - 1
            }
            this.setState(
            {  
                Lvalue1,Lvalue2,Lvalue3,Lvalue4,Tvalue1,Tvalue2,Tvalue3,Tvalue4,Points,Lost:false
            }

            )
        this.checkOut()
        }, 100)
    }

    checkOut = () =>
    {
        let  {Lvalue1,Lvalue2,Lvalue3,Lvalue4,Tvalue1,Tvalue2,Tvalue3,Tvalue4,Tplayer,Lplayer} = this.state   
       
        if (Lvalue1===Lplayer && Tvalue1 === Tplayer)
        {
            this.setState({
                Lost:true
            })
            clearInterval(this.interval)
        }
        else if (Lvalue2===Lplayer && Tvalue2 === Tplayer)
        {
            this.setState({
                Lost:true
            })
            clearInterval(this.interval)
        }
        else if (Lvalue3===Lplayer && Tvalue3 === Tplayer)
        {
            this.setState({
                Lost:true
            })
            clearInterval(this.interval)
        }
        else if (Lvalue4===Lplayer && Tvalue4 === Tplayer)
        {
            this.setState({
                Lost:true
            })
            clearInterval(this.interval)
        }
    }
    componentWillUnmount()
    {
       clearInterval(this.interval)
    }
    render()
    {
       const {Lvalue1,Lvalue2,Lvalue3,Lvalue4,Tvalue1,Tvalue2,Tvalue3,Tvalue4,Lplayer,Tplayer,Points} = this.state
        return(
            <div className='dragon-overlay'>
                <div className='outer-box'>
                    <img className='smalley' src={require('./astroid.png')} alt={'astroid'} style={{left:`${Lvalue1}rem`,top:`${Tvalue1}rem`}}></img>
                    <img className='smalley' src={require('./astroid.png')} alt={'astroid'} style={{left:`${Lvalue2}rem`,top:`${Tvalue2}rem`}}></img>
                    <img className='smalley' src={require('./astroid.png')} alt={'astroid'} style={{left:`${Lvalue3}rem`,top:`${Tvalue3}rem`}}></img>
                    <img className='smalley' src={require('./astroid.png')} alt={'astroid'} style={{left:`${Lvalue4}rem`,top:`${Tvalue4}rem`}}></img>
                    <img className='dra-player' src={require('./spaceship.png')} alt={'astroid'} style={{left:`${Lplayer}rem`,top:`${Tplayer}rem`}}></img>
                </div>
                {this.state.Lost?
                <div>
                <div className="dra-message">
                    You Lost...!!!
                </div>
                </div>
                :null}
                <div className="dra-button" onClick={() => this.resetAll()}>{this.state.started? (this.state.Lost? 'start' : 'reset') : 'start' }</div>
                <div className='dra-message'>Score:{Points}</div>
                <div className='dra-controls'>
                <div className='dra-button dra-left fa fa-arrow-left fa-sm' onClick={() => this.moveLeft()}></div>
                <div className='dra-button dra-up fa fa-arrow-up fa-sm' onClick={() => this.moveUp()}></div>
                <div className='dra-button dra-right fa fa-arrow-right fa-sm' onClick={() => this.moveRight()}></div>
                <div className='dra-button dra-down fa fa-arrow-down fa-sm' onClick={() => this.moveDown()}></div>
                </div>
            </div>
        )
    }
}

export default Dragon;