export default class Timeout {
  id;
  handler;

  constructor(handler: TimerHandler, timer: number) {
    this.id = setTimeout(() => console.log(handler), timer);
    this.handler = handler;
  }

  clear(){
    clearTimeout(this.id);
  }
}
