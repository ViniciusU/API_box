import {UpdateTvBoxControllers} from "./UpdateTvBoxControllers"
import { UpdateTvBoxUseCase} from "./UpdateTvBoxUseCases"

const updateTvBoxUseCase = new UpdateTvBoxUseCase();
const updateTvBoxControllers = new UpdateTvBoxControllers(updateTvBoxUseCase)

export {updateTvBoxControllers}


