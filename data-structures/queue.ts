export class Queue<T> {
  private _queue: T[];

  static from<T>(arr: T[]) {
    return new Queue(arr);
  }

  constructor(arr: T[]) {
    this._queue = arr;
  }

  get size() {
    return this._queue.length;
  }

  isEmpty(): boolean {
    return this._queue.length === 0;
  }

  front() {
    return this._queue[0];
  }

  back() {
    return this._queue[this._queue.length - 1];
  }

  pop() {
    return this._queue.shift();
  }
}
