import { FaArrowUp } from 'react-icons/fa';
import { Button } from './style';

function ButtonTop() {
  const handleBackToTop = (event: EventTarget) => {
    if (event) window.scroll(0, 0);
  };

  return (
    <>
      <Button onClick={(event) => handleBackToTop(event.currentTarget)}>
        <FaArrowUp color="#ecedee" size={16} />
      </Button>
    </>
  );
}

export default ButtonTop;
