function HoverButton({ children, onSelect }) {
  // document.querySelector('button').addEventListener('click', () => {
  //   console.log("Hi");
  // });

  return (
    <div>
      <button onClick={onSelect}>{children}</button>
    </div>
  );
}

export default HoverButton;