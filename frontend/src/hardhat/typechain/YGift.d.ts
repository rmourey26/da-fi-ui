/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface YGiftInterface extends ethers.utils.Interface {
  functions: {
    "approve(address,uint256)": FunctionFragment;
    "available(uint256,uint256,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "baseURI()": FunctionFragment;
    "collect(uint256,uint256)": FunctionFragment;
    "collectible(uint256)": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "gifts(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "mint(address,address,uint256,string,string,string,uint256,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tip(uint256,uint256,string)": FunctionFragment;
    "tokenByIndex(uint256)": FunctionFragment;
    "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "available",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "baseURI", values?: void): string;
  encodeFunctionData(
    functionFragment: "collect",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collectible",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "gifts", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [
      string,
      string,
      BigNumberish,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: void): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: void): string;
  encodeFunctionData(
    functionFragment: "tip",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenByIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenOfOwnerByIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "totalSupply", values?: void): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "available", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collectible",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gifts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tip", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenOfOwnerByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "Collected(address,uint256,address,uint256)": EventFragment;
    "GiftMinted(address,address,uint256,uint256)": EventFragment;
    "Tip(address,uint256,address,uint256,string)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Collected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GiftMinted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Tip"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class YGift extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: YGiftInterface;

  functions: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    available(
      _amount: BigNumberish,
      _start: BigNumberish,
      _duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    baseURI(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    collect(
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    collectible(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    gifts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      token: string;
      amount: BigNumber;
      tipped: BigNumber;
      start: BigNumber;
      duration: BigNumber;
      name: string;
      message: string;
      url: string;
      0: string;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: string;
      6: string;
      7: string;
    }>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    mint(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      _name: string,
      _msg: string,
      _url: string,
      _start: BigNumberish,
      _duration: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    name(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    onERC721Received(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    symbol(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    tip(
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _msg: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    totalSupply(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  available(
    _amount: BigNumberish,
    _start: BigNumberish,
    _duration: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  baseURI(overrides?: CallOverrides): Promise<string>;

  collect(
    _tokenId: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  collectible(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  gifts(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    token: string;
    amount: BigNumber;
    tipped: BigNumber;
    start: BigNumber;
    duration: BigNumber;
    name: string;
    message: string;
    url: string;
    0: string;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: string;
    6: string;
    7: string;
  }>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mint(
    _to: string,
    _token: string,
    _amount: BigNumberish,
    _name: string,
    _msg: string,
    _url: string,
    _start: BigNumberish,
    _duration: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  onERC721Received(
    _operator: string,
    _from: string,
    _tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tip(
    _tokenId: BigNumberish,
    _amount: BigNumberish,
    _msg: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tokenByIndex(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenOfOwnerByIndex(
    owner: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  staticCall: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    available(
      _amount: BigNumberish,
      _start: BigNumberish,
      _duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    baseURI(overrides?: CallOverrides): Promise<string>;

    collect(
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    collectible(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    gifts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      token: string;
      amount: BigNumber;
      tipped: BigNumber;
      start: BigNumber;
      duration: BigNumber;
      name: string;
      message: string;
      url: string;
      0: string;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: string;
      6: string;
      7: string;
    }>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mint(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      _name: string,
      _msg: string,
      _url: string,
      _start: BigNumberish,
      _duration: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    onERC721Received(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tip(
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _msg: string,
      overrides?: Overrides
    ): Promise<void>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;
  };

  filters: {
    Approval(
      owner: string | null,
      approved: string | null,
      tokenId: BigNumberish | null
    ): EventFilter;

    ApprovalForAll(
      owner: string | null,
      operator: string | null,
      approved: null
    ): EventFilter;

    Collected(
      collector: string | null,
      tokenId: BigNumberish | null,
      token: null,
      amount: null
    ): EventFilter;

    GiftMinted(
      from: string | null,
      to: string | null,
      tokenId: BigNumberish | null,
      unlocksAt: null
    ): EventFilter;

    Tip(
      tipper: string | null,
      tokenId: BigNumberish | null,
      token: null,
      amount: null,
      message: null
    ): EventFilter;

    Transfer(
      from: string | null,
      to: string | null,
      tokenId: BigNumberish | null
    ): EventFilter;
  };

  estimateGas: {
    approve(to: string, tokenId: BigNumberish): Promise<BigNumber>;
    available(
      _amount: BigNumberish,
      _start: BigNumberish,
      _duration: BigNumberish
    ): Promise<BigNumber>;
    balanceOf(owner: string): Promise<BigNumber>;
    baseURI(): Promise<BigNumber>;
    collect(_tokenId: BigNumberish, _amount: BigNumberish): Promise<BigNumber>;
    collectible(_tokenId: BigNumberish): Promise<BigNumber>;
    getApproved(tokenId: BigNumberish): Promise<BigNumber>;
    gifts(arg0: BigNumberish): Promise<BigNumber>;
    isApprovedForAll(owner: string, operator: string): Promise<BigNumber>;
    mint(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      _name: string,
      _msg: string,
      _url: string,
      _start: BigNumberish,
      _duration: BigNumberish
    ): Promise<BigNumber>;
    name(): Promise<BigNumber>;
    onERC721Received(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike
    ): Promise<BigNumber>;
    ownerOf(tokenId: BigNumberish): Promise<BigNumber>;
    safeTransferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish
    ): Promise<BigNumber>;
    setApprovalForAll(operator: string, approved: boolean): Promise<BigNumber>;
    supportsInterface(interfaceId: BytesLike): Promise<BigNumber>;
    symbol(): Promise<BigNumber>;
    tip(
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _msg: string
    ): Promise<BigNumber>;
    tokenByIndex(index: BigNumberish): Promise<BigNumber>;
    tokenOfOwnerByIndex(owner: string, index: BigNumberish): Promise<BigNumber>;
    tokenURI(tokenId: BigNumberish): Promise<BigNumber>;
    totalSupply(): Promise<BigNumber>;
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(to: string, tokenId: BigNumberish): Promise<PopulatedTransaction>;
    available(
      _amount: BigNumberish,
      _start: BigNumberish,
      _duration: BigNumberish
    ): Promise<PopulatedTransaction>;
    balanceOf(owner: string): Promise<PopulatedTransaction>;
    baseURI(): Promise<PopulatedTransaction>;
    collect(
      _tokenId: BigNumberish,
      _amount: BigNumberish
    ): Promise<PopulatedTransaction>;
    collectible(_tokenId: BigNumberish): Promise<PopulatedTransaction>;
    getApproved(tokenId: BigNumberish): Promise<PopulatedTransaction>;
    gifts(arg0: BigNumberish): Promise<PopulatedTransaction>;
    isApprovedForAll(
      owner: string,
      operator: string
    ): Promise<PopulatedTransaction>;
    mint(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      _name: string,
      _msg: string,
      _url: string,
      _start: BigNumberish,
      _duration: BigNumberish
    ): Promise<PopulatedTransaction>;
    name(): Promise<PopulatedTransaction>;
    onERC721Received(
      _operator: string,
      _from: string,
      _tokenId: BigNumberish,
      _data: BytesLike
    ): Promise<PopulatedTransaction>;
    ownerOf(tokenId: BigNumberish): Promise<PopulatedTransaction>;
    safeTransferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish
    ): Promise<PopulatedTransaction>;
    setApprovalForAll(
      operator: string,
      approved: boolean
    ): Promise<PopulatedTransaction>;
    supportsInterface(interfaceId: BytesLike): Promise<PopulatedTransaction>;
    symbol(): Promise<PopulatedTransaction>;
    tip(
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _msg: string
    ): Promise<PopulatedTransaction>;
    tokenByIndex(index: BigNumberish): Promise<PopulatedTransaction>;
    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish
    ): Promise<PopulatedTransaction>;
    tokenURI(tokenId: BigNumberish): Promise<PopulatedTransaction>;
    totalSupply(): Promise<PopulatedTransaction>;
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish
    ): Promise<PopulatedTransaction>;
  };
}
