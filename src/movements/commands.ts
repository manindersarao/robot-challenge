import {
  Command,
  CommandHandlers,
  CommandParameter,
} from "../interfaces/interfaces";
import ToyRobot from "../robotPlayer/robot";

export class PlacementCommand implements Command {
  constructor(private _robot: ToyRobot) {}

  public execute(parameter: CommandParameter, handlers: CommandHandlers): void {
    if (this._robot.tabletop.contains(parameter.orientation.position)) {
      this._robot.reset();

      while (
        this._robot.getCurrentOrientation().position.y !==
        parameter.orientation.position.y
      ) {
        this._robot.step(1);
      }

      this._robot.turnRight();

      while (
        this._robot.getCurrentOrientation().position.x !==
        parameter.orientation.position.x
      ) {
        this._robot.step(1);
      }

      while (
        this._robot.getCurrentOrientation().direction !==
        parameter.orientation.direction
      ) {
        this._robot.turnLeft();
      }

      handlers?.successCallback?.call(handlers);
    } else {
      handlers?.failureCallback?.call(handlers);
    }
  }
}

export class MovementCommand implements Command {
  constructor(private _robot: ToyRobot) {}

  public execute(): void {
    if (this.movementIsAllowed()) {
      this._robot.step(1);
    }
  }

  private movementIsAllowed(): boolean {
    return this._robot.tabletop.contains(this._robot.peekNextPosition());
  }
}

export class LeftTurnCommand implements Command {
  constructor(private _robot: ToyRobot) {}

  public execute(): void {
    this._robot.turnLeft();
  }
}

export class RightTurnCommand implements Command {
  constructor(private _robot: ToyRobot) {}

  public execute(): void {
    this._robot.turnRight();
  }
}

export class StatusCommand implements Command {
  public execute(parameter: CommandParameter, handlers: CommandHandlers): void {
    handlers?.successCallback?.call(handlers);
  }
}
