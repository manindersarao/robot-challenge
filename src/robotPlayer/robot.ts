import { CompassDirection, MovementDirection, TurnDirection } from "../enums/movementEnums";
import { Orientation, Position } from "../interfaces/interfaces";
import TrackMovements from "../movements/trackMovements";
import Table from "../table/tableTop";


export default class ToyRobot {
  private _activeMovement: TrackMovements;
  private _verticalMovement: TrackMovements;
  private _horizontalMovement: TrackMovements;

  constructor(readonly tabletop: Table) {
    this._verticalMovement = new TrackMovements();
    this._horizontalMovement = new TrackMovements();
    this._activeMovement = this._verticalMovement;
  }

  public reset(): void {
    this._verticalMovement.changeMovement(MovementDirection.Backward);
    this._horizontalMovement.changeMovement(MovementDirection.Backward);

    while (this._verticalMovement.currentStep() > 0) {
      this._verticalMovement.step(1);
    }

    while (this._horizontalMovement.currentStep() > 0) {
      this._horizontalMovement.step(1);
    }

    while (this.getCurrentDirection() !== CompassDirection.North) {
      this.turnLeft();
    }
  }

  public step(stepCount: number): void {
    if (this.tabletop.contains(this.peekNextPosition())) {
      this._activeMovement.step(stepCount);
    }
  }

  public turnLeft(): void {
    this.turn(TurnDirection.LEFT);
  }

  public turnRight(): void {
    this.turn(TurnDirection.RIGHT);
  }

  public getCurrentOrientation(): Orientation {
    return {
      position: this.getCurrentPosition(),
      direction: this.getCurrentDirection(),
    };
  }

  public peekNextPosition(): Position {
    let currentHorizontalStep = this._horizontalMovement.currentStep();
    let currentVerticalStep = this._verticalMovement.currentStep();

    this._activeMovement === this._horizontalMovement
      ? this._activeMovement.currentMovement() === MovementDirection.Backward
        ? --currentHorizontalStep
        : ++currentHorizontalStep
      : this._activeMovement.currentMovement() === MovementDirection.Backward
      ? --currentVerticalStep
      : ++currentVerticalStep;
    return {
      x: currentHorizontalStep,
      y: currentVerticalStep,
    };
  }

  private turn(degree: TurnDirection): void {
    let nextMode;

    if (degree === TurnDirection.LEFT) {
      nextMode =
        this.getCurrentDirection() === CompassDirection.North ||
        this.getCurrentDirection() === CompassDirection.West
          ? MovementDirection.Backward
          : MovementDirection.Forward;
    } else {
      nextMode =
        this.getCurrentDirection() === CompassDirection.North ||
        this.getCurrentDirection() === CompassDirection.West
          ? MovementDirection.Forward
          : MovementDirection.Backward;
    }

    this.switchMotor();
    this._activeMovement.changeMovement(nextMode);
  }

  private switchMotor(): void {
    this._activeMovement =
      this._activeMovement === this._verticalMovement
        ? this._horizontalMovement
        : this._verticalMovement;
  }

  private getCurrentPosition(): Position {
    return {
      x: this._horizontalMovement.currentStep(),
      y: this._verticalMovement.currentStep(),
    };
  }

  private getCurrentDirection(): CompassDirection {
    if (this._activeMovement === this._verticalMovement) {
      return this._activeMovement.currentMovement() === MovementDirection.Forward
        ? CompassDirection.North
        : CompassDirection.South;
    } else if (this._activeMovement === this._horizontalMovement) {
      return this._activeMovement.currentMovement() === MovementDirection.Forward
        ? CompassDirection.East
        : CompassDirection.West;
    } else {
      return CompassDirection.North;
    }
  }
}
