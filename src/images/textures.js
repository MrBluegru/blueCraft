import { grassImg, dirtImg, logImg, glassImg, woodImg } from "./images";
import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);
const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const glassTexture = new TextureLoader().load(glassImg);

groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter;
dirtTexture.magFilter = NearestFilter;
dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;

export { groundTexture, dirtTexture, logTexture, glassTexture, woodTexture };
