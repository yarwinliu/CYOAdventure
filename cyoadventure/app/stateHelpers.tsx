//define variables: states, options, transitions
interface State {
    state: number;
    next: number[]; //the choices for next state from the current
    story: string;
}

//syntax for declaring a state
let state1: State = {
    state: 1,
    next: [2,3],
    story: "You stand at the foot of a towering, overgrown temple, sunlight filtering through the dense jungle canopy.  Moss and vines cling to the ancient stone, whispering secrets of a bygone era.  Do you:",
};

//function to automate turning states into State objects
//TODO: scrape from states.txt
function initStates(){
    let i=0;
    while(i<15){
        
    }
}

//function to compute the next state
function transition(st: State, op: number){
    if(op==-1){
        console.log(`reached an end state`);
    }

    if(st.next.includes(op)){
        return op;
    } else {
        console.log(`${op} not found in st.next`);
    }
}