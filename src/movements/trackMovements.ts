import { MovementDirection } from "../enums/movementEnums";

export default class TrackMovements {
    private _currentStep: number = 0;
    private _currentMovement: MovementDirection = MovementDirection.Forward;
  
    public currentStep(): number {
      return this._currentStep;
    }
  
    public currentMovement(): MovementDirection {
      return this._currentMovement;
    }
  
    public step(steps: number): void {
      this._currentStep +=
        this._currentMovement === MovementDirection.Forward ? steps : -steps;
    }
  
    public changeMovement(mode: MovementDirection): void {
      this._currentMovement = mode;
    }
  }
  