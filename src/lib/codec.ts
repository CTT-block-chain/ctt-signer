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

function processAuthParamsCreateModel(params: any): Uint8Array {
  const s = new Struct(registry, {
    modelId: Bytes
  }, params);

  return s.toU8a();
}

function processClientParamsCreateModel(params: any): Uint8Array {
  const s = new Struct(registry, {
    appId: u32,
    expertId: Bytes,
    commodityName: Bytes,
    commodityType: u32,
    contentHash: U8aFixed,
  }, params);

  return s.toU8a();
}

function processClientParamsCreatePublishDoc(params: any): Uint8Array {
  const s = new Struct(registry, {
    appId: u32,
    documentId: Bytes,
    modelId: Bytes,
    productId: Bytes,
    contentHash: U8aFixed,
    paraIssueRate: u64,
    selfIssueRate: u64,
  }, params);

  return s.toU8a();
}

function processClientParamsCreateIdentifyDoc(params: any): Uint8Array {
  const s = new Struct(registry, {
    appId: u32,
    documentId: Bytes,
    productId: Bytes,
    contentHash: U8aFixed,
    goodsPrice: u64,
    identRate: u64,
    identConsistence: u64,
    cartId: Bytes
  }, params);

  return s.toU8a();
}

function processClientParamsCreateTryDoc(params: any): Uint8Array {
  const s = new Struct(registry, {
    appId: u32,
    documentId: Bytes,
    productId: Bytes,
    contentHash: U8aFixed,
    goodsPrice: u64,
    offsetRate: u64,
    trueRate: u64,
    cartId: Bytes
  }, params);

  return s.toU8a();
}

function processClientParamsCreateChooseDoc(params: any): Uint8Array {
  const s = new Struct(registry, {
    appId: u32,
    documentId: Bytes,
    modelId: Bytes,
    productId: Bytes,
    contentHash: U8aFixed,
    sellCount: u64,
    tryCount: u64
  }, params);

  return s.toU8a();
}

function processClientParamsCreateModelDoc(params: any): Uint8Array {
  const s = new Struct(registry, {
    appId: u32,
    documentId: Bytes,
    modelId: Bytes,
    productId: Bytes,
    contentHash: U8aFixed,
    producerCount: u64,
    productCount: u64
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
    case 'AuthParamsCreateModel':
      return processAuthParamsCreateModel(structObj);
    case 'ClientParamsCreateModel':
      return processClientParamsCreateModel(structObj);
    case 'ClientParamsCreatePublishDoc':
      return processClientParamsCreatePublishDoc(structObj);
    case 'ClientParamsCreateIdentifyDoc':
      return processClientParamsCreateIdentifyDoc(structObj);
    case 'ClientParamsCreateTryDoc':
      return processClientParamsCreateTryDoc(structObj);
    case 'ClientParamsCreateChooseDoc':
      return processClientParamsCreateChooseDoc(structObj);
    case 'ClientParamsCreateModelDoc':
      return processClientParamsCreateModelDoc(structObj);
    default:
      return null;
  }
}
