import Modal from './base/Modal';
import OperationForm from './forms/OperationForm';
import SpeedForm from './forms/SpeedForm';
import BotPanel from './forms/BotPanel';

// NPM
import PropTypes from 'prop-types';

const GameConfigurationPanel = ({ shouldShow, onClickCloseModal }) => {
  return (
    <Modal
      mainContentWrapperClassName="w-11/12 max-w-3xl"
      shouldShow={shouldShow}
      onClickCloseModal={onClickCloseModal}
    >
      <h2 className="relative mb-12 inline-block text-xl font-black text-primary-900 before:absolute before:-bottom-2 before:left-0 before:block before:h-1 before:w-3/5 before:rounded-lg before:bg-primary-900">
        Configurations
      </h2>
      <div className="mb-6">
        <OperationForm />
      </div>
      <div className="mb-6">
        <SpeedForm />
      </div>
      <BotPanel />
    </Modal>
  );
};

GameConfigurationPanel.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
  onClickCloseModal: PropTypes.func.isRequired,
};

export default GameConfigurationPanel;
