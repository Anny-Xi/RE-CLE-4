import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import player from "../images/player.png"
import backgroundImage from "../images/background.jpg"
import floor from "../images/floor.png"
import flower from "../images/flower.png"
import starticon from "../images/startIcon.png"
import endIcon from "../images/stopIcon.png"

const Resources = {
    Player: new ImageSource(player),
    Flower: new ImageSource(flower),
    Background: new ImageSource(backgroundImage),
    Floor: new ImageSource(floor),
    Starticon: new ImageSource(starticon),
    EndIcon: new ImageSource(endIcon)
}
const ResourceLoader = new Loader([
    Resources.Player, 
    Resources.Flower,
    Resources.Background, 
    Resources.Floor,
    Resources.Starticon,
    Resources.EndIcon
])

export { Resources, ResourceLoader }