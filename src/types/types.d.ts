interface wallet {
  mnemonic: string;
  address: string;
  loaded: boolean;
}

interface balance{
  drex: number;
  icp: number;
  wDrex: number;
  wstEth: number;
}
