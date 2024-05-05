//define variables: states, options, transitions
export interface State {
    state: number;
    next: stateChange[]; //the choices for next state from the current
    story: string;
    heartChange?: number;
    status?: string;
    //agilityChange?: number; 
    //strengthChange?: number;
    //luckChange?: number;
}

export interface stateChange {
    state: State;
    description: any;
}

//function to automate turning states into State objects
//TODO: scrape from states.txt
// function initStates(){
//     let i=0;
//     while(i<15){
        
//     }
// }

//function takes in(state obj and option number) and out()
export function transition(st: State, op: number){ //option
    if(op==-1){
        console.log(`reached an end state`);
    }

    if(st.next.length <= op){
        return st.next[op];
    } else {
        console.log(`${op} out of bounds, there are not this many options available`);
    }
}