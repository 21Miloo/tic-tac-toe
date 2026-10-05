import PropTypes from "prop-types";
import { Square } from "./Square";

export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;

  const winnerText = winner === false ? "Draw" : "Winner";

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        {winner && (
          <header className="win">
            <Square>{winner}</Square>
          </header>
        )}

        <footer>
          <button onClick={resetGame}> Start Again </button>
        </footer>
      </div>
    </section>
  );
}

WinnerModal.propTypes = {
  // null: partida en curso, false: empate, string: ficha ganadora
  winner: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  resetGame: PropTypes.func.isRequired,
};
