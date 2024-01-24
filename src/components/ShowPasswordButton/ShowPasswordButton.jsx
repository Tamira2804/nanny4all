import PropTypes from "prop-types";
import sprite from "../../assets/icons/sprite.svg";
import { EyeBtn, Svg, Use } from "./ShowPasswordButton.styled";

const ShowPasswordButton = ({ isOpen, onClick }) => {
  return (
    <EyeBtn type="button" onClick={onClick}>
      {isOpen ? (
        <Svg>
          <Use href={`${sprite}#icon-eye`} />
        </Svg>
      ) : (
        <Svg>
          <Use href={`${sprite}#icon-eye-off`} />
        </Svg>
      )}
    </EyeBtn>
  );
};

export default ShowPasswordButton;

ShowPasswordButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
