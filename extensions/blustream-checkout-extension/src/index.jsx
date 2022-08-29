import React, { useState }from 'react';
import {
  BlockStack,
  Text,
  render,
  Checkbox,
  useApplyMetafieldsChange,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Actions::RenderBefore', () => <App />);

function App() {
  // Set up the checkbox state
  const [checked, setChecked] = useState(false);

    // Define the namespace and key, making that sure that they match
  // what's in the configuration file
  const metafieldNamespace = "blustream";
  const metafieldKey = "concentAccepted";

  // Set a function to handle updating a metafield
  const applyMetafieldsChange = useApplyMetafieldsChange();

  // Set a function to handle the Checkbox component's onChange event
  const handleChange = () => {
    setChecked(!checked);
    applyMetafieldsChange({
      type: "updateMetafield",
      namespace: metafieldNamespace,
      key: metafieldKey,
      valueType: "string",
      value:(!checked).toString()
    });
  };

  return (
    <BlockStack>
      <Checkbox id="checkbox" name="checkbox" checked={checked} onChange={handleChange}>
        Sign me up for tips on how to better use my products via SMS.
      </Checkbox>
      <Text size="small" emphasis="offset">* By submitting this form, you consent to receive marketing text messages from COMPANY via an automatic telephone dialing system and that the number you have provided is your own. Consent is not a condition of any purchase. Standard message and data rates may apply. At any time, you can unsubscribe from all messages by replying STOP. View our Privacy Policy and Terms of Service.</Text>
    </BlockStack>
  );
}
