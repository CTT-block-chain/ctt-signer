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

function processAppFinancedUserExchangeParams(params: any): Uint8Array {
  const s = new Struct(registry, {
    account: GenericAccountId,
    appId: u32,
    proposalId: Bytes,
    exchangeAmount: u128,
  }, params);

  return s.toU8a();
}

function processAppFinancedUserExchangeConfirmParams(params: any): Uint8Array {
  const s = new Struct(registry, {
    account: GenericAccountId,
		appId: u32,
		payId: Bytes,
		proposalId: Bytes,
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
    sellerConsistence: u64,
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
    sellerConsistence: u64,
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

function processModelExpertAddMemberParams(params: any): Uint8Array {
  const s = new Struct(registry, {
    appId: u32,
    modelId: Bytes,
    kptProfitRate: u32,
  }, params);

  return s.toU8a();
}

function processModelExpertDelMemberParams(params: any): Uint8Array {
  const s = new Struct(registry, {
    appId: u32,
    modelId: Bytes,
    member: GenericAccountId,
  }, params);

  return s.toU8a();
}

function processModelIncomeCollectingParam(params: any): Uint8Array {
  const s = new Struct(registry, {
    appId: u32,
    modelIds: 'Vec<Bytes>',
    incomes: 'Vec<u64>',
  }, params);

  return s.toU8a();
}

function processAppKeyManageParams(params: any): Uint8Array {
  const s = new Struct(registry, {
    admin: GenericAccountId,
    appId: u32,
    member: GenericAccountId
  }, params);

  return s.toU8a();
}

function processAppIncomeRedeemParams(params: any): Uint8Array {
  const s = new Struct(registry, {
    account: GenericAccountId,
    appId: u32,
    cycle: u32,
    exchangeAmount: u128
  }, params);

  return s.toU8a();
}

function processAppIncomeRedeemConfirmParams(params: any): Uint8Array {
  const s = new Struct(registry, {
    account: GenericAccountId,
    appId: u32,
    payId: Bytes,
    cycle: u32
  }, params);

  return s.toU8a();
}

function processModelKeyParams(params: any): Uint8Array {
  const s = new Struct(registry, {
    appId: u32,
    modelId: Bytes,
  }, params);

  return s.toU8a();
}

function processFinanceMemberParams(params: any): Uint8Array {
  const s = new Struct(registry, {
    deposit: u128,
    member: GenericAccountId,
  }, params);

  return s.toU8a();
}

export const encode = (structType: string, structObj: any): Uint8Array => {
  switch (structType) {
    case 'AppFinancedProposalParams':
      return processAppFinancedProposalParams(structObj);
    case 'AppFinancedUserExchangeParams':
      return processAppFinancedUserExchangeParams(structObj);
    case 'AppFinancedUserExchangeConfirmParams':
      return processAppFinancedUserExchangeConfirmParams(structObj);
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
    case 'ModelExpertAddMemberParams':
      return processModelExpertAddMemberParams(structObj);
    case 'ModelExpertDelMemberParams':
      return processModelExpertDelMemberParams(structObj);
    case 'ModelIncomeCollectingParam':
      return processModelIncomeCollectingParam(structObj);
    case 'AppKeyManageParams':
      return processAppKeyManageParams(structObj);
    case 'AppIncomeRedeemParams':
      return processAppIncomeRedeemParams(structObj);
    case 'AppIncomeRedeemConfirmParams':
      return processAppIncomeRedeemConfirmParams(structObj);
    case 'ModelKeyParams':
      return processModelKeyParams(structObj);
    case 'FinanceMemberParams':
      return processFinanceMemberParams(structObj);
    default:
      return null;
  }
}
