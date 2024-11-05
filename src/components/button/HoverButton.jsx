function HoverButton({ children, onSelect }) {
  // document.querySelector('button').addEventListener('click', () => {
  //   console.log("Hi");
  // });

  function clickHandler() {
    console.log('Ini clickHandler')
  }

  return (
    <li>
      <button onClick={clickHandler}>{children}</button>
    </li>
  );
}

export default HoverButton;