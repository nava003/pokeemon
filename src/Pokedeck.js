function Pokedeck() {
  const myName = "Pika";

  // The following return () is JSX code work.
  // Anything before return () is non-JSX; it is regular JS
  return (
    <div className="Yellow">
      { myName }
    </div>
  );
}

export default Pokedeck;
