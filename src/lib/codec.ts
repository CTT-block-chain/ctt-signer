import { Bytes, GenericAccountId, Struct, U8aFixed } from '@polkadot/types';
import { TypeRegistry } from '@polkadot/types/create';
import { u128, u32, u64, u8 } from '@polkadot/types/primitive';

const registry = new TypeRegistry();

function processAppFinancedProposalParams(params: any): Uint8Array {
  const s = new Struct(registry, {
    account: GenericAccountId,
    appId: u32,
    proposalId: Bytes,
    exchange: u128,
    amount: u128,
  }, params);

  return s.toU8a();
}

function processCommentDataParams(params: any): Uint8Array {
  const s = new Struct(registry, {
    appId: u32,
    documentId: Bytes,
    commentId: Bytes,
    commentHash: U8aFixed,
    commentFee: u64,
    commentTrend: u8,
  }, params);

  return s.toU8a();
}

function processAddAppParams(params: any): Uint8Array {
  const s = new Struct(registry, {
    appType: Bytes,
    appName: Bytes,
    appKey: GenericAccountId,
    appAdminKey: GenericAccountId,
    returnRate: u32,
  }, params);

  return s.toU8a();
}

export const encode = (structType: string, structObj: any): Uint8Array => {
  switch (structType) {
    case 'AppFinancedProposalParams':
      return processAppFinancedProposalParams(structObj);
    case 'CommentData':
      return processCommentDataParams(structObj);
    case 'AddAppParams':
      return processAddAppParams(structObj);
    default:
      return null;
      break;
  }
}
