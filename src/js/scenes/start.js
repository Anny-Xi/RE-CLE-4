import { Scene, Vector, Label, Color, Font, vec, FontUnit, Input} from "excalibur"
import { StartGuide } from "../actor/startGuide"
import { StartIcon } from '../actor/iconStart'

export class StartScene extends Scene {
  engine

    constructor() {
        super()
        // this.label = new Label({
        //     text: "Welkom to the game, click somewhere to start",
        //     pos: new Vector(0 , 350),
        //     font: new Font({
        //       family: "arial",
        //       size: 30,
        //       unit: FontUnit.Px,
        //       color: Color.White,
        //     }),
        //   });
        //   this.add(this.label);

    }


    onInitialize(engine) {
      console.log("the game scene is created, start")
      const button = new StartIcon('mainGame')
      this.add(button)

      const guide = new StartGuide()
      this.add(guide)

    }

    onActivate(engine){

    }
    

}


