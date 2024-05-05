
import { State } from "@/app/stateHelpers"
//states manually declared from story.txt
//#region 
export let state11: State = {
    state: 11,
    next: [],
    story: "Following the hidden passage, you reach the heart of the temple - a pulsating chamber filled with radiant energy.  You have successfully navigated the temple's secrets.  (Congratulations! You have reached the Good Ending)",
    status: "win",
};

export let state10: State = {
    state: 10,
    next: [],
    story: "You call out for help, and a wispy, translucent figure appears.  It reveals the true nature of the temple and guides you to the hidden passage.  (Congratulations! You have reached the Good Ending)",
    status: "win",
};

export let state9: State = {
    state: 9,
    next: [],
    story: "Your investigation reveals a hidden chamber overflowing with gold and jewels.  Blinded by riches, you forget your quest and succumb to greed.  (Rejected Ending)",
    status: "lose",
};

export let state8: State = {
    state: 8,
    next: [
        {
            state: state11,
            description: "Enter the passage",
        },
        {
            state: state9,
            description: "Continue exploring the room for more secrets",
        }
    ],
    story: "After carefully studying the symbols, you decipher the puzzle and activate a hidden mechanism.  A secret passage opens in the wall.  Do you:",
};

export let state7: State = {
    state: 7,
    next: [
        {
            state: state11,
            description: "Left doorway",
        },
        {
            state: state8,
            description: "Right doorway",
        }
    ],
    story: "As your fingers touch the crystal, a surge of energy engulfs you.  The room shimmers, and two doorways appear before you.  Do you choose the:",
};

export let state6: State = {
    state: 6,
    next: [],
    story: "Returning to the temple entrance, you find two imposing stone guardians blocking your path.  (This is a dead end)",
    status: "neutral",
};

export let state5: State = {
    state: 5,
    next: [
        {
            state: state9,
            description: "Investigate your surroundings ",
        },
        {
            state: state10,
            description: "Call out for help",
        }
    ],
    story: "Following a dark corridor, you hear a rumble behind you.  The floor gives way, sending you tumbling down a dusty chute.  You land with a thud in a dimly lit chamber.  Do you:",
};

export let state4: State = {
    state: 4,
    next: [
        {
            state: state7,
            description: "Touch the crystal",
        },
        {
            state: state8,
            description: "Examine the symbols for clues",
        }
    ],
    story: "Your chosen path leads you to a room adorned with strange symbols etched into the walls.  In the center lies a pedestal holding a shimmering crystal.  Do you:",
};

export let state3: State = {
    state: 3,
    next: [
        {
            state: state4,
            description: "Squeeze through the passage ",
        },
        {
            state: state5,
            description: "Leave the passage for now and continue your search",
        },
        {
            state: state6,
            description: "Retreat back to the temple entrance",
        }
    ],
    story: "Circling the temple, you spot a narrow, overgrown passage hidden beneath a tangle of vines.  Do you:",
};

export let state2: State = {
    state: 2,
    next: [
        {
            state: state4,
            description: "Explore further into the temple",
        },
        {
            state: state5,
            description: "Turn back and seek another way in",
        }
    ],
    story: "You push open the heavy stone door, revealing a vast chamber choked with dust motes dancing in a shaft of light.  Cobwebs drape statues of forgotten gods, and the air hangs heavy with the scent of time.  Do you:",
};

export let state1: State = {
    state: 1,
    next: [
        {
            state: state2,
            description: "Cautiously enter the temple",
        },
        {
            state: state3,
            description: "Circle the temple, searching for another entrance",
        },
        {
            state: state3,
            description: "",
        }
    ],
    story: "You stand at the foot of a towering, overgrown temple, sunlight filtering through the dense jungle canopy.  Moss and vines cling to the ancient stone, whispering secrets of a bygone era.  Do you:",
};
//#endregion