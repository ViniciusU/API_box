import { request, response, Router } from "express";
import multer from "multer";
import { imporTvBoxControllers} from "./modules/createTvBox/index";
import { FindAllPostsController } from "./modules/findAll/FindAllTvBoxControllers";
import {FindPostsController} from "./modules/findById/FindByIdTvBoxControllers";
import {DeletePostsController} from "./modules/DeleteTvBox/DeleteTvBoxControllers";
import {updateTvBoxControllers} from "./modules/UpdateTvBox"
import {CreateCategoryController} from "./modules/createCategory/createCategoryControllers"
import {GetCategorysController} from "./modules/getCategorys/getCategorysControllers"
import {mischaracterizeControllers} from "./modules/mischaracterize/index"
import uploadConfig from './config/upload';

const routes = Router();
const findAllPostsController = new FindAllPostsController();
const findPostsController = new FindPostsController();
const deletePostsController = new DeletePostsController();
const createCategoryController = new CreateCategoryController();
const getCategorysController = new GetCategorysController();

const upload = multer(uploadConfig);
routes.post("/register",upload.single('image'),(request, response)=> imporTvBoxControllers.handle(request, response));
routes.post("/mischaracterize",upload.single('image'),(request, response)=> mischaracterizeControllers.handle(request, response));
routes.put("/update/:idImg",upload.single('image'),(request, response)=> updateTvBoxControllers.handle(request, response));
routes.get("/getAllPosts",(request, response)=> findAllPostsController.handle(request, response) )
routes.get("/getPosts/:idImg",(request, response)=> findPostsController.handle(request, response) )
routes.delete("/delete/:idImg",(request, response)=> deletePostsController.handle(request, response) )
routes.get("/category",(request, response)=> getCategorysController.handle(request,response))
routes.post("/register/category",(request, response)=> createCategoryController.handle(request, response) )



export {routes};