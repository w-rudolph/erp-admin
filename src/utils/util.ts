declare let element: any;
declare let window: any;
export function requestFullScreen(element: any) {
  const requestMethod =
    element.requestFullScreen ||
    element.webkitRequestFullScreen ||
    element.mozRequestFullScreen ||
    element.msRequestFullScreen;
  if (requestMethod) {
    requestMethod.call(element);
  } else if (typeof window.ActiveXObject !== "undefined") {
    const wscript = new ActiveXObject("WScript.Shell");
    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}

export function exitFullscreen(element: any) {
  const exitMethod =
    element.exitFullscreen ||
    element.mozCancelFullScreen ||
    element.webkitExitFullscreen ||
    element.webkitExitFullscreen;
  if (exitMethod) {
    exitMethod.call(element);
  } else if (typeof window.ActiveXObject !== "undefined") {
    const wscript = new ActiveXObject("WScript.Shell");
    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}
