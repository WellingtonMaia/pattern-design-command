import { SmartHouseCommand } from "./smart-house-command";
import { SmartHouseLight } from "./smart-house-light";

export class LightIntensityCommand implements SmartHouseCommand{
  constructor(private readonly light: SmartHouseLight) {}

  execute() {
    const intensity = this.light.increaseIntensity();
    console.log(`intensity of light ${this.light.name} is ${intensity}`)
  }

  undo() {
    const intensity = this.light.decreaseIntensity();
    console.log(`intensity of light ${this.light.name} is ${intensity}`)
  }
}