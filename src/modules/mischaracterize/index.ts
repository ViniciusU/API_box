import {MischaracterizeControllers} from "./MischaracterizeControllers"
import {MischaracterizeUseCases} from "./MischaracterizeUseCases"

const mischaracterizeUseCases = new MischaracterizeUseCases();
const mischaracterizeControllers = new MischaracterizeControllers(mischaracterizeUseCases)

export {mischaracterizeControllers}
