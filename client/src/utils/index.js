import { surpriseMePrompts } from "../constants";


export const getRandomPropmt = () => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    return surpriseMePrompts[randomIndex];

    const RandomPropmt = surpriseMePrompts[randomIndex];
    return RandomPropmt;

    if( RandomPropmt == prompt) return getRandomPropmt(prompt);
    };
