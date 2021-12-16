/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FairElectricity,
  FairElectricityInterface,
} from "../FairElectricity";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_client",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "clientAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "companyAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ammount",
        type: "uint256",
      },
    ],
    name: "consumption",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "costPerKWH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentKWHOwed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "settleBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalKWHUsed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "viewAccountBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516107ea3803806107ea833981810160405281019061003291906100eb565b81600281905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610191565b6000815190506100d081610163565b92915050565b6000815190506100e58161017a565b92915050565b600080604083850312156100fe57600080fd5b600061010c858286016100d6565b925050602061011d858286016100c1565b9150509250929050565b600061013282610139565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b61016c81610127565b811461017757600080fd5b50565b61018381610159565b811461018e57600080fd5b50565b61064a806101a06000396000f3fe60806040526004361061007b5760003560e01c8063622147191161004e578063622147191461012a578063662d9d8314610155578063664b097614610180578063e254cb91146101ab5761007b565b80630190f000146100805780632c2ab5ea146100ab57806353e1ead9146100d65780635c886b3414610101575b600080fd5b34801561008c57600080fd5b506100956101c9565b6040516100a291906103f9565b60405180910390f35b3480156100b757600080fd5b506100c06101cf565b6040516100cd91906103be565b60405180910390f35b3480156100e257600080fd5b506100eb6101f5565b6040516100f891906103be565b60405180910390f35b34801561010d57600080fd5b5061012860048036038101906101239190610354565b610219565b005b34801561013657600080fd5b5061013f6102de565b60405161014c91906103f9565b60405180910390f35b34801561016157600080fd5b5061016a6102fa565b60405161017791906103f9565b60405180910390f35b34801561018c57600080fd5b50610195610300565b6040516101a291906103f9565b60405180910390f35b6101b3610306565b6040516101c091906103f9565b60405180910390f35b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a0906103d9565b60405180910390fd5b80600360008282546102bb9190610425565b9250508190555080600460008282546102d49190610425565b9250508190555050565b60006002546004546102f091906104ac565b6005819055905090565b60045481565b60025481565b6000346005600082825461031a9190610506565b92505081905550600254600554610331919061047b565b600481905550600554905090565b60008135905061034e816105fd565b92915050565b60006020828403121561036657600080fd5b60006103748482850161033f565b91505092915050565b6103868161053a565b82525050565b6000610399600b83610414565b91506103a4826105d4565b602082019050919050565b6103b88161056c565b82525050565b60006020820190506103d3600083018461037d565b92915050565b600060208201905081810360008301526103f28161038c565b9050919050565b600060208201905061040e60008301846103af565b92915050565b600082825260208201905092915050565b60006104308261056c565b915061043b8361056c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156104705761046f610576565b5b828201905092915050565b60006104868261056c565b91506104918361056c565b9250826104a1576104a06105a5565b5b828204905092915050565b60006104b78261056c565b91506104c28361056c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156104fb576104fa610576565b5b828202905092915050565b60006105118261056c565b915061051c8361056c565b92508282101561052f5761052e610576565b5b828203905092915050565b60006105458261054c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f6f6e6c7920636c69656e74000000000000000000000000000000000000000000600082015250565b6106068161056c565b811461061157600080fd5b5056fea2646970667358221220ce2b4767f5c7756047e9cd99708f7dd8696e2685c9a224897f52b07160fbd2b464736f6c63430008040033";

type FairElectricityConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FairElectricityConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FairElectricity__factory extends ContractFactory {
  constructor(...args: FairElectricityConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _cost: BigNumberish,
    _client: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FairElectricity> {
    return super.deploy(
      _cost,
      _client,
      overrides || {}
    ) as Promise<FairElectricity>;
  }
  getDeployTransaction(
    _cost: BigNumberish,
    _client: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_cost, _client, overrides || {});
  }
  attach(address: string): FairElectricity {
    return super.attach(address) as FairElectricity;
  }
  connect(signer: Signer): FairElectricity__factory {
    return super.connect(signer) as FairElectricity__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FairElectricityInterface {
    return new utils.Interface(_abi) as FairElectricityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FairElectricity {
    return new Contract(address, _abi, signerOrProvider) as FairElectricity;
  }
}
