import { ingredients } from './../shared/ingredient.model';


export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ing: ingredients[];

    constructor(name: string, desc: string, imagePath: string, ing: ingredients[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ing = ing;
    }
}