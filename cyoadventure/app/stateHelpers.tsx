//define variables: states, options, transitions
interface State {
    state: number;
    next: stateChange[]; //the choices for next state from the current
    story: string;
    heartChange?: number;
    //agilityChange?: number; 
    //strengthChange?: number;
    //luckChange?: number;
}

interface stateChange {
    state: State;
    description: string;
}

//function to automate turning states into State objects
//TODO: scrape from states.txt
function initStates(){
    let i=0;
    while(i<15){
        
    }
}

//function takes in(state obj and option number) and out()
function transition(st: State, op: number){ //option
    if(op==-1){
        console.log(`reached an end state`);
    }

    if(st.next.length <= op){
        return st.next[op];
    } else {
        console.log(`${op} out of bounds, there are not this many options available`);
    }
}