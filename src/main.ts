import { LightIntensityCommand } from "./light-intensity-command";
import { LightPowerCommand } from "./light-power-command";
import { SmartHouseApp } from "./smart-house-app";
import { SmartHouseLight } from "./smart-house-light";

export function run () {
  //Receiver
  const bedroomLight = new SmartHouseLight('Bedroom Light');
  const bathroomLight = new SmartHouseLight('Bathroom Light')

  //Command
  const bedRoomLightPowerCommand = new LightPowerCommand(bedroomLight);
  const bedRoomLightIntesityCommand = new LightIntensityCommand(bedroomLight);
  const bathRoomLightPowerCommand = new LightPowerCommand(bathroomLight);
  
  //Control -- Invoker
  const smartHouseApp = new SmartHouseApp();
  smartHouseApp.addCommand('btn-1', bedRoomLightPowerCommand);
  smartHouseApp.executeCommand('btn-1');
  smartHouseApp.undoCommand('btn-1');

  smartHouseApp.addCommand('btn-3', bedRoomLightIntesityCommand);
  console.log('Increment');
  for (let x = 0; x < 5; x++) {
    smartHouseApp.executeCommand('btn-3');
  }

  console.log('Decrement');
  for (let x = 0; x < 2; x++) {
    smartHouseApp.undoCommand('btn-3');
  }

  smartHouseApp.addCommand('btn-2', bathRoomLightPowerCommand);
  smartHouseApp.executeCommand('btn-2');
  smartHouseApp.undoCommand('btn-2');
}