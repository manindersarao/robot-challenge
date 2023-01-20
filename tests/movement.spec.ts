import { MovementDirection } from "../src/enums/movementEnums";
import TrackMovements from "../src/movements/trackMovements";

test("initial motor settings", () => {
  const motor = new TrackMovements();
  expect(motor.currentStep()).toEqual(0);
  expect(motor.currentMovement()).toEqual(MovementDirection.Forward);
});

test("set motor direction to forward", () => {
  const motor = new TrackMovements();
  motor.changeMovement(MovementDirection.Forward);
  expect(motor.currentMovement()).toEqual(MovementDirection.Forward);
});

test("set motor direction to backward", () => {
  const motor = new TrackMovements();
  motor.changeMovement(MovementDirection.Backward);
  expect(motor.currentMovement()).toEqual(MovementDirection.Backward);
});

test("motor movement forward one step", () => {
  const motor = new TrackMovements();
  motor.step(1);
  expect(motor.currentStep()).toEqual(1);
});

test("motor movement backward one step", () => {
  const motor = new TrackMovements();
  motor.changeMovement(MovementDirection.Backward);
  motor.step(1);
  expect(motor.currentStep()).toEqual(-1);
});
