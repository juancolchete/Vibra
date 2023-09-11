interface wallet {
  mnemonic: string;
  address: string;
  nonceDREX: number,
  nonceLIDO: number,
  nonceBFT: number,
  noncewDrex: number,
  loaded: boolean;
}

interface balance{
  drex: number;
  BFT: number;
  wDrex: number;
  stEth: number;
}

interface walletNonce{
  nonceDREX:number,
  nonceLIDO:number,
  nonceBFT:number,
  noncewDrex:number,
}
