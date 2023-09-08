interface wallet {
  mnemonic: string;
  address: string;
  nounceDREX: number,
  nounceLIDO: number,
  nounceICP: number,
  nounceLAC: number,
  loaded: boolean;
}

interface balance{
  drex: number;
  icp: number;
  wDrex: number;
  wstEth: number;
}
