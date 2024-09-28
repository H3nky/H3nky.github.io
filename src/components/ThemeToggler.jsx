import React from 'react';
import Switch from 'react-switch'
import PropTypes from 'prop-types';
import AppContext from '../AppContext';

function ThemeToggler(props) {
  const { onClick } = props;
  const handleOnChange = (darkMode) => {
    darkMode.toggle();
    onClick();
  };

  return (
    <>
      <AppContext.Consumer>
        {(values) => (
          <div>
            <Switch
              onChange={() => handleOnChange(values.darkMode)}
              checked={values.darkMode.value}
              height={20}
              width={40}
              borderRadius={0}
              uncheckedIcon={false}
              checkedIcon={false}
              offColor='#ffffff'
              onHandleColor='#fffffff'
              onColor='#000000'
              offHandleColor='#0000000'
            />
          </div>
        )}
      </AppContext.Consumer>
    </>
  );
}

ThemeToggler.propTypes = {
  onClick: PropTypes.func,
};
ThemeToggler.defaultProps = {
  onClick: () => {},
};

export default ThemeToggler;
