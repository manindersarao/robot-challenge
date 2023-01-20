import { PositionConstraint } from "../constraints/positionConstraint";
import { Dimension, Position } from "../interfaces/interfaces";

export default class Table {
  private positionConstraint: PositionConstraint;

  constructor(readonly dimension: Dimension) {
    const startingPoint = { x: 0, y: 0 };
    const endingPoint = {
      x: Math.abs(dimension.columns),
      y: Math.abs(dimension.rows),
    };
    this.positionConstraint = new PositionConstraint(
      startingPoint,
      endingPoint
    );
  }

  public contains(position: Position): boolean {
    return this.positionConstraint.contains(position);
  }
}
