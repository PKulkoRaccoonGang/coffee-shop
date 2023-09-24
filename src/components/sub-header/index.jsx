import PropTypes from 'prop-types';

function SubHeader({ title, description }) {
  return (
    <header className="sub-header">
      <h2 className="sub-header-title">
        {title}
      </h2>
      <p className="sub-header-description">
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
