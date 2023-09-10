interface wallet {
  mnemonic: string;
  address: string;
  nonceDREX: number,
  nonceLIDO: number,
  nonceICP: number,
  nonceLAC: number,
  loaded: boolean;
}

interface balance{
  drex: number;
  icp: number;
  laChain: number;
  stEth: number;
}

interface walletNonce{
  nonceDREX:number,
  nonceLIDO:number,
  nonceICP:number,
  nonceLAC:number,
}
