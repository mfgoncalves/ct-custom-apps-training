import React from 'react';
import Spacings from '@commercetools-uikit/spacings';
import PrimaryButton from '@commercetools-uikit/primary-button';
import SecondaryButton from '@commercetools-uikit/secondary-button';
import styles from './save-toolbar.mod.css';

interface Props {
  isVisible?: boolean;
  isDisabled?: boolean;
  saveLabel?: string;
  onSave: () => void;
  onCancel: () => void;
}

export const SaveToolbar = ({
  isVisible = true,
  onCancel,
  onSave,
  isDisabled = false,
  saveLabel = 'Save',
}: Props) => {
  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      <Spacings.Inline alignItems="center" justifyContent="space-between" scale="l">
        <SecondaryButton isDisabled={isDisabled} label="Cancel" onClick={onCancel} />
        <PrimaryButton isDisabled={isDisabled} label={saveLabel} onClick={onSave} />
      </Spacings.Inline>
    </div>
  );
};

SaveToolbar.displayName = 'SaveToolbar';

export default SaveToolbar;
