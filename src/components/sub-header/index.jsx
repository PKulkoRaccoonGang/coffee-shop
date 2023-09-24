import PropTypes from 'prop-types';

function SubHeader({ title, description }) {
  return (
    <header className="sub-header">
      <h2 className="sub-header-title animate__animated animate__fadeInLeft">
        {title}
      </h2>
      <p className="sub-header-description animate__animated animate__fadeInLeft">
        {description}
      </p>
    </header>
  );
}

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SubHeader;
