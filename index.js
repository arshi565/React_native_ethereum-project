import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ethers } from 'ethers';

export default function App() {
  const [toAddress, setToAddress] = useState('');
  const [value, setValue] = useState('');

  // Set up a provider for interacting with the Ethereum blockchain
  const provider = new ethers.providers.JsonRpcProvider('https://rinkeby.infura.io/v3/your-project-id');

// Get the user's account address (assuming they are using MetaMask or some other wallet provider)
const signer = provider.getSigner();

// Define an async function to get the address
async function getAddress() {
  const address = await signer.getAddress();
  return address;
}

// Call the async function to get the address
getAddress().then((address) => {
  console.log('Address:', address);
}).catch((error) => {
  console.error('Error getting address:', error);
});

    // Send Ether to the specified address
    const tx = {
      to: toAddress,
      value: ethers.utils.parseEther(value),
      gasLimit: 21000,
      gasPrice: ethers.utils.parseUnits('10', 'gwei'),
    };
    
    try {
      const sendTransaction = async () => {
  // Get the user's account address (assuming they are using MetaMask or some other wallet provider)
  const signer = provider.getSigner();
  const address = await signer.getAddress();

  // Build the transaction object
  const tx = {
    to: toAddress,
    value: ethers.utils.parseEther(trnx),
    gasLimit: 21000,
    gasPrice: ethers.utils.parseUnits("20", "gwei")
  };

  try {
    // Send the transaction
    const response = await signer.sendTransaction(tx);

    // Get the transaction hash and wait for it to be confirmed
    const txHash = response.hash;
    const receipt = await provider.getTransactionReceipt(txHash);

    console.log(`Transaction confirmed: ${txHash}`);
    console.log(`Gas used: ${receipt.gasUsed.toString()}`);
  } catch (error) {
    console.error('Error sending transaction:', error.message);
  }
};


      // Log the transaction receipt
      console.log(receipt);

      // Show a success message
      alert(`Transaction successful! Tx hash: ${txHash}`);
    } catch (error) {
      // Log the error message
      console.error(error);

      // Show an error message
      alert(`Transaction failed: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>To Address:</Text>
      <TextInput style={styles.input} value={toAddress} onChangeText={setToAddress} />

      <Text style={styles.label}>Value:</Text>
      <TextInput style={styles.input} value={value} onChangeText={setValue} />

      <TouchableOpacity style={styles.button} onPress={sendTransaction}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00cc99',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
