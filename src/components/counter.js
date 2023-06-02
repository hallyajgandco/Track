import React, { Component } from 'react';

class Counter extends Component {
constructor(props){
    super(props)

    this.state = {
        count: 0
    }
}

increment(){
this.setState({
count: this.state.count + 1
}, ()=>{console.log('callback Value',this.state.count)})
console.log(this.state.count)
}

decrement(){
    this.setState({
    count: this.state.count - 1
    })
    console.log(this.state.count)
    }



render() {
    return(
            <div className="grid h-screen place-items-center">
            
                <h1 class="inline-flex items-center text-sm font-large text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    Count - {this.state.count}
                    </h1>
                    <button onClick={()=> this.increment()}> + </button>
                    <button onClick={()=> this.decrement()}> - </button>
            </div>
        );
}
 }

export default Counter;