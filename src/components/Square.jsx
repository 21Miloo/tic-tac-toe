import PropTypes from "prop-types";

export const Square = ({ children, isSelected, index, updateBoard }) => {
    const className = `${isSelected ? 'is-selected' : ''}`;
    const handleClick = () => {
      // Los cuadros del indicador de turno y del modal no reciben updateBoard
      if (updateBoard) updateBoard(index);
    };

    return (
      <div onClick={handleClick} className={`square ${className}`}>
        {children}
      </div>
    );
  };

Square.propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  index: PropTypes.number,
  updateBoard: PropTypes.func,
};
