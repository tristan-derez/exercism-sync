// @ts-check

/**
 * Class representing the Size of a window.
 */
export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  /**
   * @param {number} newWidth
   * @param {number} newHeight
   */
  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

/**
 * Class representing the position of a window.
 */
export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * @param {number} newX
   * @param {number} newY
   */
  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   * Resize the program window.
   * @param {Size} newSize - new size of the window
   */
  resize(newSize) {
    const newWidth = Math.min(newSize.width, this.screenSize.width - this.position.x);

    this.size.width = Math.max(newWidth, 1);

    const newHeight = Math.min(newSize.height, this.screenSize.height - this.position.y);

    this.size.height = Math.max(newHeight, 1);
  }

  /**
   * Move the program window.
   * @param {Position} newPosition - The new position of the window.
   * @returns {void}
   */
  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    this.position.x = Math.max(0, Math.min(newPosition.x, maxX));

    const maxY = this.screenSize.height - this.size.height;
    this.position.y = Math.max(0, Math.min(newPosition.y, maxY));
  }
}

/**
 * @param {ProgramWindow} programWindow
 */
export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  programWindow.resize(newSize);

  const newPosition = new Position(100, 150);
  programWindow.move(newPosition);

  return programWindow;
}

const programWindow = new ProgramWindow();
changeWindow(programWindow);
