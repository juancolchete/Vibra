interface wallet {
  mnemonic: string;
  address: string;
  nonceDREX: number,
  nonceLIDO: number,
  nonceBFT: number,
  nonceLAC: number,
  loaded: boolean;
}

interface balance{
  drex: number;
  BFT: number;
  LAC: number;
  stEth: number;
}

interface walletNonce{
  nonceDREX:number,
  nonceLIDO:number,
  nonceBFT:number,
  nonceLAC:number,
}
