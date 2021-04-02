interface Tick {
    startTime: number | undefined,
    time: number,
    func: () => void,
  }

let ticks: Tick[] = [];
let isTick: boolean = false;
function bubbletick() {
  if (ticks.length === 0) {
    isTick = false;
    return;
  }
  isTick = true;
  requestAnimationFrame((curTime) => {
    let removelist:Tick[] = [];
    ticks.forEach(t => {
      if (t.startTime === undefined) {
        t.startTime = curTime;
      }
      let dist = curTime - t.startTime;
      if (t.time - dist < 0) {
        t.func();
        removelist.push(t)
      }
    })
    removelist.forEach((o) => {
      let idx = ticks.indexOf(o);
      if (idx !== -1) {
        ticks.splice(idx, 1);
      }
    })
    bubbletick();
  })
}
export function delay(time: number, func: () => void) {
    ticks.push({ time, func, startTime: undefined });
    if (!isTick) {
        bubbletick();
    }
}

export function convertValue(v:number){
    return v / 7.5 + "vw";
}