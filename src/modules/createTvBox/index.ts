import {ImporTvBoxControllers} from "./importTvBoxControllers"
import { ImporTvBoxUseCase} from "./importTvBoxUseCases"

const imporTvBoxUseCase = new ImporTvBoxUseCase();
const imporTvBoxControllers = new ImporTvBoxControllers(imporTvBoxUseCase)

export {imporTvBoxControllers}


