import 'dotenv/config';
import { ethers } from 'ethers';
import UsageRegistryABI from '../artifacts/UsageRegistry.abi.json';

const RPC_URL = process.env.RPC_URL!;
const PRIVATE_KEY = process.env.POLYGON_PRIVATE_KEY!;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS!;

if (!RPC_URL || !PRIVATE_KEY || !CONTRACT_ADDRESS) {
  throw new Error('Missing env variables');
}

export const provider = new ethers.JsonRpcProvider(RPC_URL, undefined, {
  staticNetwork: true,
});

export const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

export const usageRegistryContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  UsageRegistryABI,
  wallet,
);
