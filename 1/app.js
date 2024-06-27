const CONTRACT_ADDRESS = '0x2f1Ab97c103544325eeC4eFb58c01348E4fe39Ad';
const CONTRACT_ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "a",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "b",
                "type": "uint256"
            }
        ],
        "name": "add",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "a",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "b",
                "type": "uint256"
            }
        ],
        "name": "subtract",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "a",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "b",
                "type": "uint256"
            }
        ],
        "name": "multiply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "a",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "b",
                "type": "uint256"
            }
        ],
        "name": "divide",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    }
];

async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
}

async function performOperation(operation) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    if (!num1 || !num2) return alert('Please enter both numbers');
    if (typeof window.ethereum !== 'undefined') {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
        try {
            let result;
            switch (operation) {
                case 'add':
                    result = await contract.add(num1, num2);
                    break;
                case 'subtract':
                    result = await contract.subtract(num1, num2);
                    break;
                case 'multiply':
                    result = await contract.multiply(num1, num2);
                    break;
                case 'divide':
                    result = await contract.divide(num1, num2);
                    break;
                default:
                    return;
            }
            document.getElementById('result').innerText = 'Result: ' + result.toString();
        } catch (err) {
            console.error('Error: ', err);
        }
    }
}
