export default function outsideCLick(item, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!item.hasAttribute(outside)) {
    events.forEach((userEvents) => {
      html.addEventListener(userEvents, outsideHandleClick);
    });
    item.setAttribute(outside, "");
  }
  function outsideHandleClick(event) {
    if (!item.contains(event.target)) {
      item.removeAttribute(outside);
      events.forEach((userEvents) => {
        html.removeEventListener(userEvents, outsideHandleClick);
      });
      callback();
    }
  }
}
