export class Stack<T> {
  private _stack: T[] = [];

  static from<T>(arr: T[]) {
    return new Stack(arr);
  }

  constructor(arr: T[] = []) {
    this._stack = arr;
  }

  get size() {
    return this._stack.length;
  }

  isEmpty(): boolean {
    return this._stack.length === 0;
  }

  push(item: T) {
    this._stack.push(item);
  }

  pop() {
    return this._stack.pop();
  }

  top() {
    return this._stack[this._stack.length - 1];
  }
}
