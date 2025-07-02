import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { arbitrum, base, mainnet, optimism, polygon, sepolia } from 'wagmi/chains';

export const hardhatChain = {
    id: 31337,
    name: 'Hardhat Local',
    network: 'hardhat',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['http://localhost:8545'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Hardhat Explorer',
            url: 'http://localhost:8545',
        },
    },
    testnet: true,
};

export const wagmiConfig = getDefaultConfig({
    appName: 'DeVote',
    projectId: '9670ba1a696d0be0a6e74ebc95df9c8d',
    chains: [hardhatChain, mainnet, polygon, optimism, arbitrum, base, sepolia],
    ssr: true,
});
