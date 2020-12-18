import { Struct } from '@polkadot/types';
import { TypeRegistry } from '@polkadot/types/create';
import { Text, u32 } from '@polkadot/types/primitive';

//import { AppFinancedProposalParams } from './types';

const registry = new TypeRegistry();

function processAppFinancedProposalParams(_params: any): Uint8Array {
  /*const s: AppFinancedProposalParams = params as AppFinancedProposalParams;
  console.log("s:", s);
  return s.toU8a();*/

  const s = new Struct(registry, {
    foo: Text,
    bar: u32,
  }, { foo: 'bazzing', bar: 10 });

  return s.toU8a();
}

export const encode = (structType: string, structObj: any): Uint8Array => {
  switch (structType) {
    case 'AppFinancedProposalParams':
      return processAppFinancedProposalParams(structObj);
    default:
      return null;
      break;
  }
}
