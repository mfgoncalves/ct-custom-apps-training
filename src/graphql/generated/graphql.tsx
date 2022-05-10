import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigDecimal` scalar type represents signed fractional values with arbitrary precision. */
  BigDecimal: any;
  /** [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) country code. */
  Country: any;
  /** Represents a currency. Currencies are identified by their [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm) currency codes. */
  Currency: any;
  /** DateTime is a scalar value that represents an ISO8601 formatted date. */
  Date: any;
  /** DateTime is a scalar value that represents an ISO8601 formatted date and time. */
  DateTime: any;
  /** Raw JSON value */
  Json: any;
  /** A key that references a resource. */
  KeyReferenceInput: any;
  /** Locale is a scalar value represented as a string language tag. */
  Locale: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  /** A set. */
  Set: any;
  /** Time is a scalar value that represents an ISO8601 formatted time. */
  Time: any;
  /** YearMonth is a scalar value that represents an ISO8601 formatted year and month. */
  YearMonth: any;
};

/** API Clients can be used to obtain OAuth 2 access tokens. The secret is only shown once in the response of creating the API Client. */
export type ApiClientWithSecret = {
  accessTokenValiditySeconds?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deleteAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  lastUsedAt?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
  refreshTokenValiditySeconds?: Maybe<Scalars['Int']>;
  scope: Scalars['String'];
  secret: Scalars['String'];
};

/** API Clients can be used to obtain OAuth 2 access tokens */
export type ApiClientWithoutSecret = {
  accessTokenValiditySeconds?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deleteAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  lastUsedAt?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
  refreshTokenValiditySeconds?: Maybe<Scalars['Int']>;
  scope: Scalars['String'];
};

export type ApiClientWithoutSecretQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<ApiClientWithoutSecret>;
  total: Scalars['Long'];
};

export type AwsLambdaDestination = ExtensionDestination & {
  accessKey: Scalars['String'];
  accessSecret: Scalars['String'];
  arn: Scalars['String'];
  type: Scalars['String'];
};

export type AwsLambdaDestinationInput = {
  accessKey: Scalars['String'];
  accessSecret: Scalars['String'];
  arn: Scalars['String'];
};

export type AbsoluteDiscountValue = CartDiscountValue &
  ProductDiscountValue & {
    money: Array<Money>;
    type: Scalars['String'];
  };

export type AbsoluteDiscountValueInput = {
  money: Array<MoneyInput>;
};

export enum ActionType {
  Create = 'Create',
  Update = 'Update',
}

/** A field to access the active cart. */
export type ActiveCartInterface = {
  activeCart?: Maybe<Cart>;
};

export type AddAttributeGroupAttribute = {
  attribute: Scalars['String'];
};

export type AddCartCustomLineItem = {
  custom?: InputMaybe<CustomFieldsDraft>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  money: BaseMoneyInput;
  name: Array<LocalizedStringItemInputType>;
  quantity?: InputMaybe<Scalars['Long']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
  slug: Scalars['String'];
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
};

export type AddCartDiscountCode = {
  code: Scalars['String'];
  validateDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AddCartItemShippingAddress = {
  address: AddressInput;
};

export type AddCartLineItem = {
  addedAt?: InputMaybe<Scalars['DateTime']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  externalPrice?: InputMaybe<BaseMoneyInput>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Long']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
  sku?: InputMaybe<Scalars['String']>;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type AddCartPayment = {
  payment: ResourceIdentifierInput;
};

export type AddCartShoppingList = {
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  shoppingList: ResourceIdentifierInput;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
};

export type AddCategoryAsset = {
  asset: AssetDraftInput;
  position?: InputMaybe<Scalars['Int']>;
};

export type AddChannelRoles = {
  roles: Array<ChannelRole>;
};

export type AddCustomerAddress = {
  address: AddressInput;
};

export type AddCustomerBillingAddressId = {
  addressId?: InputMaybe<Scalars['String']>;
  addressKey?: InputMaybe<Scalars['String']>;
};

export type AddCustomerShippingAddressId = {
  addressId?: InputMaybe<Scalars['String']>;
  addressKey?: InputMaybe<Scalars['String']>;
};

export type AddCustomerStore = {
  store: ResourceIdentifierInput;
};

export type AddInventoryEntryQuantity = {
  quantity: Scalars['Long'];
};

export type AddMyCartLineItem = {
  addedAt?: InputMaybe<Scalars['DateTime']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Long']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
  sku?: InputMaybe<Scalars['String']>;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type AddMyPaymentTransaction = {
  transaction: MyTransactionDraft;
};

export type AddOrderDelivery = {
  address?: InputMaybe<AddressInput>;
  custom?: InputMaybe<CustomFieldsDraft>;
  items?: InputMaybe<Array<DeliveryItemDraftType>>;
  parcels?: InputMaybe<Array<ParcelDataDraftType>>;
};

export type AddOrderEditStagedAction = {
  stagedAction: StagedOrderUpdateAction;
};

export type AddOrderItemShippingAddress = {
  address: AddressInput;
};

export type AddOrderParcelToDelivery = {
  custom?: InputMaybe<CustomFieldsDraft>;
  deliveryId: Scalars['String'];
  items?: InputMaybe<Array<DeliveryItemDraftType>>;
  measurements?: InputMaybe<ParcelMeasurementsDraftType>;
  trackingData?: InputMaybe<TrackingDataDraftType>;
};

export type AddOrderPayment = {
  payment: ResourceIdentifierInput;
};

export type AddOrderReturnInfo = {
  items: Array<ReturnItemDraftType>;
  returnDate?: InputMaybe<Scalars['DateTime']>;
  returnTrackingId?: InputMaybe<Scalars['String']>;
};

export type AddPaymentInterfaceInteraction = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type AddPaymentTransaction = {
  transaction: TransactionDraft;
};

export type AddProductAsset = {
  asset: AssetDraftInput;
  position?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type AddProductExternalImage = {
  image: ImageInput;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type AddProductPrice = {
  price: ProductPriceDataInput;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type AddProductSelectionProduct = {
  product: ResourceIdentifierInput;
};

export type AddProductToCategory = {
  category: ResourceIdentifierInput;
  orderHint?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
};

export type AddProductVariant = {
  assets?: InputMaybe<Array<AssetDraftInput>>;
  attributes?: InputMaybe<Array<ProductAttributeInput>>;
  images?: InputMaybe<Array<ImageInput>>;
  key?: InputMaybe<Scalars['String']>;
  prices?: InputMaybe<Array<ProductPriceDataInput>>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
};

export type AddShippingMethodShippingRate = {
  shippingRate: ShippingRateDraft;
  zone: ResourceIdentifierInput;
};

export type AddShippingMethodZone = {
  zone: ResourceIdentifierInput;
};

export type AddShoppingListLineItem = {
  addedAt?: InputMaybe<Scalars['DateTime']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type AddShoppingListTextLineItem = {
  addedAt?: InputMaybe<Scalars['DateTime']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  name: Array<LocalizedStringItemInputType>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type AddStagedOrderCustomLineItem = {
  custom?: InputMaybe<CustomFieldsDraft>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  money: BaseMoneyInput;
  name: Array<LocalizedStringItemInputType>;
  quantity?: InputMaybe<Scalars['Long']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraftType>;
  slug: Scalars['String'];
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
};

export type AddStagedOrderCustomLineItemOutput = StagedOrderUpdateActionOutput & {
  draft: CustomLineItemDraftOutput;
  type: Scalars['String'];
};

export type AddStagedOrderDelivery = {
  address?: InputMaybe<AddressInput>;
  custom?: InputMaybe<CustomFieldsDraft>;
  items?: InputMaybe<Array<DeliveryItemDraftType>>;
  parcels?: InputMaybe<Array<ParcelDataDraftType>>;
};

export type AddStagedOrderDeliveryOutput = StagedOrderUpdateActionOutput & {
  address?: Maybe<AddressDraft>;
  custom?: Maybe<CustomFieldsCommand>;
  items: Array<DeliveryItem>;
  parcels: Array<ParcelData>;
  type: Scalars['String'];
};

export type AddStagedOrderDiscountCode = {
  code: Scalars['String'];
  validateDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AddStagedOrderDiscountCodeOutput = StagedOrderUpdateActionOutput & {
  code: Scalars['String'];
  type: Scalars['String'];
  validateDuplicates: Scalars['Boolean'];
};

export type AddStagedOrderItemShippingAddress = {
  address: AddressInput;
};

export type AddStagedOrderItemShippingAddressOutput = StagedOrderUpdateActionOutput & {
  address: AddressDraft;
  type: Scalars['String'];
};

export type AddStagedOrderLineItem = {
  addedAt?: InputMaybe<Scalars['DateTime']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  externalPrice?: InputMaybe<BaseMoneyInput>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Long']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraftType>;
  sku?: InputMaybe<Scalars['String']>;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type AddStagedOrderLineItemOutput = StagedOrderUpdateActionOutput & {
  draft: LineItemDraftOutput;
  type: Scalars['String'];
};

export type AddStagedOrderParcelToDelivery = {
  custom?: InputMaybe<CustomFieldsDraft>;
  deliveryId: Scalars['String'];
  items?: InputMaybe<Array<DeliveryItemDraftType>>;
  measurements?: InputMaybe<ParcelMeasurementsDraftType>;
  trackingData?: InputMaybe<TrackingDataDraftType>;
};

export type AddStagedOrderParcelToDeliveryOutput = StagedOrderUpdateActionOutput & {
  custom?: Maybe<CustomFieldsCommand>;
  deliveryId: Scalars['String'];
  items: Array<DeliveryItem>;
  measurements?: Maybe<ParcelMeasurements>;
  trackingData?: Maybe<TrackingData>;
  type: Scalars['String'];
};

export type AddStagedOrderPayment = {
  payment: ResourceIdentifierInput;
};

export type AddStagedOrderPaymentOutput = StagedOrderUpdateActionOutput & {
  paymentResId: ResourceIdentifier;
  type: Scalars['String'];
};

export type AddStagedOrderReturnInfo = {
  items: Array<ReturnItemDraftType>;
  returnDate?: InputMaybe<Scalars['DateTime']>;
  returnTrackingId?: InputMaybe<Scalars['String']>;
};

export type AddStagedOrderReturnInfoOutput = StagedOrderUpdateActionOutput & {
  items: Array<ReturnItemDraftTypeOutput>;
  returnDate?: Maybe<Scalars['DateTime']>;
  returnTrackingId?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AddStagedOrderShoppingList = {
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  shoppingList: ResourceIdentifierInput;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
};

export type AddStagedOrderShoppingListOutput = StagedOrderUpdateActionOutput & {
  distributionChannelResId?: Maybe<ChannelReferenceIdentifier>;
  shoppingListResId: ResourceIdentifier;
  supplyChannelResId?: Maybe<ChannelReferenceIdentifier>;
  type: Scalars['String'];
};

export type AddStateRoles = {
  roles: Array<StateRole>;
};

export type AddStoreDistributionChannel = {
  distributionChannel: ResourceIdentifierInput;
};

export type AddStoreProductSelection = {
  active?: InputMaybe<Scalars['Boolean']>;
  productSelection: ResourceIdentifierInput;
};

export type AddStoreSupplyChannel = {
  supplyChannel: ResourceIdentifierInput;
};

export type AddTypeEnumValue = {
  fieldName: Scalars['String'];
  value: EnumValueInput;
};

export type AddTypeFieldDefinition = {
  fieldDefinition: FieldDefinitionInput;
};

export type AddTypeLocalizedEnumValue = {
  fieldName: Scalars['String'];
  value: LocalizedEnumValueInput;
};

export type AddZoneLocation = {
  location: ZoneLocation;
};

/** An address represents a postal address. */
export type Address = {
  additionalAddressInfo?: Maybe<Scalars['String']>;
  additionalStreetInfo?: Maybe<Scalars['String']>;
  apartment?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country: Scalars['Country'];
  custom?: Maybe<CustomFieldsType>;
  department?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  pOBox?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  salutation?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetName?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type AddressDraft = {
  additionalAddressInfo?: Maybe<Scalars['String']>;
  additionalStreetInfo?: Maybe<Scalars['String']>;
  apartment?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country: Scalars['Country'];
  custom?: Maybe<CustomFieldsCommand>;
  department?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  pOBox?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  salutation?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetName?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  additionalAddressInfo?: InputMaybe<Scalars['String']>;
  additionalStreetInfo?: InputMaybe<Scalars['String']>;
  apartment?: InputMaybe<Scalars['String']>;
  building?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  country: Scalars['Country'];
  custom?: InputMaybe<CustomFieldsDraft>;
  department?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['String']>;
  fax?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  pOBox?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  salutation?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  streetName?: InputMaybe<Scalars['String']>;
  streetNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum AnonymousCartSignInMode {
  /**
   * `LineItem`s of the anonymous cart will be copied to the customer’s active cart that has been modified most recently.
   *
   * The `CartState` of the anonymous cart gets changed to `Merged` while the `CartState` of the customer’s cart remains `Active`.
   *
   * `CustomLineItems` and `CustomFields` of the anonymous cart will not be copied to the customers cart.
   *
   * If a `LineItem` in the anonymous cart matches an existing line item in the customer’s cart (same product ID and variant ID), the maximum quantity of both LineItems is used as the new quantity. In that case `CustomFields` on the `LineItem` of the anonymous cart will not be in the resulting `LineItem`.
   */
  MergeWithExistingCustomerCart = 'MergeWithExistingCustomerCart',
  /** The anonymous cart is used as new active customer cart. No `LineItem`s get merged. */
  UseAsNewActiveCustomerCart = 'UseAsNewActiveCustomerCart',
}

export type Applied = OrderEditResult & {
  appliedAt: Scalars['DateTime'];
  excerptAfterEdit: OrderExcerpt;
  excerptBeforeEdit: OrderExcerpt;
  type: Scalars['String'];
};

export type ApplyCartDeltaToCustomLineItemShippingDetailsTargets = {
  customLineItemId: Scalars['String'];
  targetsDelta: Array<ShippingTargetDraft>;
};

export type ApplyCartDeltaToLineItemShippingDetailsTargets = {
  lineItemId: Scalars['String'];
  targetsDelta: Array<ShippingTargetDraft>;
};

export type Asset = {
  custom?: Maybe<CustomFieldsType>;
  description?: Maybe<Scalars['String']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  sources: Array<AssetSource>;
  tags: Array<Scalars['String']>;
};

export type AssetDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type AssetNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type AssetDimensions = {
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export type AssetDimensionsInput = {
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export type AssetDraftInput = {
  custom?: InputMaybe<CustomFieldsDraft>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']>;
  name: Array<LocalizedStringItemInputType>;
  sources?: InputMaybe<Array<AssetSourceInput>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<ResourceIdentifierInput>;
};

export type AssetSource = {
  contentType?: Maybe<Scalars['String']>;
  dimensions?: Maybe<AssetDimensions>;
  key?: Maybe<Scalars['String']>;
  uri: Scalars['String'];
};

export type AssetSourceInput = {
  contentType?: InputMaybe<Scalars['String']>;
  dimensions?: InputMaybe<AssetDimensionsInput>;
  key?: InputMaybe<Scalars['String']>;
  uri: Scalars['String'];
};

export type Attribute = {
  name: Scalars['String'];
};

export enum AttributeConstraint {
  /** A set of attributes, that have this constraint, should have different combinations in each variant */
  CombinationUnique = 'CombinationUnique',
  /** No constraints are applied to the attribute */
  None = 'None',
  /** Attribute value should be the same in all variants */
  SameForAll = 'SameForAll',
  /** Attribute value should be different in each variant */
  Unique = 'Unique',
}

export type AttributeDefinition = {
  attributeConstraint: AttributeConstraint;
  inputHint: TextInputHint;
  inputTip?: Maybe<Scalars['String']>;
  inputTipAllLocales?: Maybe<Array<LocalizedString>>;
  isRequired: Scalars['Boolean'];
  isSearchable: Scalars['Boolean'];
  label?: Maybe<Scalars['String']>;
  labelAllLocales: Array<LocalizedString>;
  name: Scalars['String'];
  type: AttributeDefinitionType;
};

export type AttributeDefinitionInputTipArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type AttributeDefinitionLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type AttributeDefinitionDraft = {
  attributeConstraint?: InputMaybe<AttributeConstraint>;
  inputHint?: InputMaybe<TextInputHint>;
  inputTip?: InputMaybe<Array<LocalizedStringItemInputType>>;
  isRequired: Scalars['Boolean'];
  isSearchable: Scalars['Boolean'];
  label: Array<LocalizedStringItemInputType>;
  name: Scalars['String'];
  type: AttributeTypeDraft;
};

export type AttributeDefinitionResult = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  results: Array<AttributeDefinition>;
  total: Scalars['Int'];
};

/** (https://docs.commercetools.com/api/projects/productTypes#attributetype)[https://docs.commercetools.com/api/projects/productTypes#attributetype] */
export type AttributeDefinitionType = {
  name: Scalars['String'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type AttributeGroup = Versioned & {
  attributes: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  description?: Maybe<Scalars['String']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  lastModifiedAt: Scalars['DateTime'];
  lastModifiedBy?: Maybe<Initiator>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  version: Scalars['Long'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type AttributeGroupDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type AttributeGroupNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type AttributeGroupDraft = {
  attributes: Array<Scalars['String']>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']>;
  name: Array<LocalizedStringItemInputType>;
};

export type AttributeGroupQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<AttributeGroup>;
  total: Scalars['Long'];
};

export type AttributeGroupUpdateAction = {
  addAttribute?: InputMaybe<AddAttributeGroupAttribute>;
  changeName?: InputMaybe<ChangeAttributeGroupName>;
  removeAttribute?: InputMaybe<RemoveAttributeGroupAttribute>;
  setAttributes?: InputMaybe<SetAttributeGroupAttributes>;
  setDescription?: InputMaybe<SetAttributeGroupDescription>;
  setKey?: InputMaybe<SetAttributeGroupKey>;
};

export type AttributeSetElementTypeDraft = {
  boolean?: InputMaybe<SimpleAttributeTypeDraft>;
  date?: InputMaybe<SimpleAttributeTypeDraft>;
  datetime?: InputMaybe<SimpleAttributeTypeDraft>;
  enum?: InputMaybe<EnumTypeDraft>;
  lenum?: InputMaybe<LocalizableEnumTypeDraft>;
  ltext?: InputMaybe<SimpleAttributeTypeDraft>;
  money?: InputMaybe<SimpleAttributeTypeDraft>;
  number?: InputMaybe<SimpleAttributeTypeDraft>;
  reference?: InputMaybe<ReferenceTypeDefinitionDraft>;
  text?: InputMaybe<SimpleAttributeTypeDraft>;
  time?: InputMaybe<SimpleAttributeTypeDraft>;
};

export type AttributeSetTypeDraft = {
  elementType: AttributeSetElementTypeDraft;
};

export type AttributeTypeDraft = {
  boolean?: InputMaybe<SimpleAttributeTypeDraft>;
  date?: InputMaybe<SimpleAttributeTypeDraft>;
  datetime?: InputMaybe<SimpleAttributeTypeDraft>;
  enum?: InputMaybe<EnumTypeDraft>;
  lenum?: InputMaybe<LocalizableEnumTypeDraft>;
  ltext?: InputMaybe<SimpleAttributeTypeDraft>;
  money?: InputMaybe<SimpleAttributeTypeDraft>;
  number?: InputMaybe<SimpleAttributeTypeDraft>;
  reference?: InputMaybe<ReferenceTypeDefinitionDraft>;
  set?: InputMaybe<AttributeSetTypeDraft>;
  text?: InputMaybe<SimpleAttributeTypeDraft>;
  time?: InputMaybe<SimpleAttributeTypeDraft>;
};

/** AuthenticationMode values. BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export enum AuthenticationMode {
  ExternalAuth = 'ExternalAuth',
  Password = 'Password',
}

export type AuthorizationHeader = HttpDestinationAuthentication & {
  headerValue: Scalars['String'];
  type: Scalars['String'];
};

export type AuthorizationHeaderInput = {
  headerValue: Scalars['String'];
};

export type AzureFunctionsAuthentication = HttpDestinationAuthentication & {
  key: Scalars['String'];
  type: Scalars['String'];
};

export type AzureFunctionsAuthenticationInput = {
  key: Scalars['String'];
};

export type AzureServiceBusDestination = Destination & {
  connectionString: Scalars['String'];
  type: Scalars['String'];
};

export type AzureServiceBusDestinationInput = {
  connectionString: Scalars['String'];
};

export type BaseMoney = {
  centAmount: Scalars['Long'];
  currencyCode: Scalars['Currency'];
  fractionDigits: Scalars['Int'];
  type: Scalars['String'];
};

export type BaseMoneyInput = {
  centPrecision?: InputMaybe<MoneyInput>;
  highPrecision?: InputMaybe<HighPrecisionMoneyInput>;
};

export type BaseSearchKeywordInput = {
  custom?: InputMaybe<CustomSuggestTokenizerInput>;
  whitespace?: InputMaybe<WhitespaceSuggestTokenizerInput>;
};

export type BooleanAttribute = Attribute & {
  name: Scalars['String'];
  value: Scalars['Boolean'];
};

export type BooleanAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};

export type BooleanField = CustomField & {
  name: Scalars['String'];
  value: Scalars['Boolean'];
};

export type BooleanType = FieldType & {
  name: Scalars['String'];
};

/** A shopping cart holds product variants and can be ordered. Each cart either belongs to a registered customer or is an anonymous cart. */
export type Cart = ReferenceExpandable &
  Versioned & {
    anonymousId?: Maybe<Scalars['String']>;
    billingAddress?: Maybe<Address>;
    cartState: CartState;
    country?: Maybe<Scalars['Country']>;
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    custom?: Maybe<CustomFieldsType>;
    customLineItems: Array<CustomLineItem>;
    customer?: Maybe<Customer>;
    customerEmail?: Maybe<Scalars['String']>;
    customerGroup?: Maybe<CustomerGroup>;
    customerGroupRef?: Maybe<Reference>;
    customerId?: Maybe<Scalars['String']>;
    deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
    discountCodes: Array<DiscountCodeInfo>;
    id: Scalars['String'];
    inventoryMode: InventoryMode;
    itemShippingAddresses: Array<Address>;
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    lineItems: Array<LineItem>;
    locale?: Maybe<Scalars['Locale']>;
    origin: CartOrigin;
    paymentInfo?: Maybe<PaymentInfo>;
    refusedGifts: Array<CartDiscount>;
    refusedGiftsRefs: Array<Reference>;
    shippingAddress?: Maybe<Address>;
    shippingInfo?: Maybe<ShippingInfo>;
    shippingRateInput?: Maybe<ShippingRateInput>;
    store?: Maybe<Store>;
    storeRef?: Maybe<KeyReference>;
    taxCalculationMode: TaxCalculationMode;
    taxMode: TaxMode;
    taxRoundingMode: RoundingMode;
    taxedPrice?: Maybe<TaxedPrice>;
    totalLineItemQuantity?: Maybe<Scalars['Long']>;
    totalPrice: Money;
    version: Scalars['Long'];
  };

/** A shopping cart holds product variants and can be ordered. Each cart either belongs to a registered customer or is an anonymous cart. */
export type CartLineItemsArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type CartClassificationInput = {
  values: Array<LocalizedEnumValueInput>;
};

export type CartClassificationType = ShippingRateInputType & {
  type: Scalars['String'];
  values: Array<ShippingRateInputLocalizedEnumValue>;
};

export type CartCreated = MessagePayload & {
  discountCodesRefs: Array<Reference>;
  lineItemCount: Scalars['Int'];
  totalPrice: Money;
  type: Scalars['String'];
};

/**
 *
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 *
 */
export type CartDiscount = ReferenceExpandable &
  Versioned & {
    cartPredicate: Scalars['String'];
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    custom?: Maybe<CustomFieldsType>;
    description?: Maybe<Scalars['String']>;
    descriptionAllLocales?: Maybe<Array<LocalizedString>>;
    id: Scalars['String'];
    isActive: Scalars['Boolean'];
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    name?: Maybe<Scalars['String']>;
    nameAllLocales: Array<LocalizedString>;
    referenceRefs: Array<Reference>;
    requiresDiscountCode: Scalars['Boolean'];
    sortOrder: Scalars['String'];
    stackingMode: StackingMode;
    target?: Maybe<CartDiscountTarget>;
    validFrom?: Maybe<Scalars['DateTime']>;
    validUntil?: Maybe<Scalars['DateTime']>;
    value: CartDiscountValue;
    version: Scalars['Long'];
  };

/**
 *
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 *
 */
export type CartDiscountDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

/**
 *
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 *
 */
export type CartDiscountNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type CartDiscountDraft = {
  cartPredicate: Scalars['String'];
  custom?: InputMaybe<CustomFieldsDraft>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  name: Array<LocalizedStringItemInputType>;
  requiresDiscountCode?: InputMaybe<Scalars['Boolean']>;
  sortOrder: Scalars['String'];
  stackingMode?: InputMaybe<StackingMode>;
  target?: InputMaybe<CartDiscountTargetInput>;
  validFrom?: InputMaybe<Scalars['DateTime']>;
  validUntil?: InputMaybe<Scalars['DateTime']>;
  value: CartDiscountValueInput;
};

export type CartDiscountLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long'];
  limit?: Maybe<Scalars['Long']>;
};

export type CartDiscountLimitsProjection = {
  totalActiveWithoutDiscountCodes: CartDiscountLimitWithCurrent;
};

export type CartDiscountQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<CartDiscount>;
  total: Scalars['Long'];
};

export type CartDiscountTarget = {
  type: Scalars['String'];
};

export type CartDiscountTargetInput = {
  customLineItems?: InputMaybe<CustomLineItemsTargetInput>;
  lineItems?: InputMaybe<LineItemsTargetInput>;
  multiBuyCustomLineItems?: InputMaybe<MultiBuyCustomLineItemsTargetInput>;
  multiBuyLineItems?: InputMaybe<MultiBuyLineItemsTargetInput>;
  shipping?: InputMaybe<ShippingTargetInput>;
};

export type CartDiscountUpdateAction = {
  changeCartPredicate?: InputMaybe<ChangeCartDiscountCartPredicate>;
  changeIsActive?: InputMaybe<ChangeCartDiscountIsActive>;
  changeName?: InputMaybe<ChangeCartDiscountName>;
  changeRequiresDiscountCode?: InputMaybe<ChangeCartDiscountRequiresDiscountCode>;
  changeSortOrder?: InputMaybe<ChangeCartDiscountSortOrder>;
  changeStackingMode?: InputMaybe<ChangeCartDiscountStackingMode>;
  changeTarget?: InputMaybe<ChangeCartDiscountTarget>;
  changeValue?: InputMaybe<ChangeCartDiscountValue>;
  setCustomField?: InputMaybe<SetCartDiscountCustomField>;
  setCustomType?: InputMaybe<SetCartDiscountCustomType>;
  setDescription?: InputMaybe<SetCartDiscountDescription>;
  setKey?: InputMaybe<SetCartDiscountKey>;
  setValidFrom?: InputMaybe<SetCartDiscountValidFrom>;
  setValidFromAndUntil?: InputMaybe<SetCartDiscountValidFromAndUntil>;
  setValidUntil?: InputMaybe<SetCartDiscountValidUntil>;
};

export type CartDiscountValue = {
  type: Scalars['String'];
};

export type CartDiscountValueInput = {
  absolute?: InputMaybe<AbsoluteDiscountValueInput>;
  fixed?: InputMaybe<FixedPriceDiscountValueInput>;
  giftLineItem?: InputMaybe<GiftLineItemValueInput>;
  relative?: InputMaybe<RelativeDiscountValueInput>;
};

export type CartDraft = {
  anonymousId?: InputMaybe<Scalars['String']>;
  billingAddress?: InputMaybe<AddressInput>;
  country?: InputMaybe<Scalars['Country']>;
  currency: Scalars['Currency'];
  custom?: InputMaybe<CustomFieldsDraft>;
  customLineItems?: InputMaybe<Array<CustomLineItemDraft>>;
  customerEmail?: InputMaybe<Scalars['String']>;
  customerGroup?: InputMaybe<ResourceIdentifierInput>;
  customerId?: InputMaybe<Scalars['String']>;
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']>;
  discountCodes?: InputMaybe<Array<Scalars['String']>>;
  externalTaxRateForShippingMethod?: InputMaybe<ExternalTaxRateDraft>;
  inventoryMode?: InputMaybe<InventoryMode>;
  itemShippingAddresses?: InputMaybe<Array<AddressInput>>;
  key?: InputMaybe<Scalars['String']>;
  lineItems?: InputMaybe<Array<LineItemDraft>>;
  locale?: InputMaybe<Scalars['Locale']>;
  origin?: InputMaybe<CartOrigin>;
  shippingAddress?: InputMaybe<AddressInput>;
  shippingMethod?: InputMaybe<ResourceIdentifierInput>;
  shippingRateInput?: InputMaybe<ShippingRateInputDraft>;
  store?: InputMaybe<ResourceIdentifierInput>;
  taxCalculationMode?: InputMaybe<TaxCalculationMode>;
  taxMode?: InputMaybe<TaxMode>;
  taxRoundingMode?: InputMaybe<RoundingMode>;
};

export type CartLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long'];
  limit?: Maybe<Scalars['Long']>;
};

export type CartLimitsProjection = {
  total: CartLimitWithCurrent;
};

export enum CartOrigin {
  /** The cart was created by the customer. This is the default value */
  Customer = 'Customer',
  /** The cart was created by the merchant on behalf of the customer */
  Merchant = 'Merchant',
}

/** Fields to access carts. Includes direct access to a single cart and searching for carts. */
export type CartQueryInterface = {
  cart?: Maybe<Cart>;
  carts: CartQueryResult;
};

/** Fields to access carts. Includes direct access to a single cart and searching for carts. */
export type CartQueryInterfaceCartArgs = {
  id: Scalars['String'];
};

/** Fields to access carts. Includes direct access to a single cart and searching for carts. */
export type CartQueryInterfaceCartsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type CartQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<Cart>;
  total: Scalars['Long'];
};

export type CartScoreInput = {
  dummy?: InputMaybe<Scalars['String']>;
};

export type CartScoreType = ShippingRateInputType & {
  type: Scalars['String'];
};

export enum CartState {
  /** The cart can be updated and ordered. It is the default state. */
  Active = 'Active',
  /** Anonymous cart whose content was merged into a customers cart on signin. No further operations on the cart are allowed. */
  Merged = 'Merged',
  /** The cart was ordered. No further operations on the cart are allowed. */
  Ordered = 'Ordered',
}

export type CartUpdateAction = {
  addCustomLineItem?: InputMaybe<AddCartCustomLineItem>;
  addDiscountCode?: InputMaybe<AddCartDiscountCode>;
  addItemShippingAddress?: InputMaybe<AddCartItemShippingAddress>;
  addLineItem?: InputMaybe<AddCartLineItem>;
  addPayment?: InputMaybe<AddCartPayment>;
  addShoppingList?: InputMaybe<AddCartShoppingList>;
  applyDeltaToCustomLineItemShippingDetailsTargets?: InputMaybe<ApplyCartDeltaToCustomLineItemShippingDetailsTargets>;
  applyDeltaToLineItemShippingDetailsTargets?: InputMaybe<ApplyCartDeltaToLineItemShippingDetailsTargets>;
  changeCustomLineItemMoney?: InputMaybe<ChangeCartCustomLineItemMoney>;
  changeCustomLineItemQuantity?: InputMaybe<ChangeCartCustomLineItemQuantity>;
  changeLineItemQuantity?: InputMaybe<ChangeCartLineItemQuantity>;
  changeTaxCalculationMode?: InputMaybe<ChangeCartTaxCalculationMode>;
  changeTaxMode?: InputMaybe<ChangeCartTaxMode>;
  changeTaxRoundingMode?: InputMaybe<ChangeCartTaxRoundingMode>;
  recalculate?: InputMaybe<RecalculateCart>;
  removeCustomLineItem?: InputMaybe<RemoveCartCustomLineItem>;
  removeDiscountCode?: InputMaybe<RemoveCartDiscountCode>;
  removeItemShippingAddress?: InputMaybe<RemoveCartItemShippingAddress>;
  removeLineItem?: InputMaybe<RemoveCartLineItem>;
  removePayment?: InputMaybe<RemoveCartPayment>;
  setAnonymousId?: InputMaybe<SetCartAnonymousId>;
  setBillingAddress?: InputMaybe<SetCartBillingAddress>;
  setBillingAddressCustomField?: InputMaybe<SetCartBillingAddressCustomField>;
  setBillingAddressCustomType?: InputMaybe<SetCartBillingAddressCustomType>;
  setCartTotalTax?: InputMaybe<SetCartTotalTax>;
  setCountry?: InputMaybe<SetCartCountry>;
  setCustomField?: InputMaybe<SetCartCustomField>;
  setCustomLineItemCustomField?: InputMaybe<SetCartCustomLineItemCustomField>;
  setCustomLineItemCustomType?: InputMaybe<SetCartCustomLineItemCustomType>;
  setCustomLineItemShippingDetails?: InputMaybe<SetCartCustomLineItemShippingDetails>;
  setCustomLineItemTaxAmount?: InputMaybe<SetCartCustomLineItemTaxAmount>;
  setCustomLineItemTaxRate?: InputMaybe<SetCartCustomLineItemTaxRate>;
  setCustomShippingMethod?: InputMaybe<SetCartCustomShippingMethod>;
  setCustomType?: InputMaybe<SetCartCustomType>;
  setCustomerEmail?: InputMaybe<SetCartCustomerEmail>;
  setCustomerGroup?: InputMaybe<SetCartCustomerGroup>;
  setCustomerId?: InputMaybe<SetCartCustomerId>;
  setDeleteDaysAfterLastModification?: InputMaybe<SetCartDeleteDaysAfterLastModification>;
  setItemShippingAddressCustomField?: InputMaybe<SetCartItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: InputMaybe<SetCartItemShippingAddressCustomType>;
  setKey?: InputMaybe<SetCartKey>;
  setLineItemCustomField?: InputMaybe<SetCartLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<SetCartLineItemCustomType>;
  setLineItemDistributionChannel?: InputMaybe<SetCartLineItemDistributionChannel>;
  setLineItemPrice?: InputMaybe<SetCartLineItemPrice>;
  setLineItemShippingDetails?: InputMaybe<SetCartLineItemShippingDetails>;
  setLineItemSupplyChannel?: InputMaybe<SetCartLineItemSupplyChannel>;
  setLineItemTaxAmount?: InputMaybe<SetCartLineItemTaxAmount>;
  setLineItemTaxRate?: InputMaybe<SetCartLineItemTaxRate>;
  setLineItemTotalPrice?: InputMaybe<SetCartLineItemTotalPrice>;
  setLocale?: InputMaybe<SetCartLocale>;
  setShippingAddress?: InputMaybe<SetCartShippingAddress>;
  setShippingAddressCustomField?: InputMaybe<SetCartShippingAddressCustomField>;
  setShippingAddressCustomType?: InputMaybe<SetCartShippingAddressCustomType>;
  setShippingMethod?: InputMaybe<SetCartShippingMethod>;
  setShippingMethodTaxAmount?: InputMaybe<SetCartShippingMethodTaxAmount>;
  setShippingMethodTaxRate?: InputMaybe<SetCartShippingMethodTaxRate>;
  setShippingRateInput?: InputMaybe<SetCartShippingRateInput>;
  updateItemShippingAddress?: InputMaybe<UpdateCartItemShippingAddress>;
};

export type CartValueInput = {
  dummy?: InputMaybe<Scalars['String']>;
};

export type CartValueType = ShippingRateInputType & {
  type: Scalars['String'];
};

export type CartsConfiguration = {
  allowAddingUnpublishedProducts: Scalars['Boolean'];
  countryTaxRateFallbackEnabled: Scalars['Boolean'];
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
};

export type CartsConfigurationInput = {
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']>;
};

export type Category = ReferenceExpandable &
  Versioned & {
    ancestors: Array<Category>;
    ancestorsRef: Array<Reference>;
    assets: Array<Asset>;
    /** Number of direct child categories. */
    childCount: Scalars['Int'];
    /** Direct child categories. */
    children?: Maybe<Array<Category>>;
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    custom?: Maybe<CustomFieldsType>;
    description?: Maybe<Scalars['String']>;
    descriptionAllLocales?: Maybe<Array<LocalizedString>>;
    externalId?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    metaDescription?: Maybe<Scalars['String']>;
    metaDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
    metaKeywords?: Maybe<Scalars['String']>;
    metaKeywordsAllLocales?: Maybe<Array<LocalizedString>>;
    metaTitle?: Maybe<Scalars['String']>;
    metaTitleAllLocales?: Maybe<Array<LocalizedString>>;
    name?: Maybe<Scalars['String']>;
    nameAllLocales: Array<LocalizedString>;
    orderHint: Scalars['String'];
    parent?: Maybe<Category>;
    parentRef?: Maybe<Reference>;
    slug?: Maybe<Scalars['String']>;
    slugAllLocales: Array<LocalizedString>;
    /** Number of staged products in the category subtree. */
    stagedProductCount: Scalars['Int'];
    version: Scalars['Long'];
  };

export type CategoryDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type CategoryMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type CategoryMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type CategoryMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type CategoryNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type CategorySlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type CategoryCreated = MessagePayload & {
  category: Category;
  type: Scalars['String'];
};

export type CategoryDraft = {
  assets?: InputMaybe<Array<AssetDraftInput>>;
  custom?: InputMaybe<CustomFieldsDraft>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  externalId?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaKeywords?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaTitle?: InputMaybe<Array<LocalizedStringItemInputType>>;
  name: Array<LocalizedStringItemInputType>;
  orderHint?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<ResourceIdentifierInput>;
  slug: Array<LocalizedStringItemInputType>;
};

export type CategoryLimitsProjection = {
  maxCategories: Limit;
};

export type CategoryOrderHint = {
  categoryId: Scalars['String'];
  orderHint: Scalars['String'];
};

export type CategoryOrderHintInput = {
  orderHint: Scalars['String'];
  uuid: Scalars['String'];
};

export type CategoryOrderHintProductSearch = {
  categoryId: Scalars['String'];
  orderHint: Scalars['String'];
};

export type CategoryQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<Category>;
  total: Scalars['Long'];
};

export type CategorySlugChanged = MessagePayload & {
  oldSlug?: Maybe<Scalars['String']>;
  oldSlugAllLocales?: Maybe<Array<LocalizedString>>;
  slug?: Maybe<Scalars['String']>;
  slugAllLocales: Array<LocalizedString>;
  type: Scalars['String'];
};

export type CategorySlugChangedOldSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type CategorySlugChangedSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type CategoryUpdateAction = {
  addAsset?: InputMaybe<AddCategoryAsset>;
  changeAssetName?: InputMaybe<ChangeCategoryAssetName>;
  changeAssetOrder?: InputMaybe<ChangeCategoryAssetOrder>;
  changeName?: InputMaybe<ChangeCategoryName>;
  changeOrderHint?: InputMaybe<ChangeCategoryOrderHint>;
  changeParent?: InputMaybe<ChangeCategoryParent>;
  changeSlug?: InputMaybe<ChangeCategorySlug>;
  removeAsset?: InputMaybe<RemoveCategoryAsset>;
  setAssetCustomField?: InputMaybe<SetCategoryAssetCustomField>;
  setAssetCustomType?: InputMaybe<SetCategoryAssetCustomType>;
  setAssetDescription?: InputMaybe<SetCategoryAssetDescription>;
  setAssetKey?: InputMaybe<SetCategoryAssetKey>;
  setAssetSources?: InputMaybe<SetCategoryAssetSources>;
  setAssetTags?: InputMaybe<SetCategoryAssetTags>;
  setCustomField?: InputMaybe<SetCategoryCustomField>;
  setCustomType?: InputMaybe<SetCategoryCustomType>;
  setDescription?: InputMaybe<SetCategoryDescription>;
  setExternalId?: InputMaybe<SetCategoryExternalId>;
  setKey?: InputMaybe<SetCategoryKey>;
  setMetaDescription?: InputMaybe<SetCategoryMetaDescription>;
  setMetaKeywords?: InputMaybe<SetCategoryMetaKeywords>;
  setMetaTitle?: InputMaybe<SetCategoryMetaTitle>;
};

export type ChangeAttributeGroupName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeCartCustomLineItemMoney = {
  customLineItemId: Scalars['String'];
  money: BaseMoneyInput;
};

export type ChangeCartCustomLineItemQuantity = {
  customLineItemId: Scalars['String'];
  quantity: Scalars['Long'];
};

export type ChangeCartDiscountCartPredicate = {
  cartPredicate: Scalars['String'];
};

export type ChangeCartDiscountIsActive = {
  isActive: Scalars['Boolean'];
};

export type ChangeCartDiscountName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeCartDiscountRequiresDiscountCode = {
  requiresDiscountCode: Scalars['Boolean'];
};

export type ChangeCartDiscountSortOrder = {
  sortOrder: Scalars['String'];
};

export type ChangeCartDiscountStackingMode = {
  stackingMode: StackingMode;
};

export type ChangeCartDiscountTarget = {
  target: CartDiscountTargetInput;
};

export type ChangeCartDiscountValue = {
  value: CartDiscountValueInput;
};

export type ChangeCartLineItemQuantity = {
  externalPrice?: InputMaybe<BaseMoneyInput>;
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  lineItemId: Scalars['String'];
  quantity: Scalars['Long'];
};

export type ChangeCartTaxCalculationMode = {
  taxCalculationMode: TaxCalculationMode;
};

export type ChangeCartTaxMode = {
  taxMode: TaxMode;
};

export type ChangeCartTaxRoundingMode = {
  taxRoundingMode: RoundingMode;
};

export type ChangeCategoryAssetName = {
  assetId?: InputMaybe<Scalars['String']>;
  assetKey?: InputMaybe<Scalars['String']>;
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeCategoryAssetOrder = {
  assetOrder: Array<Scalars['String']>;
};

export type ChangeCategoryName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeCategoryOrderHint = {
  orderHint: Scalars['String'];
};

export type ChangeCategoryParent = {
  parent: ResourceIdentifierInput;
};

export type ChangeCategorySlug = {
  slug: Array<LocalizedStringItemInputType>;
};

export type ChangeChannelDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type ChangeChannelKey = {
  key: Scalars['String'];
};

export type ChangeChannelName = {
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type ChangeCustomerAddress = {
  address: AddressInput;
  addressId?: InputMaybe<Scalars['String']>;
  addressKey?: InputMaybe<Scalars['String']>;
};

export type ChangeCustomerEmail = {
  email: Scalars['String'];
};

export type ChangeCustomerGroupName = {
  name: Scalars['String'];
};

export type ChangeDiscountCodeCartDiscounts = {
  cartDiscounts: Array<ReferenceInput>;
};

export type ChangeDiscountCodeGroups = {
  groups: Array<Scalars['String']>;
};

export type ChangeDiscountCodeIsActive = {
  isActive: Scalars['Boolean'];
};

export type ChangeExtensionDestination = {
  destination: ExtensionDestinationInput;
};

export type ChangeExtensionTriggers = {
  triggers: Array<TriggerInput>;
};

export type ChangeInventoryEntryQuantity = {
  quantity: Scalars['Long'];
};

export type ChangeMyCartTaxMode = {
  taxMode: TaxMode;
};

export type ChangeOrderPaymentState = {
  paymentState: PaymentState;
};

export type ChangeOrderShipmentState = {
  shipmentState: ShipmentState;
};

export type ChangeOrderState = {
  orderState: OrderState;
};

export type ChangePaymentAmountPlanned = {
  amount: MoneyInput;
};

export type ChangePaymentTransactionInteractionId = {
  interactionId: Scalars['String'];
  transactionId: Scalars['String'];
};

export type ChangePaymentTransactionState = {
  state: TransactionState;
  transactionId: Scalars['String'];
};

export type ChangePaymentTransactionTimestamp = {
  timestamp: Scalars['DateTime'];
  transactionId: Scalars['String'];
};

export type ChangeProductAssetName = {
  assetId?: InputMaybe<Scalars['String']>;
  assetKey?: InputMaybe<Scalars['String']>;
  name: Array<LocalizedStringItemInputType>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type ChangeProductAssetOrder = {
  assetOrder: Array<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type ChangeProductDiscountIsActive = {
  isActive: Scalars['Boolean'];
};

export type ChangeProductDiscountName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeProductDiscountPredicate = {
  predicate: Scalars['String'];
};

export type ChangeProductDiscountSortOrder = {
  sortOrder: Scalars['String'];
};

export type ChangeProductDiscountValue = {
  value: ProductDiscountValueInput;
};

export type ChangeProductImageLabel = {
  imageUrl: Scalars['String'];
  label?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type ChangeProductMasterVariant = {
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type ChangeProductName = {
  name: Array<LocalizedStringItemInputType>;
  staged?: InputMaybe<Scalars['Boolean']>;
};

export type ChangeProductPrice = {
  price: ProductPriceDataInput;
  priceId?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type ChangeProductSelectionName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeProductSlug = {
  slug: Array<LocalizedStringItemInputType>;
  staged?: InputMaybe<Scalars['Boolean']>;
};

export type ChangeProjectSettingsCartsConfiguration = {
  cartsConfiguration: CartsConfigurationInput;
};

export type ChangeProjectSettingsCountries = {
  countries: Array<Scalars['Country']>;
};

export type ChangeProjectSettingsCountryTaxRateFallbackEnabled = {
  countryTaxRateFallbackEnabled: Scalars['Boolean'];
};

export type ChangeProjectSettingsCurrencies = {
  currencies: Array<Scalars['Currency']>;
};

export type ChangeProjectSettingsLanguages = {
  languages: Array<Scalars['Locale']>;
};

export type ChangeProjectSettingsMessagesConfiguration = {
  messagesConfiguration: MessagesConfigurationDraft;
};

export type ChangeProjectSettingsMessagesEnabled = {
  messagesEnabled: Scalars['Boolean'];
};

export type ChangeProjectSettingsName = {
  name: Scalars['String'];
};

export type ChangeProjectSettingsOrderSearchStatus = {
  status: OrderSearchStatus;
};

export type ChangeProjectSettingsProductSearchIndexingEnabled = {
  enabled: Scalars['Boolean'];
};

export type ChangeProjectSettingsShoppingListsConfiguration = {
  shoppingListsConfiguration: ShoppingListsConfigurationInput;
};

export type ChangeShippingMethodIsDefault = {
  isDefault: Scalars['Boolean'];
};

export type ChangeShippingMethodName = {
  name: Scalars['String'];
};

export type ChangeShippingMethodTaxCategory = {
  taxCategory: ResourceIdentifierInput;
};

export type ChangeShoppingListLineItemQuantity = {
  lineItemId: Scalars['String'];
  quantity: Scalars['Int'];
};

export type ChangeShoppingListLineItemsOrder = {
  lineItemOrder: Array<Scalars['String']>;
};

export type ChangeShoppingListName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeShoppingListTextLineItemName = {
  name: Array<LocalizedStringItemInputType>;
  textLineItemId: Scalars['String'];
};

export type ChangeShoppingListTextLineItemQuantity = {
  quantity: Scalars['Int'];
  textLineItemId: Scalars['String'];
};

export type ChangeShoppingListTextLineItemsOrder = {
  textLineItemOrder: Array<Scalars['String']>;
};

export type ChangeStagedOrderCustomLineItemMoney = {
  customLineItemId: Scalars['String'];
  money: BaseMoneyInput;
};

export type ChangeStagedOrderCustomLineItemMoneyOutput = StagedOrderUpdateActionOutput & {
  customLineItemId: Scalars['String'];
  money: BaseMoney;
  type: Scalars['String'];
};

export type ChangeStagedOrderCustomLineItemQuantity = {
  customLineItemId: Scalars['String'];
  quantity: Scalars['Long'];
};

export type ChangeStagedOrderCustomLineItemQuantityOutput = StagedOrderUpdateActionOutput & {
  customLineItemId: Scalars['String'];
  quantity: Scalars['Long'];
  type: Scalars['String'];
};

export type ChangeStagedOrderLineItemQuantity = {
  externalPrice?: InputMaybe<BaseMoneyInput>;
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  lineItemId: Scalars['String'];
  quantity: Scalars['Long'];
};

export type ChangeStagedOrderLineItemQuantityOutput = StagedOrderUpdateActionOutput & {
  externalPrice?: Maybe<BaseMoney>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPrice>;
  lineItemId: Scalars['String'];
  quantity: Scalars['Long'];
  type: Scalars['String'];
};

export type ChangeStagedOrderOrderState = {
  orderState: OrderState;
};

export type ChangeStagedOrderOrderStateOutput = StagedOrderUpdateActionOutput & {
  orderState: OrderState;
  type: Scalars['String'];
};

export type ChangeStagedOrderPaymentState = {
  paymentState: PaymentState;
};

export type ChangeStagedOrderPaymentStateOutput = StagedOrderUpdateActionOutput & {
  paymentState: PaymentState;
  type: Scalars['String'];
};

export type ChangeStagedOrderShipmentState = {
  shipmentState: ShipmentState;
};

export type ChangeStagedOrderShipmentStateOutput = StagedOrderUpdateActionOutput & {
  shipmentState: ShipmentState;
  type: Scalars['String'];
};

export type ChangeStagedOrderTaxCalculationMode = {
  taxCalculationMode: TaxCalculationMode;
};

export type ChangeStagedOrderTaxCalculationModeOutput = StagedOrderUpdateActionOutput & {
  taxCalculationMode: TaxCalculationMode;
  type: Scalars['String'];
};

export type ChangeStagedOrderTaxMode = {
  taxMode: TaxMode;
};

export type ChangeStagedOrderTaxModeOutput = StagedOrderUpdateActionOutput & {
  taxMode: TaxMode;
  type: Scalars['String'];
};

export type ChangeStagedOrderTaxRoundingMode = {
  taxRoundingMode: RoundingMode;
};

export type ChangeStagedOrderTaxRoundingModeOutput = StagedOrderUpdateActionOutput & {
  taxRoundingMode: RoundingMode;
  type: Scalars['String'];
};

export type ChangeStandalonePriceValue = {
  value: BaseMoneyInput;
};

export type ChangeStateInitial = {
  initial: Scalars['Boolean'];
};

export type ChangeStateKey = {
  key: Scalars['String'];
};

export type ChangeStateType = {
  type: StateType;
};

export type ChangeStoreProductSelectionActive = {
  active: Scalars['Boolean'];
  productSelection: ResourceIdentifierInput;
};

export type ChangeSubscription = {
  resourceTypeId: Scalars['String'];
};

export type ChangeSubscriptionDestination = {
  destination: DestinationInput;
};

export type ChangeSubscriptionInput = {
  resourceTypeId: Scalars['String'];
};

export type ChangeTypeEnumValueLabel = {
  fieldName: Scalars['String'];
  value: EnumValueInput;
};

export type ChangeTypeEnumValueOrder = {
  fieldName: Scalars['String'];
  keys: Array<Scalars['String']>;
};

export type ChangeTypeFieldDefinitionOrder = {
  fieldNames: Array<Scalars['String']>;
};

export type ChangeTypeInputHint = {
  fieldName: Scalars['String'];
  inputHint: TextInputHint;
};

export type ChangeTypeKey = {
  key: Scalars['String'];
};

export type ChangeTypeLabel = {
  fieldName: Scalars['String'];
  label: Array<LocalizedStringItemInputType>;
};

export type ChangeTypeLocalizedEnumValueLabel = {
  fieldName: Scalars['String'];
  value: LocalizedEnumValueInput;
};

export type ChangeTypeLocalizedEnumValueOrder = {
  fieldName: Scalars['String'];
  keys: Array<Scalars['String']>;
};

export type ChangeTypeName = {
  name: Array<LocalizedStringItemInputType>;
};

export type ChangeZoneName = {
  name: Scalars['String'];
};

export type Channel = ReferenceExpandable &
  ReviewTarget &
  Versioned & {
    address?: Maybe<Address>;
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    custom?: Maybe<CustomFieldsType>;
    description?: Maybe<Scalars['String']>;
    descriptionAllLocales?: Maybe<Array<LocalizedString>>;
    geoLocation?: Maybe<Geometry>;
    id: Scalars['String'];
    key: Scalars['String'];
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    name?: Maybe<Scalars['String']>;
    nameAllLocales?: Maybe<Array<LocalizedString>>;
    reviewRatingStatistics?: Maybe<ReviewRatingStatistics>;
    roles: Array<ChannelRole>;
    version: Scalars['Long'];
  };

export type ChannelDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ChannelNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ChannelDraft = {
  address?: InputMaybe<AddressInput>;
  custom?: InputMaybe<CustomFieldsDraft>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  geoLocation?: InputMaybe<GeometryInput>;
  key: Scalars['String'];
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
  roles: Array<ChannelRole>;
};

export type ChannelQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<Channel>;
  total: Scalars['Long'];
};

export type ChannelReferenceIdentifier = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  typeId: Scalars['String'];
};

export enum ChannelRole {
  /** Role tells that this channel can be used to track inventory entries.Channels with this role can be treated as warehouses */
  InventorySupply = 'InventorySupply',
  /** Role tells that this channel can be used to track order export activities. */
  OrderExport = 'OrderExport',
  /** Role tells that this channel can be used to track order import activities. */
  OrderImport = 'OrderImport',
  /** This role can be combined with some other roles (e.g. with `InventorySupply`) to represent the fact that this particular channel is the primary/master channel among the channels of the same type. */
  Primary = 'Primary',
  /** Role tells that this channel can be used to expose products to a specific distribution channel. It can be used by the cart to select a product price. */
  ProductDistribution = 'ProductDistribution',
}

export type ChannelUpdateAction = {
  addRoles?: InputMaybe<AddChannelRoles>;
  changeDescription?: InputMaybe<ChangeChannelDescription>;
  changeKey?: InputMaybe<ChangeChannelKey>;
  changeName?: InputMaybe<ChangeChannelName>;
  removeRoles?: InputMaybe<RemoveChannelRoles>;
  setAddress?: InputMaybe<SetChannelAddress>;
  setAddressCustomField?: InputMaybe<SetChannelAddressCustomField>;
  setAddressCustomType?: InputMaybe<SetChannelAddressCustomType>;
  setCustomField?: InputMaybe<SetChannelCustomField>;
  setCustomType?: InputMaybe<SetChannelCustomType>;
  setGeoLocation?: InputMaybe<SetChannelGeoLocation>;
  setRoles?: InputMaybe<SetChannelRoles>;
};

export type ClassificationShippingRateInput = ShippingRateInput & {
  key: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  labelAllLocales: Array<LocalizedString>;
  type: Scalars['String'];
};

export type ClassificationShippingRateInputLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ClassificationShippingRateInputDraft = {
  key: Scalars['String'];
};

export type ClassificationShippingRateInputDraftOutput = ShippingRateInputDraftOutput & {
  key: Scalars['String'];
  type: Scalars['String'];
};

export type CloudEventsSubscriptionsFormat = NotificationFormat & {
  cloudEventsVersion: Scalars['String'];
  type: Scalars['String'];
};

export type CloudEventsSubscriptionsFormatInput = {
  cloudEventsVersion: Scalars['String'];
};

export type CommercetoolsSubscription = Versioned & {
  changes: Array<ChangeSubscription>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  destination: Destination;
  format: NotificationFormat;
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  lastModifiedAt: Scalars['DateTime'];
  lastModifiedBy?: Maybe<Initiator>;
  messages: Array<MessageSubscription>;
  status: SubscriptionHealthStatus;
  version: Scalars['Long'];
};

export type CommercetoolsSubscriptionQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<CommercetoolsSubscription>;
  total: Scalars['Long'];
};

export type CreateApiClient = {
  accessTokenValiditySeconds?: InputMaybe<Scalars['Int']>;
  deleteDaysAfterCreation?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  refreshTokenValiditySeconds?: InputMaybe<Scalars['Int']>;
  scope: Scalars['String'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type CreateProductSelectionDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  key?: InputMaybe<Scalars['String']>;
  name: Array<LocalizedStringItemInputType>;
};

export type CreateStandalonePrice = {
  channel?: InputMaybe<ResourceIdentifierInput>;
  country?: InputMaybe<Scalars['Country']>;
  custom?: InputMaybe<StandalonePriceCustomField>;
  customerGroup?: InputMaybe<ResourceIdentifierInput>;
  discounted?: InputMaybe<DiscountedProductPriceValueInput>;
  key?: InputMaybe<Scalars['String']>;
  sku: Scalars['String'];
  tiers?: InputMaybe<Array<ProductPriceTierInput>>;
  validFrom?: InputMaybe<Scalars['DateTime']>;
  validUntil?: InputMaybe<Scalars['DateTime']>;
  value: BaseMoneyInput;
};

export type CreateStore = {
  custom?: InputMaybe<CustomFieldsDraft>;
  distributionChannels?: InputMaybe<Array<ResourceIdentifierInput>>;
  key: Scalars['String'];
  languages?: InputMaybe<Array<Scalars['Locale']>>;
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  productSelections?: InputMaybe<Array<ProductSelectionSettingDraft>>;
  supplyChannels?: InputMaybe<Array<ResourceIdentifierInput>>;
};

export type CreateZone = {
  description?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  locations?: InputMaybe<Array<ZoneLocation>>;
  name: Scalars['String'];
};

export type CustomField = {
  name: Scalars['String'];
};

/**
 * A key-value pair representing the field name and value of one single custom field.
 *
 * The value of this custom field consists of escaped JSON based on the FieldDefinition of the Type.
 *
 * Examples for `value`:
 *
 * * FieldType `String`: `"\"This is a string\""`
 * * FieldType `DateTimeType`: `"\"2018-10-12T14:00:00.000Z\""`
 * * FieldType `Number`: `"4"`
 * * FieldType `Set` with an elementType of `String`: `"[\"This is a string\", \"This is another string\"]"`
 * * FieldType `Reference`: `"{\"id\", \"b911b62d-353a-4388-93ee-8d488d9af962\", \"typeId\", \"product\"}"`
 */
export type CustomFieldInput = {
  name: Scalars['String'];
  /**
   * The value of this custom field consists of escaped JSON based on the FieldDefinition of the Type.
   *
   * Examples for `value`:
   *
   * * FieldType `String`: `"\"This is a string\""`
   * * FieldType `DateTimeType`: `"\"2018-10-12T14:00:00.000Z\""`
   * * FieldType `Number`: `"4"`
   * * FieldType `Set` with an elementType of `String`: `"[\"This is a string\", \"This is another string\"]"`
   * * FieldType `Reference`: `"{\"id\", \"b911b62d-353a-4388-93ee-8d488d9af962\", \"typeId\", \"product\"}"`
   */
  value: Scalars['String'];
};

export type CustomFieldsCommand = {
  fields: Scalars['Json'];
  typeId?: Maybe<Scalars['String']>;
  typeKey?: Maybe<Scalars['String']>;
  typeResId?: Maybe<ResourceIdentifier>;
};

export type CustomFieldsDraft = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type CustomFieldsType = {
  /** This field contains non-typed data. */
  customFieldsRaw?: Maybe<Array<RawCustomField>>;
  type?: Maybe<TypeDefinition>;
  typeRef: Reference;
};

export type CustomFieldsTypeCustomFieldsRawArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']>>;
  includeNames?: InputMaybe<Array<Scalars['String']>>;
};

/** A custom line item is a generic item that can be added to the cart but is not bound to a product. You can use it for discounts (negative money), vouchers, complex cart rules, additional services or fees. You control the lifecycle of this item. */
export type CustomLineItem = {
  custom?: Maybe<CustomFieldsType>;
  discountedPricePerQuantity: Array<DiscountedLineItemPriceForQuantity>;
  id: Scalars['String'];
  money: BaseMoney;
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  quantity: Scalars['Long'];
  shippingDetails?: Maybe<ItemShippingDetails>;
  slug: Scalars['String'];
  state: Array<ItemState>;
  taxCategory?: Maybe<TaxCategory>;
  taxCategoryRef?: Maybe<Reference>;
  taxRate?: Maybe<TaxRate>;
  taxedPrice?: Maybe<TaxedItemPrice>;
  totalPrice: Money;
};

/** A custom line item is a generic item that can be added to the cart but is not bound to a product. You can use it for discounts (negative money), vouchers, complex cart rules, additional services or fees. You control the lifecycle of this item. */
export type CustomLineItemNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type CustomLineItemDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  money: BaseMoneyInput;
  name: Array<LocalizedStringItemInputType>;
  quantity?: InputMaybe<Scalars['Long']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
  slug: Scalars['String'];
  taxCategory?: InputMaybe<ReferenceInput>;
};

export type CustomLineItemDraftOutput = {
  custom?: Maybe<CustomFieldsCommand>;
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  money: BaseMoney;
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  quantity?: Maybe<Scalars['Long']>;
  shippingDetails?: Maybe<ItemShippingDetailsDraftOutput>;
  slug: Scalars['String'];
  taxCategoryResId?: Maybe<ResourceIdentifier>;
};

export type CustomLineItemDraftOutputNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type CustomLineItemReturnItem = ReturnItem & {
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  custom?: Maybe<CustomFieldsType>;
  customLineItemId: Scalars['String'];
  id: Scalars['String'];
  lastModifiedAt: Scalars['DateTime'];
  paymentState: ReturnPaymentState;
  quantity: Scalars['Long'];
  shipmentState: ReturnShipmentState;
  type: Scalars['String'];
};

export type CustomLineItemStateTransition = MessagePayload &
  OrderMessagePayload & {
    customLineItemId: Scalars['String'];
    fromState?: Maybe<State>;
    fromStateRef: Reference;
    quantity: Scalars['Long'];
    toState?: Maybe<State>;
    toStateRef: Reference;
    transitionDate: Scalars['DateTime'];
    type: Scalars['String'];
  };

export type CustomLineItemsTarget = CartDiscountTarget & {
  predicate: Scalars['String'];
  type: Scalars['String'];
};

export type CustomLineItemsTargetInput = {
  predicate: Scalars['String'];
};

export type CustomObject = ReferenceExpandable &
  Versioned & {
    container: Scalars['String'];
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    id: Scalars['String'];
    key: Scalars['String'];
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    value: Scalars['Json'];
    version: Scalars['Long'];
  };

/**
 * An input object used to create a new, or update an existing Custom Object.
 *
 * The value should be passed in a form of escaped JSON.
 *
 * Example for `value` field:
 *
 * ```
 * "{ \"stringField\": \"myVal\", \"numberField\": 123, \"boolField\": false, \"nestedObject\": { \"nestedObjectKey\": \"anotherValue\" }, \"dateField\": \"2018-10-12T14:00:00.000Z\" }"
 * ```
 */
export type CustomObjectDraft = {
  container: Scalars['String'];
  key: Scalars['String'];
  /**
   * The value should be passed in a form of escaped JSON.
   *
   * Example for `value` field:
   *
   * ```
   * "{ \"stringField\": \"myVal\", \"numberField\": 123, \"boolField\": false, \"nestedObject\": { \"nestedObjectKey\": \"anotherValue\" }, \"dateField\": \"2018-10-12T14:00:00.000Z\" }"
   * ```
   */
  value: Scalars['String'];
  version?: InputMaybe<Scalars['Long']>;
};

export type CustomObjectLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long'];
  limit?: Maybe<Scalars['Long']>;
};

export type CustomObjectLimitsProjection = {
  total: CustomObjectLimitWithCurrent;
};

export type CustomObjectQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<CustomObject>;
  total: Scalars['Long'];
};

export type CustomSuggestTokenizer = SuggestTokenizer & {
  inputs: Array<Scalars['String']>;
  type: Scalars['String'];
};

export type CustomSuggestTokenizerInput = {
  inputs: Array<Scalars['String']>;
};

export type CustomSuggestTokenizerProductSearch = SuggestTokenizerProductSearch & {
  inputs: Array<Scalars['String']>;
  type: Scalars['String'];
};

/** A customer is a person purchasing products. Carts, Orders and Reviews can be associated to a customer. */
export type Customer = ReferenceExpandable &
  Versioned & {
    addresses: Array<Address>;
    authenticationMode?: Maybe<AuthenticationMode>;
    billingAddressIds: Array<Scalars['String']>;
    billingAddresses: Array<Address>;
    companyName?: Maybe<Scalars['String']>;
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    custom?: Maybe<CustomFieldsType>;
    customerGroup?: Maybe<CustomerGroup>;
    customerGroupRef?: Maybe<Reference>;
    customerNumber?: Maybe<Scalars['String']>;
    dateOfBirth?: Maybe<Scalars['Date']>;
    defaultBillingAddress?: Maybe<Address>;
    defaultBillingAddressId?: Maybe<Scalars['String']>;
    defaultShippingAddress?: Maybe<Address>;
    defaultShippingAddressId?: Maybe<Scalars['String']>;
    email: Scalars['String'];
    externalId?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    isEmailVerified: Scalars['Boolean'];
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    lastName?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['Locale']>;
    middleName?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    salutation?: Maybe<Scalars['String']>;
    shippingAddressIds: Array<Scalars['String']>;
    shippingAddresses: Array<Address>;
    stores: Array<Store>;
    storesRef: Array<KeyReference>;
    title?: Maybe<Scalars['String']>;
    vatId?: Maybe<Scalars['String']>;
    version: Scalars['Long'];
  };

/** A field to access a customer's active cart. */
export type CustomerActiveCartInterface = {
  customerActiveCart?: Maybe<Cart>;
};

/** A field to access a customer's active cart. */
export type CustomerActiveCartInterfaceCustomerActiveCartArgs = {
  customerId: Scalars['String'];
};

export type CustomerAddressAdded = MessagePayload & {
  address: Address;
  type: Scalars['String'];
};

export type CustomerAddressChanged = MessagePayload & {
  address: Address;
  type: Scalars['String'];
};

export type CustomerAddressRemoved = MessagePayload & {
  address: Address;
  type: Scalars['String'];
};

export type CustomerCompanyNameSet = MessagePayload & {
  companyName?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type CustomerCreated = MessagePayload & {
  customer: Customer;
  type: Scalars['String'];
};

export type CustomerDateOfBirthSet = MessagePayload & {
  dateOfBirth?: Maybe<Scalars['Date']>;
  type: Scalars['String'];
};

export type CustomerDeleted = MessagePayload & {
  type: Scalars['String'];
};

export type CustomerEmailChanged = MessagePayload & {
  email: Scalars['String'];
  type: Scalars['String'];
};

export type CustomerEmailToken = Versioned & {
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  customerId: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  id: Scalars['String'];
  lastModifiedAt: Scalars['DateTime'];
  lastModifiedBy?: Maybe<Initiator>;
  value: Scalars['String'];
  version: Scalars['Long'];
};

export type CustomerEmailVerified = MessagePayload & {
  type: Scalars['String'];
};

export type CustomerFirstNameSet = MessagePayload & {
  firstName?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

/** A customer can be a member in a customer group (e.g. reseller, gold member). A customer group can be used in price calculations with special prices being assigned to certain customer groups. */
export type CustomerGroup = ReferenceExpandable &
  Versioned & {
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    custom?: Maybe<CustomFieldsType>;
    id: Scalars['String'];
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    name: Scalars['String'];
    version: Scalars['Long'];
  };

export type CustomerGroupDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  groupName: Scalars['String'];
  key?: InputMaybe<Scalars['String']>;
};

export type CustomerGroupLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long'];
  limit?: Maybe<Scalars['Long']>;
};

export type CustomerGroupLimitsProjection = {
  total: CustomerGroupLimitWithCurrent;
};

export type CustomerGroupQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<CustomerGroup>;
  total: Scalars['Long'];
};

export type CustomerGroupReferenceIdentifier = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  typeId: Scalars['String'];
};

export type CustomerGroupSet = MessagePayload & {
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  type: Scalars['String'];
};

export type CustomerGroupUpdateAction = {
  changeName?: InputMaybe<ChangeCustomerGroupName>;
  setCustomField?: InputMaybe<SetCustomerGroupCustomField>;
  setCustomType?: InputMaybe<SetCustomerGroupCustomType>;
  setKey?: InputMaybe<SetCustomerGroupKey>;
};

export type CustomerLastNameSet = MessagePayload & {
  lastName?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type CustomerLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long'];
  limit?: Maybe<Scalars['Long']>;
};

export type CustomerLimitsProjection = {
  total: CustomerLimitWithCurrent;
};

export type CustomerPasswordToken = Versioned & {
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  customerId: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  id: Scalars['String'];
  lastModifiedAt: Scalars['DateTime'];
  lastModifiedBy?: Maybe<Initiator>;
  value: Scalars['String'];
  version: Scalars['Long'];
};

export type CustomerPasswordUpdated = MessagePayload & {
  reset: Scalars['Boolean'];
  type: Scalars['String'];
};

/** Fields to access customer accounts. Includes direct access to a single customer and searching for customers. */
export type CustomerQueryInterface = {
  customer?: Maybe<Customer>;
  customers: CustomerQueryResult;
};

/** Fields to access customer accounts. Includes direct access to a single customer and searching for customers. */
export type CustomerQueryInterfaceCustomerArgs = {
  emailToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  passwordToken?: InputMaybe<Scalars['String']>;
};

/** Fields to access customer accounts. Includes direct access to a single customer and searching for customers. */
export type CustomerQueryInterfaceCustomersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type CustomerQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<Customer>;
  total: Scalars['Long'];
};

export type CustomerSignInDraft = {
  anonymousCart?: InputMaybe<ResourceIdentifierInput>;
  /** This field will be deprecated in favour of anonymousCart.id. */
  anonymousCartId?: InputMaybe<Scalars['String']>;
  anonymousCartSignInMode?: InputMaybe<AnonymousCartSignInMode>;
  anonymousId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  updateProductData?: InputMaybe<Scalars['Boolean']>;
};

export type CustomerSignInResult = {
  cart?: Maybe<Cart>;
  customer: Customer;
};

export type CustomerSignMeInDraft = {
  activeCartSignInMode?: InputMaybe<AnonymousCartSignInMode>;
  email: Scalars['String'];
  password: Scalars['String'];
  updateProductData?: InputMaybe<Scalars['Boolean']>;
};

export type CustomerSignMeUpDraft = {
  addresses?: InputMaybe<Array<AddressInput>>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: InputMaybe<Array<Scalars['Int']>>;
  companyName?: InputMaybe<Scalars['String']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  dateOfBirth?: InputMaybe<Scalars['Date']>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: InputMaybe<Scalars['Int']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: InputMaybe<Scalars['Int']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['Locale']>;
  middleName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  salutation?: InputMaybe<Scalars['String']>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: InputMaybe<Array<Scalars['Int']>>;
  stores?: InputMaybe<Array<ResourceIdentifierInput>>;
  title?: InputMaybe<Scalars['String']>;
  vatId?: InputMaybe<Scalars['String']>;
};

export type CustomerSignUpDraft = {
  addresses?: InputMaybe<Array<AddressInput>>;
  anonymousCart?: InputMaybe<ResourceIdentifierInput>;
  /** This field will be deprecated in favour of anonymousCart.id. */
  anonymousCartId?: InputMaybe<Scalars['String']>;
  anonymousId?: InputMaybe<Scalars['String']>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  authenticationMode?: InputMaybe<AuthenticationMode>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: InputMaybe<Array<Scalars['Int']>>;
  companyName?: InputMaybe<Scalars['String']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  customerGroup?: InputMaybe<ResourceIdentifierInput>;
  customerNumber?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['Date']>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: InputMaybe<Scalars['Int']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: InputMaybe<Scalars['Int']>;
  email: Scalars['String'];
  externalId?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['Locale']>;
  middleName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  salutation?: InputMaybe<Scalars['String']>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: InputMaybe<Array<Scalars['Int']>>;
  stores?: InputMaybe<Array<ResourceIdentifierInput>>;
  title?: InputMaybe<Scalars['String']>;
  vatId?: InputMaybe<Scalars['String']>;
};

export type CustomerTitleSet = MessagePayload & {
  title?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type CustomerUpdateAction = {
  addAddress?: InputMaybe<AddCustomerAddress>;
  addBillingAddressId?: InputMaybe<AddCustomerBillingAddressId>;
  addShippingAddressId?: InputMaybe<AddCustomerShippingAddressId>;
  addStore?: InputMaybe<AddCustomerStore>;
  changeAddress?: InputMaybe<ChangeCustomerAddress>;
  changeEmail?: InputMaybe<ChangeCustomerEmail>;
  removeAddress?: InputMaybe<RemoveCustomerAddress>;
  removeBillingAddressId?: InputMaybe<RemoveCustomerBillingAddressId>;
  removeShippingAddressId?: InputMaybe<RemoveCustomerShippingAddressId>;
  removeStore?: InputMaybe<RemoveCustomerStore>;
  setAddressCustomField?: InputMaybe<SetCustomerAddressCustomField>;
  setAddressCustomType?: InputMaybe<SetCustomerAddressCustomType>;
  setAuthenticationMode?: InputMaybe<SetCustomerAuthenticationMode>;
  setCompanyName?: InputMaybe<SetCustomerCompanyName>;
  setCustomField?: InputMaybe<SetCustomerCustomField>;
  setCustomType?: InputMaybe<SetCustomerCustomType>;
  setCustomerGroup?: InputMaybe<SetCustomerGroup>;
  setCustomerNumber?: InputMaybe<SetCustomerNumber>;
  setDateOfBirth?: InputMaybe<SetCustomerDateOfBirth>;
  setDefaultBillingAddress?: InputMaybe<SetCustomerDefaultBillingAddress>;
  setDefaultShippingAddress?: InputMaybe<SetCustomerDefaultShippingAddress>;
  setExternalId?: InputMaybe<SetCustomerExternalId>;
  setFirstName?: InputMaybe<SetCustomerFirstName>;
  setKey?: InputMaybe<SetCustomerKey>;
  setLastName?: InputMaybe<SetCustomerLastName>;
  setLocale?: InputMaybe<SetCustomerLocale>;
  setMiddleName?: InputMaybe<SetCustomerMiddleName>;
  setSalutation?: InputMaybe<SetCustomerSalutation>;
  setStores?: InputMaybe<SetCustomerStores>;
  setTitle?: InputMaybe<SetCustomerTitle>;
  setVatId?: InputMaybe<SetCustomerVatId>;
};

export type DateAttribute = Attribute & {
  name: Scalars['String'];
  value: Scalars['Date'];
};

export type DateAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};

export type DateField = CustomField & {
  name: Scalars['String'];
  value: Scalars['Date'];
};

export type DateTimeAttribute = Attribute & {
  name: Scalars['String'];
  value: Scalars['DateTime'];
};

export type DateTimeAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};

export type DateTimeField = CustomField & {
  name: Scalars['String'];
  value: Scalars['DateTime'];
};

export type DateTimeType = FieldType & {
  name: Scalars['String'];
};

export type DateType = FieldType & {
  name: Scalars['String'];
};

export type Delivery = {
  address?: Maybe<Address>;
  createdAt: Scalars['DateTime'];
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String'];
  items: Array<DeliveryItem>;
  parcels: Array<Parcel>;
};

export type DeliveryAdded = MessagePayload &
  OrderMessagePayload & {
    delivery: Delivery;
    type: Scalars['String'];
  };

export type DeliveryAddressSet = MessagePayload &
  OrderMessagePayload & {
    address?: Maybe<Address>;
    deliveryId: Scalars['String'];
    oldAddress?: Maybe<Address>;
    type: Scalars['String'];
  };

export type DeliveryItem = {
  id: Scalars['String'];
  quantity: Scalars['Long'];
};

export type DeliveryItemDraftType = {
  id: Scalars['String'];
  quantity: Scalars['Long'];
};

export type DeliveryItemsUpdated = MessagePayload &
  OrderMessagePayload & {
    deliveryId: Scalars['String'];
    items: Array<DeliveryItem>;
    oldItems: Array<DeliveryItem>;
    type: Scalars['String'];
  };

export type DeliveryRemoved = MessagePayload &
  OrderMessagePayload & {
    delivery: Delivery;
    type: Scalars['String'];
  };

export type Destination = {
  type: Scalars['String'];
};

export type DestinationInput = {
  AzureServiceBus?: InputMaybe<AzureServiceBusDestinationInput>;
  EventBridge?: InputMaybe<EventBridgeDestinationInput>;
  EventGrid?: InputMaybe<EventGridDestinationInput>;
  GoogleCloudPubSub?: InputMaybe<GoogleCloudPubSubDestinationInput>;
  SNS?: InputMaybe<SnsDestinationInput>;
  SQS?: InputMaybe<SqsDestinationInput>;
};

export type Dimensions = {
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export type DimensionsInput = {
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export type DimensionsProductSearch = {
  height: Scalars['Int'];
  width: Scalars['Int'];
};

/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type DiscountCode = ReferenceExpandable &
  Versioned & {
    /** How many times this discount code was applied (only applications that were part of a successful checkout are considered) */
    applicationCount: Scalars['Long'];
    applicationVersion?: Maybe<Scalars['Long']>;
    cartDiscountRefs: Array<Reference>;
    cartDiscounts: Array<CartDiscount>;
    cartPredicate?: Maybe<Scalars['String']>;
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    custom?: Maybe<CustomFieldsType>;
    description?: Maybe<Scalars['String']>;
    descriptionAllLocales?: Maybe<Array<LocalizedString>>;
    groups: Array<Scalars['String']>;
    id: Scalars['String'];
    isActive: Scalars['Boolean'];
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    maxApplications?: Maybe<Scalars['Long']>;
    maxApplicationsPerCustomer?: Maybe<Scalars['Long']>;
    name?: Maybe<Scalars['String']>;
    nameAllLocales?: Maybe<Array<LocalizedString>>;
    referenceRefs: Array<Reference>;
    validFrom?: Maybe<Scalars['DateTime']>;
    validUntil?: Maybe<Scalars['DateTime']>;
    version: Scalars['Long'];
  };

/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type DiscountCodeDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type DiscountCodeNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type DiscountCodeDraft = {
  cartDiscounts: Array<ReferenceInput>;
  cartPredicate?: InputMaybe<Scalars['String']>;
  code: Scalars['String'];
  custom?: InputMaybe<CustomFieldsDraft>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  groups?: InputMaybe<Array<Scalars['String']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  maxApplications?: InputMaybe<Scalars['Long']>;
  maxApplicationsPerCustomer?: InputMaybe<Scalars['Long']>;
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
  validFrom?: InputMaybe<Scalars['DateTime']>;
  validUntil?: InputMaybe<Scalars['DateTime']>;
};

export type DiscountCodeInfo = {
  discountCode?: Maybe<DiscountCode>;
  discountCodeRef: Reference;
  state?: Maybe<DiscountCodeState>;
};

export type DiscountCodeQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<DiscountCode>;
  total: Scalars['Long'];
};

export enum DiscountCodeState {
  /** The discount code is active and none of the discounts were applied because the discount application was stopped by one discount that has the StackingMode of StopAfterThisDiscount defined */
  ApplicationStoppedByPreviousDiscount = 'ApplicationStoppedByPreviousDiscount',
  /** The discount code is active and it contains at least one active and valid CartDiscount. But its cart predicate does not match the cart or none of the contained active discount’s cart predicates match the cart */
  DoesNotMatchCart = 'DoesNotMatchCart',
  /** The discount code is active and it contains at least one active and valid CartDiscount. The discount code cartPredicate matches the cart and at least one of the contained active discount’s cart predicates matches the cart. */
  MatchesCart = 'MatchesCart',
  /** maxApplications or maxApplicationsPerCustomer for discountCode has been reached. */
  MaxApplicationReached = 'MaxApplicationReached',
  /** The discount code is not active or it does not contain any active cart discounts. */
  NotActive = 'NotActive',
  /** The discount code is not valid or it does not contain any valid cart discounts. Validity is determined based on the validFrom and validUntil dates */
  NotValid = 'NotValid',
}

export type DiscountCodeUpdateAction = {
  changeCartDiscounts?: InputMaybe<ChangeDiscountCodeCartDiscounts>;
  changeGroups?: InputMaybe<ChangeDiscountCodeGroups>;
  changeIsActive?: InputMaybe<ChangeDiscountCodeIsActive>;
  setCartPredicate?: InputMaybe<SetDiscountCodeCartPredicate>;
  setCustomField?: InputMaybe<SetDiscountCodeCustomField>;
  setCustomType?: InputMaybe<SetDiscountCodeCustomType>;
  setDescription?: InputMaybe<SetDiscountCodeDescription>;
  setMaxApplications?: InputMaybe<SetDiscountCodeMaxApplications>;
  setMaxApplicationsPerCustomer?: InputMaybe<SetDiscountCodeMaxApplicationsPerCustomer>;
  setName?: InputMaybe<SetDiscountCodeName>;
  setValidFrom?: InputMaybe<SetDiscountCodeValidFrom>;
  setValidFromAndUntil?: InputMaybe<SetDiscountCodeValidFromAndUntil>;
  setValidUntil?: InputMaybe<SetDiscountCodeValidUntil>;
};

export type DiscountedLineItemPortion = {
  discount?: Maybe<CartDiscount>;
  discountRef: Reference;
  discountedAmount: BaseMoney;
};

export type DiscountedLineItemPrice = {
  includedDiscounts: Array<DiscountedLineItemPortion>;
  value: BaseMoney;
};

export type DiscountedLineItemPriceForQuantity = {
  discountedPrice: DiscountedLineItemPrice;
  quantity: Scalars['Long'];
};

export type DiscountedProductPriceValue = {
  discount?: Maybe<ProductDiscount>;
  discountRef: Reference;
  value: BaseMoney;
};

export type DiscountedProductPriceValueInput = {
  discount: ReferenceInput;
  value: BaseMoneyInput;
};

export type DiscountedProductSearchPriceValue = {
  discount?: Maybe<ProductDiscount>;
  discountRef: Reference;
  value: BaseMoney;
};

export type EnumAttribute = Attribute & {
  key: Scalars['String'];
  label: Scalars['String'];
  name: Scalars['String'];
};

export type EnumAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
  values: PlainEnumValueResult;
};

export type EnumAttributeDefinitionTypeValuesArgs = {
  excludeKeys?: InputMaybe<Array<Scalars['String']>>;
  includeKeys?: InputMaybe<Array<Scalars['String']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
};

export type EnumField = CustomField & {
  key: Scalars['String'];
  name: Scalars['String'];
};

export type EnumType = FieldType & {
  name: Scalars['String'];
  values: Array<EnumValue>;
};

export type EnumTypeDraft = {
  values: Array<PlainEnumValueDraft>;
};

export type EnumValue = {
  key: Scalars['String'];
  label: Scalars['String'];
};

export type EnumValueInput = {
  key: Scalars['String'];
  label: Scalars['String'];
};

export type EventBridgeDestination = Destination & {
  accountId: Scalars['String'];
  region: Scalars['String'];
  source: Scalars['String'];
  type: Scalars['String'];
};

export type EventBridgeDestinationInput = {
  accountId: Scalars['String'];
  region: Scalars['String'];
};

export type EventGridDestination = Destination & {
  accessKey: Scalars['String'];
  type: Scalars['String'];
  uri: Scalars['String'];
};

export type EventGridDestinationInput = {
  accessKey: Scalars['String'];
  uri: Scalars['String'];
};

export type ExistsFilterInput = {
  path: Scalars['String'];
};

export type Extension = ReferenceExpandable &
  Versioned & {
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    destination: ExtensionDestination;
    id: Scalars['String'];
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    timeoutInMs?: Maybe<Scalars['Int']>;
    triggers: Array<Trigger>;
    version: Scalars['Long'];
  };

export type ExtensionDestination = {
  type: Scalars['String'];
};

export type ExtensionDestinationInput = {
  AWSLambda?: InputMaybe<AwsLambdaDestinationInput>;
  HTTP?: InputMaybe<HttpDestinationInput>;
};

export type ExtensionDraft = {
  destination: ExtensionDestinationInput;
  key?: InputMaybe<Scalars['String']>;
  timeoutInMs?: InputMaybe<Scalars['Int']>;
  triggers: Array<TriggerInput>;
};

export type ExtensionLimitsProjection = {
  timeoutInMs: Limit;
};

export type ExtensionQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<Extension>;
  total: Scalars['Long'];
};

export type ExtensionUpdateAction = {
  changeDestination?: InputMaybe<ChangeExtensionDestination>;
  changeTriggers?: InputMaybe<ChangeExtensionTriggers>;
  setKey?: InputMaybe<SetExtensionKey>;
  setTimeoutInMs?: InputMaybe<SetExtensionTimeoutInMs>;
};

export type ExternalDiscountValue = ProductDiscountValue & {
  type: Scalars['String'];
};

export type ExternalDiscountValueInput = {
  dummy?: InputMaybe<Scalars['String']>;
};

export type ExternalLineItemTotalPrice = {
  price: BaseMoney;
  totalPrice: Money;
};

export type ExternalLineItemTotalPriceDraft = {
  price: BaseMoneyInput;
  totalPrice: MoneyInput;
};

export type ExternalOAuth = {
  authorizationHeader: Scalars['String'];
  url: Scalars['String'];
};

export type ExternalOAuthDraft = {
  authorizationHeader: Scalars['String'];
  url: Scalars['String'];
};

export type ExternalTaxAmountDraft = {
  taxRate: ExternalTaxRateDraft;
  totalGross: MoneyInput;
};

export type ExternalTaxAmountDraftOutput = {
  taxRate: ExternalTaxRateDraftOutput;
  totalGross: Money;
};

export type ExternalTaxRateDraft = {
  amount: Scalars['Float'];
  country: Scalars['Country'];
  includedInPrice?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
  subRates?: InputMaybe<Array<SubRateDraft>>;
};

export type ExternalTaxRateDraftOutput = {
  amount?: Maybe<Scalars['Float']>;
  country: Scalars['Country'];
  includedInPrice: Scalars['Boolean'];
  name: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  subRates: Array<SubRate>;
};

export type FacetResult = {
  type: Scalars['String'];
};

export type FacetResultValue = {
  facet: Scalars['String'];
  value: FacetResult;
};

/** Field definitions describe custom fields and allow you to define some meta-information associated with the field. */
export type FieldDefinition = {
  inputHint: TextInputHint;
  label?: Maybe<Scalars['String']>;
  labelAllLocales: Array<LocalizedString>;
  name: Scalars['String'];
  required: Scalars['Boolean'];
  type: FieldType;
};

/** Field definitions describe custom fields and allow you to define some meta-information associated with the field. */
export type FieldDefinitionLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type FieldDefinitionInput = {
  inputHint: TextInputHint;
  label: Array<LocalizedStringItemInputType>;
  name: Scalars['String'];
  required: Scalars['Boolean'];
  type: FieldTypeInput;
};

export type FieldType = {
  name: Scalars['String'];
};

export type FieldTypeEnumTypeDraft = {
  values: Array<EnumValueInput>;
};

export type FieldTypeInput = {
  Boolean?: InputMaybe<SimpleFieldTypeDraft>;
  Date?: InputMaybe<SimpleFieldTypeDraft>;
  DateTime?: InputMaybe<SimpleFieldTypeDraft>;
  Enum?: InputMaybe<FieldTypeEnumTypeDraft>;
  LocalizedEnum?: InputMaybe<FieldTypeLocalizedEnumTypeDraft>;
  LocalizedString?: InputMaybe<SimpleFieldTypeDraft>;
  Money?: InputMaybe<SimpleFieldTypeDraft>;
  Number?: InputMaybe<SimpleFieldTypeDraft>;
  Reference?: InputMaybe<FieldTypeReferenceTypeDraft>;
  Set?: InputMaybe<FieldTypeSetTypeDraft>;
  String?: InputMaybe<SimpleFieldTypeDraft>;
  Time?: InputMaybe<SimpleFieldTypeDraft>;
};

export type FieldTypeLocalizedEnumTypeDraft = {
  values: Array<LocalizedEnumValueInput>;
};

export type FieldTypeReferenceTypeDraft = {
  referenceTypeId: Scalars['String'];
};

export type FieldTypeSetElementTypeDraft = {
  Boolean?: InputMaybe<SimpleFieldTypeDraft>;
  Date?: InputMaybe<SimpleFieldTypeDraft>;
  DateTime?: InputMaybe<SimpleFieldTypeDraft>;
  Enum?: InputMaybe<FieldTypeEnumTypeDraft>;
  LocalizedEnum?: InputMaybe<FieldTypeLocalizedEnumTypeDraft>;
  LocalizedString?: InputMaybe<SimpleFieldTypeDraft>;
  Money?: InputMaybe<SimpleFieldTypeDraft>;
  Number?: InputMaybe<SimpleFieldTypeDraft>;
  Reference?: InputMaybe<FieldTypeReferenceTypeDraft>;
  String?: InputMaybe<SimpleFieldTypeDraft>;
  Time?: InputMaybe<SimpleFieldTypeDraft>;
};

export type FieldTypeSetTypeDraft = {
  elementType: FieldTypeSetElementTypeDraft;
};

export type FixedPriceDiscountValue = CartDiscountValue & {
  money: Array<Money>;
  type: Scalars['String'];
};

export type FixedPriceDiscountValueInput = {
  money: Array<MoneyInput>;
};

export type Geometry = {
  type: Scalars['String'];
};

export type GeometryInput = {
  coordinates?: InputMaybe<Array<Scalars['Float']>>;
  type: Scalars['String'];
};

export type GiftLineItemValue = CartDiscountValue & {
  distributionChannelRef?: Maybe<ChannelReferenceIdentifier>;
  productRef: ProductReferenceIdentifier;
  supplyChannelRef?: Maybe<ChannelReferenceIdentifier>;
  type: Scalars['String'];
  variantId: Scalars['Int'];
};

export type GiftLineItemValueInput = {
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  product: ResourceIdentifierInput;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
  variantId: Scalars['Int'];
};

export type GoogleCloudPubSubDestination = Destination & {
  projectId: Scalars['String'];
  topic: Scalars['String'];
  type: Scalars['String'];
};

export type GoogleCloudPubSubDestinationInput = {
  projectId: Scalars['String'];
  topic: Scalars['String'];
};

export type HighPrecisionMoney = BaseMoney & {
  centAmount: Scalars['Long'];
  currencyCode: Scalars['Currency'];
  fractionDigits: Scalars['Int'];
  preciseAmount: Scalars['Long'];
  type: Scalars['String'];
};

export type HighPrecisionMoneyInput = {
  centAmount?: InputMaybe<Scalars['Long']>;
  currencyCode: Scalars['Currency'];
  fractionDigits: Scalars['Int'];
  preciseAmount: Scalars['Long'];
};

export type HttpDestination = ExtensionDestination & {
  authentication?: Maybe<HttpDestinationAuthentication>;
  type: Scalars['String'];
  url: Scalars['String'];
};

export type HttpDestinationAuthentication = {
  type: Scalars['String'];
};

export type HttpDestinationAuthenticationInput = {
  AuthorizationHeader?: InputMaybe<AuthorizationHeaderInput>;
  AzureFunctions?: InputMaybe<AzureFunctionsAuthenticationInput>;
};

export type HttpDestinationInput = {
  authentication?: InputMaybe<HttpDestinationAuthenticationInput>;
  url: Scalars['String'];
};

export type Image = {
  dimensions: Dimensions;
  label?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type ImageInput = {
  dimensions: DimensionsInput;
  label?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type ImageProductSearch = {
  dimensions: DimensionsProductSearch;
  label?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type ImportOrderCustomLineItemState = {
  customLineItemId: Scalars['String'];
  state: Array<ItemStateDraftType>;
};

export type ImportOrderLineItemState = {
  lineItemId: Scalars['String'];
  state: Array<ItemStateDraftType>;
};

export type ImportStagedOrderCustomLineItemState = {
  customLineItemId: Scalars['String'];
  state: Array<ItemStateDraftType>;
};

export type ImportStagedOrderCustomLineItemStateOutput = StagedOrderUpdateActionOutput & {
  customLineItemId: Scalars['String'];
  state: Scalars['Set'];
  type: Scalars['String'];
};

export type ImportStagedOrderLineItemState = {
  lineItemId: Scalars['String'];
  state: Array<ItemStateDraftType>;
};

export type ImportStagedOrderLineItemStateOutput = StagedOrderUpdateActionOutput & {
  lineItemId: Scalars['String'];
  state: Scalars['Set'];
  type: Scalars['String'];
};

export type InStore = CartQueryInterface &
  CustomerActiveCartInterface &
  CustomerQueryInterface &
  MeFieldInterface &
  OrderQueryInterface &
  ShippingMethodsByCartInterface & {
    cart?: Maybe<Cart>;
    carts: CartQueryResult;
    customer?: Maybe<Customer>;
    customerActiveCart?: Maybe<Cart>;
    customers: CustomerQueryResult;
    /**
     * This field can only be used with an access token created with the password flow or with an anonymous session.
     *
     * It gives access to the data that is specific to the customer or the anonymous session linked to the access token.
     */
    me: InStoreMe;
    order?: Maybe<Order>;
    orders: OrderQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    product?: Maybe<Product>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    productSelectionAssignments: ProductAssignmentQueryResult;
    shippingMethodsByCart: Array<ShippingMethod>;
    shoppingList?: Maybe<ShoppingList>;
    shoppingLists: ShoppingListQueryResult;
  };

export type InStoreCartArgs = {
  id: Scalars['String'];
};

export type InStoreCartsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type InStoreCustomerArgs = {
  emailToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  passwordToken?: InputMaybe<Scalars['String']>;
};

export type InStoreCustomerActiveCartArgs = {
  customerId: Scalars['String'];
};

export type InStoreCustomersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type InStoreOrderArgs = {
  id?: InputMaybe<Scalars['String']>;
  orderNumber?: InputMaybe<Scalars['String']>;
};

export type InStoreOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type InStoreProductArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  variantKey?: InputMaybe<Scalars['String']>;
};

export type InStoreProductSelectionAssignmentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type InStoreShippingMethodsByCartArgs = {
  id: Scalars['String'];
};

export type InStoreShoppingListArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type InStoreShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type InStoreMe = ActiveCartInterface &
  CartQueryInterface &
  MeQueryInterface &
  OrderQueryInterface &
  ShoppingListQueryInterface & {
    activeCart?: Maybe<Cart>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    cart?: Maybe<Cart>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    carts: CartQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    customer?: Maybe<Customer>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    order?: Maybe<Order>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    orders: OrderQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    shoppingList?: Maybe<ShoppingList>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    shoppingLists: ShoppingListQueryResult;
  };

export type InStoreMeCartArgs = {
  id: Scalars['String'];
};

export type InStoreMeCartsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type InStoreMeOrderArgs = {
  id?: InputMaybe<Scalars['String']>;
  orderNumber?: InputMaybe<Scalars['String']>;
};

export type InStoreMeOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type InStoreMeShoppingListArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type InStoreMeShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type IndividualProductSelectionCreatedPayload = ProductSelectionCreatedPayload & {
  custom?: Maybe<CustomFieldsType>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  type: Scalars['String'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type IndividualProductSelectionCreatedPayloadNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type Initiator = {
  anonymousId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  customerRef?: Maybe<Reference>;
  externalUserId?: Maybe<Scalars['String']>;
  isPlatformClient?: Maybe<Scalars['Boolean']>;
  userRef?: Maybe<Reference>;
};

export type InterfaceInteractionsRaw = {
  fields: Array<RawCustomField>;
  type?: Maybe<TypeDefinition>;
  typeRef: Reference;
};

export type InterfaceInteractionsRawFieldsArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']>>;
  includeNames?: InputMaybe<Array<Scalars['String']>>;
};

export type InterfaceInteractionsRawResult = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  results: Array<InterfaceInteractionsRaw>;
  total: Scalars['Int'];
};

/** Inventory allows you to track stock quantity per SKU and optionally per supply channel */
export type InventoryEntry = ReferenceExpandable &
  Versioned & {
    availableQuantity: Scalars['Long'];
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    custom?: Maybe<CustomFieldsType>;
    expectedDelivery?: Maybe<Scalars['DateTime']>;
    id: Scalars['String'];
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    quantityOnStock: Scalars['Long'];
    restockableInDays?: Maybe<Scalars['Int']>;
    sku: Scalars['String'];
    supplyChannel?: Maybe<Channel>;
    supplyChannelRef?: Maybe<Reference>;
    version: Scalars['Long'];
  };

export type InventoryEntryCreated = MessagePayload & {
  inventoryEntry: InventoryEntryCreatedContent;
  type: Scalars['String'];
};

export type InventoryEntryCreatedContent = {
  custom?: Maybe<CustomFieldsType>;
  expectedDelivery?: Maybe<Scalars['DateTime']>;
  inventoryEntryId: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  messageId?: Maybe<MessageId>;
  quantityOnStock: Scalars['Long'];
  restockableInDays?: Maybe<Scalars['Int']>;
  sku: Scalars['String'];
  supplyChannel?: Maybe<Channel>;
  supplyChannelRef?: Maybe<Reference>;
};

export type InventoryEntryDeleted = MessagePayload & {
  sku: Scalars['String'];
  supplyChannel?: Maybe<Channel>;
  supplyChannelRef?: Maybe<Reference>;
  type: Scalars['String'];
};

export type InventoryEntryDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  expectedDelivery?: InputMaybe<Scalars['DateTime']>;
  key?: InputMaybe<Scalars['String']>;
  quantityOnStock?: InputMaybe<Scalars['Long']>;
  restockableInDays?: InputMaybe<Scalars['Int']>;
  sku: Scalars['String'];
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
};

export type InventoryEntryQuantitySet = MessagePayload & {
  newAvailableQuantity: Scalars['Long'];
  newQuantityOnStock: Scalars['Long'];
  oldAvailableQuantity: Scalars['Long'];
  oldQuantityOnStock: Scalars['Long'];
  supplyChannel?: Maybe<Channel>;
  supplyChannelRef?: Maybe<Reference>;
  type: Scalars['String'];
};

export type InventoryEntryQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<InventoryEntry>;
  total: Scalars['Long'];
};

export type InventoryEntryUpdateAction = {
  addQuantity?: InputMaybe<AddInventoryEntryQuantity>;
  changeQuantity?: InputMaybe<ChangeInventoryEntryQuantity>;
  removeQuantity?: InputMaybe<RemoveInventoryEntryQuantity>;
  setCustomField?: InputMaybe<SetInventoryEntryCustomField>;
  setCustomType?: InputMaybe<SetInventoryEntryCustomType>;
  setExpectedDelivery?: InputMaybe<SetInventoryEntryExpectedDelivery>;
  setRestockableInDays?: InputMaybe<SetInventoryEntryRestockableInDays>;
  setSupplyChannel?: InputMaybe<SetInventoryEntrySupplyChannel>;
};

export enum InventoryMode {
  /**
   * Adding items to cart and ordering is independent of inventory. No inventory checks or modifications.
   * This is the default mode for a new cart.
   */
  None = 'None',
  /**
   * Creating an order will fail with an OutOfStock error if an unavailable line item exists. Line items in the cart
   * are only reserved for the duration of the ordering transaction.
   */
  ReserveOnOrder = 'ReserveOnOrder',
  /**
   * Orders are tracked on inventory. That means, ordering a LineItem will decrement the available quantity on the
   * respective InventoryEntry. Creating an order will succeed even if the line item’s available quantity is zero or
   * negative. But creating an order will fail with an OutOfStock error if no matching inventory entry exists for a
   * line item.
   */
  TrackOnly = 'TrackOnly',
}

export type ItemShippingDetails = {
  targets: Array<ItemShippingTarget>;
  valid: Scalars['Boolean'];
};

export type ItemShippingDetailsDraft = {
  targets: Array<ShippingTargetDraft>;
};

export type ItemShippingDetailsDraftOutput = {
  targets: Array<ItemShippingTarget>;
};

export type ItemShippingDetailsDraftType = {
  targets: Array<ShippingTargetDraftType>;
};

export type ItemShippingTarget = {
  addressKey: Scalars['String'];
  quantity: Scalars['Long'];
};

export type ItemState = {
  quantity: Scalars['Long'];
  state?: Maybe<State>;
  stateRef: Reference;
};

export type ItemStateDraftType = {
  quantity: Scalars['Long'];
  state: ReferenceInput;
};

export type KeyReference = {
  key: Scalars['String'];
  typeId: Scalars['String'];
};

export type Limit = {
  limit?: Maybe<Scalars['Long']>;
};

export type LimitWithCurrent = {
  current?: Maybe<Scalars['Long']>;
  limit?: Maybe<Scalars['Long']>;
};

/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type LineItem = {
  addedAt?: Maybe<Scalars['DateTime']>;
  custom?: Maybe<CustomFieldsType>;
  discountedPricePerQuantity: Array<DiscountedLineItemPriceForQuantity>;
  distributionChannel?: Maybe<Channel>;
  distributionChannelRef?: Maybe<Reference>;
  id: Scalars['String'];
  inventoryMode?: Maybe<ItemShippingDetails>;
  lastModifiedAt?: Maybe<Scalars['DateTime']>;
  lineItemMode: LineItemMode;
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  price: ProductPrice;
  priceMode: LineItemPriceMode;
  productId: Scalars['String'];
  productKey?: Maybe<Scalars['String']>;
  productSlug?: Maybe<Scalars['String']>;
  productSlugAllLocales?: Maybe<Array<LocalizedString>>;
  productType?: Maybe<ProductTypeDefinition>;
  productTypeRef?: Maybe<Reference>;
  quantity: Scalars['Long'];
  shippingDetails?: Maybe<ItemShippingDetails>;
  state: Array<ItemState>;
  supplyChannel?: Maybe<Channel>;
  supplyChannelRef?: Maybe<Reference>;
  taxRate?: Maybe<TaxRate>;
  taxedPrice?: Maybe<TaxedItemPrice>;
  totalPrice?: Maybe<Money>;
  variant?: Maybe<ProductVariant>;
};

/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type LineItemNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type LineItemProductSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type LineItemDraft = {
  addedAt?: InputMaybe<Scalars['DateTime']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  externalPrice?: InputMaybe<BaseMoneyInput>;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Long']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
  sku?: InputMaybe<Scalars['String']>;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type LineItemDraftOutput = {
  addedAt?: Maybe<Scalars['DateTime']>;
  custom?: Maybe<CustomFieldsCommand>;
  distributionChannelResId?: Maybe<ResourceIdentifier>;
  externalPrice?: Maybe<BaseMoney>;
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPrice>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Long']>;
  shippingDetails?: Maybe<ItemShippingDetailsDraftOutput>;
  sku?: Maybe<Scalars['String']>;
  supplyChannelResId?: Maybe<ResourceIdentifier>;
  variantId?: Maybe<Scalars['Int']>;
};

export enum LineItemMode {
  /**
   * The line item was added automatically, because a discount has added a free gift to the cart.
   * The quantity can not be increased, and it won’t be merged when the same product variant is added.
   * If the gift is removed, an entry is added to the "refusedGifts" array and the discount won’t be applied again
   * to the cart. The price can not be changed externally.
   * All other updates, such as the ones related to custom fields, can be used.
   */
  GiftLineItem = 'GiftLineItem',
  /**
   * The line item was added during cart creation or with the update action addLineItem. Its quantity can be
   * changed without restrictions.
   */
  Standard = 'Standard',
}

export enum LineItemPriceMode {
  /** The line item price was set externally. Cart discounts can apply to line items with this price mode. All update actions that change the quantity of a line item with this price mode require the externalPrice field to be given. */
  ExternalPrice = 'ExternalPrice',
  /** The line item price with the total was set externally. */
  ExternalTotal = 'ExternalTotal',
  /** The price is selected form the product variant. This is the default mode. */
  Platform = 'Platform',
}

export type LineItemReturnItem = ReturnItem & {
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String'];
  lastModifiedAt: Scalars['DateTime'];
  lineItemId: Scalars['String'];
  paymentState: ReturnPaymentState;
  quantity: Scalars['Long'];
  shipmentState: ReturnShipmentState;
  type: Scalars['String'];
};

export type LineItemStateTransition = MessagePayload &
  OrderMessagePayload & {
    fromState?: Maybe<State>;
    fromStateRef: Reference;
    lineItemId: Scalars['String'];
    quantity: Scalars['Long'];
    toState?: Maybe<State>;
    toStateRef: Reference;
    transitionDate: Scalars['DateTime'];
    type: Scalars['String'];
  };

export type LineItemsTarget = CartDiscountTarget & {
  predicate: Scalars['String'];
  type: Scalars['String'];
};

export type LineItemsTargetInput = {
  predicate: Scalars['String'];
};

export type LocalizableEnumAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
  values: LocalizableEnumValueTypeResult;
};

export type LocalizableEnumAttributeDefinitionTypeValuesArgs = {
  excludeKeys?: InputMaybe<Array<Scalars['String']>>;
  includeKeys?: InputMaybe<Array<Scalars['String']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
};

export type LocalizableEnumTypeDraft = {
  values: Array<LocalizedEnumValueDraft>;
};

export type LocalizableEnumValueType = {
  key: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  labelAllLocales: Array<LocalizedString>;
};

export type LocalizableEnumValueTypeLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type LocalizableEnumValueTypeResult = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  results: Array<LocalizableEnumValueType>;
  total: Scalars['Int'];
};

export type LocalizableTextAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};

export type LocalizedEnumAttribute = Attribute & {
  key: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type LocalizedEnumAttributeLabelArgs = {
  locale: Scalars['Locale'];
};

export type LocalizedEnumField = CustomField & {
  key: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type LocalizedEnumFieldLabelArgs = {
  locale: Scalars['Locale'];
};

export type LocalizedEnumType = FieldType & {
  name: Scalars['String'];
  values: Array<LocalizedEnumValue>;
};

export type LocalizedEnumValue = {
  key: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  labelAllLocales: Array<LocalizedString>;
};

export type LocalizedEnumValueLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type LocalizedEnumValueDraft = {
  key: Scalars['String'];
  label: Array<LocalizedStringItemInputType>;
};

export type LocalizedEnumValueInput = {
  key: Scalars['String'];
  label: Array<LocalizedStringItemInputType>;
};

export type LocalizedString = {
  locale: Scalars['Locale'];
  value: Scalars['String'];
};

export type LocalizedStringAttribute = Attribute & {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type LocalizedStringAttributeValueArgs = {
  locale: Scalars['Locale'];
};

export type LocalizedStringField = CustomField & {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type LocalizedStringFieldValueArgs = {
  locale: Scalars['Locale'];
};

export type LocalizedStringItemInputType = {
  locale: Scalars['Locale'];
  value: Scalars['String'];
};

export type LocalizedStringType = FieldType & {
  name: Scalars['String'];
};

export type Location = {
  country: Scalars['Country'];
  state?: Maybe<Scalars['String']>;
};

export type Me = ActiveCartInterface &
  CartQueryInterface &
  MeQueryInterface &
  OrderQueryInterface &
  ShoppingListQueryInterface & {
    activeCart?: Maybe<Cart>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    cart?: Maybe<Cart>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    carts: CartQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    customer?: Maybe<Customer>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    order?: Maybe<Order>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    orders: OrderQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    payment?: Maybe<MyPayment>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    payments: MyPaymentQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    shoppingList?: Maybe<ShoppingList>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    shoppingLists: ShoppingListQueryResult;
  };

export type MeCartArgs = {
  id: Scalars['String'];
};

export type MeCartsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type MeOrderArgs = {
  id?: InputMaybe<Scalars['String']>;
  orderNumber?: InputMaybe<Scalars['String']>;
};

export type MeOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type MePaymentArgs = {
  id: Scalars['String'];
};

export type MePaymentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type MeShoppingListArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type MeShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

/** The me field gives access to the data that is specific to the customer or anonymous session linked to the access token. */
export type MeFieldInterface = {
  me: MeQueryInterface;
};

export type MeQueryInterface = {
  activeCart?: Maybe<Cart>;
  cart?: Maybe<Cart>;
  carts: CartQueryResult;
  order?: Maybe<Order>;
  orders: OrderQueryResult;
  shoppingList?: Maybe<ShoppingList>;
  shoppingLists: ShoppingListQueryResult;
};

export type MeQueryInterfaceCartArgs = {
  id: Scalars['String'];
};

export type MeQueryInterfaceCartsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type MeQueryInterfaceOrderArgs = {
  id?: InputMaybe<Scalars['String']>;
  orderNumber?: InputMaybe<Scalars['String']>;
};

export type MeQueryInterfaceOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type MeQueryInterfaceShoppingListArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type MeQueryInterfaceShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type Message = ReferenceExpandable &
  Versioned & {
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    id: Scalars['String'];
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    payload: MessagePayload;
    resourceRef: Reference;
    resourceVersion: Scalars['Long'];
    sequenceNumber: Scalars['Long'];
    type: Scalars['String'];
    userProvidedIdentifiers?: Maybe<UserProvidedIdentifiers>;
    version: Scalars['Long'];
  };

export type MessageId = {
  id: Scalars['String'];
  sequenceNumber: Scalars['Long'];
};

export type MessagePayload = {
  type: Scalars['String'];
};

export type MessageQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<Message>;
  total: Scalars['Long'];
};

export type MessageSubscription = {
  resourceTypeId: Scalars['String'];
  types: Array<Scalars['String']>;
};

export type MessageSubscriptionInput = {
  resourceTypeId: Scalars['String'];
  types?: InputMaybe<Array<Scalars['String']>>;
};

export type MessagesConfiguration = {
  deleteDaysAfterCreation?: Maybe<Scalars['Int']>;
  enabled: Scalars['Boolean'];
};

export type MessagesConfigurationDraft = {
  deleteDaysAfterCreation: Scalars['Int'];
  enabled: Scalars['Boolean'];
};

export type MissingFilterInput = {
  path: Scalars['String'];
};

export type Money = BaseMoney & {
  centAmount: Scalars['Long'];
  currencyCode: Scalars['Currency'];
  /** For the `Money` it equals to the default number of fraction digits used with the currency. */
  fractionDigits: Scalars['Int'];
  type: Scalars['String'];
};

export type MoneyAttribute = Attribute & {
  centAmount: Scalars['Long'];
  currencyCode: Scalars['Currency'];
  name: Scalars['String'];
};

export type MoneyAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};

export type MoneyDraft = {
  centAmount: Scalars['Long'];
  currencyCode: Scalars['Currency'];
};

export type MoneyField = CustomField & {
  centAmount: Scalars['Long'];
  currencyCode: Scalars['Currency'];
  name: Scalars['String'];
};

export type MoneyInput = {
  centAmount: Scalars['Long'];
  currencyCode: Scalars['Currency'];
};

export type MoneyType = FieldType & {
  name: Scalars['String'];
};

export type MoveProductImageToPosition = {
  imageUrl: Scalars['String'];
  position: Scalars['Int'];
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type MultiBuyCustomLineItemsTarget = CartDiscountTarget & {
  discountedQuantity: Scalars['Long'];
  maxOccurrence?: Maybe<Scalars['Int']>;
  predicate: Scalars['String'];
  selectionMode: SelectionMode;
  triggerQuantity: Scalars['Long'];
  type: Scalars['String'];
};

export type MultiBuyCustomLineItemsTargetInput = {
  discountedQuantity: Scalars['Long'];
  maxOccurrence?: InputMaybe<Scalars['Int']>;
  predicate: Scalars['String'];
  selectionMode?: InputMaybe<SelectionMode>;
  triggerQuantity: Scalars['Long'];
};

export type MultiBuyLineItemsTarget = CartDiscountTarget & {
  discountedQuantity: Scalars['Long'];
  maxOccurrence?: Maybe<Scalars['Int']>;
  predicate: Scalars['String'];
  selectionMode: SelectionMode;
  triggerQuantity: Scalars['Long'];
  type: Scalars['String'];
};

export type MultiBuyLineItemsTargetInput = {
  discountedQuantity: Scalars['Long'];
  maxOccurrence?: InputMaybe<Scalars['Int']>;
  predicate: Scalars['String'];
  selectionMode?: InputMaybe<SelectionMode>;
  triggerQuantity: Scalars['Long'];
};

export type Mutation = {
  createApiClient?: Maybe<ApiClientWithSecret>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createAttributeGroup?: Maybe<AttributeGroup>;
  createCart?: Maybe<Cart>;
  createCartDiscount?: Maybe<CartDiscount>;
  createCategory?: Maybe<Category>;
  createChannel?: Maybe<Channel>;
  createCustomerGroup?: Maybe<CustomerGroup>;
  createDiscountCode?: Maybe<DiscountCode>;
  createExtension?: Maybe<Extension>;
  createInventoryEntry?: Maybe<InventoryEntry>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyCart?: Maybe<Cart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyOrderFromCart?: Maybe<Order>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyPayment?: Maybe<MyPayment>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyShoppingList?: Maybe<ShoppingList>;
  createOrUpdateCustomObject?: Maybe<CustomObject>;
  createOrderEdit?: Maybe<OrderEdit>;
  createOrderFromCart?: Maybe<Order>;
  createPayment?: Maybe<Payment>;
  createProduct?: Maybe<Product>;
  createProductDiscount?: Maybe<ProductDiscount>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createProductSelection?: Maybe<ProductSelection>;
  createProductType?: Maybe<ProductTypeDefinition>;
  createReview?: Maybe<Review>;
  createShippingMethod?: Maybe<ShippingMethod>;
  createShoppingList?: Maybe<ShoppingList>;
  createStandalonePrice?: Maybe<StandalonePrice>;
  createState?: Maybe<State>;
  createStore?: Maybe<Store>;
  createSubscription?: Maybe<CommercetoolsSubscription>;
  createTaxCategory?: Maybe<TaxCategory>;
  createTypeDefinition?: Maybe<TypeDefinition>;
  createZone?: Maybe<Zone>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  customerChangeMyPassword?: Maybe<Customer>;
  customerChangePassword?: Maybe<Customer>;
  /** Verifies customer's email using a token. */
  customerConfirmEmail?: Maybe<Customer>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  customerConfirmMyEmail?: Maybe<Customer>;
  customerCreateEmailVerificationToken: CustomerEmailToken;
  /** The token value is used to reset the password of the customer with the given email. The token is valid only for 10 minutes. */
  customerCreatePasswordResetToken?: Maybe<CustomerPasswordToken>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  customerResetMyPassword?: Maybe<Customer>;
  /**
   * The following workflow can be used to reset the customer’s password:
   *
   * 1. Create a password reset token and send it embedded in a link to the customer.
   * 2. When the customer clicks on the link, you may optionally retrieve customer by password token.
   * 3. When the customer entered new password, use reset customer’s password to reset the password.
   */
  customerResetPassword?: Maybe<Customer>;
  /**
   * Retrieves the authenticated customer (a customer that matches the given email/password pair).
   *
   * There may be carts and orders created before the sign in that should be assigned to the customer account. With the `anonymousCartId`, a single anonymous cart can be assigned. With the `anonymousId`, all orders and carts that have this `anonymousId` set will be assigned to the customer.
   * If both `anonymousCartId` and `anonymousId` are given, the anonymous cart must have the `anonymousId`.
   *
   * Additionally, there might also exist one or more active customer carts from an earlier session. On customer sign in there are several ways how to proceed with this cart and the cart referenced by the `anonymousCartId`.
   *
   * * If the customer does not have a cart yet, the anonymous cart becomes the customer's cart.
   * * If the customer already has one or more carts, the content of the anonymous cart will be copied to the customer's active cart that has been modified most recently.
   *
   *   In this case the `CartState` of the anonymous cart gets changed to `Merged` while the customer's cart remains the `Active` cart.
   *
   *   If a `LineItem` in the anonymous cart matches an existing line item, or a `CustomLineItem` matches an existing custom line item in the customer's cart, the maximum quantity of both line items is used as the new quantity.
   *
   *   `ItemShippingDetails` are copied from the item with the highest quantity.
   *
   *   If `itemShippingAddresses` are different in the two carts, the resulting cart contains the addresses of both the customer cart and the anonymous cart.
   *
   *   Note, that it is not possible to merge carts that differ in their currency (set during creation of the cart).
   *
   * If a cart is is returned as part of the `CustomerSignInResult`, it has been recalculated (it will have up-to-date prices, taxes and discounts, and invalid line items have been removed).
   */
  customerSignIn: CustomerSignInResult;
  /**
   * BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta
   *
   * Retrieves the authenticated customer (a customer that matches the given email/password pair).
   *
   * If used with an access token for Anonymous Sessions, all orders and carts belonging to the `anonymousId` will be assigned to the newly created customer.
   *
   * * If the customer does not have a cart yet, the anonymous cart that was modified most recently becomes the customer's cart.
   * * If the customer already has a cart, the most recently modified anonymous cart will be handled according to the `AnonymousCartSignInMode`.
   *
   * If a cart is is returned as part of the `CustomerSignInResult`, it has been recalculated (it will have up-to-date prices, taxes and discounts, and invalid line items have been removed).
   */
  customerSignMeIn: CustomerSignInResult;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta If used with an access token for Anonymous Sessions, all orders and carts belonging to the anonymousId will be assigned to the newly created customer. */
  customerSignMeUp: CustomerSignInResult;
  /** Creates a customer. If an anonymous cart is given then the cart is assigned to the created customer and the version number of the Cart will increase. If the id of an anonymous session is given, all carts and orders will be assigned to the created customer. */
  customerSignUp: CustomerSignInResult;
  deleteApiClient?: Maybe<ApiClientWithoutSecret>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  deleteAttributeGroup?: Maybe<AttributeGroup>;
  deleteCart?: Maybe<Cart>;
  deleteCartDiscount?: Maybe<CartDiscount>;
  deleteCategory?: Maybe<Category>;
  deleteChannel?: Maybe<Channel>;
  deleteCustomObject?: Maybe<CustomObject>;
  deleteCustomer?: Maybe<Customer>;
  deleteCustomerGroup?: Maybe<CustomerGroup>;
  deleteDiscountCode?: Maybe<DiscountCode>;
  deleteExtension?: Maybe<Extension>;
  deleteInventoryEntry?: Maybe<InventoryEntry>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  deleteMyCart?: Maybe<Cart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  deleteMyCustomer?: Maybe<Customer>;
  deleteMyPayment?: Maybe<MyPayment>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  deleteMyShoppingList?: Maybe<ShoppingList>;
  deleteOrder?: Maybe<Order>;
  deleteOrderEdit?: Maybe<OrderEdit>;
  deletePayment?: Maybe<Payment>;
  deleteProduct?: Maybe<Product>;
  deleteProductDiscount?: Maybe<ProductDiscount>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  deleteProductSelection?: Maybe<ProductSelection>;
  deleteProductType?: Maybe<ProductTypeDefinition>;
  deleteReview?: Maybe<Review>;
  deleteShippingMethod?: Maybe<ShippingMethod>;
  deleteShoppingList?: Maybe<ShoppingList>;
  deleteStandalonePrice?: Maybe<StandalonePrice>;
  deleteState?: Maybe<State>;
  deleteStore?: Maybe<Store>;
  deleteSubscription?: Maybe<CommercetoolsSubscription>;
  deleteTaxCategory?: Maybe<TaxCategory>;
  deleteTypeDefinition?: Maybe<TypeDefinition>;
  deleteZone?: Maybe<Zone>;
  replicateCart?: Maybe<Cart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  replicateMyCart?: Maybe<Cart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  updateAttributeGroup?: Maybe<AttributeGroup>;
  updateCart?: Maybe<Cart>;
  updateCartDiscount?: Maybe<CartDiscount>;
  updateCategory?: Maybe<Category>;
  updateChannel?: Maybe<Channel>;
  updateCustomer?: Maybe<Customer>;
  updateCustomerGroup?: Maybe<CustomerGroup>;
  updateDiscountCode?: Maybe<DiscountCode>;
  updateExtension?: Maybe<Extension>;
  updateInventoryEntry?: Maybe<InventoryEntry>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  updateMyCart?: Maybe<Cart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  updateMyCustomer?: Maybe<Customer>;
  updateMyPayment?: Maybe<MyPayment>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  updateMyShoppingList?: Maybe<ShoppingList>;
  updateOrder?: Maybe<Order>;
  updateOrderEdit?: Maybe<OrderEdit>;
  updatePayment?: Maybe<Payment>;
  updateProduct?: Maybe<Product>;
  updateProductDiscount?: Maybe<ProductDiscount>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  updateProductSelection?: Maybe<ProductSelection>;
  updateProductType?: Maybe<ProductTypeDefinition>;
  updateProject?: Maybe<ProjectProjection>;
  updateReview?: Maybe<Review>;
  updateShippingMethod?: Maybe<ShippingMethod>;
  updateShoppingList?: Maybe<ShoppingList>;
  updateStandalonePrice?: Maybe<StandalonePrice>;
  updateState?: Maybe<State>;
  updateStore?: Maybe<Store>;
  updateSubscription?: Maybe<CommercetoolsSubscription>;
  updateTaxCategory?: Maybe<TaxCategory>;
  updateTypeDefinition?: Maybe<TypeDefinition>;
  updateZone?: Maybe<Zone>;
};

export type MutationCreateApiClientArgs = {
  draft: CreateApiClient;
};

export type MutationCreateAttributeGroupArgs = {
  draft: AttributeGroupDraft;
};

export type MutationCreateCartArgs = {
  draft: CartDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
};

export type MutationCreateCartDiscountArgs = {
  draft: CartDiscountDraft;
};

export type MutationCreateCategoryArgs = {
  draft: CategoryDraft;
};

export type MutationCreateChannelArgs = {
  draft: ChannelDraft;
};

export type MutationCreateCustomerGroupArgs = {
  draft: CustomerGroupDraft;
};

export type MutationCreateDiscountCodeArgs = {
  draft: DiscountCodeDraft;
};

export type MutationCreateExtensionArgs = {
  draft: ExtensionDraft;
};

export type MutationCreateInventoryEntryArgs = {
  draft: InventoryEntryDraft;
};

export type MutationCreateMyCartArgs = {
  draft: MyCartDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
};

export type MutationCreateMyOrderFromCartArgs = {
  draft: OrderMyCartCommand;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
};

export type MutationCreateMyPaymentArgs = {
  draft: MyPaymentDraft;
};

export type MutationCreateMyShoppingListArgs = {
  draft: MyShoppingListDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
};

export type MutationCreateOrUpdateCustomObjectArgs = {
  draft: CustomObjectDraft;
};

export type MutationCreateOrderEditArgs = {
  draft: OrderEditDraft;
};

export type MutationCreateOrderFromCartArgs = {
  draft: OrderCartCommand;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
};

export type MutationCreatePaymentArgs = {
  draft: PaymentDraft;
};

export type MutationCreateProductArgs = {
  draft: ProductDraft;
};

export type MutationCreateProductDiscountArgs = {
  draft: ProductDiscountDraft;
};

export type MutationCreateProductSelectionArgs = {
  draft: CreateProductSelectionDraft;
};

export type MutationCreateProductTypeArgs = {
  draft: ProductTypeDraft;
};

export type MutationCreateReviewArgs = {
  draft: ReviewDraft;
};

export type MutationCreateShippingMethodArgs = {
  draft: ShippingMethodDraft;
};

export type MutationCreateShoppingListArgs = {
  draft: ShoppingListDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
};

export type MutationCreateStandalonePriceArgs = {
  draft: CreateStandalonePrice;
};

export type MutationCreateStateArgs = {
  draft: StateDraft;
};

export type MutationCreateStoreArgs = {
  draft: CreateStore;
};

export type MutationCreateSubscriptionArgs = {
  draft: SubscriptionDraft;
};

export type MutationCreateTaxCategoryArgs = {
  draft: TaxCategoryDraft;
};

export type MutationCreateTypeDefinitionArgs = {
  draft: TypeDefinitionDraft;
};

export type MutationCreateZoneArgs = {
  draft: CreateZone;
};

export type MutationCustomerChangeMyPasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationCustomerChangePasswordArgs = {
  currentPassword: Scalars['String'];
  id: Scalars['String'];
  newPassword: Scalars['String'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationCustomerConfirmEmailArgs = {
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  tokenValue: Scalars['String'];
  version?: InputMaybe<Scalars['Long']>;
};

export type MutationCustomerConfirmMyEmailArgs = {
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  tokenValue: Scalars['String'];
};

export type MutationCustomerCreateEmailVerificationTokenArgs = {
  id: Scalars['String'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  ttlMinutes: Scalars['Int'];
  version?: InputMaybe<Scalars['Long']>;
};

export type MutationCustomerCreatePasswordResetTokenArgs = {
  email: Scalars['String'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  ttlMinutes?: InputMaybe<Scalars['Int']>;
};

export type MutationCustomerResetMyPasswordArgs = {
  newPassword: Scalars['String'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  tokenValue: Scalars['String'];
};

export type MutationCustomerResetPasswordArgs = {
  newPassword: Scalars['String'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  tokenValue: Scalars['String'];
  version?: InputMaybe<Scalars['Long']>;
};

export type MutationCustomerSignInArgs = {
  draft: CustomerSignInDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
};

export type MutationCustomerSignMeInArgs = {
  draft: CustomerSignMeInDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
};

export type MutationCustomerSignMeUpArgs = {
  draft: CustomerSignMeUpDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
};

export type MutationCustomerSignUpArgs = {
  draft: CustomerSignUpDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
};

export type MutationDeleteApiClientArgs = {
  id: Scalars['String'];
};

export type MutationDeleteAttributeGroupArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteCartArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationDeleteCartDiscountArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteChannelArgs = {
  id: Scalars['String'];
  version: Scalars['Long'];
};

export type MutationDeleteCustomObjectArgs = {
  container?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']>;
  version?: InputMaybe<Scalars['Long']>;
};

export type MutationDeleteCustomerArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationDeleteCustomerGroupArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteDiscountCodeArgs = {
  id: Scalars['String'];
  version: Scalars['Long'];
};

export type MutationDeleteExtensionArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteInventoryEntryArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteMyCartArgs = {
  id: Scalars['String'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationDeleteMyCustomerArgs = {
  personalDataErasure?: InputMaybe<Scalars['Boolean']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationDeleteMyPaymentArgs = {
  id: Scalars['String'];
  version: Scalars['Long'];
};

export type MutationDeleteMyShoppingListArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationDeleteOrderArgs = {
  id?: InputMaybe<Scalars['String']>;
  orderNumber?: InputMaybe<Scalars['String']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationDeleteOrderEditArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeletePaymentArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']>;
  version: Scalars['Long'];
};

export type MutationDeleteProductArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteProductDiscountArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteProductSelectionArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteProductTypeArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteReviewArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']>;
  version: Scalars['Long'];
};

export type MutationDeleteShippingMethodArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteShoppingListArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationDeleteStandalonePriceArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteStateArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteStoreArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteSubscriptionArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteTaxCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteTypeDefinitionArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationDeleteZoneArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationReplicateCartArgs = {
  key?: InputMaybe<Scalars['String']>;
  reference: ReferenceInput;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
};

export type MutationReplicateMyCartArgs = {
  reference: ReferenceInput;
};

export type MutationUpdateAttributeGroupArgs = {
  actions: Array<AttributeGroupUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateCartArgs = {
  actions: Array<CartUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationUpdateCartDiscountArgs = {
  actions: Array<CartDiscountUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateCategoryArgs = {
  actions: Array<CategoryUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateChannelArgs = {
  actions: Array<ChannelUpdateAction>;
  id: Scalars['String'];
  version: Scalars['Long'];
};

export type MutationUpdateCustomerArgs = {
  actions: Array<CustomerUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationUpdateCustomerGroupArgs = {
  actions: Array<CustomerGroupUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateDiscountCodeArgs = {
  actions: Array<DiscountCodeUpdateAction>;
  id: Scalars['String'];
  version: Scalars['Long'];
};

export type MutationUpdateExtensionArgs = {
  actions: Array<ExtensionUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateInventoryEntryArgs = {
  actions: Array<InventoryEntryUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateMyCartArgs = {
  actions: Array<MyCartUpdateAction>;
  id: Scalars['String'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationUpdateMyCustomerArgs = {
  actions: Array<MyCustomerUpdateAction>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationUpdateMyPaymentArgs = {
  actions: Array<MyPaymentUpdateAction>;
  id: Scalars['String'];
  version: Scalars['Long'];
};

export type MutationUpdateMyShoppingListArgs = {
  actions: Array<MyShoppingListUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationUpdateOrderArgs = {
  actions: Array<OrderUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  orderNumber?: InputMaybe<Scalars['String']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationUpdateOrderEditArgs = {
  actions: Array<OrderEditUpdateAction>;
  dryRun?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdatePaymentArgs = {
  actions: Array<PaymentUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateProductArgs = {
  actions: Array<ProductUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateProductDiscountArgs = {
  actions: Array<ProductDiscountUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateProductSelectionArgs = {
  actions: Array<ProductSelectionUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateProductTypeArgs = {
  actions: Array<ProductTypeUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateProjectArgs = {
  actions: Array<ProjectSettingsUpdateAction>;
  version: Scalars['Long'];
};

export type MutationUpdateReviewArgs = {
  actions: Array<ReviewUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateShippingMethodArgs = {
  actions: Array<ShippingMethodUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateShoppingListArgs = {
  actions: Array<ShoppingListUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']>;
  version: Scalars['Long'];
};

export type MutationUpdateStandalonePriceArgs = {
  actions: Array<StandalonePriceUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateStateArgs = {
  actions: Array<StateUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateStoreArgs = {
  actions: Array<StoreUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateSubscriptionArgs = {
  actions: Array<SubscriptionUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateTaxCategoryArgs = {
  actions: Array<TaxCategoryUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateTypeDefinitionArgs = {
  actions: Array<TypeUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MutationUpdateZoneArgs = {
  actions: Array<ZoneUpdateAction>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  version: Scalars['Long'];
};

export type MyCartDraft = {
  billingAddress?: InputMaybe<AddressInput>;
  country?: InputMaybe<Scalars['Country']>;
  currency: Scalars['Currency'];
  custom?: InputMaybe<CustomFieldsDraft>;
  customerEmail?: InputMaybe<Scalars['String']>;
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']>;
  discountCodes?: InputMaybe<Array<Scalars['String']>>;
  inventoryMode?: InputMaybe<InventoryMode>;
  itemShippingAddresses?: InputMaybe<Array<AddressInput>>;
  lineItems?: InputMaybe<Array<MyLineItemDraft>>;
  locale?: InputMaybe<Scalars['Locale']>;
  shippingAddress?: InputMaybe<AddressInput>;
  shippingMethod?: InputMaybe<ResourceIdentifierInput>;
  store?: InputMaybe<ResourceIdentifierInput>;
  taxMode?: InputMaybe<TaxMode>;
};

export type MyCartUpdateAction = {
  addDiscountCode?: InputMaybe<AddCartDiscountCode>;
  addItemShippingAddress?: InputMaybe<AddCartItemShippingAddress>;
  addLineItem?: InputMaybe<AddMyCartLineItem>;
  addPayment?: InputMaybe<AddCartPayment>;
  addShoppingList?: InputMaybe<AddCartShoppingList>;
  applyDeltaToLineItemShippingDetailsTargets?: InputMaybe<ApplyCartDeltaToLineItemShippingDetailsTargets>;
  changeLineItemQuantity?: InputMaybe<ChangeCartLineItemQuantity>;
  changeTaxMode?: InputMaybe<ChangeMyCartTaxMode>;
  recalculate?: InputMaybe<RecalculateCart>;
  removeDiscountCode?: InputMaybe<RemoveCartDiscountCode>;
  removeItemShippingAddress?: InputMaybe<RemoveCartItemShippingAddress>;
  removeLineItem?: InputMaybe<RemoveCartLineItem>;
  removePayment?: InputMaybe<RemoveCartPayment>;
  setBillingAddress?: InputMaybe<SetCartBillingAddress>;
  setBillingAddressCustomField?: InputMaybe<SetCartBillingAddressCustomField>;
  setBillingAddressCustomType?: InputMaybe<SetCartBillingAddressCustomType>;
  setCountry?: InputMaybe<SetCartCountry>;
  setCustomField?: InputMaybe<SetCartCustomField>;
  setCustomType?: InputMaybe<SetCartCustomType>;
  setCustomerEmail?: InputMaybe<SetCartCustomerEmail>;
  setDeleteDaysAfterLastModification?: InputMaybe<SetCartDeleteDaysAfterLastModification>;
  setItemShippingAddressCustomField?: InputMaybe<SetCartItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: InputMaybe<SetCartItemShippingAddressCustomType>;
  setLineItemCustomField?: InputMaybe<SetCartLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<SetCartLineItemCustomType>;
  setLineItemDistributionChannel?: InputMaybe<SetCartLineItemDistributionChannel>;
  setLineItemShippingDetails?: InputMaybe<SetCartLineItemShippingDetails>;
  setLineItemSupplyChannel?: InputMaybe<SetCartLineItemSupplyChannel>;
  setLocale?: InputMaybe<SetCartLocale>;
  setShippingAddress?: InputMaybe<SetCartShippingAddress>;
  setShippingAddressCustomField?: InputMaybe<SetCartShippingAddressCustomField>;
  setShippingAddressCustomType?: InputMaybe<SetCartShippingAddressCustomType>;
  setShippingMethod?: InputMaybe<SetMyCartShippingMethod>;
  updateItemShippingAddress?: InputMaybe<UpdateCartItemShippingAddress>;
};

export type MyCustomerUpdateAction = {
  addAddress?: InputMaybe<AddCustomerAddress>;
  addBillingAddressId?: InputMaybe<AddCustomerBillingAddressId>;
  addShippingAddressId?: InputMaybe<AddCustomerShippingAddressId>;
  changeAddress?: InputMaybe<ChangeCustomerAddress>;
  changeEmail?: InputMaybe<ChangeCustomerEmail>;
  removeAddress?: InputMaybe<RemoveCustomerAddress>;
  removeBillingAddressId?: InputMaybe<RemoveCustomerBillingAddressId>;
  removeShippingAddressId?: InputMaybe<RemoveCustomerShippingAddressId>;
  setAddressCustomField?: InputMaybe<SetCustomerAddressCustomField>;
  setAddressCustomType?: InputMaybe<SetCustomerAddressCustomType>;
  setCompanyName?: InputMaybe<SetCustomerCompanyName>;
  setCustomField?: InputMaybe<SetCustomerCustomField>;
  setCustomType?: InputMaybe<SetCustomerCustomType>;
  setDateOfBirth?: InputMaybe<SetCustomerDateOfBirth>;
  setDefaultBillingAddress?: InputMaybe<SetCustomerDefaultBillingAddress>;
  setDefaultShippingAddress?: InputMaybe<SetCustomerDefaultShippingAddress>;
  setFirstName?: InputMaybe<SetCustomerFirstName>;
  setLastName?: InputMaybe<SetCustomerLastName>;
  setLocale?: InputMaybe<SetCustomerLocale>;
  setMiddleName?: InputMaybe<SetCustomerMiddleName>;
  setSalutation?: InputMaybe<SetCustomerSalutation>;
  setTitle?: InputMaybe<SetCustomerTitle>;
  setVatId?: InputMaybe<SetCustomerVatId>;
};

export type MyLineItemDraft = {
  addedAt?: InputMaybe<Scalars['DateTime']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Long']>;
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
  sku?: InputMaybe<Scalars['String']>;
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
  variantId?: InputMaybe<Scalars['Int']>;
};

/**
 * My Payments endpoint provides access to payments scoped to a specific user.
 * [documentation](https://docs.commercetools.com/api/projects/me-payments#mypayment)
 */
export type MyPayment = {
  amountPlanned: Money;
  anonymousId?: Maybe<Scalars['String']>;
  custom?: Maybe<CustomFieldsType>;
  customer?: Maybe<Customer>;
  customerRef?: Maybe<Reference>;
  id: Scalars['String'];
  paymentMethodInfo: PaymentMethodInfo;
  transactions: Array<Transaction>;
  version: Scalars['Long'];
};

export type MyPaymentDraft = {
  amountPlanned: MoneyInput;
  custom?: InputMaybe<CustomFieldsDraft>;
  paymentMethodInfo?: InputMaybe<PaymentMethodInfoInput>;
  transaction?: InputMaybe<MyTransactionDraft>;
};

export type MyPaymentQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<MyPayment>;
  total: Scalars['Long'];
};

export type MyPaymentUpdateAction = {
  addTransaction?: InputMaybe<AddMyPaymentTransaction>;
  changeAmountPlanned?: InputMaybe<ChangePaymentAmountPlanned>;
  setCustomField?: InputMaybe<SetPaymentCustomField>;
  setMethodInfoInterface?: InputMaybe<SetPaymentMethodInfoInterface>;
  setMethodInfoMethod?: InputMaybe<SetPaymentMethodInfoMethod>;
  setMethodInfoName?: InputMaybe<SetPaymentMethodInfoName>;
};

export type MyShoppingListDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  lineItems?: InputMaybe<Array<ShoppingListLineItemDraft>>;
  name: Array<LocalizedStringItemInputType>;
  textLineItems?: InputMaybe<Array<TextLineItemDraft>>;
};

export type MyShoppingListUpdateAction = {
  addLineItem?: InputMaybe<AddShoppingListLineItem>;
  addTextLineItem?: InputMaybe<AddShoppingListTextLineItem>;
  changeLineItemQuantity?: InputMaybe<ChangeShoppingListLineItemQuantity>;
  changeLineItemsOrder?: InputMaybe<ChangeShoppingListLineItemsOrder>;
  changeName?: InputMaybe<ChangeShoppingListName>;
  changeTextLineItemName?: InputMaybe<ChangeShoppingListTextLineItemName>;
  changeTextLineItemQuantity?: InputMaybe<ChangeShoppingListTextLineItemQuantity>;
  changeTextLineItemsOrder?: InputMaybe<ChangeShoppingListTextLineItemsOrder>;
  removeLineItem?: InputMaybe<RemoveShoppingListLineItem>;
  removeTextLineItem?: InputMaybe<RemoveShoppingListTextLineItem>;
  setCustomField?: InputMaybe<SetShoppingListCustomField>;
  setCustomType?: InputMaybe<SetShoppingListCustomType>;
  setDeleteDaysAfterLastModification?: InputMaybe<SetShoppingListDeleteDaysAfterLastModification>;
  setDescription?: InputMaybe<SetShoppingListDescription>;
  setLineItemCustomField?: InputMaybe<SetShoppingListLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<SetShoppingListLineItemCustomType>;
  setStore?: InputMaybe<SetShoppingListStore>;
  setTextLineItemCustomField?: InputMaybe<SetShoppingListTextLineItemCustomField>;
  setTextLineItemCustomType?: InputMaybe<SetShoppingListTextLineItemCustomType>;
  setTextLineItemDescription?: InputMaybe<SetShoppingListTextLineItemDescription>;
};

export type MyTransactionDraft = {
  amount: MoneyInput;
  custom?: InputMaybe<CustomFieldsDraft>;
  interactionId?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
  type: TransactionType;
};

export type NestedAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
  typeRef: Reference;
};

export type NotProcessed = OrderEditResult & {
  type: Scalars['String'];
};

export type NotificationFormat = {
  type: Scalars['String'];
};

export type NumberAttribute = Attribute & {
  name: Scalars['String'];
  value: Scalars['BigDecimal'];
};

export type NumberAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};

export type NumberField = CustomField & {
  name: Scalars['String'];
  value: Scalars['BigDecimal'];
};

export type NumberType = FieldType & {
  name: Scalars['String'];
};

/**
 * An order can be created from a cart, usually after a checkout process has been completed.
 * [documentation](https://docs.commercetools.com/api/projects/orders)
 */
export type Order = ReferenceExpandable &
  Versioned & {
    anonymousId?: Maybe<Scalars['String']>;
    billingAddress?: Maybe<Address>;
    cart?: Maybe<Cart>;
    cartRef?: Maybe<Reference>;
    completedAt?: Maybe<Scalars['DateTime']>;
    country?: Maybe<Scalars['Country']>;
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    custom?: Maybe<CustomFieldsType>;
    customLineItems: Array<CustomLineItem>;
    customer?: Maybe<Customer>;
    customerEmail?: Maybe<Scalars['String']>;
    customerGroup?: Maybe<CustomerGroup>;
    customerGroupRef?: Maybe<Reference>;
    customerId?: Maybe<Scalars['String']>;
    discountCodes: Array<DiscountCodeInfo>;
    id: Scalars['String'];
    inventoryMode: InventoryMode;
    itemShippingAddresses: Array<Address>;
    lastMessageSequenceNumber: Scalars['Long'];
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    lineItems: Array<LineItem>;
    locale?: Maybe<Scalars['Locale']>;
    orderNumber?: Maybe<Scalars['String']>;
    orderState: OrderState;
    origin: CartOrigin;
    paymentInfo?: Maybe<PaymentInfo>;
    paymentState?: Maybe<PaymentState>;
    refusedGifts: Array<CartDiscount>;
    refusedGiftsRefs: Array<Reference>;
    returnInfo: Array<ReturnInfo>;
    shipmentState?: Maybe<ShipmentState>;
    shippingAddress?: Maybe<Address>;
    shippingInfo?: Maybe<ShippingInfo>;
    shippingRateInput?: Maybe<ShippingRateInput>;
    state?: Maybe<State>;
    stateRef?: Maybe<Reference>;
    store?: Maybe<Store>;
    storeRef?: Maybe<KeyReference>;
    syncInfo: Array<SyncInfo>;
    taxCalculationMode: TaxCalculationMode;
    taxMode: TaxMode;
    taxRoundingMode: RoundingMode;
    taxedPrice?: Maybe<TaxedPrice>;
    totalPrice: Money;
    version: Scalars['Long'];
  };

/**
 * An order can be created from a cart, usually after a checkout process has been completed.
 * [documentation](https://docs.commercetools.com/api/projects/orders)
 */
export type OrderLineItemsArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type OrderBillingAddressSet = MessagePayload &
  OrderMessagePayload & {
    address?: Maybe<Address>;
    oldAddress?: Maybe<Address>;
    type: Scalars['String'];
  };

export type OrderCartCommand = {
  cart?: InputMaybe<ResourceIdentifierInput>;
  custom?: InputMaybe<CustomFieldsDraft>;
  id?: InputMaybe<Scalars['String']>;
  orderNumber?: InputMaybe<Scalars['String']>;
  orderState?: InputMaybe<OrderState>;
  paymentState?: InputMaybe<PaymentState>;
  shipmentState?: InputMaybe<ShipmentState>;
  state?: InputMaybe<ReferenceInput>;
  version: Scalars['Long'];
};

export type OrderCreated = MessagePayload &
  OrderMessagePayload & {
    order: Order;
    type: Scalars['String'];
  };

export type OrderCustomLineItemAdded = MessagePayload &
  OrderMessagePayload & {
    customLineItem: CustomLineItem;
    type: Scalars['String'];
  };

export type OrderCustomLineItemDiscountSet = MessagePayload &
  OrderMessagePayload & {
    customLineItemId: Scalars['String'];
    discountedPricePerQuantity: Array<DiscountedLineItemPriceForQuantity>;
    taxedPrice?: Maybe<TaxedItemPrice>;
    type: Scalars['String'];
  };

export type OrderCustomLineItemQuantityChanged = MessagePayload &
  OrderMessagePayload & {
    customLineItemId: Scalars['String'];
    oldQuantity?: Maybe<Scalars['Long']>;
    quantity: Scalars['Long'];
    type: Scalars['String'];
  };

export type OrderCustomLineItemRemoved = MessagePayload &
  OrderMessagePayload & {
    customLineItem?: Maybe<CustomLineItem>;
    customLineItemId: Scalars['String'];
    type: Scalars['String'];
  };

export type OrderCustomerEmailSet = MessagePayload &
  OrderMessagePayload & {
    email?: Maybe<Scalars['String']>;
    oldEmail?: Maybe<Scalars['String']>;
    type: Scalars['String'];
  };

export type OrderCustomerGroupSet = MessagePayload &
  OrderMessagePayload & {
    customerGroup?: Maybe<CustomerGroup>;
    customerGroupRef?: Maybe<Reference>;
    oldCustomerGroup?: Maybe<CustomerGroup>;
    oldCustomerGroupRef?: Maybe<Reference>;
    type: Scalars['String'];
  };

export type OrderCustomerSet = MessagePayload &
  OrderMessagePayload & {
    customer?: Maybe<Customer>;
    customerGroup?: Maybe<CustomerGroup>;
    customerGroupRef?: Maybe<Reference>;
    customerRef?: Maybe<Reference>;
    oldCustomer?: Maybe<Customer>;
    oldCustomerGroup?: Maybe<CustomerGroup>;
    oldCustomerGroupRef?: Maybe<Reference>;
    oldCustomerRef?: Maybe<Reference>;
    type: Scalars['String'];
  };

export type OrderDeleted = MessagePayload &
  OrderMessagePayload & {
    order?: Maybe<Order>;
    type: Scalars['String'];
  };

export type OrderDiscountCodeAdded = MessagePayload &
  OrderMessagePayload & {
    discountCode?: Maybe<DiscountCode>;
    discountCodeRef: Reference;
    type: Scalars['String'];
  };

export type OrderDiscountCodeRemoved = MessagePayload &
  OrderMessagePayload & {
    discountCode?: Maybe<DiscountCode>;
    discountCodeRef: Reference;
    type: Scalars['String'];
  };

export type OrderDiscountCodeStateSet = MessagePayload &
  OrderMessagePayload & {
    discountCode?: Maybe<DiscountCode>;
    discountCodeRef: Reference;
    oldState?: Maybe<DiscountCodeState>;
    state: DiscountCodeState;
    type: Scalars['String'];
  };

export type OrderEdit = Versioned & {
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  lastModifiedAt: Scalars['DateTime'];
  lastModifiedBy?: Maybe<Initiator>;
  resource?: Maybe<Order>;
  resourceRef: Reference;
  result: OrderEditResult;
  stagedActions: Array<StagedOrderUpdateActionOutput>;
  version: Scalars['Long'];
};

export type OrderEditApplied = MessagePayload &
  OrderMessagePayload & {
    edit?: Maybe<OrderEdit>;
    editRef: Reference;
    result: Applied;
    type: Scalars['String'];
  };

export type OrderEditDraft = {
  comment?: InputMaybe<Scalars['String']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  dryRun?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  resource: ReferenceInput;
  stagedActions: Array<StagedOrderUpdateAction>;
};

export type OrderEditLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long'];
  limit?: Maybe<Scalars['Long']>;
};

export type OrderEditLimitsProjection = {
  total: OrderEditLimitWithCurrent;
};

export type OrderEditQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<OrderEdit>;
  total: Scalars['Long'];
};

export type OrderEditResult = {
  type: Scalars['String'];
};

export type OrderEditUpdateAction = {
  addStagedAction?: InputMaybe<AddOrderEditStagedAction>;
  setComment?: InputMaybe<SetOrderEditComment>;
  setCustomField?: InputMaybe<SetOrderEditCustomField>;
  setCustomType?: InputMaybe<SetOrderEditCustomType>;
  setKey?: InputMaybe<SetOrderEditKey>;
  setStagedActions?: InputMaybe<SetOrderEditStagedActions>;
};

export type OrderExcerpt = {
  taxedPrice?: Maybe<TaxedPrice>;
  totalPrice: Money;
  version?: Maybe<Scalars['Long']>;
};

export type OrderImported = MessagePayload &
  OrderMessagePayload & {
    order: Order;
    type: Scalars['String'];
  };

export type OrderLineItemAdded = MessagePayload &
  OrderMessagePayload & {
    addedQuantity: Scalars['Long'];
    lineItem: LineItem;
    type: Scalars['String'];
  };

export type OrderLineItemDiscountSet = MessagePayload &
  OrderMessagePayload & {
    discountedPricePerQuantity: Array<DiscountedLineItemPriceForQuantity>;
    lineItemId: Scalars['String'];
    taxedPrice?: Maybe<TaxedItemPrice>;
    totalPrice: Money;
    type: Scalars['String'];
  };

export type OrderLineItemDistributionChannelSet = MessagePayload &
  OrderMessagePayload & {
    distributionChannel?: Maybe<Channel>;
    distributionChannelRef?: Maybe<Reference>;
    lineItemId: Scalars['String'];
    type: Scalars['String'];
  };

export type OrderLineItemRemoved = MessagePayload &
  OrderMessagePayload & {
    lineItemId: Scalars['String'];
    newPrice?: Maybe<ProductPrice>;
    newQuantity: Scalars['Long'];
    newShippingDetails?: Maybe<ItemShippingDetails>;
    newState: Scalars['Set'];
    newTaxedPrice?: Maybe<TaxedItemPrice>;
    newTotalPrice: Money;
    removedQuantity: Scalars['Long'];
    type: Scalars['String'];
  };

export type OrderMessagePayload = {
  type: Scalars['String'];
};

export type OrderMyCartCommand = {
  id: Scalars['String'];
  version: Scalars['Long'];
};

export type OrderPaymentAdded = MessagePayload &
  OrderMessagePayload & {
    paymentRef: Reference;
    type: Scalars['String'];
  };

export type OrderPaymentRemoved = MessagePayload &
  OrderMessagePayload & {
    paymentRef: Reference;
    removedPaymentInfo: Scalars['Boolean'];
    type: Scalars['String'];
  };

export type OrderPaymentStateChanged = MessagePayload &
  OrderMessagePayload & {
    oldPaymentState?: Maybe<PaymentState>;
    paymentState: PaymentState;
    type: Scalars['String'];
  };

/** Fields to access orders. Includes direct access to a single order and searching for orders. */
export type OrderQueryInterface = {
  order?: Maybe<Order>;
  orders: OrderQueryResult;
};

/** Fields to access orders. Includes direct access to a single order and searching for orders. */
export type OrderQueryInterfaceOrderArgs = {
  id?: InputMaybe<Scalars['String']>;
  orderNumber?: InputMaybe<Scalars['String']>;
};

/** Fields to access orders. Includes direct access to a single order and searching for orders. */
export type OrderQueryInterfaceOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type OrderQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<Order>;
  total: Scalars['Long'];
};

export type OrderReturnShipmentStateChanged = MessagePayload &
  OrderMessagePayload & {
    returnItemId: Scalars['String'];
    returnShipmentState: ReturnShipmentState;
    type: Scalars['String'];
  };

export type OrderSearchConfiguration = {
  lastModifiedAt: Scalars['DateTime'];
  lastModifiedBy?: Maybe<Initiator>;
  status: OrderSearchStatus;
};

export enum OrderSearchStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
}

export type OrderShipmentStateChanged = MessagePayload &
  OrderMessagePayload & {
    oldShipmentState?: Maybe<ShipmentState>;
    shipmentState: ShipmentState;
    type: Scalars['String'];
  };

export type OrderShippingAddressSet = MessagePayload &
  OrderMessagePayload & {
    address?: Maybe<Address>;
    oldAddress?: Maybe<Address>;
    type: Scalars['String'];
  };

export type OrderShippingInfoSet = MessagePayload &
  OrderMessagePayload & {
    oldShippingInfo?: Maybe<ShippingInfo>;
    shippingInfo?: Maybe<ShippingInfo>;
    type: Scalars['String'];
  };

export type OrderShippingRateInputSet = MessagePayload &
  OrderMessagePayload & {
    oldShippingRateInput?: Maybe<ShippingRateInput>;
    shippingRateInput?: Maybe<ShippingRateInput>;
    type: Scalars['String'];
  };

export enum OrderState {
  Cancelled = 'Cancelled',
  Complete = 'Complete',
  Confirmed = 'Confirmed',
  Open = 'Open',
}

export type OrderStateChanged = MessagePayload &
  OrderMessagePayload & {
    oldOrderState?: Maybe<OrderState>;
    orderId: Scalars['String'];
    orderState: OrderState;
    type: Scalars['String'];
  };

export type OrderStateTransition = MessagePayload &
  OrderMessagePayload & {
    force: Scalars['Boolean'];
    oldState?: Maybe<State>;
    oldStateRef?: Maybe<Reference>;
    state?: Maybe<State>;
    stateRef: Reference;
    type: Scalars['String'];
  };

export type OrderStoreSet = MessagePayload &
  OrderMessagePayload & {
    oldStore?: Maybe<Store>;
    oldStoreRef?: Maybe<KeyReference>;
    store?: Maybe<Store>;
    storeRef?: Maybe<KeyReference>;
    type: Scalars['String'];
  };

export type OrderUpdateAction = {
  addDelivery?: InputMaybe<AddOrderDelivery>;
  addItemShippingAddress?: InputMaybe<AddOrderItemShippingAddress>;
  addParcelToDelivery?: InputMaybe<AddOrderParcelToDelivery>;
  addPayment?: InputMaybe<AddOrderPayment>;
  addReturnInfo?: InputMaybe<AddOrderReturnInfo>;
  changeOrderState?: InputMaybe<ChangeOrderState>;
  changePaymentState?: InputMaybe<ChangeOrderPaymentState>;
  changeShipmentState?: InputMaybe<ChangeOrderShipmentState>;
  importCustomLineItemState?: InputMaybe<ImportOrderCustomLineItemState>;
  importLineItemState?: InputMaybe<ImportOrderLineItemState>;
  removeDelivery?: InputMaybe<RemoveOrderDelivery>;
  removeItemShippingAddress?: InputMaybe<RemoveOrderItemShippingAddress>;
  removeParcelFromDelivery?: InputMaybe<RemoveOrderParcelFromDelivery>;
  removePayment?: InputMaybe<RemoveOrderPayment>;
  setBillingAddress?: InputMaybe<SetOrderBillingAddress>;
  setBillingAddressCustomField?: InputMaybe<SetOrderBillingAddressCustomField>;
  setBillingAddressCustomType?: InputMaybe<SetOrderBillingAddressCustomType>;
  setCustomField?: InputMaybe<SetOrderCustomField>;
  setCustomLineItemCustomField?: InputMaybe<SetOrderCustomLineItemCustomField>;
  setCustomLineItemCustomType?: InputMaybe<SetOrderCustomLineItemCustomType>;
  setCustomLineItemShippingDetails?: InputMaybe<SetOrderCustomLineItemShippingDetails>;
  setCustomType?: InputMaybe<SetOrderCustomType>;
  setCustomerEmail?: InputMaybe<SetOrderCustomerEmail>;
  setCustomerId?: InputMaybe<SetOrderCustomerId>;
  setDeliveryAddress?: InputMaybe<SetOrderDeliveryAddress>;
  setDeliveryAddressCustomField?: InputMaybe<SetOrderDeliveryAddressCustomField>;
  setDeliveryAddressCustomType?: InputMaybe<SetOrderDeliveryAddressCustomType>;
  setDeliveryCustomField?: InputMaybe<SetOrderDeliveryCustomField>;
  setDeliveryCustomType?: InputMaybe<SetOrderDeliveryCustomType>;
  setDeliveryItems?: InputMaybe<SetOrderDeliveryItems>;
  setItemShippingAddressCustomField?: InputMaybe<SetOrderItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: InputMaybe<SetOrderItemShippingAddressCustomType>;
  setLineItemCustomField?: InputMaybe<SetOrderLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<SetOrderLineItemCustomType>;
  setLineItemShippingDetails?: InputMaybe<SetOrderLineItemShippingDetails>;
  setLocale?: InputMaybe<SetOrderLocale>;
  setOrderNumber?: InputMaybe<SetOrderNumber>;
  setParcelCustomField?: InputMaybe<SetOrderParcelCustomField>;
  setParcelCustomType?: InputMaybe<SetOrderParcelCustomType>;
  setParcelItems?: InputMaybe<SetOrderParcelItems>;
  setParcelMeasurements?: InputMaybe<SetOrderParcelMeasurements>;
  setParcelTrackingData?: InputMaybe<SetOrderParcelTrackingData>;
  setReturnInfo?: InputMaybe<SetOrderReturnInfo>;
  setReturnItemCustomField?: InputMaybe<SetOrderReturnItemCustomField>;
  setReturnItemCustomType?: InputMaybe<SetOrderReturnItemCustomType>;
  setReturnPaymentState?: InputMaybe<SetOrderReturnPaymentState>;
  setReturnShipmentState?: InputMaybe<SetOrderReturnShipmentState>;
  setShippingAddress?: InputMaybe<SetOrderShippingAddress>;
  setShippingAddressCustomField?: InputMaybe<SetOrderShippingAddressCustomField>;
  setShippingAddressCustomType?: InputMaybe<SetOrderShippingAddressCustomType>;
  setStore?: InputMaybe<SetOrderStore>;
  transitionCustomLineItemState?: InputMaybe<TransitionOrderCustomLineItemState>;
  transitionLineItemState?: InputMaybe<TransitionOrderLineItemState>;
  transitionState?: InputMaybe<TransitionOrderState>;
  updateItemShippingAddress?: InputMaybe<UpdateOrderItemShippingAddress>;
  updateSyncInfo?: InputMaybe<UpdateOrderSyncInfo>;
};

export type Parcel = {
  createdAt: Scalars['DateTime'];
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String'];
  items: Array<DeliveryItem>;
  measurements?: Maybe<ParcelMeasurements>;
  trackingData?: Maybe<TrackingData>;
};

export type ParcelAddedToDelivery = MessagePayload &
  OrderMessagePayload & {
    delivery: Delivery;
    parcel: Parcel;
    type: Scalars['String'];
  };

export type ParcelData = {
  custom?: Maybe<CustomFieldsCommand>;
  items: Array<DeliveryItem>;
  measurements?: Maybe<ParcelMeasurements>;
  trackingData?: Maybe<TrackingData>;
};

export type ParcelDataDraftType = {
  custom?: InputMaybe<CustomFieldsDraft>;
  items?: InputMaybe<Array<DeliveryItemDraftType>>;
  measurements?: InputMaybe<ParcelMeasurementsDraftType>;
  trackingData?: InputMaybe<TrackingDataDraftType>;
};

export type ParcelItemsUpdated = MessagePayload &
  OrderMessagePayload & {
    deliveryId: Scalars['String'];
    items: Array<DeliveryItem>;
    oldItems: Array<DeliveryItem>;
    parcelId: Scalars['String'];
    type: Scalars['String'];
  };

export type ParcelMeasurements = {
  heightInMillimeter?: Maybe<Scalars['Int']>;
  lengthInMillimeter?: Maybe<Scalars['Int']>;
  weightInGram?: Maybe<Scalars['Int']>;
  widthInMillimeter?: Maybe<Scalars['Int']>;
};

export type ParcelMeasurementsDraftType = {
  heightInMillimeter?: InputMaybe<Scalars['Int']>;
  lengthInMillimeter?: InputMaybe<Scalars['Int']>;
  weightInGram?: InputMaybe<Scalars['Int']>;
  widthInMillimeter?: InputMaybe<Scalars['Int']>;
};

export type ParcelMeasurementsUpdated = MessagePayload &
  OrderMessagePayload & {
    deliveryId: Scalars['String'];
    measurements?: Maybe<ParcelMeasurements>;
    parcelId: Scalars['String'];
    type: Scalars['String'];
  };

export type ParcelRemovedFromDelivery = MessagePayload &
  OrderMessagePayload & {
    deliveryId: Scalars['String'];
    parcel: Parcel;
    type: Scalars['String'];
  };

export type ParcelTrackingDataUpdated = MessagePayload &
  OrderMessagePayload & {
    deliveryId: Scalars['String'];
    parcelId: Scalars['String'];
    trackingData?: Maybe<TrackingData>;
    type: Scalars['String'];
  };

/**
 * Payments hold information about the current state of receiving and/or refunding money.
 * [documentation](https://docs.commercetools.com/api/projects/payments)
 */
export type Payment = Versioned & {
  amountPlanned: Money;
  anonymousId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  customer?: Maybe<Customer>;
  customerRef?: Maybe<Reference>;
  id: Scalars['String'];
  interfaceId?: Maybe<Scalars['String']>;
  interfaceInteractionsRaw: InterfaceInteractionsRawResult;
  key?: Maybe<Scalars['String']>;
  lastModifiedAt: Scalars['DateTime'];
  lastModifiedBy?: Maybe<Initiator>;
  paymentMethodInfo: PaymentMethodInfo;
  paymentStatus: PaymentStatus;
  transactions: Array<Transaction>;
  version: Scalars['Long'];
};

/**
 * Payments hold information about the current state of receiving and/or refunding money.
 * [documentation](https://docs.commercetools.com/api/projects/payments)
 */
export type PaymentInterfaceInteractionsRawArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type PaymentCreated = MessagePayload & {
  payment: Payment;
  type: Scalars['String'];
};

export type PaymentDraft = {
  amountPlanned: MoneyInput;
  anonymousId?: InputMaybe<Scalars['String']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  customer?: InputMaybe<ResourceIdentifierInput>;
  interfaceId?: InputMaybe<Scalars['String']>;
  interfaceInteractions?: InputMaybe<Array<CustomFieldsDraft>>;
  key?: InputMaybe<Scalars['String']>;
  paymentMethodInfo?: InputMaybe<PaymentMethodInfoInput>;
  paymentStatus?: InputMaybe<PaymentStatusInput>;
  transactions?: InputMaybe<Array<TransactionDraft>>;
};

export type PaymentInfo = {
  paymentRefs: Array<Reference>;
  payments: Array<Payment>;
};

export type PaymentInteractionAdded = MessagePayload & {
  interaction: CustomFieldsType;
  type: Scalars['String'];
};

export type PaymentMethodInfo = {
  method?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  paymentInterface?: Maybe<Scalars['String']>;
};

export type PaymentMethodInfoNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type PaymentMethodInfoInput = {
  method?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
  paymentInterface?: InputMaybe<Scalars['String']>;
};

export type PaymentQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<Payment>;
  total: Scalars['Long'];
};

export enum PaymentState {
  BalanceDue = 'BalanceDue',
  CreditOwed = 'CreditOwed',
  Failed = 'Failed',
  Paid = 'Paid',
  Pending = 'Pending',
}

export type PaymentStatus = {
  interfaceCode?: Maybe<Scalars['String']>;
  interfaceText?: Maybe<Scalars['String']>;
  state?: Maybe<State>;
  stateRef?: Maybe<Reference>;
};

export type PaymentStatusInput = {
  interfaceCode?: InputMaybe<Scalars['String']>;
  interfaceText?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<ReferenceInput>;
};

export type PaymentStatusInterfaceCodeSet = MessagePayload & {
  interfaceCode?: Maybe<Scalars['String']>;
  paymentId: Scalars['String'];
  type: Scalars['String'];
};

export type PaymentStatusStateTransition = MessagePayload & {
  force: Scalars['Boolean'];
  state?: Maybe<State>;
  stateRef?: Maybe<Reference>;
  type: Scalars['String'];
};

export type PaymentTransactionAdded = MessagePayload & {
  transaction: Transaction;
  type: Scalars['String'];
};

export type PaymentTransactionStateChanged = MessagePayload & {
  state: TransactionState;
  transactionId: Scalars['String'];
  type: Scalars['String'];
};

export type PaymentUpdateAction = {
  addInterfaceInteraction?: InputMaybe<AddPaymentInterfaceInteraction>;
  addTransaction?: InputMaybe<AddPaymentTransaction>;
  changeAmountPlanned?: InputMaybe<ChangePaymentAmountPlanned>;
  changeTransactionInteractionId?: InputMaybe<ChangePaymentTransactionInteractionId>;
  changeTransactionState?: InputMaybe<ChangePaymentTransactionState>;
  changeTransactionTimestamp?: InputMaybe<ChangePaymentTransactionTimestamp>;
  setAmountPaid?: InputMaybe<SetPaymentAmountPaid>;
  setAmountRefunded?: InputMaybe<SetPaymentAmountRefunded>;
  setAnonymousId?: InputMaybe<SetPaymentAnonymousId>;
  setAuthorization?: InputMaybe<SetPaymentAuthorization>;
  setCustomField?: InputMaybe<SetPaymentCustomField>;
  setCustomType?: InputMaybe<SetPaymentCustomType>;
  setCustomer?: InputMaybe<SetPaymentCustomer>;
  setExternalId?: InputMaybe<SetPaymentExternalId>;
  setInterfaceId?: InputMaybe<SetPaymentInterfaceId>;
  setKey?: InputMaybe<SetPaymentKey>;
  setMethodInfoInterface?: InputMaybe<SetPaymentMethodInfoInterface>;
  setMethodInfoMethod?: InputMaybe<SetPaymentMethodInfoMethod>;
  setMethodInfoName?: InputMaybe<SetPaymentMethodInfoName>;
  setStatusInterfaceCode?: InputMaybe<SetPaymentStatusInterfaceCode>;
  setStatusInterfaceText?: InputMaybe<SetPaymentStatusInterfaceText>;
  setTransactionCustomField?: InputMaybe<SetPaymentTransactionCustomField>;
  setTransactionCustomType?: InputMaybe<SetPaymentTransactionCustomType>;
  transitionState?: InputMaybe<TransitionPaymentState>;
};

export type PlainEnumValue = {
  key: Scalars['String'];
  label: Scalars['String'];
};

export type PlainEnumValueDraft = {
  key: Scalars['String'];
  label: Scalars['String'];
};

export type PlainEnumValueResult = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  results: Array<PlainEnumValue>;
  total: Scalars['Int'];
};

export type PlatformFormat = NotificationFormat & {
  type: Scalars['String'];
};

export type PlatformFormatInput = {
  dummy?: InputMaybe<Scalars['String']>;
};

export type Point = Geometry & {
  coordinates: Array<Scalars['Float']>;
  type: Scalars['String'];
};

export type PreviewFailure = OrderEditResult & {
  errors: Array<Scalars['Json']>;
  type: Scalars['String'];
};

export type PreviewSuccess = OrderEditResult & {
  messagePayloads: Array<OrderMessagePayload>;
  preview: Order;
  type: Scalars['String'];
};

export type PriceFunction = {
  currencyCode: Scalars['Currency'];
  function: Scalars['String'];
};

export type PriceFunctionDraft = {
  currencyCode: Scalars['Currency'];
  function: Scalars['String'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export enum PriceMode {
  /** The platform looks up prices from the `prices` field of the ProductVariant inside a Product. */
  Embedded = 'Embedded',
  /** The platform looks up prices from Standalone Prices, stored separately from Products. */
  Standalone = 'Standalone',
}

export type PriceSelectorInput = {
  channel?: InputMaybe<ReferenceInput>;
  country?: InputMaybe<Scalars['Country']>;
  currency: Scalars['Currency'];
  customerGroup?: InputMaybe<ReferenceInput>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  date?: InputMaybe<Scalars['DateTime']>;
};

export type Product = ReferenceExpandable &
  ReviewTarget &
  Versioned & {
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    id: Scalars['String'];
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    masterData: ProductCatalogData;
    priceMode?: Maybe<PriceMode>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    productSelectionRefs: SelectionOfProductQueryResult;
    productType?: Maybe<ProductTypeDefinition>;
    productTypeRef: Reference;
    reviewRatingStatistics?: Maybe<ReviewRatingStatistics>;
    skus: Array<Scalars['String']>;
    state?: Maybe<State>;
    stateRef?: Maybe<Reference>;
    taxCategory?: Maybe<TaxCategory>;
    taxCategoryRef?: Maybe<Reference>;
    version: Scalars['Long'];
  };

export type ProductProductSelectionRefsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type ProductAddedToCategory = MessagePayload & {
  category: ReferenceId;
  staged: Scalars['Boolean'];
  type: Scalars['String'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type ProductAssignment = {
  product?: Maybe<Product>;
  productRef: Reference;
  productSelection?: Maybe<ProductSelection>;
  productSelectionRef: Reference;
};

export type ProductAssignmentQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<ProductAssignment>;
  total: Scalars['Long'];
};

export type ProductAttributeInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ProductCatalogData = {
  current?: Maybe<ProductData>;
  hasStagedChanges: Scalars['Boolean'];
  published: Scalars['Boolean'];
  staged?: Maybe<ProductData>;
};

export type ProductCreated = MessagePayload & {
  productProjection: ProductProjectionMessagePayload;
  type: Scalars['String'];
};

export type ProductData = {
  allVariants: Array<ProductVariant>;
  categories: Array<Category>;
  categoriesRef: Array<Reference>;
  categoryOrderHint?: Maybe<Scalars['String']>;
  categoryOrderHints: Array<CategoryOrderHint>;
  description?: Maybe<Scalars['String']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  masterVariant: ProductVariant;
  metaDescription?: Maybe<Scalars['String']>;
  metaDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaKeywordsAllLocales?: Maybe<Array<LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']>;
  metaTitleAllLocales?: Maybe<Array<LocalizedString>>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  searchKeyword?: Maybe<Array<SearchKeyword>>;
  searchKeywords: Array<SearchKeywords>;
  skus: Array<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  slugAllLocales: Array<LocalizedString>;
  variant?: Maybe<ProductVariant>;
  variants: Array<ProductVariant>;
};

export type ProductDataAllVariantsArgs = {
  hasImages?: InputMaybe<Scalars['Boolean']>;
  isOnStock?: InputMaybe<Scalars['Boolean']>;
  skus?: InputMaybe<Array<Scalars['String']>>;
  stockChannelIds?: InputMaybe<Array<Scalars['String']>>;
};

export type ProductDataCategoryOrderHintArgs = {
  categoryId: Scalars['String'];
};

export type ProductDataDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductDataMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductDataMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductDataMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductDataNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductDataSearchKeywordArgs = {
  locale: Scalars['Locale'];
};

export type ProductDataSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductDataVariantArgs = {
  key?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
};

export type ProductDataVariantsArgs = {
  hasImages?: InputMaybe<Scalars['Boolean']>;
  isOnStock?: InputMaybe<Scalars['Boolean']>;
  skus?: InputMaybe<Array<Scalars['String']>>;
  stockChannelIds?: InputMaybe<Array<Scalars['String']>>;
};

export type ProductDeleted = MessagePayload & {
  currentProjection?: Maybe<ProductProjectionMessagePayload>;
  removedImageUrls: Scalars['Set'];
  type: Scalars['String'];
};

/**
 *
 * A product price can be discounted in two ways:
 *
 * * with a relative or an absolute product discount, which will be automatically applied to all prices in a product that match a discount predicate.
 *   A relative discount reduces the matching price by a fraction (for example 10 % off). An absolute discount reduces the matching price by a fixed amount (for example 10€ off). If more than one product discount matches a price, the discount sort order determines which one will be applied.
 * * with an external product discount, which can then be used to explicitly set a discounted value on a particular product price.
 *
 * The discounted price is stored in the discounted field of the Product Price.
 *
 * Note that when a discount is created, updated or removed it can take up to 15 minutes to update all the prices with the discounts.
 *
 * The maximum number of ProductDiscounts that can be active at the same time is **200**.
 *
 */
export type ProductDiscount = ReferenceExpandable &
  Versioned & {
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    description?: Maybe<Scalars['String']>;
    descriptionAllLocales?: Maybe<Array<LocalizedString>>;
    id: Scalars['String'];
    isActive: Scalars['Boolean'];
    isValid: Scalars['Boolean'];
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    name?: Maybe<Scalars['String']>;
    nameAllLocales: Array<LocalizedString>;
    predicate: Scalars['String'];
    referenceRefs: Array<Reference>;
    sortOrder: Scalars['String'];
    validFrom?: Maybe<Scalars['DateTime']>;
    validUntil?: Maybe<Scalars['DateTime']>;
    value: ProductDiscountValue;
    version: Scalars['Long'];
  };

/**
 *
 * A product price can be discounted in two ways:
 *
 * * with a relative or an absolute product discount, which will be automatically applied to all prices in a product that match a discount predicate.
 *   A relative discount reduces the matching price by a fraction (for example 10 % off). An absolute discount reduces the matching price by a fixed amount (for example 10€ off). If more than one product discount matches a price, the discount sort order determines which one will be applied.
 * * with an external product discount, which can then be used to explicitly set a discounted value on a particular product price.
 *
 * The discounted price is stored in the discounted field of the Product Price.
 *
 * Note that when a discount is created, updated or removed it can take up to 15 minutes to update all the prices with the discounts.
 *
 * The maximum number of ProductDiscounts that can be active at the same time is **200**.
 *
 */
export type ProductDiscountDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

/**
 *
 * A product price can be discounted in two ways:
 *
 * * with a relative or an absolute product discount, which will be automatically applied to all prices in a product that match a discount predicate.
 *   A relative discount reduces the matching price by a fraction (for example 10 % off). An absolute discount reduces the matching price by a fixed amount (for example 10€ off). If more than one product discount matches a price, the discount sort order determines which one will be applied.
 * * with an external product discount, which can then be used to explicitly set a discounted value on a particular product price.
 *
 * The discounted price is stored in the discounted field of the Product Price.
 *
 * Note that when a discount is created, updated or removed it can take up to 15 minutes to update all the prices with the discounts.
 *
 * The maximum number of ProductDiscounts that can be active at the same time is **200**.
 *
 */
export type ProductDiscountNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductDiscountDraft = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  name: Array<LocalizedStringItemInputType>;
  predicate: Scalars['String'];
  sortOrder: Scalars['String'];
  validFrom?: InputMaybe<Scalars['DateTime']>;
  validUntil?: InputMaybe<Scalars['DateTime']>;
  value: ProductDiscountValueInput;
};

export type ProductDiscountLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long'];
  limit?: Maybe<Scalars['Long']>;
};

export type ProductDiscountLimitsProjection = {
  totalActive: ProductDiscountLimitWithCurrent;
};

export type ProductDiscountQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<ProductDiscount>;
  total: Scalars['Long'];
};

export type ProductDiscountUpdateAction = {
  changeIsActive?: InputMaybe<ChangeProductDiscountIsActive>;
  changeName?: InputMaybe<ChangeProductDiscountName>;
  changePredicate?: InputMaybe<ChangeProductDiscountPredicate>;
  changeSortOrder?: InputMaybe<ChangeProductDiscountSortOrder>;
  changeValue?: InputMaybe<ChangeProductDiscountValue>;
  setDescription?: InputMaybe<SetProductDiscountDescription>;
  setKey?: InputMaybe<SetProductDiscountKey>;
  setValidFrom?: InputMaybe<SetProductDiscountValidFrom>;
  setValidFromAndUntil?: InputMaybe<SetProductDiscountValidFromAndUntil>;
  setValidUntil?: InputMaybe<SetProductDiscountValidUntil>;
};

export type ProductDiscountValue = {
  type: Scalars['String'];
};

export type ProductDiscountValueInput = {
  absolute?: InputMaybe<AbsoluteDiscountValueInput>;
  external?: InputMaybe<ExternalDiscountValueInput>;
  relative?: InputMaybe<RelativeDiscountValueInput>;
};

export type ProductDraft = {
  categories?: InputMaybe<Array<ResourceIdentifierInput>>;
  categoryOrderHints?: InputMaybe<Array<CategoryOrderHintInput>>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']>;
  masterVariant?: InputMaybe<ProductVariantInput>;
  metaDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaKeywords?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaTitle?: InputMaybe<Array<LocalizedStringItemInputType>>;
  name: Array<LocalizedStringItemInputType>;
  priceMode?: InputMaybe<PriceMode>;
  productType: ResourceIdentifierInput;
  publish?: InputMaybe<Scalars['Boolean']>;
  searchKeywords?: InputMaybe<Array<SearchKeywordInput>>;
  slug: Array<LocalizedStringItemInputType>;
  state?: InputMaybe<ResourceIdentifierInput>;
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
  variants?: InputMaybe<Array<ProductVariantInput>>;
};

export type ProductImageAdded = MessagePayload & {
  image: Image;
  staged: Scalars['Boolean'];
  type: Scalars['String'];
  variantId: Scalars['Int'];
};

export type ProductLimitsProjection = {
  pricesPerVariant: Limit;
  variants: Limit;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type ProductOfSelection = {
  product?: Maybe<Product>;
  productRef: Reference;
};

export type ProductOfSelectionQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<ProductOfSelection>;
  total: Scalars['Long'];
};

export type ProductPrice = {
  channel?: Maybe<Channel>;
  channelRef?: Maybe<Reference>;
  country?: Maybe<Scalars['Country']>;
  custom?: Maybe<CustomFieldsType>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  discounted?: Maybe<DiscountedProductPriceValue>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  tiers?: Maybe<Array<ProductPriceTier>>;
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
  value: BaseMoney;
};

export type ProductPriceDataInput = {
  channel?: InputMaybe<ResourceIdentifierInput>;
  country?: InputMaybe<Scalars['Country']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  customerGroup?: InputMaybe<ReferenceInput>;
  key?: InputMaybe<Scalars['String']>;
  tiers?: InputMaybe<Array<ProductPriceTierInput>>;
  validFrom?: InputMaybe<Scalars['DateTime']>;
  validUntil?: InputMaybe<Scalars['DateTime']>;
  value: BaseMoneyInput;
};

export type ProductPriceDiscountUpdateMessagePayload = {
  discounted?: Maybe<DiscountedProductPriceValue>;
  priceId: Scalars['String'];
  sku?: Maybe<Scalars['String']>;
  staged: Scalars['Boolean'];
  variantId: Scalars['Int'];
  variantKey?: Maybe<Scalars['String']>;
};

export type ProductPriceDiscountsSet = MessagePayload & {
  type: Scalars['String'];
  updatedPrices: Array<ProductPriceDiscountUpdateMessagePayload>;
};

export type ProductPriceExternalDiscountSet = MessagePayload & {
  discounted?: Maybe<DiscountedProductPriceValue>;
  priceId: Scalars['String'];
  sku?: Maybe<Scalars['String']>;
  staged: Scalars['Boolean'];
  type: Scalars['String'];
  variantId: Scalars['Int'];
  variantKey?: Maybe<Scalars['String']>;
};

export type ProductPriceSearch = {
  channel?: Maybe<Channel>;
  channelRef?: Maybe<Reference>;
  country?: Maybe<Scalars['Country']>;
  custom?: Maybe<CustomFieldsType>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  discounted?: Maybe<DiscountedProductSearchPriceValue>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  tiers?: Maybe<Array<ProductSearchPriceTier>>;
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
  value: BaseMoney;
};

export type ProductPriceTier = {
  minimumQuantity: Scalars['Int'];
  value: BaseMoney;
};

export type ProductPriceTierInput = {
  minimumQuantity: Scalars['Int'];
  value: BaseMoneyInput;
};

export type ProductProjection = {
  categories: Array<Category>;
  categoriesRef: Array<Reference>;
  categoryOrderHints: Array<CategoryOrderHintProductSearch>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  hasStagedChanges: Scalars['Boolean'];
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  lastModifiedAt: Scalars['DateTime'];
  masterVariant: ProductSearchVariant;
  metaDescription?: Maybe<Scalars['String']>;
  metaDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaKeywordsAllLocales?: Maybe<Array<LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']>;
  metaTitleAllLocales?: Maybe<Array<LocalizedString>>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  productType?: Maybe<ProductTypeDefinition>;
  productTypeRef: Reference;
  published: Scalars['Boolean'];
  reviewRatingStatistics?: Maybe<ReviewRatingStatistics>;
  searchKeywords: Array<SearchKeywordsProductSearch>;
  slug?: Maybe<Scalars['String']>;
  slugAllLocales: Array<LocalizedString>;
  state?: Maybe<State>;
  stateRef?: Maybe<Reference>;
  taxCategory?: Maybe<TaxCategory>;
  taxCategoryRef?: Maybe<Reference>;
  variants: Array<ProductSearchVariant>;
  version: Scalars['Long'];
};

export type ProductProjectionDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductProjectionMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductProjectionMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductProjectionMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductProjectionNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductProjectionSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductProjectionMessagePayload = {
  categories: Array<Category>;
  categoriesRef: Array<Reference>;
  categoryOrderHints: Array<CategoryOrderHint>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  hasStagedChanges: Scalars['Boolean'];
  id: Scalars['String'];
  lastModifiedAt: Scalars['DateTime'];
  masterVariant: ProductVariant;
  metaDescription?: Maybe<Scalars['String']>;
  metaDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaKeywordsAllLocales?: Maybe<Array<LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']>;
  metaTitleAllLocales?: Maybe<Array<LocalizedString>>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  productType?: Maybe<ProductTypeDefinition>;
  productTypeRef: Reference;
  published: Scalars['Boolean'];
  reviewRatingStatistics?: Maybe<ReviewRatingStatistics>;
  searchKeywords: Array<SearchKeywords>;
  slug?: Maybe<Scalars['String']>;
  slugAllLocales: Array<LocalizedString>;
  state?: Maybe<State>;
  stateRef?: Maybe<Reference>;
  taxCategory?: Maybe<TaxCategory>;
  taxCategoryRef?: Maybe<Reference>;
  variants: Array<ProductVariant>;
  version: Scalars['Long'];
};

export type ProductProjectionMessagePayloadDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductProjectionMessagePayloadMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductProjectionMessagePayloadMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductProjectionMessagePayloadMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductProjectionMessagePayloadNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductProjectionMessagePayloadSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductProjectionSearchResult = {
  count: Scalars['Int'];
  facets: Array<FacetResultValue>;
  offset: Scalars['Int'];
  results: Array<ProductProjection>;
  total: Scalars['Int'];
};

export type ProductPublished = MessagePayload & {
  productProjection: ProductProjectionMessagePayload;
  removedImageUrls: Array<Scalars['String']>;
  scope: PublishScope;
  type: Scalars['String'];
};

export type ProductQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<Product>;
  total: Scalars['Long'];
};

export type ProductReferenceIdentifier = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  typeId: Scalars['String'];
};

export type ProductRemovedFromCategory = MessagePayload & {
  category: ReferenceId;
  staged: Scalars['Boolean'];
  type: Scalars['String'];
};

export type ProductRevertedStagedChanges = MessagePayload & {
  removedImageUrls: Scalars['Set'];
  type: Scalars['String'];
};

export type ProductSearchPriceTier = {
  minimumQuantity: Scalars['Int'];
  value: BaseMoney;
};

export type ProductSearchVariant = {
  assets: Array<Asset>;
  /** This field contains raw attributes data */
  attributesRaw: Array<RawProductSearchAttribute>;
  availability?: Maybe<ProductSearchVariantAvailabilityWithChannels>;
  id: Scalars['Int'];
  images: Array<ImageProductSearch>;
  isMatchingVariant?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['String']>;
  /** Returns a single price based on the price selection rules. */
  price?: Maybe<ProductPriceSearch>;
  prices?: Maybe<Array<ProductPriceSearch>>;
  scopedPrice?: Maybe<ScopedPrice>;
  scopedPriceDiscounted?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Scalars['String']>;
};

export type ProductSearchVariantAttributesRawArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']>>;
  includeNames?: InputMaybe<Array<Scalars['String']>>;
};

export type ProductSearchVariantPriceArgs = {
  channelId?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['Country']>;
  currency: Scalars['Currency'];
  customerGroupId?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
};

/** Product variant availabilities */
export type ProductSearchVariantAvailabilitiesResult = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  results: Array<ProductSearchVariantAvailabilityWithChannel>;
  total: Scalars['Int'];
};

/** Product variant availability */
export type ProductSearchVariantAvailability = {
  availableQuantity?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['String']>;
  isOnStock: Scalars['Boolean'];
  restockableInDays?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Long']>;
};

export type ProductSearchVariantAvailabilityWithChannel = {
  availability: ProductSearchVariantAvailability;
  channel?: Maybe<Channel>;
  channelRef: Reference;
};

export type ProductSearchVariantAvailabilityWithChannels = {
  channels: ProductSearchVariantAvailabilitiesResult;
  noChannel?: Maybe<ProductSearchVariantAvailability>;
};

export type ProductSearchVariantAvailabilityWithChannelsChannelsArgs = {
  excludeChannelIds?: InputMaybe<Array<Scalars['String']>>;
  includeChannelIds?: InputMaybe<Array<Scalars['String']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type ProductSelection = Versioned & {
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  lastModifiedAt: Scalars['DateTime'];
  lastModifiedBy?: Maybe<Initiator>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  productCount: Scalars['Int'];
  productRefs: ProductOfSelectionQueryResult;
  version: Scalars['Long'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type ProductSelectionNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type ProductSelectionProductRefsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type ProductSelectionCreated = MessagePayload & {
  productSelection: ProductSelectionCreatedPayload;
  type: Scalars['String'];
};

export type ProductSelectionCreatedPayload = {
  custom?: Maybe<CustomFieldsType>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  type: Scalars['String'];
};

export type ProductSelectionCreatedPayloadNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type ProductSelectionDeleted = MessagePayload & {
  type: Scalars['String'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type ProductSelectionProductAdded = MessagePayload & {
  product?: Maybe<Product>;
  productRef: Reference;
  type: Scalars['String'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type ProductSelectionProductRemoved = MessagePayload & {
  product?: Maybe<Product>;
  productRef: Reference;
  type: Scalars['String'];
};

/** Fields to access product selection assignments. BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type ProductSelectionQueryInterface = {
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  productSelectionAssignments: ProductAssignmentQueryResult;
};

/** Fields to access product selection assignments. BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type ProductSelectionQueryInterfaceProductSelectionAssignmentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type ProductSelectionQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<ProductSelection>;
  total: Scalars['Long'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type ProductSelectionSetting = {
  active: Scalars['Boolean'];
  productSelection?: Maybe<ProductSelection>;
  productSelectionRef: Reference;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type ProductSelectionSettingDraft = {
  active: Scalars['Boolean'];
  productSelection: ResourceIdentifierInput;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type ProductSelectionSettingInActionInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  productSelection: ResourceIdentifierInput;
};

export type ProductSelectionUpdateAction = {
  addProduct?: InputMaybe<AddProductSelectionProduct>;
  changeName?: InputMaybe<ChangeProductSelectionName>;
  removeProduct?: InputMaybe<RemoveProductSelectionProduct>;
  setCustomField?: InputMaybe<SetProductSelectionCustomField>;
  setCustomType?: InputMaybe<SetProductSelectionCustomType>;
  setKey?: InputMaybe<SetProductSelectionKey>;
};

export type ProductSlugChanged = MessagePayload & {
  oldSlug?: Maybe<Scalars['String']>;
  oldSlugAllLocales?: Maybe<Array<LocalizedString>>;
  slug?: Maybe<Scalars['String']>;
  slugAllLocales: Array<LocalizedString>;
  type: Scalars['String'];
};

export type ProductSlugChangedOldSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductSlugChangedSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ProductStateTransition = MessagePayload & {
  force: Scalars['Boolean'];
  state?: Maybe<State>;
  stateRef: Reference;
  type: Scalars['String'];
};

export type ProductTypeDefinition = ReferenceExpandable &
  Versioned & {
    attributeDefinitions: AttributeDefinitionResult;
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    description: Scalars['String'];
    id: Scalars['String'];
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    name: Scalars['String'];
    version: Scalars['Long'];
  };

export type ProductTypeDefinitionAttributeDefinitionsArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']>>;
  includeNames?: InputMaybe<Array<Scalars['String']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
};

export type ProductTypeDefinitionQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<ProductTypeDefinition>;
  total: Scalars['Long'];
};

export type ProductTypeDraft = {
  attributeDefinitions?: InputMaybe<Array<AttributeDefinitionDraft>>;
  description: Scalars['String'];
  key?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ProductTypeLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long'];
  limit?: Maybe<Scalars['Long']>;
};

export type ProductTypeLimitsProjection = {
  total: ProductTypeLimitWithCurrent;
};

export type ProductTypeUpdateAction = {
  addAttributeDefinition?: InputMaybe<AddAttributeDefinition>;
  addLocalizedEnumValue?: InputMaybe<AddLocalizedEnumValue>;
  addPlainEnumValue?: InputMaybe<AddPlainEnumValue>;
  changeAttributeName?: InputMaybe<ChangeAttributeName>;
  changeAttributeOrder?: InputMaybe<ChangeAttributeOrder>;
  changeAttributeOrderByName?: InputMaybe<ChangeAttributeOrderByName>;
  changeDescription?: InputMaybe<ChangeDescription>;
  changeEnumKey?: InputMaybe<ChangeEnumKey>;
  changeInputHint?: InputMaybe<ChangeInputHint>;
  changeIsSearchable?: InputMaybe<ChangeIsSearchable>;
  changeLabel?: InputMaybe<ChangeLabel>;
  changeLocalizedEnumValueLabel?: InputMaybe<ChangeLocalizedEnumValueLabel>;
  changeLocalizedEnumValueOrder?: InputMaybe<ChangeLocalizedEnumValueOrder>;
  changeName?: InputMaybe<ChangeName>;
  changePlainEnumValueLabel?: InputMaybe<ChangePlainEnumValueLabel>;
  changePlainEnumValueOrder?: InputMaybe<ChangePlainEnumValueOrder>;
  removeAttributeDefinition?: InputMaybe<RemoveAttributeDefinition>;
  removeEnumValues?: InputMaybe<RemoveEnumValues>;
  setInputTip?: InputMaybe<SetInputTip>;
  setKey?: InputMaybe<SetKey>;
};

export type ProductUnpublished = MessagePayload & {
  type: Scalars['String'];
};

export type ProductUpdateAction = {
  addAsset?: InputMaybe<AddProductAsset>;
  addExternalImage?: InputMaybe<AddProductExternalImage>;
  addPrice?: InputMaybe<AddProductPrice>;
  addToCategory?: InputMaybe<AddProductToCategory>;
  addVariant?: InputMaybe<AddProductVariant>;
  changeAssetName?: InputMaybe<ChangeProductAssetName>;
  changeAssetOrder?: InputMaybe<ChangeProductAssetOrder>;
  changeImageLabel?: InputMaybe<ChangeProductImageLabel>;
  changeMasterVariant?: InputMaybe<ChangeProductMasterVariant>;
  changeName?: InputMaybe<ChangeProductName>;
  changePrice?: InputMaybe<ChangeProductPrice>;
  changeSlug?: InputMaybe<ChangeProductSlug>;
  moveImageToPosition?: InputMaybe<MoveProductImageToPosition>;
  publish?: InputMaybe<PublishProduct>;
  removeAsset?: InputMaybe<RemoveProductAsset>;
  removeFromCategory?: InputMaybe<RemoveProductFromCategory>;
  removeImage?: InputMaybe<RemoveProductImage>;
  removePrice?: InputMaybe<RemoveProductPrice>;
  removeVariant?: InputMaybe<RemoveProductVariant>;
  revertStagedChanges?: InputMaybe<RevertStagedChanges>;
  revertStagedVariantChanges?: InputMaybe<RevertStagedVariantChanges>;
  setAssetCustomField?: InputMaybe<SetProductAssetCustomField>;
  setAssetCustomType?: InputMaybe<SetProductAssetCustomType>;
  setAssetDescription?: InputMaybe<SetProductAssetDescription>;
  setAssetKey?: InputMaybe<SetProductAssetKey>;
  setAssetSources?: InputMaybe<SetProductAssetSources>;
  setAssetTags?: InputMaybe<SetProductAssetTags>;
  setAttribute?: InputMaybe<SetProductAttribute>;
  setAttributeInAllVariants?: InputMaybe<SetProductAttributeInAllVariants>;
  setCategoryOrderHint?: InputMaybe<SetProductCategoryOrderHint>;
  setDescription?: InputMaybe<SetProductDescription>;
  setDiscountedPrice?: InputMaybe<SetProductDiscountedPrice>;
  setImageLabel?: InputMaybe<SetProductImageLabel>;
  setKey?: InputMaybe<SetProductKey>;
  setMetaAttributes?: InputMaybe<SetProductMetaAttributes>;
  setMetaDescription?: InputMaybe<SetProductMetaDescription>;
  setMetaKeywords?: InputMaybe<SetProductMetaKeywords>;
  setMetaTitle?: InputMaybe<SetProductMetaTitle>;
  setPriceMode?: InputMaybe<SetProductPriceMode>;
  setPrices?: InputMaybe<SetProductPrices>;
  setProductPriceCustomField?: InputMaybe<SetProductPriceCustomField>;
  setProductPriceCustomType?: InputMaybe<SetProductPriceCustomType>;
  setProductVariantKey?: InputMaybe<SetProductVariantKey>;
  setSearchKeywords?: InputMaybe<SetSearchKeywords>;
  setSku?: InputMaybe<SetProductSku>;
  setTaxCategory?: InputMaybe<SetProductTaxCategory>;
  transitionState?: InputMaybe<TransitionProductState>;
  unpublish?: InputMaybe<UnpublishProduct>;
};

export type ProductVariant = {
  assets: Array<Asset>;
  /** This field contains raw attributes data */
  attributesRaw: Array<RawProductAttribute>;
  availability?: Maybe<ProductVariantAvailabilityWithChannels>;
  id: Scalars['Int'];
  images: Array<Image>;
  key?: Maybe<Scalars['String']>;
  /** Returns a single price based on the price selection rules. */
  price?: Maybe<ProductPrice>;
  prices?: Maybe<Array<ProductPrice>>;
  sku?: Maybe<Scalars['String']>;
};

export type ProductVariantAttributesRawArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']>>;
  includeNames?: InputMaybe<Array<Scalars['String']>>;
};

export type ProductVariantPriceArgs = {
  channelId?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['Country']>;
  currency: Scalars['Currency'];
  customerGroupId?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
};

export type ProductVariantAdded = MessagePayload & {
  staged: Scalars['Boolean'];
  type: Scalars['String'];
  variant: ProductVariant;
};

/** Product variant availabilities */
export type ProductVariantAvailabilitiesResult = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  results: Array<ProductVariantAvailabilityWithChannel>;
  total: Scalars['Int'];
};

/** Product variant availability */
export type ProductVariantAvailability = {
  availableQuantity?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['String']>;
  isOnStock: Scalars['Boolean'];
  restockableInDays?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Long']>;
};

export type ProductVariantAvailabilityWithChannel = {
  availability: ProductVariantAvailability;
  channel?: Maybe<Channel>;
  channelRef: Reference;
};

export type ProductVariantAvailabilityWithChannels = {
  channels: ProductVariantAvailabilitiesResult;
  noChannel?: Maybe<ProductVariantAvailability>;
};

export type ProductVariantAvailabilityWithChannelsChannelsArgs = {
  excludeChannelIds?: InputMaybe<Array<Scalars['String']>>;
  includeChannelIds?: InputMaybe<Array<Scalars['String']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ProductVariantDeleted = MessagePayload & {
  removedImageUrls: Scalars['Set'];
  type: Scalars['String'];
  variant?: Maybe<ProductVariant>;
};

export type ProductVariantInput = {
  assets?: InputMaybe<Array<AssetDraftInput>>;
  attributes?: InputMaybe<Array<ProductAttributeInput>>;
  images?: InputMaybe<Array<ImageInput>>;
  key?: InputMaybe<Scalars['String']>;
  prices?: InputMaybe<Array<ProductPriceDataInput>>;
  sku?: InputMaybe<Scalars['String']>;
};

/** Contains information about the limits of your project. */
export type ProjectCustomLimitsProjection = {
  cartDiscounts: CartDiscountLimitsProjection;
  carts: CartLimitsProjection;
  category: CategoryLimitsProjection;
  customObjects: CustomObjectLimitsProjection;
  customerGroups: CustomerGroupLimitsProjection;
  customers: CustomerLimitsProjection;
  extensions: ExtensionLimitsProjection;
  orderEdits: OrderEditLimitsProjection;
  productDiscounts: ProductDiscountLimitsProjection;
  productType: ProductTypeLimitsProjection;
  products: ProductLimitsProjection;
  query: QueryLimitsProjection;
  refreshTokens: RefreshTokenLimitsProjection;
  search: SearchLimitsProjection;
  shippingMethods: ShippingMethodLimitsProjection;
  shoppingLists: ShoppingListLimitsProjection;
  stores: StoreLimitsProjection;
  taxCategories: TaxCategoryLimitsProjection;
  zones: ZoneLimitsProjection;
};

/** Project contains information about project. */
export type ProjectProjection = {
  carts: CartsConfiguration;
  countries: Array<Scalars['Country']>;
  createdAt: Scalars['DateTime'];
  currencies: Array<Scalars['Currency']>;
  externalOAuth?: Maybe<ExternalOAuth>;
  key: Scalars['String'];
  languages: Array<Scalars['Locale']>;
  messages: MessagesConfiguration;
  name: Scalars['String'];
  searchIndexing?: Maybe<SearchIndexingConfiguration>;
  shippingRateInputType?: Maybe<ShippingRateInputType>;
  shoppingLists: ShoppingListsConfiguration;
  trialUntil?: Maybe<Scalars['YearMonth']>;
  version: Scalars['Long'];
};

export type ProjectSettingsUpdateAction = {
  changeCartsConfiguration?: InputMaybe<ChangeProjectSettingsCartsConfiguration>;
  changeCountries?: InputMaybe<ChangeProjectSettingsCountries>;
  changeCountryTaxRateFallbackEnabled?: InputMaybe<ChangeProjectSettingsCountryTaxRateFallbackEnabled>;
  changeCurrencies?: InputMaybe<ChangeProjectSettingsCurrencies>;
  changeLanguages?: InputMaybe<ChangeProjectSettingsLanguages>;
  changeMessagesConfiguration?: InputMaybe<ChangeProjectSettingsMessagesConfiguration>;
  changeMessagesEnabled?: InputMaybe<ChangeProjectSettingsMessagesEnabled>;
  changeName?: InputMaybe<ChangeProjectSettingsName>;
  changeOrderSearchStatus?: InputMaybe<ChangeProjectSettingsOrderSearchStatus>;
  changeProductSearchIndexingEnabled?: InputMaybe<ChangeProjectSettingsProductSearchIndexingEnabled>;
  changeShoppingListsConfiguration?: InputMaybe<ChangeProjectSettingsShoppingListsConfiguration>;
  setExternalOAuth?: InputMaybe<SetProjectSettingsExternalOAuth>;
  setShippingRateInputType?: InputMaybe<SetProjectSettingsShippingRateInputType>;
};

export type PublishProduct = {
  scope?: InputMaybe<PublishScope>;
};

export enum PublishScope {
  /** Publishes the complete staged projection */
  All = 'All',
  /** Publishes only prices on the staged projection */
  Prices = 'Prices',
}

export type Query = CartQueryInterface &
  CustomerActiveCartInterface &
  CustomerQueryInterface &
  MeFieldInterface &
  OrderQueryInterface &
  ProductSelectionQueryInterface &
  ShippingMethodsByCartInterface &
  ShoppingListQueryInterface & {
    apiClient?: Maybe<ApiClientWithoutSecret>;
    apiClients: ApiClientWithoutSecretQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    attributeGroup?: Maybe<AttributeGroup>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    attributeGroups: AttributeGroupQueryResult;
    cart?: Maybe<Cart>;
    cartDiscount?: Maybe<CartDiscount>;
    cartDiscounts: CartDiscountQueryResult;
    carts: CartQueryResult;
    categories: CategoryQueryResult;
    category?: Maybe<Category>;
    channel?: Maybe<Channel>;
    channels: ChannelQueryResult;
    customObject?: Maybe<CustomObject>;
    customObjects: CustomObjectQueryResult;
    customer?: Maybe<Customer>;
    customerActiveCart?: Maybe<Cart>;
    customerGroup?: Maybe<CustomerGroup>;
    customerGroups: CustomerGroupQueryResult;
    customers: CustomerQueryResult;
    discountCode?: Maybe<DiscountCode>;
    discountCodes: DiscountCodeQueryResult;
    extension?: Maybe<Extension>;
    extensions: ExtensionQueryResult;
    /** This field gives access to the resources (such as carts) that are inside the given store. */
    inStore: InStore;
    /** This field gives access to the resources (such as carts) that are inside one of the given stores. */
    inStores: InStore;
    inventoryEntries: InventoryEntryQueryResult;
    inventoryEntry?: Maybe<InventoryEntry>;
    limits: ProjectCustomLimitsProjection;
    /**
     * This field can only be used with an access token created with the password flow or with an anonymous session.
     *
     * It gives access to the data that is specific to the customer or the anonymous session linked to the access token.
     */
    me: Me;
    message?: Maybe<Message>;
    messages: MessageQueryResult;
    order?: Maybe<Order>;
    orderEdit?: Maybe<OrderEdit>;
    orderEdits: OrderEditQueryResult;
    orders: OrderQueryResult;
    payment?: Maybe<Payment>;
    payments: PaymentQueryResult;
    product?: Maybe<Product>;
    productDiscount?: Maybe<ProductDiscount>;
    productDiscounts: ProductDiscountQueryResult;
    productProjectionSearch: ProductProjectionSearchResult;
    productProjectionsSuggest: SuggestResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    productSelection?: Maybe<ProductSelection>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    productSelectionAssignments: ProductAssignmentQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    productSelections: ProductSelectionQueryResult;
    productType?: Maybe<ProductTypeDefinition>;
    productTypes: ProductTypeDefinitionQueryResult;
    products: ProductQueryResult;
    project: ProjectProjection;
    review?: Maybe<Review>;
    reviews: ReviewQueryResult;
    shippingMethod?: Maybe<ShippingMethod>;
    shippingMethods: ShippingMethodQueryResult;
    shippingMethodsByCart: Array<ShippingMethod>;
    shippingMethodsByLocation: Array<ShippingMethod>;
    shoppingList?: Maybe<ShoppingList>;
    shoppingLists: ShoppingListQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    standalonePrice?: Maybe<StandalonePrice>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    standalonePrices: StandalonePriceQueryResult;
    state?: Maybe<State>;
    states: StateQueryResult;
    store?: Maybe<Store>;
    stores: StoreQueryResult;
    subscription?: Maybe<CommercetoolsSubscription>;
    subscriptions: CommercetoolsSubscriptionQueryResult;
    taxCategories: TaxCategoryQueryResult;
    taxCategory?: Maybe<TaxCategory>;
    typeDefinition?: Maybe<TypeDefinition>;
    typeDefinitions: TypeDefinitionQueryResult;
    zone?: Maybe<Zone>;
    zones: ZoneQueryResult;
  };

export type QueryApiClientArgs = {
  id: Scalars['String'];
};

export type QueryApiClientsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryAttributeGroupArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryAttributeGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryCartArgs = {
  id: Scalars['String'];
};

export type QueryCartDiscountArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryCartDiscountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryCartsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryChannelArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryChannelsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryCustomObjectArgs = {
  container?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryCustomObjectsArgs = {
  container: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryCustomerArgs = {
  emailToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  passwordToken?: InputMaybe<Scalars['String']>;
};

export type QueryCustomerActiveCartArgs = {
  customerId: Scalars['String'];
};

export type QueryCustomerGroupArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryCustomerGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryCustomersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryDiscountCodeArgs = {
  id: Scalars['String'];
};

export type QueryDiscountCodesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryExtensionArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryExtensionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryInStoreArgs = {
  key: Scalars['KeyReferenceInput'];
};

export type QueryInStoresArgs = {
  keys: Array<Scalars['KeyReferenceInput']>;
};

export type QueryInventoryEntriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryInventoryEntryArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryMessageArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryMessagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['String']>;
  orderNumber?: InputMaybe<Scalars['String']>;
};

export type QueryOrderEditArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryOrderEditsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryPaymentArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryPaymentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryProductArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  variantKey?: InputMaybe<Scalars['String']>;
};

export type QueryProductDiscountArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryProductDiscountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryProductProjectionSearchArgs = {
  facetFilters?: InputMaybe<Array<SearchFilterInput>>;
  facets?: InputMaybe<Array<SearchFacetInput>>;
  filters?: InputMaybe<Array<SearchFilterInput>>;
  fuzzy?: InputMaybe<Scalars['Boolean']>;
  fuzzyLevel?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['Locale']>;
  localeProjection?: InputMaybe<Array<Scalars['Locale']>>;
  markMatchingVariant?: InputMaybe<Scalars['Boolean']>;
  markMatchingVariants?: InputMaybe<Scalars['Boolean']>;
  offset?: InputMaybe<Scalars['Int']>;
  priceSelector?: InputMaybe<PriceSelectorInput>;
  queryFilters?: InputMaybe<Array<SearchFilterInput>>;
  sorts?: InputMaybe<Array<Scalars['String']>>;
  staged?: InputMaybe<Scalars['Boolean']>;
  storeProjection?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type QueryProductProjectionsSuggestArgs = {
  fuzzy?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  searchKeywords: Array<SearchKeywordArgument>;
  staged?: InputMaybe<Scalars['Boolean']>;
};

export type QueryProductSelectionArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryProductSelectionAssignmentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryProductSelectionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryProductTypeArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryProductTypesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  skus?: InputMaybe<Array<Scalars['String']>>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryReviewArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryReviewsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryShippingMethodArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryShippingMethodsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryShippingMethodsByCartArgs = {
  id: Scalars['String'];
};

export type QueryShippingMethodsByLocationArgs = {
  country: Scalars['Country'];
  currency?: InputMaybe<Scalars['Currency']>;
  state?: InputMaybe<Scalars['String']>;
};

export type QueryShoppingListArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryStandalonePriceArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryStandalonePricesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryStateArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryStatesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryStoreArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryStoresArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QuerySubscriptionArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QuerySubscriptionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryTaxCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryTaxCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryTypeDefinitionArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryTypeDefinitionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryZoneArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryZonesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type QueryLimitsProjection = {
  offset: Limit;
};

export type RangeCount = {
  type: Scalars['String'];
};

export type RangeCountDouble = RangeCount & {
  count: Scalars['Int'];
  from: Scalars['Float'];
  fromStr: Scalars['String'];
  max: Scalars['Float'];
  mean: Scalars['Float'];
  min: Scalars['Float'];
  productCount?: Maybe<Scalars['Int']>;
  to: Scalars['Float'];
  toStr: Scalars['String'];
  total: Scalars['Float'];
  totalCount: Scalars['Int'];
  type: Scalars['String'];
};

export type RangeCountLong = RangeCount & {
  count: Scalars['Int'];
  from: Scalars['Long'];
  fromStr: Scalars['String'];
  max: Scalars['Long'];
  mean: Scalars['Float'];
  min: Scalars['Long'];
  productCount?: Maybe<Scalars['Int']>;
  to: Scalars['Long'];
  toStr: Scalars['String'];
  total: Scalars['Long'];
  totalCount: Scalars['Int'];
  type: Scalars['String'];
};

export type RangeElementInput = {
  from: Scalars['String'];
  to: Scalars['String'];
};

export type RangeFacetInput = {
  alias?: InputMaybe<Scalars['String']>;
  countProducts?: Scalars['Boolean'];
  path: Scalars['String'];
  ranges: Array<RangeElementInput>;
};

export type RangeFacetResult = FacetResult & {
  dataType: Scalars['String'];
  ranges: Array<RangeCount>;
  type: Scalars['String'];
};

export type RangeFilterInput = {
  path: Scalars['String'];
  ranges: Array<RangeElementInput>;
};

export type RawCustomField = {
  name: Scalars['String'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResource?: Maybe<ReferenceExpandable>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResourceSet: Array<ReferenceExpandable>;
  value: Scalars['Json'];
};

export type RawProductAttribute = {
  attributeDefinition?: Maybe<AttributeDefinition>;
  name: Scalars['String'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResource?: Maybe<ReferenceExpandable>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResourceSet: Array<ReferenceExpandable>;
  value: Scalars['Json'];
};

export type RawProductSearchAttribute = {
  name: Scalars['String'];
  value: Scalars['Json'];
};

export type RecalculateCart = {
  updateProductData?: InputMaybe<Scalars['Boolean']>;
};

export type RecalculateStagedOrder = {
  updateProductData?: InputMaybe<Scalars['Boolean']>;
};

export type RecalculateStagedOrderOutput = StagedOrderUpdateActionOutput & {
  type: Scalars['String'];
  updateProductData: Scalars['Boolean'];
};

export type Reference = {
  id: Scalars['String'];
  typeId: Scalars['String'];
};

export type ReferenceAttribute = Attribute & {
  id: Scalars['String'];
  name: Scalars['String'];
  typeId: Scalars['String'];
};

export type ReferenceAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
  referenceTypeId: Scalars['String'];
};

export type ReferenceExpandable = {
  id: Scalars['String'];
};

export type ReferenceField = CustomField & {
  id: Scalars['String'];
  name: Scalars['String'];
  typeId: Scalars['String'];
};

export type ReferenceId = {
  id: Scalars['String'];
  typeId: Scalars['String'];
};

export type ReferenceInput = {
  id: Scalars['String'];
  typeId: Scalars['String'];
};

export type ReferenceType = FieldType & {
  name: Scalars['String'];
  referenceTypeId: Scalars['String'];
};

export type ReferenceTypeDefinitionDraft = {
  referenceTypeId: Scalars['String'];
};

export type RefreshTokenLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long'];
  limit?: Maybe<Scalars['Long']>;
};

export type RefreshTokenLimitsProjection = {
  total: RefreshTokenLimitWithCurrent;
};

export type RelativeDiscountValue = CartDiscountValue &
  ProductDiscountValue & {
    permyriad: Scalars['Int'];
    type: Scalars['String'];
  };

export type RelativeDiscountValueInput = {
  permyriad: Scalars['Int'];
};

export type RemoveAttributeGroupAttribute = {
  attribute: Scalars['String'];
};

export type RemoveCartCustomLineItem = {
  customLineItemId: Scalars['String'];
};

export type RemoveCartDiscountCode = {
  discountCode: ReferenceInput;
};

export type RemoveCartItemShippingAddress = {
  addressKey: Scalars['String'];
};

export type RemoveCartLineItem = {
  externalPrice?: InputMaybe<BaseMoneyInput>;
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  lineItemId: Scalars['String'];
  quantity?: InputMaybe<Scalars['Long']>;
  shippingDetailsToRemove?: InputMaybe<ItemShippingDetailsDraft>;
};

export type RemoveCartPayment = {
  payment: ResourceIdentifierInput;
};

export type RemoveCategoryAsset = {
  assetId?: InputMaybe<Scalars['String']>;
  assetKey?: InputMaybe<Scalars['String']>;
};

export type RemoveChannelRoles = {
  roles: Array<ChannelRole>;
};

export type RemoveCustomerAddress = {
  addressId?: InputMaybe<Scalars['String']>;
  addressKey?: InputMaybe<Scalars['String']>;
};

export type RemoveCustomerBillingAddressId = {
  addressId?: InputMaybe<Scalars['String']>;
  addressKey?: InputMaybe<Scalars['String']>;
};

export type RemoveCustomerShippingAddressId = {
  addressId?: InputMaybe<Scalars['String']>;
  addressKey?: InputMaybe<Scalars['String']>;
};

export type RemoveCustomerStore = {
  store: ResourceIdentifierInput;
};

export type RemoveInventoryEntryQuantity = {
  quantity: Scalars['Long'];
};

export type RemoveOrderDelivery = {
  deliveryId: Scalars['String'];
};

export type RemoveOrderItemShippingAddress = {
  addressKey: Scalars['String'];
};

export type RemoveOrderParcelFromDelivery = {
  parcelId: Scalars['String'];
};

export type RemoveOrderPayment = {
  payment: ResourceIdentifierInput;
};

export type RemoveProductAsset = {
  assetId?: InputMaybe<Scalars['String']>;
  assetKey?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type RemoveProductFromCategory = {
  category: ResourceIdentifierInput;
  staged?: InputMaybe<Scalars['Boolean']>;
};

export type RemoveProductImage = {
  imageUrl: Scalars['String'];
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type RemoveProductPrice = {
  price?: InputMaybe<ProductPriceDataInput>;
  priceId?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type RemoveProductSelectionProduct = {
  product: ResourceIdentifierInput;
};

export type RemoveProductVariant = {
  id?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
};

export type RemoveShippingMethodShippingRate = {
  shippingRate: ShippingRateDraft;
  zone: ResourceIdentifierInput;
};

export type RemoveShippingMethodZone = {
  zone: ResourceIdentifierInput;
};

export type RemoveShoppingListLineItem = {
  lineItemId: Scalars['String'];
  quantity?: InputMaybe<Scalars['Int']>;
};

export type RemoveShoppingListTextLineItem = {
  quantity?: InputMaybe<Scalars['Int']>;
  textLineItemId: Scalars['String'];
};

export type RemoveStagedOrderCustomLineItem = {
  customLineItemId: Scalars['String'];
};

export type RemoveStagedOrderCustomLineItemOutput = StagedOrderUpdateActionOutput & {
  customLineItemId: Scalars['String'];
  type: Scalars['String'];
};

export type RemoveStagedOrderDelivery = {
  deliveryId: Scalars['String'];
};

export type RemoveStagedOrderDeliveryOutput = StagedOrderUpdateActionOutput & {
  deliveryId: Scalars['String'];
  type: Scalars['String'];
};

export type RemoveStagedOrderDiscountCode = {
  discountCode: ReferenceInput;
};

export type RemoveStagedOrderDiscountCodeOutput = StagedOrderUpdateActionOutput & {
  discountCode?: Maybe<DiscountCode>;
  discountCodeRef: Reference;
  type: Scalars['String'];
};

export type RemoveStagedOrderItemShippingAddress = {
  addressKey: Scalars['String'];
};

export type RemoveStagedOrderItemShippingAddressOutput = StagedOrderUpdateActionOutput & {
  addressKey: Scalars['String'];
  type: Scalars['String'];
};

export type RemoveStagedOrderLineItem = {
  externalPrice?: InputMaybe<BaseMoneyInput>;
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  lineItemId: Scalars['String'];
  quantity?: InputMaybe<Scalars['Long']>;
  shippingDetailsToRemove?: InputMaybe<ItemShippingDetailsDraftType>;
};

export type RemoveStagedOrderLineItemOutput = StagedOrderUpdateActionOutput & {
  externalPrice?: Maybe<BaseMoney>;
  externalTotalPrice?: Maybe<ExternalLineItemTotalPrice>;
  lineItemId: Scalars['String'];
  quantity?: Maybe<Scalars['Long']>;
  shippingDetailsToRemove?: Maybe<ItemShippingDetailsDraftOutput>;
  type: Scalars['String'];
};

export type RemoveStagedOrderParcelFromDelivery = {
  parcelId: Scalars['String'];
};

export type RemoveStagedOrderParcelFromDeliveryOutput = StagedOrderUpdateActionOutput & {
  parcelId: Scalars['String'];
  type: Scalars['String'];
};

export type RemoveStagedOrderPayment = {
  payment: ResourceIdentifierInput;
};

export type RemoveStagedOrderPaymentOutput = StagedOrderUpdateActionOutput & {
  paymentResId: ResourceIdentifier;
  type: Scalars['String'];
};

export type RemoveStateRoles = {
  roles: Array<StateRole>;
};

export type RemoveStoreDistributionChannel = {
  distributionChannel: ResourceIdentifierInput;
};

export type RemoveStoreProductSelection = {
  productSelection: ResourceIdentifierInput;
};

export type RemoveStoreSupplyChannel = {
  supplyChannel: ResourceIdentifierInput;
};

export type RemoveTypeFieldDefinition = {
  fieldName: Scalars['String'];
};

export type RemoveZoneLocation = {
  location: ZoneLocation;
};

export type ResourceIdentifier = {
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  typeId: Scalars['String'];
};

export type ResourceIdentifierInput = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['String']>;
};

/** Stores information about returns connected to this order. */
export type ReturnInfo = {
  items: Array<ReturnItem>;
  returnDate?: Maybe<Scalars['DateTime']>;
  returnTrackingId?: Maybe<Scalars['String']>;
};

export type ReturnInfoAdded = MessagePayload &
  OrderMessagePayload & {
    returnInfo: ReturnInfo;
    type: Scalars['String'];
  };

export type ReturnInfoDraftType = {
  items: Array<ReturnItemDraftType>;
  returnDate?: InputMaybe<Scalars['DateTime']>;
  returnTrackingId?: InputMaybe<Scalars['String']>;
};

export type ReturnInfoDraftTypeOutput = {
  items: Array<ReturnItemDraftTypeOutput>;
  returnDate?: Maybe<Scalars['DateTime']>;
  returnTrackingId?: Maybe<Scalars['String']>;
};

export type ReturnInfoSet = MessagePayload &
  OrderMessagePayload & {
    returnInfo?: Maybe<Array<ReturnInfo>>;
    type: Scalars['String'];
  };

export type ReturnItem = {
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String'];
  lastModifiedAt: Scalars['DateTime'];
  paymentState: ReturnPaymentState;
  quantity: Scalars['Long'];
  shipmentState: ReturnShipmentState;
  type: Scalars['String'];
};

export type ReturnItemDraftType = {
  comment?: InputMaybe<Scalars['String']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  customLineItemId?: InputMaybe<Scalars['String']>;
  lineItemId?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Long'];
  shipmentState: ReturnShipmentState;
};

export type ReturnItemDraftTypeOutput = {
  comment?: Maybe<Scalars['String']>;
  custom?: Maybe<CustomFieldsCommand>;
  customLineItemId?: Maybe<Scalars['String']>;
  lineItemId?: Maybe<Scalars['String']>;
  quantity: Scalars['Long'];
  shipmentState: ReturnShipmentState;
};

export enum ReturnPaymentState {
  Initial = 'Initial',
  NonRefundable = 'NonRefundable',
  NotRefunded = 'NotRefunded',
  Refunded = 'Refunded',
}

export enum ReturnShipmentState {
  Advised = 'Advised',
  BackInStock = 'BackInStock',
  Returned = 'Returned',
  Unusable = 'Unusable',
}

export type RevertStagedChanges = {
  dummy?: InputMaybe<Scalars['String']>;
};

export type RevertStagedVariantChanges = {
  variantId: Scalars['Int'];
};

export type Review = ReferenceExpandable &
  Versioned & {
    authorName?: Maybe<Scalars['String']>;
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    custom?: Maybe<CustomFieldsType>;
    customer?: Maybe<Customer>;
    customerRef?: Maybe<Reference>;
    id: Scalars['String'];
    includedInStatistics: Scalars['Boolean'];
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    locale?: Maybe<Scalars['Locale']>;
    rating?: Maybe<Scalars['Int']>;
    state?: Maybe<State>;
    stateRef?: Maybe<Reference>;
    target?: Maybe<ReviewTarget>;
    targetRef?: Maybe<Reference>;
    text?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    uniquenessValue?: Maybe<Scalars['String']>;
    version: Scalars['Long'];
  };

export type ReviewCreated = MessagePayload & {
  review: Review;
  type: Scalars['String'];
};

export type ReviewDraft = {
  authorName?: InputMaybe<Scalars['String']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  customer?: InputMaybe<ResourceIdentifierInput>;
  key?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['Locale']>;
  rating?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<ResourceIdentifierInput>;
  target?: InputMaybe<TargetReferenceInput>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uniquenessValue?: InputMaybe<Scalars['String']>;
};

export type ReviewQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<Review>;
  total: Scalars['Long'];
};

export type ReviewRatingSet = MessagePayload & {
  includedInStatistics: Scalars['Boolean'];
  newRating?: Maybe<Scalars['Int']>;
  oldRating?: Maybe<Scalars['Int']>;
  target?: Maybe<ReviewTarget>;
  targetRef?: Maybe<Reference>;
  type: Scalars['String'];
};

export type ReviewRatingStatistics = {
  averageRating: Scalars['Float'];
  count: Scalars['Long'];
  highestRating: Scalars['Int'];
  lowestRating: Scalars['Int'];
  ratingsDistribution: Scalars['Json'];
};

export type ReviewStateTransition = MessagePayload & {
  force: Scalars['Boolean'];
  newIncludedInStatistics: Scalars['Boolean'];
  newState?: Maybe<State>;
  newStateRef: Reference;
  oldIncludedInStatistics: Scalars['Boolean'];
  oldState?: Maybe<State>;
  oldStateRef?: Maybe<Reference>;
  target?: Maybe<ReviewTarget>;
  targetRef?: Maybe<Reference>;
  type: Scalars['String'];
};

export type ReviewTarget = {
  id: Scalars['String'];
};

export type ReviewUpdateAction = {
  setAuthorName?: InputMaybe<SetReviewAuthorName>;
  setCustomField?: InputMaybe<SetReviewCustomField>;
  setCustomType?: InputMaybe<SetReviewCustomType>;
  setCustomer?: InputMaybe<SetReviewCustomer>;
  setKey?: InputMaybe<SetReviewKey>;
  setLocale?: InputMaybe<SetReviewLocale>;
  setRating?: InputMaybe<SetReviewRating>;
  setTarget?: InputMaybe<SetReviewTarget>;
  setText?: InputMaybe<SetReviewText>;
  setTitle?: InputMaybe<SetReviewTitle>;
  transitionState?: InputMaybe<TransitionReviewState>;
};

export enum RoundingMode {
  /** [Round half down](https://en.wikipedia.org/wiki/Rounding#Round_half_down) */
  HalfDown = 'HalfDown',
  /** [Round half to even](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even). Default rounding mode as used in IEEE 754 computing functions and operators. */
  HalfEven = 'HalfEven',
  /** [Round half up](https://en.wikipedia.org/wiki/Rounding#Round_half_up) */
  HalfUp = 'HalfUp',
}

export type SnsDestination = Destination & {
  accessKey: Scalars['String'];
  accessSecret: Scalars['String'];
  topicArn: Scalars['String'];
  type: Scalars['String'];
};

export type SnsDestinationInput = {
  accessKey: Scalars['String'];
  accessSecret: Scalars['String'];
  topicArn: Scalars['String'];
};

export type SqsDestination = Destination & {
  accessKey: Scalars['String'];
  accessSecret: Scalars['String'];
  queueUrl: Scalars['String'];
  region: Scalars['String'];
  type: Scalars['String'];
};

export type SqsDestinationInput = {
  accessKey: Scalars['String'];
  accessSecret: Scalars['String'];
  queueUrl: Scalars['String'];
  region: Scalars['String'];
};

export type ScopedPrice = {
  channel?: Maybe<Channel>;
  channelRef?: Maybe<Reference>;
  country?: Maybe<Scalars['String']>;
  currentValue: BaseMoney;
  custom?: Maybe<CustomFieldsType>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroupRef?: Maybe<Reference>;
  discounted?: Maybe<DiscountedProductSearchPriceValue>;
  id: Scalars['String'];
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
  value: BaseMoney;
};

export type ScoreShippingRateInput = ShippingRateInput & {
  score: Scalars['Int'];
  type: Scalars['String'];
};

export type ScoreShippingRateInputDraft = {
  score: Scalars['Int'];
};

export type ScoreShippingRateInputDraftOutput = ShippingRateInputDraftOutput & {
  score: Scalars['Int'];
  type: Scalars['String'];
};

export type SearchFacetInput = {
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  model?: InputMaybe<SearchFacetModelInput>;
  string?: InputMaybe<Scalars['String']>;
};

export type SearchFacetModelInput = {
  range?: InputMaybe<RangeFacetInput>;
  terms?: InputMaybe<TermsFacetInput>;
};

export type SearchFilterInput = {
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  model?: InputMaybe<SearchFilterModelInput>;
  string?: InputMaybe<Scalars['String']>;
};

export type SearchFilterModelInput = {
  exists?: InputMaybe<ExistsFilterInput>;
  missing?: InputMaybe<MissingFilterInput>;
  range?: InputMaybe<RangeFilterInput>;
  tree?: InputMaybe<TreeFilterInput>;
  value?: InputMaybe<ValueFilterInput>;
};

export type SearchIndexingConfiguration = {
  orders?: Maybe<OrderSearchConfiguration>;
  products?: Maybe<SearchIndexingConfigurationValues>;
};

export type SearchIndexingConfigurationValues = {
  lastModifiedAt?: Maybe<Scalars['DateTime']>;
  lastModifiedBy?: Maybe<Initiator>;
  status?: Maybe<SearchIndexingStatus>;
};

export enum SearchIndexingStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
  Indexing = 'Indexing',
}

export type SearchKeyword = {
  suggestTokenizer?: Maybe<SuggestTokenizer>;
  text: Scalars['String'];
};

export type SearchKeywordArgument = {
  locale: Scalars['Locale'];
  searchKeyword: Scalars['String'];
};

export type SearchKeywordInput = {
  keywords: Array<SearchKeywordItemInput>;
  locale: Scalars['Locale'];
};

export type SearchKeywordItemInput = {
  suggestTokenizer?: InputMaybe<BaseSearchKeywordInput>;
  text: Scalars['String'];
};

export type SearchKeywordProductSearch = {
  suggestTokenizer?: Maybe<SuggestTokenizerProductSearch>;
  text: Scalars['String'];
};

export type SearchKeywords = {
  locale: Scalars['Locale'];
  searchKeywords: Array<SearchKeyword>;
};

export type SearchKeywordsProductSearch = {
  locale: Scalars['Locale'];
  searchKeywords: Array<SearchKeywordProductSearch>;
};

export type SearchLimitsProjection = {
  maxTextSize: Limit;
};

/** In order to decide which of the matching items will actually be discounted */
export enum SelectionMode {
  Cheapest = 'Cheapest',
  MostExpensive = 'MostExpensive',
}

export type SelectionOfProduct = {
  createdAt: Scalars['DateTime'];
  productSelection?: Maybe<ProductSelection>;
  productSelectionRef: Reference;
};

export type SelectionOfProductQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<SelectionOfProduct>;
  total: Scalars['Long'];
};

export type SetAttributeDefinitionType = AttributeDefinitionType & {
  elementType: AttributeDefinitionType;
  name: Scalars['String'];
};

export type SetAttributeGroupAttributes = {
  attributes: Array<Scalars['String']>;
};

export type SetAttributeGroupDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetAttributeGroupKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetCartAnonymousId = {
  anonymousId?: InputMaybe<Scalars['String']>;
};

export type SetCartBillingAddress = {
  address?: InputMaybe<AddressInput>;
};

export type SetCartBillingAddressCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetCartBillingAddressCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetCartCountry = {
  country?: InputMaybe<Scalars['Country']>;
};

export type SetCartCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetCartCustomLineItemCustomField = {
  customLineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetCartCustomLineItemCustomType = {
  customLineItemId: Scalars['String'];
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetCartCustomLineItemShippingDetails = {
  customLineItemId: Scalars['String'];
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
};

export type SetCartCustomLineItemTaxAmount = {
  customLineItemId: Scalars['String'];
  externalTaxAmount?: InputMaybe<ExternalTaxAmountDraft>;
};

export type SetCartCustomLineItemTaxRate = {
  customLineItemId: Scalars['String'];
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
};

export type SetCartCustomShippingMethod = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingMethodName: Scalars['String'];
  shippingRate: ShippingRateDraft;
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
};

export type SetCartCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetCartCustomerEmail = {
  email?: InputMaybe<Scalars['String']>;
};

export type SetCartCustomerGroup = {
  customerGroup?: InputMaybe<ResourceIdentifierInput>;
};

export type SetCartCustomerId = {
  customerId?: InputMaybe<Scalars['String']>;
};

export type SetCartDeleteDaysAfterLastModification = {
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']>;
};

export type SetCartDiscountCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetCartDiscountCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetCartDiscountDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetCartDiscountKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetCartDiscountValidFrom = {
  validFrom?: InputMaybe<Scalars['DateTime']>;
};

export type SetCartDiscountValidFromAndUntil = {
  validFrom?: InputMaybe<Scalars['DateTime']>;
  validUntil?: InputMaybe<Scalars['DateTime']>;
};

export type SetCartDiscountValidUntil = {
  validUntil?: InputMaybe<Scalars['DateTime']>;
};

export type SetCartItemShippingAddressCustomField = {
  addressKey: Scalars['String'];
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetCartItemShippingAddressCustomType = {
  addressKey: Scalars['String'];
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetCartKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetCartLineItemCustomField = {
  lineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetCartLineItemCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  lineItemId: Scalars['String'];
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetCartLineItemDistributionChannel = {
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  lineItemId: Scalars['String'];
};

export type SetCartLineItemPrice = {
  externalPrice?: InputMaybe<BaseMoneyInput>;
  lineItemId: Scalars['String'];
};

export type SetCartLineItemShippingDetails = {
  lineItemId: Scalars['String'];
  shippingDetails?: InputMaybe<ItemShippingDetailsDraft>;
};

export type SetCartLineItemSupplyChannel = {
  lineItemId: Scalars['String'];
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
};

export type SetCartLineItemTaxAmount = {
  externalTaxAmount?: InputMaybe<ExternalTaxAmountDraft>;
  lineItemId: Scalars['String'];
};

export type SetCartLineItemTaxRate = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  lineItemId: Scalars['String'];
};

export type SetCartLineItemTotalPrice = {
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  lineItemId: Scalars['String'];
};

export type SetCartLocale = {
  locale?: InputMaybe<Scalars['Locale']>;
};

export type SetCartShippingAddress = {
  address?: InputMaybe<AddressInput>;
};

export type SetCartShippingAddressCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetCartShippingAddressCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetCartShippingMethod = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingMethod?: InputMaybe<ResourceIdentifierInput>;
};

export type SetCartShippingMethodTaxAmount = {
  externalTaxAmount?: InputMaybe<ExternalTaxAmountDraft>;
};

export type SetCartShippingMethodTaxRate = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
};

export type SetCartShippingRateInput = {
  shippingRateInput?: InputMaybe<ShippingRateInputDraft>;
};

export type SetCartTotalTax = {
  externalTaxPortions?: InputMaybe<Array<TaxPortionDraft>>;
  externalTotalGross?: InputMaybe<MoneyInput>;
};

export type SetCategoryAssetCustomField = {
  assetId?: InputMaybe<Scalars['String']>;
  assetKey?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetCategoryAssetCustomType = {
  assetId?: InputMaybe<Scalars['String']>;
  assetKey?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetCategoryAssetDescription = {
  assetId?: InputMaybe<Scalars['String']>;
  assetKey?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetCategoryAssetKey = {
  assetId: Scalars['String'];
  assetKey?: InputMaybe<Scalars['String']>;
};

export type SetCategoryAssetSources = {
  assetId?: InputMaybe<Scalars['String']>;
  assetKey?: InputMaybe<Scalars['String']>;
  sources?: InputMaybe<Array<AssetSourceInput>>;
};

export type SetCategoryAssetTags = {
  assetId?: InputMaybe<Scalars['String']>;
  assetKey?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type SetCategoryCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetCategoryCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetCategoryDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetCategoryExternalId = {
  externalId?: InputMaybe<Scalars['String']>;
};

export type SetCategoryKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetCategoryMetaDescription = {
  metaDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetCategoryMetaKeywords = {
  metaKeywords?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetCategoryMetaTitle = {
  metaTitle?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetChannelAddress = {
  address?: InputMaybe<AddressInput>;
};

export type SetChannelAddressCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetChannelAddressCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetChannelCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetChannelCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetChannelGeoLocation = {
  geoLocation?: InputMaybe<GeometryInput>;
};

export type SetChannelRoles = {
  roles: Array<ChannelRole>;
};

export type SetCustomerAddressCustomField = {
  addressId: Scalars['String'];
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetCustomerAddressCustomType = {
  addressId: Scalars['String'];
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetCustomerAuthenticationMode = {
  authMode: AuthenticationMode;
  password?: InputMaybe<Scalars['String']>;
};

export type SetCustomerCompanyName = {
  companyName?: InputMaybe<Scalars['String']>;
};

export type SetCustomerCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetCustomerCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetCustomerDateOfBirth = {
  dateOfBirth?: InputMaybe<Scalars['Date']>;
};

export type SetCustomerDefaultBillingAddress = {
  addressId?: InputMaybe<Scalars['String']>;
  addressKey?: InputMaybe<Scalars['String']>;
};

export type SetCustomerDefaultShippingAddress = {
  addressId?: InputMaybe<Scalars['String']>;
  addressKey?: InputMaybe<Scalars['String']>;
};

export type SetCustomerExternalId = {
  externalId?: InputMaybe<Scalars['String']>;
};

export type SetCustomerFirstName = {
  firstName?: InputMaybe<Scalars['String']>;
};

export type SetCustomerGroup = {
  customerGroup?: InputMaybe<ResourceIdentifierInput>;
};

export type SetCustomerGroupCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetCustomerGroupCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetCustomerGroupKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetCustomerKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetCustomerLastName = {
  lastName?: InputMaybe<Scalars['String']>;
};

export type SetCustomerLocale = {
  locale?: InputMaybe<Scalars['Locale']>;
};

export type SetCustomerMiddleName = {
  middleName?: InputMaybe<Scalars['String']>;
};

export type SetCustomerNumber = {
  customerNumber?: InputMaybe<Scalars['String']>;
};

export type SetCustomerSalutation = {
  salutation?: InputMaybe<Scalars['String']>;
};

export type SetCustomerStores = {
  stores: Array<ResourceIdentifierInput>;
};

export type SetCustomerTitle = {
  title?: InputMaybe<Scalars['String']>;
};

export type SetCustomerVatId = {
  vatId?: InputMaybe<Scalars['String']>;
};

export type SetDiscountCodeCartPredicate = {
  cartPredicate?: InputMaybe<Scalars['String']>;
};

export type SetDiscountCodeCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetDiscountCodeCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetDiscountCodeDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetDiscountCodeMaxApplications = {
  maxApplications?: InputMaybe<Scalars['Long']>;
};

export type SetDiscountCodeMaxApplicationsPerCustomer = {
  maxApplicationsPerCustomer?: InputMaybe<Scalars['Long']>;
};

export type SetDiscountCodeName = {
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetDiscountCodeValidFrom = {
  validFrom?: InputMaybe<Scalars['DateTime']>;
};

export type SetDiscountCodeValidFromAndUntil = {
  validFrom?: InputMaybe<Scalars['DateTime']>;
  validUntil?: InputMaybe<Scalars['DateTime']>;
};

export type SetDiscountCodeValidUntil = {
  validUntil?: InputMaybe<Scalars['DateTime']>;
};

export type SetExtensionKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetExtensionTimeoutInMs = {
  timeoutInMs?: InputMaybe<Scalars['Int']>;
};

export type SetInventoryEntryCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetInventoryEntryCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetInventoryEntryExpectedDelivery = {
  expectedDelivery?: InputMaybe<Scalars['DateTime']>;
};

export type SetInventoryEntryRestockableInDays = {
  restockableInDays?: InputMaybe<Scalars['Int']>;
};

export type SetInventoryEntrySupplyChannel = {
  supplyChannel?: InputMaybe<ResourceIdentifierInput>;
};

export type SetMyCartShippingMethod = {
  shippingMethod?: InputMaybe<ResourceIdentifierInput>;
};

export type SetOrderBillingAddress = {
  address?: InputMaybe<AddressInput>;
};

export type SetOrderBillingAddressCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetOrderBillingAddressCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetOrderCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetOrderCustomLineItemCustomField = {
  customLineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetOrderCustomLineItemCustomType = {
  customLineItemId: Scalars['String'];
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetOrderCustomLineItemShippingDetails = {
  customLineItemId: Scalars['String'];
  shippingDetails?: InputMaybe<ItemShippingDetailsDraftType>;
};

export type SetOrderCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetOrderCustomerEmail = {
  email?: InputMaybe<Scalars['String']>;
};

export type SetOrderCustomerId = {
  customerId?: InputMaybe<Scalars['String']>;
};

export type SetOrderDeliveryAddress = {
  address?: InputMaybe<AddressInput>;
  deliveryId: Scalars['String'];
};

export type SetOrderDeliveryAddressCustomField = {
  deliveryId: Scalars['String'];
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetOrderDeliveryAddressCustomType = {
  deliveryId: Scalars['String'];
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetOrderDeliveryCustomField = {
  deliveryId: Scalars['String'];
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetOrderDeliveryCustomType = {
  deliveryId: Scalars['String'];
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetOrderDeliveryItems = {
  deliveryId: Scalars['String'];
  items: Array<DeliveryItemDraftType>;
};

export type SetOrderEditComment = {
  comment?: InputMaybe<Scalars['String']>;
};

export type SetOrderEditCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetOrderEditCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetOrderEditKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetOrderEditStagedActions = {
  stagedActions: Array<StagedOrderUpdateAction>;
};

export type SetOrderItemShippingAddressCustomField = {
  addressKey: Scalars['String'];
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetOrderItemShippingAddressCustomType = {
  addressKey: Scalars['String'];
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetOrderLineItemCustomField = {
  lineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetOrderLineItemCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  lineItemId: Scalars['String'];
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetOrderLineItemShippingDetails = {
  lineItemId: Scalars['String'];
  shippingDetails?: InputMaybe<ItemShippingDetailsDraftType>;
};

export type SetOrderLocale = {
  locale?: InputMaybe<Scalars['Locale']>;
};

export type SetOrderNumber = {
  orderNumber?: InputMaybe<Scalars['String']>;
};

export type SetOrderParcelCustomField = {
  name: Scalars['String'];
  parcelId: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetOrderParcelCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  parcelId: Scalars['String'];
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetOrderParcelItems = {
  items: Array<DeliveryItemDraftType>;
  parcelId: Scalars['String'];
};

export type SetOrderParcelMeasurements = {
  measurements?: InputMaybe<ParcelMeasurementsDraftType>;
  parcelId: Scalars['String'];
};

export type SetOrderParcelTrackingData = {
  parcelId: Scalars['String'];
  trackingData?: InputMaybe<TrackingDataDraftType>;
};

export type SetOrderReturnInfo = {
  items?: InputMaybe<Array<ReturnInfoDraftType>>;
};

export type SetOrderReturnItemCustomField = {
  name: Scalars['String'];
  returnItemId: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetOrderReturnItemCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  returnItemId: Scalars['String'];
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetOrderReturnPaymentState = {
  paymentState: ReturnPaymentState;
  returnItemId: Scalars['String'];
};

export type SetOrderReturnShipmentState = {
  returnItemId: Scalars['String'];
  shipmentState: ReturnShipmentState;
};

export type SetOrderShippingAddress = {
  address?: InputMaybe<AddressInput>;
};

export type SetOrderShippingAddressCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetOrderShippingAddressCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetOrderStore = {
  store?: InputMaybe<ResourceIdentifierInput>;
};

export type SetPaymentAmountPaid = {
  amount?: InputMaybe<MoneyInput>;
};

export type SetPaymentAmountRefunded = {
  amount?: InputMaybe<MoneyInput>;
};

export type SetPaymentAnonymousId = {
  anonymousId?: InputMaybe<Scalars['String']>;
};

export type SetPaymentAuthorization = {
  amount?: InputMaybe<MoneyInput>;
  until?: InputMaybe<Scalars['DateTime']>;
};

export type SetPaymentCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetPaymentCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetPaymentCustomer = {
  customer?: InputMaybe<ReferenceInput>;
};

export type SetPaymentExternalId = {
  externalId?: InputMaybe<Scalars['String']>;
};

export type SetPaymentInterfaceId = {
  interfaceId?: InputMaybe<Scalars['String']>;
};

export type SetPaymentKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetPaymentMethodInfoInterface = {
  interface: Scalars['String'];
};

export type SetPaymentMethodInfoMethod = {
  method?: InputMaybe<Scalars['String']>;
};

export type SetPaymentMethodInfoName = {
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetPaymentStatusInterfaceCode = {
  interfaceCode?: InputMaybe<Scalars['String']>;
};

export type SetPaymentStatusInterfaceText = {
  interfaceText?: InputMaybe<Scalars['String']>;
};

export type SetPaymentTransactionCustomField = {
  name: Scalars['String'];
  transactionId: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetPaymentTransactionCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  transactionId: Scalars['String'];
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetProductAssetCustomField = {
  assetId?: InputMaybe<Scalars['String']>;
  assetKey?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['String']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type SetProductAssetCustomType = {
  assetId?: InputMaybe<Scalars['String']>;
  assetKey?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<CustomFieldInput>>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type SetProductAssetDescription = {
  assetId?: InputMaybe<Scalars['String']>;
  assetKey?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type SetProductAssetKey = {
  assetId: Scalars['String'];
  assetKey?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type SetProductAssetSources = {
  assetId?: InputMaybe<Scalars['String']>;
  assetKey?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  sources?: InputMaybe<Array<AssetSourceInput>>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type SetProductAssetTags = {
  assetId?: InputMaybe<Scalars['String']>;
  assetKey?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type SetProductAttribute = {
  name: Scalars['String'];
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['String']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type SetProductAttributeInAllVariants = {
  name: Scalars['String'];
  staged?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['String']>;
};

export type SetProductCategoryOrderHint = {
  categoryId: Scalars['String'];
  orderHint?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
};

export type SetProductDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']>;
};

export type SetProductDiscountDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetProductDiscountKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetProductDiscountValidFrom = {
  validFrom?: InputMaybe<Scalars['DateTime']>;
};

export type SetProductDiscountValidFromAndUntil = {
  validFrom?: InputMaybe<Scalars['DateTime']>;
  validUntil?: InputMaybe<Scalars['DateTime']>;
};

export type SetProductDiscountValidUntil = {
  validUntil?: InputMaybe<Scalars['DateTime']>;
};

export type SetProductDiscountedPrice = {
  discounted?: InputMaybe<DiscountedProductPriceValueInput>;
  priceId: Scalars['String'];
  staged?: InputMaybe<Scalars['Boolean']>;
};

export type SetProductImageLabel = {
  imageUrl: Scalars['String'];
  label?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type SetProductKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetProductMetaAttributes = {
  metaDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaKeywords?: InputMaybe<Array<LocalizedStringItemInputType>>;
  metaTitle?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']>;
};

export type SetProductMetaDescription = {
  metaDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']>;
};

export type SetProductMetaKeywords = {
  metaKeywords?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']>;
};

export type SetProductMetaTitle = {
  metaTitle?: InputMaybe<Array<LocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']>;
};

export type SetProductPriceCustomField = {
  name: Scalars['String'];
  priceId: Scalars['String'];
  staged?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['String']>;
};

export type SetProductPriceCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  priceId: Scalars['String'];
  staged?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetProductPriceMode = {
  priceMode?: InputMaybe<PriceMode>;
};

export type SetProductPrices = {
  prices: Array<ProductPriceDataInput>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type SetProductSelectionCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetProductSelectionCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetProductSelectionKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetProductSku = {
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId: Scalars['Int'];
};

export type SetProductTaxCategory = {
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
};

export type SetProductVariantKey = {
  key?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  staged?: InputMaybe<Scalars['Boolean']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

export type SetProjectSettingsExternalOAuth = {
  externalOAuth?: InputMaybe<ExternalOAuthDraft>;
};

export type SetProjectSettingsShippingRateInputType = {
  shippingRateInputType?: InputMaybe<ShippingRateInputTypeInput>;
};

export type SetReviewAuthorName = {
  authorName?: InputMaybe<Scalars['String']>;
};

export type SetReviewCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetReviewCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetReviewCustomer = {
  customer?: InputMaybe<ResourceIdentifierInput>;
};

export type SetReviewKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetReviewLocale = {
  locale?: InputMaybe<Scalars['Locale']>;
};

export type SetReviewRating = {
  rating?: InputMaybe<Scalars['Int']>;
};

export type SetReviewTarget = {
  target?: InputMaybe<TargetReferenceInput>;
};

export type SetReviewText = {
  text?: InputMaybe<Scalars['String']>;
};

export type SetReviewTitle = {
  title?: InputMaybe<Scalars['String']>;
};

export type SetSearchKeywords = {
  searchKeywords: Array<SearchKeywordInput>;
  staged?: InputMaybe<Scalars['Boolean']>;
};

export type SetShippingMethodCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetShippingMethodCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetShippingMethodDescription = {
  description?: InputMaybe<Scalars['String']>;
};

export type SetShippingMethodKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetShippingMethodLocalizedDescription = {
  localizedDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetShippingMethodLocalizedName = {
  localizedName?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetShippingMethodPredicate = {
  predicate?: InputMaybe<Scalars['String']>;
};

export type SetShoppingListAnonymousId = {
  anonymousId?: InputMaybe<Scalars['String']>;
};

export type SetShoppingListCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetShoppingListCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetShoppingListCustomer = {
  customer?: InputMaybe<ResourceIdentifierInput>;
};

export type SetShoppingListDeleteDaysAfterLastModification = {
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']>;
};

export type SetShoppingListDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetShoppingListKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetShoppingListLineItemCustomField = {
  lineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetShoppingListLineItemCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  lineItemId: Scalars['String'];
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetShoppingListSlug = {
  slug?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetShoppingListStore = {
  store?: InputMaybe<ResourceIdentifierInput>;
};

export type SetShoppingListTextLineItemCustomField = {
  name: Scalars['String'];
  textLineItemId: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetShoppingListTextLineItemCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  textLineItemId: Scalars['String'];
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetShoppingListTextLineItemDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  textLineItemId: Scalars['String'];
};

export type SetStagedOrderBillingAddress = {
  address?: InputMaybe<AddressInput>;
};

export type SetStagedOrderBillingAddressCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderBillingAddressCustomFieldOutput = StagedOrderUpdateActionOutput & {
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderBillingAddressCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderBillingAddressCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  type: Scalars['String'];
};

export type SetStagedOrderBillingAddressOutput = StagedOrderUpdateActionOutput & {
  address?: Maybe<AddressDraft>;
  type: Scalars['String'];
};

export type SetStagedOrderCountry = {
  country?: InputMaybe<Scalars['Country']>;
};

export type SetStagedOrderCountryOutput = StagedOrderUpdateActionOutput & {
  country?: Maybe<Scalars['Country']>;
  type: Scalars['String'];
};

export type SetStagedOrderCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderCustomFieldOutput = StagedOrderUpdateActionOutput & {
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderCustomLineItemCustomField = {
  customLineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderCustomLineItemCustomFieldOutput = StagedOrderUpdateActionOutput & {
  customLineItemId: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderCustomLineItemCustomType = {
  customLineItemId: Scalars['String'];
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderCustomLineItemCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  customLineItemId: Scalars['String'];
  type: Scalars['String'];
};

export type SetStagedOrderCustomLineItemShippingDetails = {
  customLineItemId: Scalars['String'];
  shippingDetails?: InputMaybe<ItemShippingDetailsDraftType>;
};

export type SetStagedOrderCustomLineItemShippingDetailsOutput = StagedOrderUpdateActionOutput & {
  customLineItemId: Scalars['String'];
  shippingDetails?: Maybe<ItemShippingDetailsDraftOutput>;
  type: Scalars['String'];
};

export type SetStagedOrderCustomLineItemTaxAmount = {
  customLineItemId: Scalars['String'];
  externalTaxAmount?: InputMaybe<ExternalTaxAmountDraft>;
};

export type SetStagedOrderCustomLineItemTaxAmountOutput = StagedOrderUpdateActionOutput & {
  customLineItemId: Scalars['String'];
  externalTaxAmount?: Maybe<ExternalTaxAmountDraftOutput>;
  type: Scalars['String'];
};

export type SetStagedOrderCustomLineItemTaxRate = {
  customLineItemId: Scalars['String'];
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
};

export type SetStagedOrderCustomLineItemTaxRateOutput = StagedOrderUpdateActionOutput & {
  customLineItemId: Scalars['String'];
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  type: Scalars['String'];
};

export type SetStagedOrderCustomShippingMethod = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingMethodName: Scalars['String'];
  shippingRate: ShippingRateDraft;
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
};

export type SetStagedOrderCustomShippingMethodOutput = StagedOrderUpdateActionOutput & {
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  shippingMethodName: Scalars['String'];
  shippingRate: ShippingRate;
  taxCategoryResId?: Maybe<ResourceIdentifier>;
  type: Scalars['String'];
};

export type SetStagedOrderCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  type: Scalars['String'];
};

export type SetStagedOrderCustomerEmail = {
  email?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderCustomerEmailOutput = StagedOrderUpdateActionOutput & {
  email?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type SetStagedOrderCustomerGroup = {
  customerGroup?: InputMaybe<ResourceIdentifierInput>;
};

export type SetStagedOrderCustomerGroupOutput = StagedOrderUpdateActionOutput & {
  customerGroupResId?: Maybe<CustomerGroupReferenceIdentifier>;
  type: Scalars['String'];
};

export type SetStagedOrderCustomerId = {
  customerId?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderCustomerIdOutput = StagedOrderUpdateActionOutput & {
  customerId?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type SetStagedOrderDeliveryAddress = {
  address?: InputMaybe<AddressInput>;
  deliveryId: Scalars['String'];
};

export type SetStagedOrderDeliveryAddressCustomField = {
  deliveryId: Scalars['String'];
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderDeliveryAddressCustomFieldOutput = StagedOrderUpdateActionOutput & {
  deliveryId: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderDeliveryAddressCustomType = {
  deliveryId: Scalars['String'];
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderDeliveryAddressCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  deliveryId: Scalars['String'];
  type: Scalars['String'];
};

export type SetStagedOrderDeliveryAddressOutput = StagedOrderUpdateActionOutput & {
  address?: Maybe<AddressDraft>;
  deliveryId: Scalars['String'];
  type: Scalars['String'];
};

export type SetStagedOrderDeliveryCustomField = {
  deliveryId: Scalars['String'];
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderDeliveryCustomFieldOutput = StagedOrderUpdateActionOutput & {
  deliveryId: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderDeliveryCustomType = {
  deliveryId: Scalars['String'];
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderDeliveryCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  deliveryId: Scalars['String'];
  type: Scalars['String'];
};

export type SetStagedOrderDeliveryItems = {
  deliveryId: Scalars['String'];
  items: Array<DeliveryItemDraftType>;
};

export type SetStagedOrderDeliveryItemsOutput = StagedOrderUpdateActionOutput & {
  deliveryId: Scalars['String'];
  items: Array<DeliveryItem>;
  type: Scalars['String'];
};

export type SetStagedOrderItemShippingAddressCustomField = {
  addressKey: Scalars['String'];
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderItemShippingAddressCustomFieldOutput = StagedOrderUpdateActionOutput & {
  addressKey: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderItemShippingAddressCustomType = {
  addressKey: Scalars['String'];
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderItemShippingAddressCustomTypeOutput = StagedOrderUpdateActionOutput & {
  addressKey: Scalars['String'];
  custom: CustomFieldsCommand;
  type: Scalars['String'];
};

export type SetStagedOrderLineItemCustomField = {
  lineItemId: Scalars['String'];
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderLineItemCustomFieldOutput = StagedOrderUpdateActionOutput & {
  lineItemId: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderLineItemCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  lineItemId: Scalars['String'];
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderLineItemCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  lineItemId: Scalars['String'];
  type: Scalars['String'];
};

export type SetStagedOrderLineItemDistributionChannel = {
  distributionChannel?: InputMaybe<ResourceIdentifierInput>;
  lineItemId: Scalars['String'];
};

export type SetStagedOrderLineItemDistributionChannelOutput = StagedOrderUpdateActionOutput & {
  distributionChannelResId?: Maybe<ChannelReferenceIdentifier>;
  lineItemId: Scalars['String'];
  type: Scalars['String'];
};

export type SetStagedOrderLineItemPrice = {
  externalPrice?: InputMaybe<BaseMoneyInput>;
  lineItemId: Scalars['String'];
};

export type SetStagedOrderLineItemPriceOutput = StagedOrderUpdateActionOutput & {
  externalPrice?: Maybe<BaseMoney>;
  lineItemId: Scalars['String'];
  type: Scalars['String'];
};

export type SetStagedOrderLineItemShippingDetails = {
  lineItemId: Scalars['String'];
  shippingDetails?: InputMaybe<ItemShippingDetailsDraftType>;
};

export type SetStagedOrderLineItemShippingDetailsOutput = StagedOrderUpdateActionOutput & {
  lineItemId: Scalars['String'];
  shippingDetails?: Maybe<ItemShippingDetailsDraftOutput>;
  type: Scalars['String'];
};

export type SetStagedOrderLineItemTaxAmount = {
  externalTaxAmount?: InputMaybe<ExternalTaxAmountDraft>;
  lineItemId: Scalars['String'];
};

export type SetStagedOrderLineItemTaxAmountOutput = StagedOrderUpdateActionOutput & {
  externalTaxAmount?: Maybe<ExternalTaxAmountDraftOutput>;
  lineItemId: Scalars['String'];
  type: Scalars['String'];
};

export type SetStagedOrderLineItemTaxRate = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  lineItemId: Scalars['String'];
};

export type SetStagedOrderLineItemTaxRateOutput = StagedOrderUpdateActionOutput & {
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  lineItemId: Scalars['String'];
  type: Scalars['String'];
};

export type SetStagedOrderLineItemTotalPrice = {
  externalTotalPrice?: InputMaybe<ExternalLineItemTotalPriceDraft>;
  lineItemId: Scalars['String'];
};

export type SetStagedOrderLineItemTotalPriceOutput = StagedOrderUpdateActionOutput & {
  externalTotalPrice?: Maybe<ExternalLineItemTotalPrice>;
  lineItemId: Scalars['String'];
  type: Scalars['String'];
};

export type SetStagedOrderLocale = {
  locale?: InputMaybe<Scalars['Locale']>;
};

export type SetStagedOrderLocaleOutput = StagedOrderUpdateActionOutput & {
  locale?: Maybe<Scalars['Locale']>;
  type: Scalars['String'];
};

export type SetStagedOrderOrderNumber = {
  orderNumber?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderOrderNumberOutput = StagedOrderUpdateActionOutput & {
  orderNumber?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type SetStagedOrderOrderTotalTax = {
  externalTaxPortions?: InputMaybe<Array<TaxPortionDraft>>;
  externalTotalGross?: InputMaybe<MoneyInput>;
};

export type SetStagedOrderOrderTotalTaxOutput = StagedOrderUpdateActionOutput & {
  externalTaxPortions: Array<TaxPortion>;
  externalTotalGross?: Maybe<Money>;
  type: Scalars['String'];
};

export type SetStagedOrderParcelCustomField = {
  name: Scalars['String'];
  parcelId: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderParcelCustomFieldOutput = StagedOrderUpdateActionOutput & {
  name: Scalars['String'];
  parcelId: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderParcelCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  parcelId: Scalars['String'];
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderParcelCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  parcelId: Scalars['String'];
  type: Scalars['String'];
};

export type SetStagedOrderParcelItems = {
  items: Array<DeliveryItemDraftType>;
  parcelId: Scalars['String'];
};

export type SetStagedOrderParcelItemsOutput = StagedOrderUpdateActionOutput & {
  items: Array<DeliveryItem>;
  parcelId: Scalars['String'];
  type: Scalars['String'];
};

export type SetStagedOrderParcelMeasurements = {
  measurements?: InputMaybe<ParcelMeasurementsDraftType>;
  parcelId: Scalars['String'];
};

export type SetStagedOrderParcelMeasurementsOutput = StagedOrderUpdateActionOutput & {
  measurements?: Maybe<ParcelMeasurements>;
  parcelId: Scalars['String'];
  type: Scalars['String'];
};

export type SetStagedOrderParcelTrackingData = {
  parcelId: Scalars['String'];
  trackingData?: InputMaybe<TrackingDataDraftType>;
};

export type SetStagedOrderParcelTrackingDataOutput = StagedOrderUpdateActionOutput & {
  parcelId: Scalars['String'];
  trackingData?: Maybe<TrackingData>;
  type: Scalars['String'];
};

export type SetStagedOrderReturnInfo = {
  items?: InputMaybe<Array<ReturnInfoDraftType>>;
};

export type SetStagedOrderReturnInfoOutput = StagedOrderUpdateActionOutput & {
  items: Array<ReturnInfoDraftTypeOutput>;
  type: Scalars['String'];
};

export type SetStagedOrderReturnItemCustomField = {
  name: Scalars['String'];
  returnItemId: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderReturnItemCustomFieldOutput = StagedOrderUpdateActionOutput & {
  name: Scalars['String'];
  returnItemId: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderReturnItemCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  returnItemId: Scalars['String'];
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderReturnItemCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  returnItemId: Scalars['String'];
  type: Scalars['String'];
};

export type SetStagedOrderReturnPaymentState = {
  paymentState: ReturnPaymentState;
  returnItemId: Scalars['String'];
};

export type SetStagedOrderReturnPaymentStateOutput = StagedOrderUpdateActionOutput & {
  paymentState: ReturnPaymentState;
  returnItemId: Scalars['String'];
  type: Scalars['String'];
};

export type SetStagedOrderReturnShipmentState = {
  returnItemId: Scalars['String'];
  shipmentState: ReturnShipmentState;
};

export type SetStagedOrderReturnShipmentStateOutput = StagedOrderUpdateActionOutput & {
  returnItemId: Scalars['String'];
  shipmentState: ReturnShipmentState;
  type: Scalars['String'];
};

export type SetStagedOrderShippingAddress = {
  address?: InputMaybe<AddressInput>;
};

export type SetStagedOrderShippingAddressAndCustomShippingMethod = {
  address: AddressInput;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingMethodName: Scalars['String'];
  shippingRate: ShippingRateDraft;
  taxCategory?: InputMaybe<ResourceIdentifierInput>;
};

export type SetStagedOrderShippingAddressAndCustomShippingMethodOutput =
  StagedOrderUpdateActionOutput & {
    address: AddressDraft;
    externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
    shippingMethodName: Scalars['String'];
    shippingRate: ShippingRate;
    taxCategoryResId?: Maybe<ResourceIdentifier>;
    type: Scalars['String'];
  };

export type SetStagedOrderShippingAddressAndShippingMethod = {
  address: AddressInput;
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingMethod?: InputMaybe<ResourceIdentifierInput>;
};

export type SetStagedOrderShippingAddressAndShippingMethodOutput = StagedOrderUpdateActionOutput & {
  address: AddressDraft;
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  shippingMethodResId?: Maybe<ResourceIdentifier>;
  type: Scalars['String'];
};

export type SetStagedOrderShippingAddressCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderShippingAddressCustomFieldOutput = StagedOrderUpdateActionOutput & {
  name: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['Json']>;
};

export type SetStagedOrderShippingAddressCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetStagedOrderShippingAddressCustomTypeOutput = StagedOrderUpdateActionOutput & {
  custom: CustomFieldsCommand;
  type: Scalars['String'];
};

export type SetStagedOrderShippingAddressOutput = StagedOrderUpdateActionOutput & {
  address?: Maybe<AddressDraft>;
  type: Scalars['String'];
};

export type SetStagedOrderShippingMethod = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
  shippingMethod?: InputMaybe<ResourceIdentifierInput>;
};

export type SetStagedOrderShippingMethodOutput = StagedOrderUpdateActionOutput & {
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  shippingMethodResId?: Maybe<ResourceIdentifier>;
  type: Scalars['String'];
};

export type SetStagedOrderShippingMethodTaxAmount = {
  externalTaxAmount?: InputMaybe<ExternalTaxAmountDraft>;
};

export type SetStagedOrderShippingMethodTaxAmountOutput = StagedOrderUpdateActionOutput & {
  externalTaxAmount?: Maybe<ExternalTaxAmountDraftOutput>;
  type: Scalars['String'];
};

export type SetStagedOrderShippingMethodTaxRate = {
  externalTaxRate?: InputMaybe<ExternalTaxRateDraft>;
};

export type SetStagedOrderShippingMethodTaxRateOutput = StagedOrderUpdateActionOutput & {
  externalTaxRate?: Maybe<ExternalTaxRateDraftOutput>;
  type: Scalars['String'];
};

export type SetStagedOrderShippingRateInput = {
  shippingRateInput?: InputMaybe<ShippingRateInputDraft>;
};

export type SetStagedOrderShippingRateInputOutput = StagedOrderUpdateActionOutput & {
  shippingRateInput?: Maybe<ShippingRateInputDraftOutput>;
  type: Scalars['String'];
};

export type SetStagedOrderStore = {
  store?: InputMaybe<ResourceIdentifierInput>;
};

export type SetStagedOrderStoreOutput = StagedOrderUpdateActionOutput & {
  storeResId?: Maybe<ResourceIdentifier>;
  type: Scalars['String'];
};

export type SetStandalonePriceCustomFields = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetStateDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetStateName = {
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetStateRoles = {
  roles: Array<StateRole>;
};

export type SetStateTransitions = {
  transitions?: InputMaybe<Array<ResourceIdentifierInput>>;
};

export type SetStoreCustomField = {
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetStoreCustomType = {
  fields?: InputMaybe<Array<CustomFieldInput>>;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type SetStoreDistributionChannels = {
  distributionChannels?: InputMaybe<Array<ResourceIdentifierInput>>;
};

export type SetStoreLanguages = {
  languages?: InputMaybe<Array<Scalars['Locale']>>;
};

export type SetStoreName = {
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetStoreProductSelections = {
  productSelections?: InputMaybe<Array<ProductSelectionSettingInActionInput>>;
};

export type SetStoreSupplyChannels = {
  supplyChannels?: InputMaybe<Array<ResourceIdentifierInput>>;
};

export type SetSubscriptionChanges = {
  changes: Array<ChangeSubscriptionInput>;
};

export type SetSubscriptionKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetSubscriptionMessages = {
  messages: Array<MessageSubscriptionInput>;
};

export type SetTaxCategoryKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type SetType = FieldType & {
  elementType: FieldType;
  name: Scalars['String'];
};

export type SetTypeDescription = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetZoneDescription = {
  description?: InputMaybe<Scalars['String']>;
};

export type SetZoneKey = {
  key?: InputMaybe<Scalars['String']>;
};

export enum ShipmentState {
  Backorder = 'Backorder',
  Delayed = 'Delayed',
  Partial = 'Partial',
  Pending = 'Pending',
  Ready = 'Ready',
  Shipped = 'Shipped',
}

export type ShippingInfo = {
  deliveries: Array<Delivery>;
  discountedPrice?: Maybe<DiscountedLineItemPrice>;
  price: Money;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethodName: Scalars['String'];
  shippingMethodRef?: Maybe<Reference>;
  shippingMethodState: ShippingMethodState;
  shippingRate: ShippingRate;
  taxCategory?: Maybe<TaxCategory>;
  taxCategoryRef?: Maybe<Reference>;
  taxRate?: Maybe<TaxRate>;
  taxedPrice?: Maybe<TaxedItemPrice>;
};

export type ShippingMethod = ReferenceExpandable &
  Versioned & {
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    custom?: Maybe<CustomFieldsType>;
    id: Scalars['String'];
    isDefault: Scalars['Boolean'];
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    localizedDescription?: Maybe<Scalars['String']>;
    localizedDescriptionAllLocales?: Maybe<Array<LocalizedString>>;
    localizedName?: Maybe<Scalars['String']>;
    localizedNameAllLocales?: Maybe<Array<LocalizedString>>;
    name: Scalars['String'];
    predicate?: Maybe<Scalars['String']>;
    taxCategory?: Maybe<TaxCategory>;
    taxCategoryRef?: Maybe<Reference>;
    version: Scalars['Long'];
    zoneRates: Array<ZoneRate>;
  };

export type ShippingMethodLocalizedDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ShippingMethodLocalizedNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ShippingMethodDraft = {
  custom?: InputMaybe<CustomFieldsDraft>;
  description?: InputMaybe<Scalars['String']>;
  isDefault: Scalars['Boolean'];
  key?: InputMaybe<Scalars['String']>;
  localizedDescription?: InputMaybe<Array<LocalizedStringItemInputType>>;
  localizedName?: InputMaybe<Array<LocalizedStringItemInputType>>;
  name: Scalars['String'];
  predicate?: InputMaybe<Scalars['String']>;
  taxCategory: ResourceIdentifierInput;
  zoneRates?: InputMaybe<Array<ZoneRateDraft>>;
};

export type ShippingMethodLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long'];
  limit?: Maybe<Scalars['Long']>;
};

export type ShippingMethodLimitsProjection = {
  total: ShippingMethodLimitWithCurrent;
};

export type ShippingMethodQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<ShippingMethod>;
  total: Scalars['Long'];
};

export enum ShippingMethodState {
  /** The ShippingMethod predicate does not match the cart. Ordering this cart will fail with error ShippingMethodDoesNotMatchCart */
  DoesNotMatchCart = 'DoesNotMatchCart',
  /** Either there is no predicate defined for the ShippingMethod or the given predicate matches the cart */
  MatchesCart = 'MatchesCart',
}

export type ShippingMethodUpdateAction = {
  addShippingRate?: InputMaybe<AddShippingMethodShippingRate>;
  addZone?: InputMaybe<AddShippingMethodZone>;
  changeIsDefault?: InputMaybe<ChangeShippingMethodIsDefault>;
  changeName?: InputMaybe<ChangeShippingMethodName>;
  changeTaxCategory?: InputMaybe<ChangeShippingMethodTaxCategory>;
  removeShippingRate?: InputMaybe<RemoveShippingMethodShippingRate>;
  removeZone?: InputMaybe<RemoveShippingMethodZone>;
  setCustomField?: InputMaybe<SetShippingMethodCustomField>;
  setCustomType?: InputMaybe<SetShippingMethodCustomType>;
  setDescription?: InputMaybe<SetShippingMethodDescription>;
  setKey?: InputMaybe<SetShippingMethodKey>;
  setLocalizedDescription?: InputMaybe<SetShippingMethodLocalizedDescription>;
  setLocalizedName?: InputMaybe<SetShippingMethodLocalizedName>;
  setPredicate?: InputMaybe<SetShippingMethodPredicate>;
};

/** A field to retrieve available shipping methods for a cart. */
export type ShippingMethodsByCartInterface = {
  shippingMethodsByCart: Array<ShippingMethod>;
};

/** A field to retrieve available shipping methods for a cart. */
export type ShippingMethodsByCartInterfaceShippingMethodsByCartArgs = {
  id: Scalars['String'];
};

/** Shipping Rate */
export type ShippingRate = {
  freeAbove?: Maybe<Money>;
  isMatching?: Maybe<Scalars['Boolean']>;
  price: Money;
  tiers: Array<ShippingRatePriceTier>;
};

export type ShippingRateCartClassificationPriceTier = ShippingRatePriceTier & {
  isMatching?: Maybe<Scalars['Boolean']>;
  price: Money;
  type: Scalars['String'];
  value: Scalars['String'];
};

export type ShippingRateCartScorePriceTier = ShippingRatePriceTier & {
  isMatching?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Money>;
  priceFunction?: Maybe<PriceFunction>;
  score: Scalars['Int'];
  type: Scalars['String'];
};

export type ShippingRateCartValuePriceTier = ShippingRatePriceTier & {
  isMatching?: Maybe<Scalars['Boolean']>;
  minimumCentAmount: Scalars['Int'];
  price: Money;
  type: Scalars['String'];
};

export type ShippingRateDraft = {
  freeAbove?: InputMaybe<MoneyDraft>;
  price: MoneyDraft;
  tiers?: InputMaybe<Array<ShippingRatePriceTierDraft>>;
};

export type ShippingRateInput = {
  type: Scalars['String'];
};

export type ShippingRateInputDraft = {
  Classification?: InputMaybe<ClassificationShippingRateInputDraft>;
  Score?: InputMaybe<ScoreShippingRateInputDraft>;
};

export type ShippingRateInputDraftOutput = {
  type: Scalars['String'];
};

export type ShippingRateInputLocalizedEnumValue = {
  key: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  labelAllLocales: Array<LocalizedString>;
};

export type ShippingRateInputLocalizedEnumValueLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ShippingRateInputType = {
  type: Scalars['String'];
};

export type ShippingRateInputTypeInput = {
  CartClassification?: InputMaybe<CartClassificationInput>;
  CartScore?: InputMaybe<CartScoreInput>;
  CartValue?: InputMaybe<CartValueInput>;
};

export type ShippingRatePriceTier = {
  type: Scalars['String'];
};

export type ShippingRatePriceTierCartClassificationDraft = {
  price: MoneyDraft;
  value: Scalars['String'];
};

export type ShippingRatePriceTierCartScoreDraft = {
  price?: InputMaybe<MoneyDraft>;
  priceFunction?: InputMaybe<PriceFunctionDraft>;
  score: Scalars['Int'];
};

export type ShippingRatePriceTierCartValueDraft = {
  minimumCentAmount: Scalars['Int'];
  price: MoneyDraft;
};

export type ShippingRatePriceTierDraft = {
  CartClassification?: InputMaybe<ShippingRatePriceTierCartClassificationDraft>;
  CartScore?: InputMaybe<ShippingRatePriceTierCartScoreDraft>;
  CartValue?: InputMaybe<ShippingRatePriceTierCartValueDraft>;
};

export type ShippingTarget = CartDiscountTarget & {
  type: Scalars['String'];
};

export type ShippingTargetDraft = {
  addressKey: Scalars['String'];
  quantity: Scalars['Long'];
};

export type ShippingTargetDraftType = {
  addressKey: Scalars['String'];
  quantity: Scalars['Long'];
};

export type ShippingTargetInput = {
  dummy?: InputMaybe<Scalars['String']>;
};

export type ShoppingList = ReferenceExpandable &
  Versioned & {
    anonymousId?: Maybe<Scalars['String']>;
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    custom?: Maybe<CustomFieldsType>;
    customer?: Maybe<Customer>;
    customerRef?: Maybe<Reference>;
    deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
    description?: Maybe<Scalars['String']>;
    descriptionAllLocales?: Maybe<Array<LocalizedString>>;
    id: Scalars['String'];
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    lineItems: Array<ShoppingListLineItem>;
    name?: Maybe<Scalars['String']>;
    nameAllLocales: Array<LocalizedString>;
    slug?: Maybe<Scalars['String']>;
    slugAllLocales?: Maybe<Array<LocalizedString>>;
    store?: Maybe<Store>;
    storeRef?: Maybe<KeyReference>;
    textLineItems: Array<TextLineItem>;
    version: Scalars['Long'];
  };

export type ShoppingListDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ShoppingListNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ShoppingListSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ShoppingListDraft = {
  anonymousId?: InputMaybe<Scalars['String']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  customer?: InputMaybe<ResourceIdentifierInput>;
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']>;
  lineItems?: InputMaybe<Array<ShoppingListLineItemDraft>>;
  name: Array<LocalizedStringItemInputType>;
  slug?: InputMaybe<Array<LocalizedStringItemInputType>>;
  textLineItems?: InputMaybe<Array<TextLineItemDraft>>;
};

export type ShoppingListLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long'];
  limit?: Maybe<Scalars['Long']>;
};

export type ShoppingListLimitsProjection = {
  lineItems: Limit;
  textLineItems: Limit;
  total: ShoppingListLimitWithCurrent;
};

export type ShoppingListLineItem = {
  addedAt: Scalars['DateTime'];
  custom?: Maybe<CustomFieldsType>;
  deactivatedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  productId: Scalars['String'];
  productSlug?: Maybe<Scalars['String']>;
  productSlugAllLocales?: Maybe<Array<LocalizedString>>;
  productType: ProductTypeDefinition;
  productTypeRef: Reference;
  quantity: Scalars['Int'];
  variant?: Maybe<ProductVariant>;
  variantId?: Maybe<Scalars['Int']>;
};

export type ShoppingListLineItemNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ShoppingListLineItemProductSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ShoppingListLineItemDraft = {
  addedAt?: InputMaybe<Scalars['DateTime']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  variantId?: InputMaybe<Scalars['Int']>;
};

/** Fields to access shopping lists. Includes direct access to a single list and searching for shopping lists. */
export type ShoppingListQueryInterface = {
  shoppingList?: Maybe<ShoppingList>;
  shoppingLists: ShoppingListQueryResult;
};

/** Fields to access shopping lists. Includes direct access to a single list and searching for shopping lists. */
export type ShoppingListQueryInterfaceShoppingListArgs = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
};

/** Fields to access shopping lists. Includes direct access to a single list and searching for shopping lists. */
export type ShoppingListQueryInterfaceShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<Scalars['String']>>;
  where?: InputMaybe<Scalars['String']>;
};

export type ShoppingListQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<ShoppingList>;
  total: Scalars['Long'];
};

export type ShoppingListUpdateAction = {
  addLineItem?: InputMaybe<AddShoppingListLineItem>;
  addTextLineItem?: InputMaybe<AddShoppingListTextLineItem>;
  changeLineItemQuantity?: InputMaybe<ChangeShoppingListLineItemQuantity>;
  changeLineItemsOrder?: InputMaybe<ChangeShoppingListLineItemsOrder>;
  changeName?: InputMaybe<ChangeShoppingListName>;
  changeTextLineItemName?: InputMaybe<ChangeShoppingListTextLineItemName>;
  changeTextLineItemQuantity?: InputMaybe<ChangeShoppingListTextLineItemQuantity>;
  changeTextLineItemsOrder?: InputMaybe<ChangeShoppingListTextLineItemsOrder>;
  removeLineItem?: InputMaybe<RemoveShoppingListLineItem>;
  removeTextLineItem?: InputMaybe<RemoveShoppingListTextLineItem>;
  setAnonymousId?: InputMaybe<SetShoppingListAnonymousId>;
  setCustomField?: InputMaybe<SetShoppingListCustomField>;
  setCustomType?: InputMaybe<SetShoppingListCustomType>;
  setCustomer?: InputMaybe<SetShoppingListCustomer>;
  setDeleteDaysAfterLastModification?: InputMaybe<SetShoppingListDeleteDaysAfterLastModification>;
  setDescription?: InputMaybe<SetShoppingListDescription>;
  setKey?: InputMaybe<SetShoppingListKey>;
  setLineItemCustomField?: InputMaybe<SetShoppingListLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<SetShoppingListLineItemCustomType>;
  setSlug?: InputMaybe<SetShoppingListSlug>;
  setStore?: InputMaybe<SetShoppingListStore>;
  setTextLineItemCustomField?: InputMaybe<SetShoppingListTextLineItemCustomField>;
  setTextLineItemCustomType?: InputMaybe<SetShoppingListTextLineItemCustomType>;
  setTextLineItemDescription?: InputMaybe<SetShoppingListTextLineItemDescription>;
};

export type ShoppingListsConfiguration = {
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']>;
};

export type ShoppingListsConfigurationInput = {
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']>;
};

export type SimpleAttributeTypeDraft = {
  dummy?: InputMaybe<Scalars['String']>;
};

export type SimpleFieldTypeDraft = {
  dummy?: InputMaybe<Scalars['String']>;
};

/** Describes how this discount interacts with other discounts */
export enum StackingMode {
  /** Default. Continue applying other matching discounts after applying this one. */
  Stacking = 'Stacking',
  /** Don’t apply any more matching discounts after this one. */
  StopAfterThisDiscount = 'StopAfterThisDiscount',
}

export type StagedOrderUpdateAction = {
  addCustomLineItem?: InputMaybe<AddStagedOrderCustomLineItem>;
  addDelivery?: InputMaybe<AddStagedOrderDelivery>;
  addDiscountCode?: InputMaybe<AddStagedOrderDiscountCode>;
  addItemShippingAddress?: InputMaybe<AddStagedOrderItemShippingAddress>;
  addLineItem?: InputMaybe<AddStagedOrderLineItem>;
  addParcelToDelivery?: InputMaybe<AddStagedOrderParcelToDelivery>;
  addPayment?: InputMaybe<AddStagedOrderPayment>;
  addReturnInfo?: InputMaybe<AddStagedOrderReturnInfo>;
  addShoppingList?: InputMaybe<AddStagedOrderShoppingList>;
  changeCustomLineItemMoney?: InputMaybe<ChangeStagedOrderCustomLineItemMoney>;
  changeCustomLineItemQuantity?: InputMaybe<ChangeStagedOrderCustomLineItemQuantity>;
  changeLineItemQuantity?: InputMaybe<ChangeStagedOrderLineItemQuantity>;
  changeOrderState?: InputMaybe<ChangeStagedOrderOrderState>;
  changePaymentState?: InputMaybe<ChangeStagedOrderPaymentState>;
  changeShipmentState?: InputMaybe<ChangeStagedOrderShipmentState>;
  changeTaxCalculationMode?: InputMaybe<ChangeStagedOrderTaxCalculationMode>;
  changeTaxMode?: InputMaybe<ChangeStagedOrderTaxMode>;
  changeTaxRoundingMode?: InputMaybe<ChangeStagedOrderTaxRoundingMode>;
  importCustomLineItemState?: InputMaybe<ImportStagedOrderCustomLineItemState>;
  importLineItemState?: InputMaybe<ImportStagedOrderLineItemState>;
  recalculate?: InputMaybe<RecalculateStagedOrder>;
  removeCustomLineItem?: InputMaybe<RemoveStagedOrderCustomLineItem>;
  removeDelivery?: InputMaybe<RemoveStagedOrderDelivery>;
  removeDiscountCode?: InputMaybe<RemoveStagedOrderDiscountCode>;
  removeItemShippingAddress?: InputMaybe<RemoveStagedOrderItemShippingAddress>;
  removeLineItem?: InputMaybe<RemoveStagedOrderLineItem>;
  removeParcelFromDelivery?: InputMaybe<RemoveStagedOrderParcelFromDelivery>;
  removePayment?: InputMaybe<RemoveStagedOrderPayment>;
  setBillingAddress?: InputMaybe<SetStagedOrderBillingAddress>;
  setBillingAddressCustomField?: InputMaybe<SetStagedOrderBillingAddressCustomField>;
  setBillingAddressCustomType?: InputMaybe<SetStagedOrderBillingAddressCustomType>;
  setCountry?: InputMaybe<SetStagedOrderCountry>;
  setCustomField?: InputMaybe<SetStagedOrderCustomField>;
  setCustomLineItemCustomField?: InputMaybe<SetStagedOrderCustomLineItemCustomField>;
  setCustomLineItemCustomType?: InputMaybe<SetStagedOrderCustomLineItemCustomType>;
  setCustomLineItemShippingDetails?: InputMaybe<SetStagedOrderCustomLineItemShippingDetails>;
  setCustomLineItemTaxAmount?: InputMaybe<SetStagedOrderCustomLineItemTaxAmount>;
  setCustomLineItemTaxRate?: InputMaybe<SetStagedOrderCustomLineItemTaxRate>;
  setCustomShippingMethod?: InputMaybe<SetStagedOrderCustomShippingMethod>;
  setCustomType?: InputMaybe<SetStagedOrderCustomType>;
  setCustomerEmail?: InputMaybe<SetStagedOrderCustomerEmail>;
  setCustomerGroup?: InputMaybe<SetStagedOrderCustomerGroup>;
  setCustomerId?: InputMaybe<SetStagedOrderCustomerId>;
  setDeliveryAddress?: InputMaybe<SetStagedOrderDeliveryAddress>;
  setDeliveryAddressCustomField?: InputMaybe<SetStagedOrderDeliveryAddressCustomField>;
  setDeliveryAddressCustomType?: InputMaybe<SetStagedOrderDeliveryAddressCustomType>;
  setDeliveryCustomField?: InputMaybe<SetStagedOrderDeliveryCustomField>;
  setDeliveryCustomType?: InputMaybe<SetStagedOrderDeliveryCustomType>;
  setDeliveryItems?: InputMaybe<SetStagedOrderDeliveryItems>;
  setItemShippingAddressCustomField?: InputMaybe<SetStagedOrderItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: InputMaybe<SetStagedOrderItemShippingAddressCustomType>;
  setLineItemCustomField?: InputMaybe<SetStagedOrderLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<SetStagedOrderLineItemCustomType>;
  setLineItemDistributionChannel?: InputMaybe<SetStagedOrderLineItemDistributionChannel>;
  setLineItemPrice?: InputMaybe<SetStagedOrderLineItemPrice>;
  setLineItemShippingDetails?: InputMaybe<SetStagedOrderLineItemShippingDetails>;
  setLineItemTaxAmount?: InputMaybe<SetStagedOrderLineItemTaxAmount>;
  setLineItemTaxRate?: InputMaybe<SetStagedOrderLineItemTaxRate>;
  setLineItemTotalPrice?: InputMaybe<SetStagedOrderLineItemTotalPrice>;
  setLocale?: InputMaybe<SetStagedOrderLocale>;
  setOrderNumber?: InputMaybe<SetStagedOrderOrderNumber>;
  setOrderTotalTax?: InputMaybe<SetStagedOrderOrderTotalTax>;
  setParcelCustomField?: InputMaybe<SetStagedOrderParcelCustomField>;
  setParcelCustomType?: InputMaybe<SetStagedOrderParcelCustomType>;
  setParcelItems?: InputMaybe<SetStagedOrderParcelItems>;
  setParcelMeasurements?: InputMaybe<SetStagedOrderParcelMeasurements>;
  setParcelTrackingData?: InputMaybe<SetStagedOrderParcelTrackingData>;
  setReturnInfo?: InputMaybe<SetStagedOrderReturnInfo>;
  setReturnItemCustomField?: InputMaybe<SetStagedOrderReturnItemCustomField>;
  setReturnItemCustomType?: InputMaybe<SetStagedOrderReturnItemCustomType>;
  setReturnPaymentState?: InputMaybe<SetStagedOrderReturnPaymentState>;
  setReturnShipmentState?: InputMaybe<SetStagedOrderReturnShipmentState>;
  setShippingAddress?: InputMaybe<SetStagedOrderShippingAddress>;
  setShippingAddressAndCustomShippingMethod?: InputMaybe<SetStagedOrderShippingAddressAndCustomShippingMethod>;
  setShippingAddressAndShippingMethod?: InputMaybe<SetStagedOrderShippingAddressAndShippingMethod>;
  setShippingAddressCustomField?: InputMaybe<SetStagedOrderShippingAddressCustomField>;
  setShippingAddressCustomType?: InputMaybe<SetStagedOrderShippingAddressCustomType>;
  setShippingMethod?: InputMaybe<SetStagedOrderShippingMethod>;
  setShippingMethodTaxAmount?: InputMaybe<SetStagedOrderShippingMethodTaxAmount>;
  setShippingMethodTaxRate?: InputMaybe<SetStagedOrderShippingMethodTaxRate>;
  setShippingRateInput?: InputMaybe<SetStagedOrderShippingRateInput>;
  setStore?: InputMaybe<SetStagedOrderStore>;
  transitionCustomLineItemState?: InputMaybe<TransitionStagedOrderCustomLineItemState>;
  transitionLineItemState?: InputMaybe<TransitionStagedOrderLineItemState>;
  transitionState?: InputMaybe<TransitionStagedOrderState>;
  updateItemShippingAddress?: InputMaybe<UpdateStagedOrderItemShippingAddress>;
  updateSyncInfo?: InputMaybe<UpdateStagedOrderSyncInfo>;
};

export type StagedOrderUpdateActionOutput = {
  type: Scalars['String'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type StandalonePrice = Versioned & {
  channelRef?: Maybe<Reference>;
  country?: Maybe<Scalars['Country']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  custom?: Maybe<CustomFieldsType>;
  customerGroupRef?: Maybe<Reference>;
  discounted?: Maybe<DiscountedProductPriceValue>;
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  lastModifiedAt: Scalars['DateTime'];
  lastModifiedBy?: Maybe<Initiator>;
  sku: Scalars['String'];
  tiers?: Maybe<Array<ProductPriceTier>>;
  validFrom?: Maybe<Scalars['DateTime']>;
  validUntil?: Maybe<Scalars['DateTime']>;
  value: BaseMoney;
  version: Scalars['Long'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type StandalonePriceCustomField = {
  fields: CustomFieldsDraft;
  type?: InputMaybe<ResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']>;
  typeKey?: InputMaybe<Scalars['String']>;
};

export type StandalonePriceQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<StandalonePrice>;
  total: Scalars['Long'];
};

export type StandalonePriceUpdateAction = {
  changeValue?: InputMaybe<ChangeStandalonePriceValue>;
  setCustomField?: InputMaybe<SetStandalonePriceCustomFields>;
  setCustomType?: InputMaybe<CustomFieldsDraft>;
};

/** [State](https://docs.commercetools.com/api/projects/states) */
export type State = ReferenceExpandable &
  Versioned & {
    builtIn: Scalars['Boolean'];
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    description?: Maybe<Scalars['String']>;
    descriptionAllLocales?: Maybe<Array<LocalizedString>>;
    id: Scalars['String'];
    initial: Scalars['Boolean'];
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    name?: Maybe<Scalars['String']>;
    nameAllLocales?: Maybe<Array<LocalizedString>>;
    roles: Array<StateRole>;
    transitions?: Maybe<Array<State>>;
    transitionsRef?: Maybe<Array<Reference>>;
    type: StateType;
    version: Scalars['Long'];
  };

/** [State](https://docs.commercetools.com/api/projects/states) */
export type StateDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

/** [State](https://docs.commercetools.com/api/projects/states) */
export type StateNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type StateDraft = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  initial?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
  name?: InputMaybe<Array<LocalizedStringItemInputType>>;
  roles?: InputMaybe<Array<StateRole>>;
  transitions?: InputMaybe<Array<ReferenceInput>>;
  type: StateType;
};

export type StateQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<State>;
  total: Scalars['Long'];
};

export enum StateRole {
  Return = 'Return',
  ReviewIncludedInStatistics = 'ReviewIncludedInStatistics',
}

export enum StateType {
  LineItemState = 'LineItemState',
  OrderState = 'OrderState',
  PaymentState = 'PaymentState',
  ProductState = 'ProductState',
  ReviewState = 'ReviewState',
}

export type StateUpdateAction = {
  addRoles?: InputMaybe<AddStateRoles>;
  changeInitial?: InputMaybe<ChangeStateInitial>;
  changeKey?: InputMaybe<ChangeStateKey>;
  changeType?: InputMaybe<ChangeStateType>;
  removeRoles?: InputMaybe<RemoveStateRoles>;
  setDescription?: InputMaybe<SetStateDescription>;
  setName?: InputMaybe<SetStateName>;
  setRoles?: InputMaybe<SetStateRoles>;
  setTransitions?: InputMaybe<SetStateTransitions>;
};

/** Stores allow defining different contexts for a project. */
export type Store = ReferenceExpandable &
  Versioned & {
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    custom?: Maybe<CustomFieldsType>;
    distributionChannels: Array<Channel>;
    distributionChannelsRef: Array<Reference>;
    id: Scalars['String'];
    key: Scalars['String'];
    languages?: Maybe<Array<Scalars['Locale']>>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    name?: Maybe<Scalars['String']>;
    nameAllLocales?: Maybe<Array<LocalizedString>>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    productSelections: Array<ProductSelectionSetting>;
    supplyChannels: Array<Channel>;
    supplyChannelsRef: Array<Reference>;
    version: Scalars['Long'];
  };

/** Stores allow defining different contexts for a project. */
export type StoreNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type StoreCreated = MessagePayload & {
  custom?: Maybe<CustomFieldsType>;
  distributionChannels: Array<Channel>;
  distributionChannelsRef: Array<Reference>;
  languages: Array<Scalars['Locale']>;
  name?: Maybe<Scalars['String']>;
  nameAllLocales?: Maybe<Array<LocalizedString>>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  productSelections: Array<ProductSelectionSetting>;
  productSelectionsRef: Array<Reference>;
  supplyChannels: Array<Channel>;
  supplyChannelsRef: Array<Reference>;
  type: Scalars['String'];
};

export type StoreCreatedNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type StoreDeleted = MessagePayload & {
  type: Scalars['String'];
};

export type StoreLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long'];
  limit?: Maybe<Scalars['Long']>;
};

export type StoreLimitsProjection = {
  inventorySupplyChannels: Limit;
  productDistributionChannels: Limit;
  total: StoreLimitWithCurrent;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type StoreProductSelectionsChanged = MessagePayload & {
  addedProductSelections?: Maybe<Array<ProductSelectionSetting>>;
  removedProductSelections?: Maybe<Array<ProductSelectionSetting>>;
  type: Scalars['String'];
  updatedProductSelections?: Maybe<Array<ProductSelectionSetting>>;
};

export type StoreQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<Store>;
  total: Scalars['Long'];
};

export type StoreUpdateAction = {
  addDistributionChannel?: InputMaybe<AddStoreDistributionChannel>;
  addProductSelection?: InputMaybe<AddStoreProductSelection>;
  addSupplyChannel?: InputMaybe<AddStoreSupplyChannel>;
  changeProductSelectionActive?: InputMaybe<ChangeStoreProductSelectionActive>;
  removeDistributionChannel?: InputMaybe<RemoveStoreDistributionChannel>;
  removeProductSelection?: InputMaybe<RemoveStoreProductSelection>;
  removeSupplyChannel?: InputMaybe<RemoveStoreSupplyChannel>;
  setCustomField?: InputMaybe<SetStoreCustomField>;
  setCustomType?: InputMaybe<SetStoreCustomType>;
  setDistributionChannels?: InputMaybe<SetStoreDistributionChannels>;
  setLanguages?: InputMaybe<SetStoreLanguages>;
  setName?: InputMaybe<SetStoreName>;
  setProductSelections?: InputMaybe<SetStoreProductSelections>;
  setSupplyChannels?: InputMaybe<SetStoreSupplyChannels>;
};

export type StringAttribute = Attribute & {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type StringField = CustomField & {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type StringType = FieldType & {
  name: Scalars['String'];
};

export type SubRate = {
  amount: Scalars['Float'];
  name: Scalars['String'];
};

export type SubRateDraft = {
  amount: Scalars['Float'];
  name: Scalars['String'];
};

export type SubscriptionDraft = {
  changes?: InputMaybe<Array<ChangeSubscriptionInput>>;
  destination: DestinationInput;
  format?: InputMaybe<SubscriptionFormatInput>;
  key?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Array<MessageSubscriptionInput>>;
};

export type SubscriptionFormatInput = {
  CloudEvents?: InputMaybe<CloudEventsSubscriptionsFormatInput>;
  Platform?: InputMaybe<PlatformFormatInput>;
};

export enum SubscriptionHealthStatus {
  ConfigurationError = 'ConfigurationError',
  ConfigurationErrorDeliveryStopped = 'ConfigurationErrorDeliveryStopped',
  Healthy = 'Healthy',
  TemporaryError = 'TemporaryError',
}

export type SubscriptionUpdateAction = {
  changeDestination?: InputMaybe<ChangeSubscriptionDestination>;
  setChanges?: InputMaybe<SetSubscriptionChanges>;
  setKey?: InputMaybe<SetSubscriptionKey>;
  setMessages?: InputMaybe<SetSubscriptionMessages>;
};

export type SuggestResult = {
  searchKeywords: Array<SuggestResultEntry>;
};

export type SuggestResultEntry = {
  locale: Scalars['Locale'];
  suggestions: Array<Suggestion>;
};

export type SuggestTokenizer = {
  type: Scalars['String'];
};

export type SuggestTokenizerProductSearch = {
  type: Scalars['String'];
};

export type Suggestion = {
  text: Scalars['String'];
};

/** Stores information about order synchronization activities (like export or import). */
export type SyncInfo = {
  channel?: Maybe<Channel>;
  channelRef: Reference;
  externalId?: Maybe<Scalars['String']>;
  syncedAt: Scalars['DateTime'];
};

export type TargetReferenceInput = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  typeId: Scalars['String'];
};

export enum TaxCalculationMode {
  /**
   * Default. This calculation mode calculates the taxes after the unit price is multiplied with the quantity.
   * E.g. `($1.08 * 3 = $3.24) * 1.19 = $3.8556 -> $3.86 rounded`
   */
  LineItemLevel = 'LineItemLevel',
  /**
   * This calculation mode calculates the taxes on the unit price before multiplying with the quantity.
   * E.g. `($1.08 * 1.19 = $1.2852 -> $1.29 rounded) * 3 = $3.87`
   */
  UnitPriceLevel = 'UnitPriceLevel',
}

/** Tax Categories define how products are to be taxed in different countries. */
export type TaxCategory = ReferenceExpandable &
  Versioned & {
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    description?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    name: Scalars['String'];
    rates: Array<TaxRate>;
    version: Scalars['Long'];
  };

export type TaxCategoryAddTaxRate = {
  taxRate: TaxRateDraft;
};

export type TaxCategoryChangeName = {
  name: Scalars['String'];
};

export type TaxCategoryDraft = {
  description?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  rates?: InputMaybe<Array<TaxRateDraft>>;
};

export type TaxCategoryLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long'];
  limit?: Maybe<Scalars['Long']>;
};

export type TaxCategoryLimitsProjection = {
  total: TaxCategoryLimitWithCurrent;
};

export type TaxCategoryQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<TaxCategory>;
  total: Scalars['Long'];
};

export type TaxCategoryRemoveTaxRate = {
  taxRateId: Scalars['String'];
};

export type TaxCategoryReplaceTaxRate = {
  taxRate: TaxRateDraft;
  taxRateId: Scalars['String'];
};

export type TaxCategorySetDescription = {
  description?: InputMaybe<Scalars['String']>;
};

export type TaxCategoryUpdateAction = {
  addTaxRate?: InputMaybe<TaxCategoryAddTaxRate>;
  changeName?: InputMaybe<TaxCategoryChangeName>;
  removeTaxRate?: InputMaybe<TaxCategoryRemoveTaxRate>;
  replaceTaxRate?: InputMaybe<TaxCategoryReplaceTaxRate>;
  setDescription?: InputMaybe<TaxCategorySetDescription>;
  setKey?: InputMaybe<SetTaxCategoryKey>;
};

export enum TaxMode {
  /** No taxes are added to the cart. */
  Disabled = 'Disabled',
  /**
   * The tax rates are set externally per ExternalTaxRateDraft. A cart with this tax mode can only be ordered if all
   * line items, all custom line items and the shipping method have an external tax rate set. The totalNet and
   * totalGross as well as the taxPortions fields are calculated by the platform according to the taxRoundingMode.
   */
  External = 'External',
  /**
   * The tax amounts and the tax rates as well as the tax portions are set externally per ExternalTaxAmountDraft.
   * A cart with this tax mode can only be ordered if the cart itself and all line items, all custom line items and
   * the shipping method have an external tax amount and rate set
   */
  ExternalAmount = 'ExternalAmount',
  /**
   * The tax rates are selected by the platform from the TaxCategories based on the cart shipping address.
   * The totalNet and totalGross as well as the taxPortions fields are calculated by the platform according to the
   * taxRoundingMode.
   */
  Platform = 'Platform',
}

/**
 * Represents the portions that sum up to the totalGross field of a TaxedPrice. The portions are calculated
 * from the TaxRates. If a tax rate has SubRates, they are used and can be identified by name. Tax portions
 * from line items that have the same rate and name will be accumulated to the same tax portion.
 */
export type TaxPortion = {
  amount: Money;
  name?: Maybe<Scalars['String']>;
  rate: Scalars['Float'];
};

export type TaxPortionDraft = {
  amount: MoneyInput;
  name?: InputMaybe<Scalars['String']>;
  rate: Scalars['Float'];
};

export type TaxRate = {
  amount: Scalars['Float'];
  country: Scalars['Country'];
  id?: Maybe<Scalars['String']>;
  includedInPrice: Scalars['Boolean'];
  name: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  subRates: Array<SubRate>;
};

export type TaxRateDraft = {
  amount?: InputMaybe<Scalars['Float']>;
  country: Scalars['Country'];
  includedInPrice: Scalars['Boolean'];
  name: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
  subRates?: InputMaybe<Array<SubRateDraft>>;
};

export type TaxedItemPrice = {
  totalGross: Money;
  totalNet: Money;
  totalTax?: Maybe<Money>;
};

export type TaxedPrice = {
  taxPortions: Array<TaxPortion>;
  totalGross: Money;
  totalNet: Money;
  totalTax?: Maybe<Money>;
};

export type TermCount = {
  count: Scalars['Int'];
  productCount?: Maybe<Scalars['Int']>;
  term: Scalars['String'];
};

export type TermsFacetInput = {
  alias?: InputMaybe<Scalars['String']>;
  countProducts?: Scalars['Boolean'];
  path: Scalars['String'];
};

export type TermsFacetResult = FacetResult & {
  dataType: Scalars['String'];
  missing: Scalars['Int'];
  other: Scalars['Int'];
  terms: Array<TermCount>;
  total: Scalars['Int'];
  type: Scalars['String'];
};

export type TextAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};

/** UI hint telling what kind of edit control should be displayed for a text attribute. */
export enum TextInputHint {
  MultiLine = 'MultiLine',
  SingleLine = 'SingleLine',
}

export type TextLineItem = {
  addedAt: Scalars['DateTime'];
  custom?: Maybe<CustomFieldsType>;
  description?: Maybe<Scalars['String']>;
  descriptionAllLocales?: Maybe<Array<LocalizedString>>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  nameAllLocales: Array<LocalizedString>;
  quantity: Scalars['Int'];
};

export type TextLineItemDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type TextLineItemNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type TextLineItemDraft = {
  addedAt?: InputMaybe<Scalars['DateTime']>;
  custom?: InputMaybe<CustomFieldsDraft>;
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  name: Array<LocalizedStringItemInputType>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type TimeAttribute = Attribute & {
  name: Scalars['String'];
  value: Scalars['Time'];
};

export type TimeAttributeDefinitionType = AttributeDefinitionType & {
  name: Scalars['String'];
};

export type TimeField = CustomField & {
  name: Scalars['String'];
  value: Scalars['Time'];
};

export type TimeType = FieldType & {
  name: Scalars['String'];
};

export type TrackingData = {
  carrier?: Maybe<Scalars['String']>;
  isReturn: Scalars['Boolean'];
  provider?: Maybe<Scalars['String']>;
  providerTransaction?: Maybe<Scalars['String']>;
  trackingId?: Maybe<Scalars['String']>;
};

export type TrackingDataDraftType = {
  carrier?: InputMaybe<Scalars['String']>;
  isReturn?: InputMaybe<Scalars['Boolean']>;
  provider?: InputMaybe<Scalars['String']>;
  providerTransaction?: InputMaybe<Scalars['String']>;
  trackingId?: InputMaybe<Scalars['String']>;
};

export type Transaction = {
  amount: Money;
  custom?: Maybe<CustomFieldsType>;
  id: Scalars['String'];
  interactionId?: Maybe<Scalars['String']>;
  state: TransactionState;
  timestamp?: Maybe<Scalars['DateTime']>;
  type?: Maybe<TransactionType>;
};

export type TransactionDraft = {
  amount: MoneyInput;
  custom?: InputMaybe<CustomFieldsDraft>;
  interactionId?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<TransactionState>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
  type: TransactionType;
};

export enum TransactionState {
  Failure = 'Failure',
  Initial = 'Initial',
  Pending = 'Pending',
  Success = 'Success',
}

export enum TransactionType {
  Authorization = 'Authorization',
  CancelAuthorization = 'CancelAuthorization',
  Charge = 'Charge',
  Chargeback = 'Chargeback',
  Refund = 'Refund',
}

export type TransitionOrderCustomLineItemState = {
  actualTransitionDate?: InputMaybe<Scalars['DateTime']>;
  customLineItemId: Scalars['String'];
  fromState: ResourceIdentifierInput;
  quantity: Scalars['Long'];
  toState: ResourceIdentifierInput;
};

export type TransitionOrderLineItemState = {
  actualTransitionDate?: InputMaybe<Scalars['DateTime']>;
  fromState: ResourceIdentifierInput;
  lineItemId: Scalars['String'];
  quantity: Scalars['Long'];
  toState: ResourceIdentifierInput;
};

export type TransitionOrderState = {
  force?: InputMaybe<Scalars['Boolean']>;
  state: ResourceIdentifierInput;
};

export type TransitionPaymentState = {
  force?: InputMaybe<Scalars['Boolean']>;
  state: ResourceIdentifierInput;
};

export type TransitionProductState = {
  force?: InputMaybe<Scalars['Boolean']>;
  state: ReferenceInput;
};

export type TransitionReviewState = {
  force?: InputMaybe<Scalars['Boolean']>;
  state: ResourceIdentifierInput;
};

export type TransitionStagedOrderCustomLineItemState = {
  actualTransitionDate?: InputMaybe<Scalars['DateTime']>;
  customLineItemId: Scalars['String'];
  fromState: ResourceIdentifierInput;
  quantity: Scalars['Long'];
  toState: ResourceIdentifierInput;
};

export type TransitionStagedOrderCustomLineItemStateOutput = StagedOrderUpdateActionOutput & {
  actualTransitionDate?: Maybe<Scalars['DateTime']>;
  customLineItemId: Scalars['String'];
  fromStateResId: ResourceIdentifier;
  quantity: Scalars['Long'];
  toStateResId: ResourceIdentifier;
  type: Scalars['String'];
};

export type TransitionStagedOrderLineItemState = {
  actualTransitionDate?: InputMaybe<Scalars['DateTime']>;
  fromState: ResourceIdentifierInput;
  lineItemId: Scalars['String'];
  quantity: Scalars['Long'];
  toState: ResourceIdentifierInput;
};

export type TransitionStagedOrderLineItemStateOutput = StagedOrderUpdateActionOutput & {
  actualTransitionDate?: Maybe<Scalars['DateTime']>;
  fromStateResId: ResourceIdentifier;
  lineItemId: Scalars['String'];
  quantity: Scalars['Long'];
  toStateResId: ResourceIdentifier;
  type: Scalars['String'];
};

export type TransitionStagedOrderState = {
  force?: InputMaybe<Scalars['Boolean']>;
  state: ResourceIdentifierInput;
};

export type TransitionStagedOrderStateOutput = StagedOrderUpdateActionOutput & {
  force: Scalars['Boolean'];
  stateResId: ResourceIdentifier;
  type: Scalars['String'];
};

export type TreeFilterInput = {
  path: Scalars['String'];
  rootValues: Array<Scalars['String']>;
  subTreeValues: Array<Scalars['String']>;
};

export type Trigger = {
  actions: Array<ActionType>;
  condition?: Maybe<Scalars['String']>;
  resourceTypeId: Scalars['String'];
};

export type TriggerInput = {
  actions?: InputMaybe<Array<ActionType>>;
  condition?: InputMaybe<Scalars['String']>;
  resourceTypeId: Scalars['String'];
};

/** Types define the structure of custom fields which can be attached to different entities throughout the platform. */
export type TypeDefinition = ReferenceExpandable &
  Versioned & {
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    description?: Maybe<Scalars['String']>;
    descriptionAllLocales?: Maybe<Array<LocalizedString>>;
    fieldDefinitions: Array<FieldDefinition>;
    id: Scalars['String'];
    key: Scalars['String'];
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    name?: Maybe<Scalars['String']>;
    nameAllLocales: Array<LocalizedString>;
    resourceTypeIds: Array<Scalars['String']>;
    version: Scalars['Long'];
  };

/** Types define the structure of custom fields which can be attached to different entities throughout the platform. */
export type TypeDefinitionDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

/** Types define the structure of custom fields which can be attached to different entities throughout the platform. */
export type TypeDefinitionFieldDefinitionsArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']>>;
  includeNames?: InputMaybe<Array<Scalars['String']>>;
};

/** Types define the structure of custom fields which can be attached to different entities throughout the platform. */
export type TypeDefinitionNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type TypeDefinitionDraft = {
  description?: InputMaybe<Array<LocalizedStringItemInputType>>;
  fieldDefinitions?: InputMaybe<Array<FieldDefinitionInput>>;
  key: Scalars['String'];
  name: Array<LocalizedStringItemInputType>;
  resourceTypeIds: Array<Scalars['String']>;
};

export type TypeDefinitionQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<TypeDefinition>;
  total: Scalars['Long'];
};

export type TypeUpdateAction = {
  addEnumValue?: InputMaybe<AddTypeEnumValue>;
  addFieldDefinition?: InputMaybe<AddTypeFieldDefinition>;
  addLocalizedEnumValue?: InputMaybe<AddTypeLocalizedEnumValue>;
  changeEnumValueLabel?: InputMaybe<ChangeTypeEnumValueLabel>;
  changeEnumValueOrder?: InputMaybe<ChangeTypeEnumValueOrder>;
  changeFieldDefinitionOrder?: InputMaybe<ChangeTypeFieldDefinitionOrder>;
  changeInputHint?: InputMaybe<ChangeTypeInputHint>;
  changeKey?: InputMaybe<ChangeTypeKey>;
  changeLabel?: InputMaybe<ChangeTypeLabel>;
  changeLocalizedEnumValueLabel?: InputMaybe<ChangeTypeLocalizedEnumValueLabel>;
  changeLocalizedEnumValueOrder?: InputMaybe<ChangeTypeLocalizedEnumValueOrder>;
  changeName?: InputMaybe<ChangeTypeName>;
  removeFieldDefinition?: InputMaybe<RemoveTypeFieldDefinition>;
  setDescription?: InputMaybe<SetTypeDescription>;
};

export type UnpublishProduct = {
  dummy?: InputMaybe<Scalars['String']>;
};

export type UpdateCartItemShippingAddress = {
  address: AddressInput;
};

export type UpdateOrderItemShippingAddress = {
  address: AddressInput;
};

export type UpdateOrderSyncInfo = {
  channel: ResourceIdentifierInput;
  externalId?: InputMaybe<Scalars['String']>;
  syncedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateStagedOrderItemShippingAddress = {
  address: AddressInput;
};

export type UpdateStagedOrderItemShippingAddressOutput = StagedOrderUpdateActionOutput & {
  address: AddressDraft;
  type: Scalars['String'];
};

export type UpdateStagedOrderSyncInfo = {
  channel: ResourceIdentifierInput;
  externalId?: InputMaybe<Scalars['String']>;
  syncedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateStagedOrderSyncInfoOutput = StagedOrderUpdateActionOutput & {
  channelResId: ChannelReferenceIdentifier;
  externalId?: Maybe<Scalars['String']>;
  syncedAt?: Maybe<Scalars['DateTime']>;
  type: Scalars['String'];
};

export type UserProvidedIdentifiers = {
  customerNumber?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  slugAllLocales?: Maybe<Array<LocalizedString>>;
};

export type UserProvidedIdentifiersSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']>>;
  locale?: InputMaybe<Scalars['Locale']>;
};

export type ValueFacetResult = FacetResult & {
  count: Scalars['Int'];
  productCount?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
};

export type ValueFilterInput = {
  path: Scalars['String'];
  values: Array<Scalars['String']>;
};

/** Versioned object have an ID and version and modification. Every update of this object changes it's version. */
export type Versioned = {
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Initiator>;
  id: Scalars['String'];
  lastModifiedAt: Scalars['DateTime'];
  lastModifiedBy?: Maybe<Initiator>;
  version: Scalars['Long'];
};

export type WhitespaceSuggestTokenizer = SuggestTokenizer & {
  type: Scalars['String'];
};

export type WhitespaceSuggestTokenizerInput = {
  dummy?: InputMaybe<Scalars['String']>;
};

export type WhitespaceSuggestTokenizerProductSearch = SuggestTokenizerProductSearch & {
  type: Scalars['String'];
};

/** Zones allow defining ShippingRates for specific Locations. */
export type Zone = ReferenceExpandable &
  Versioned & {
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Initiator>;
    description?: Maybe<Scalars['String']>;
    id: Scalars['String'];
    key?: Maybe<Scalars['String']>;
    lastModifiedAt: Scalars['DateTime'];
    lastModifiedBy?: Maybe<Initiator>;
    locations: Array<Location>;
    name: Scalars['String'];
    version: Scalars['Long'];
  };

export type ZoneLimitWithCurrent = LimitWithCurrent & {
  current: Scalars['Long'];
  limit?: Maybe<Scalars['Long']>;
};

export type ZoneLimitsProjection = {
  total: ZoneLimitWithCurrent;
};

export type ZoneLocation = {
  country: Scalars['Country'];
  state?: InputMaybe<Scalars['String']>;
};

export type ZoneQueryResult = {
  count: Scalars['Int'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  exists: Scalars['Boolean'];
  offset: Scalars['Int'];
  results: Array<Zone>;
  total: Scalars['Long'];
};

export type ZoneRate = {
  shippingRates: Array<ShippingRate>;
  zone?: Maybe<Zone>;
  zoneRef?: Maybe<Reference>;
};

export type ZoneRateDraft = {
  shippingRates?: InputMaybe<Array<ShippingRateDraft>>;
  zone: ResourceIdentifierInput;
};

export type ZoneUpdateAction = {
  addLocation?: InputMaybe<AddZoneLocation>;
  changeName?: InputMaybe<ChangeZoneName>;
  removeLocation?: InputMaybe<RemoveZoneLocation>;
  setDescription?: InputMaybe<SetZoneDescription>;
  setKey?: InputMaybe<SetZoneKey>;
};

export type AddAttributeDefinition = {
  attributeDefinition: AttributeDefinitionDraft;
};

export type AddLocalizedEnumValue = {
  attributeName: Scalars['String'];
  value: LocalizedEnumValueDraft;
};

export type AddPlainEnumValue = {
  attributeName: Scalars['String'];
  value: PlainEnumValueDraft;
};

export type ChangeAttributeName = {
  attributeName: Scalars['String'];
  newAttributeName: Scalars['String'];
};

export type ChangeAttributeOrder = {
  attributeDefinitions: Array<AttributeDefinitionDraft>;
};

export type ChangeAttributeOrderByName = {
  attributeNames: Array<Scalars['String']>;
};

export type ChangeDescription = {
  description: Scalars['String'];
};

export type ChangeEnumKey = {
  attributeName: Scalars['String'];
  key: Scalars['String'];
  newKey: Scalars['String'];
};

export type ChangeInputHint = {
  attributeName: Scalars['String'];
  newValue: TextInputHint;
};

export type ChangeIsSearchable = {
  attributeName: Scalars['String'];
  isSearchable: Scalars['Boolean'];
};

export type ChangeLabel = {
  attributeName: Scalars['String'];
  label: Array<LocalizedStringItemInputType>;
};

export type ChangeLocalizedEnumValueLabel = {
  attributeName: Scalars['String'];
  newValue: LocalizedEnumValueDraft;
};

export type ChangeLocalizedEnumValueOrder = {
  attributeName: Scalars['String'];
  values: Array<LocalizedEnumValueDraft>;
};

export type ChangeName = {
  name: Scalars['String'];
};

export type ChangePlainEnumValueLabel = {
  attributeName: Scalars['String'];
  newValue: PlainEnumValueDraft;
};

export type ChangePlainEnumValueOrder = {
  attributeName: Scalars['String'];
  values: Array<PlainEnumValueDraft>;
};

export type RemoveAttributeDefinition = {
  name: Scalars['String'];
};

export type RemoveEnumValues = {
  attributeName: Scalars['String'];
  keys: Array<Scalars['String']>;
};

export type SetInputTip = {
  attributeName: Scalars['String'];
  inputTip?: InputMaybe<Array<LocalizedStringItemInputType>>;
};

export type SetKey = {
  key?: InputMaybe<Scalars['String']>;
};

export type LocalizedStringFieldsFragment = { locale: any; value: string };

export type ShoppingListFieldsFragment = {
  id: string;
  version: any;
  key?: string | null;
  nameAllLocales: Array<{ locale: any; value: string }>;
};

export type UpdateChannelDetailsMutationVariables = Exact<{
  channelId: Scalars['String'];
  version: Scalars['Long'];
  actions: Array<ChannelUpdateAction> | ChannelUpdateAction;
}>;

export type UpdateChannelDetailsMutation = {
  updateChannel?: {
    id: string;
    version: any;
    key: string;
    roles: Array<ChannelRole>;
    nameAllLocales?: Array<{ locale: any; value: string }> | null;
  } | null;
};

export type CreateShoppingListMutationVariables = Exact<{
  draft: ShoppingListDraft;
}>;

export type CreateShoppingListMutation = { createShoppingList?: { id: string } | null };

export type DeleteShoppingListMutationVariables = Exact<{
  version: Scalars['Long'];
  id: Scalars['String'];
}>;

export type DeleteShoppingListMutation = {
  deleteShoppingList?: { id: string; version: any } | null;
};

export type UpdateShoppingListMutationVariables = Exact<{
  version: Scalars['Long'];
  id: Scalars['String'];
  actions: Array<ShoppingListUpdateAction> | ShoppingListUpdateAction;
}>;

export type UpdateShoppingListMutation = {
  updateShoppingList?: {
    id: string;
    version: any;
    key?: string | null;
    nameAllLocales: Array<{ locale: any; value: string }>;
  } | null;
};

export type FetchChannelDetailsQueryVariables = Exact<{
  channelId: Scalars['String'];
}>;

export type FetchChannelDetailsQuery = {
  channel?: {
    id: string;
    version: any;
    key: string;
    roles: Array<ChannelRole>;
    nameAllLocales?: Array<{ locale: any; value: string }> | null;
  } | null;
};

export type FetchChannelsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;

export type FetchChannelsQuery = {
  channels: {
    total: any;
    count: number;
    offset: number;
    results: Array<{
      id: string;
      key: string;
      roles: Array<ChannelRole>;
      nameAllLocales?: Array<{ locale: any; value: string }> | null;
    }>;
  };
};

export type FetchShoppingListDetailsQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type FetchShoppingListDetailsQuery = {
  shoppingList?: {
    id: string;
    version: any;
    key?: string | null;
    nameAllLocales: Array<{ locale: any; value: string }>;
  } | null;
};

export type FetchShoppingListsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  sort?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;

export type FetchShoppingListsQuery = {
  shoppingLists: {
    total: any;
    results: Array<{
      id: string;
      version: any;
      key?: string | null;
      nameAllLocales: Array<{ locale: any; value: string }>;
    }>;
  };
};

export const LocalizedStringFieldsFragmentDoc = gql`
  fragment localizedStringFields on LocalizedString {
    locale
    value
  }
`;
export const ShoppingListFieldsFragmentDoc = gql`
  fragment shoppingListFields on ShoppingList {
    id
    version
    key
    nameAllLocales {
      ...localizedStringFields
    }
  }
  ${LocalizedStringFieldsFragmentDoc}
`;
export const UpdateChannelDetailsDocument = gql`
  mutation UpdateChannelDetails(
    $channelId: String!
    $version: Long!
    $actions: [ChannelUpdateAction!]!
  ) {
    updateChannel(id: $channelId, version: $version, actions: $actions) {
      id
      version
      key
      roles
      nameAllLocales {
        locale
        value
      }
    }
  }
`;
export type UpdateChannelDetailsMutationFn = Apollo.MutationFunction<
  UpdateChannelDetailsMutation,
  UpdateChannelDetailsMutationVariables
>;

/**
 * __useUpdateChannelDetailsMutation__
 *
 * To run a mutation, you first call `useUpdateChannelDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateChannelDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateChannelDetailsMutation, { data, loading, error }] = useUpdateChannelDetailsMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      version: // value for 'version'
 *      actions: // value for 'actions'
 *   },
 * });
 */
export function useUpdateChannelDetailsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateChannelDetailsMutation,
    UpdateChannelDetailsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateChannelDetailsMutation, UpdateChannelDetailsMutationVariables>(
    UpdateChannelDetailsDocument,
    options,
  );
}
export type UpdateChannelDetailsMutationHookResult = ReturnType<
  typeof useUpdateChannelDetailsMutation
>;
export type UpdateChannelDetailsMutationResult =
  Apollo.MutationResult<UpdateChannelDetailsMutation>;
export type UpdateChannelDetailsMutationOptions = Apollo.BaseMutationOptions<
  UpdateChannelDetailsMutation,
  UpdateChannelDetailsMutationVariables
>;
export const CreateShoppingListDocument = gql`
  mutation CreateShoppingList($draft: ShoppingListDraft!) {
    createShoppingList(draft: $draft) {
      id
    }
  }
`;
export type CreateShoppingListMutationFn = Apollo.MutationFunction<
  CreateShoppingListMutation,
  CreateShoppingListMutationVariables
>;

/**
 * __useCreateShoppingListMutation__
 *
 * To run a mutation, you first call `useCreateShoppingListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShoppingListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShoppingListMutation, { data, loading, error }] = useCreateShoppingListMutation({
 *   variables: {
 *      draft: // value for 'draft'
 *   },
 * });
 */
export function useCreateShoppingListMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateShoppingListMutation,
    CreateShoppingListMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateShoppingListMutation, CreateShoppingListMutationVariables>(
    CreateShoppingListDocument,
    options,
  );
}
export type CreateShoppingListMutationHookResult = ReturnType<typeof useCreateShoppingListMutation>;
export type CreateShoppingListMutationResult = Apollo.MutationResult<CreateShoppingListMutation>;
export type CreateShoppingListMutationOptions = Apollo.BaseMutationOptions<
  CreateShoppingListMutation,
  CreateShoppingListMutationVariables
>;
export const DeleteShoppingListDocument = gql`
  mutation DeleteShoppingList($version: Long!, $id: String!) {
    deleteShoppingList(version: $version, id: $id) {
      id
      version
    }
  }
`;
export type DeleteShoppingListMutationFn = Apollo.MutationFunction<
  DeleteShoppingListMutation,
  DeleteShoppingListMutationVariables
>;

/**
 * __useDeleteShoppingListMutation__
 *
 * To run a mutation, you first call `useDeleteShoppingListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShoppingListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShoppingListMutation, { data, loading, error }] = useDeleteShoppingListMutation({
 *   variables: {
 *      version: // value for 'version'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteShoppingListMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteShoppingListMutation,
    DeleteShoppingListMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteShoppingListMutation, DeleteShoppingListMutationVariables>(
    DeleteShoppingListDocument,
    options,
  );
}
export type DeleteShoppingListMutationHookResult = ReturnType<typeof useDeleteShoppingListMutation>;
export type DeleteShoppingListMutationResult = Apollo.MutationResult<DeleteShoppingListMutation>;
export type DeleteShoppingListMutationOptions = Apollo.BaseMutationOptions<
  DeleteShoppingListMutation,
  DeleteShoppingListMutationVariables
>;
export const UpdateShoppingListDocument = gql`
  mutation UpdateShoppingList(
    $version: Long!
    $id: String!
    $actions: [ShoppingListUpdateAction!]!
  ) {
    updateShoppingList(version: $version, id: $id, actions: $actions) {
      ...shoppingListFields
    }
  }
  ${ShoppingListFieldsFragmentDoc}
`;
export type UpdateShoppingListMutationFn = Apollo.MutationFunction<
  UpdateShoppingListMutation,
  UpdateShoppingListMutationVariables
>;

/**
 * __useUpdateShoppingListMutation__
 *
 * To run a mutation, you first call `useUpdateShoppingListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShoppingListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShoppingListMutation, { data, loading, error }] = useUpdateShoppingListMutation({
 *   variables: {
 *      version: // value for 'version'
 *      id: // value for 'id'
 *      actions: // value for 'actions'
 *   },
 * });
 */
export function useUpdateShoppingListMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateShoppingListMutation,
    UpdateShoppingListMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateShoppingListMutation, UpdateShoppingListMutationVariables>(
    UpdateShoppingListDocument,
    options,
  );
}
export type UpdateShoppingListMutationHookResult = ReturnType<typeof useUpdateShoppingListMutation>;
export type UpdateShoppingListMutationResult = Apollo.MutationResult<UpdateShoppingListMutation>;
export type UpdateShoppingListMutationOptions = Apollo.BaseMutationOptions<
  UpdateShoppingListMutation,
  UpdateShoppingListMutationVariables
>;
export const FetchChannelDetailsDocument = gql`
  query FetchChannelDetails($channelId: String!) {
    channel(id: $channelId) {
      id
      version
      key
      roles
      nameAllLocales {
        locale
        value
      }
    }
  }
`;

/**
 * __useFetchChannelDetailsQuery__
 *
 * To run a query within a React component, call `useFetchChannelDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchChannelDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchChannelDetailsQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useFetchChannelDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<FetchChannelDetailsQuery, FetchChannelDetailsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchChannelDetailsQuery, FetchChannelDetailsQueryVariables>(
    FetchChannelDetailsDocument,
    options,
  );
}
export function useFetchChannelDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchChannelDetailsQuery,
    FetchChannelDetailsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchChannelDetailsQuery, FetchChannelDetailsQueryVariables>(
    FetchChannelDetailsDocument,
    options,
  );
}
export type FetchChannelDetailsQueryHookResult = ReturnType<typeof useFetchChannelDetailsQuery>;
export type FetchChannelDetailsLazyQueryHookResult = ReturnType<
  typeof useFetchChannelDetailsLazyQuery
>;
export type FetchChannelDetailsQueryResult = Apollo.QueryResult<
  FetchChannelDetailsQuery,
  FetchChannelDetailsQueryVariables
>;
export const FetchChannelsDocument = gql`
  query FetchChannels($limit: Int!, $offset: Int!, $sort: [String!]) {
    channels(limit: $limit, offset: $offset, sort: $sort) {
      total
      count
      offset
      results {
        id
        key
        roles
        nameAllLocales {
          locale
          value
        }
      }
    }
  }
`;

/**
 * __useFetchChannelsQuery__
 *
 * To run a query within a React component, call `useFetchChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchChannelsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useFetchChannelsQuery(
  baseOptions: Apollo.QueryHookOptions<FetchChannelsQuery, FetchChannelsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchChannelsQuery, FetchChannelsQueryVariables>(
    FetchChannelsDocument,
    options,
  );
}
export function useFetchChannelsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FetchChannelsQuery, FetchChannelsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchChannelsQuery, FetchChannelsQueryVariables>(
    FetchChannelsDocument,
    options,
  );
}
export type FetchChannelsQueryHookResult = ReturnType<typeof useFetchChannelsQuery>;
export type FetchChannelsLazyQueryHookResult = ReturnType<typeof useFetchChannelsLazyQuery>;
export type FetchChannelsQueryResult = Apollo.QueryResult<
  FetchChannelsQuery,
  FetchChannelsQueryVariables
>;
export const FetchShoppingListDetailsDocument = gql`
  query FetchShoppingListDetails($id: String!) {
    shoppingList(id: $id) {
      ...shoppingListFields
    }
  }
  ${ShoppingListFieldsFragmentDoc}
`;

/**
 * __useFetchShoppingListDetailsQuery__
 *
 * To run a query within a React component, call `useFetchShoppingListDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchShoppingListDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchShoppingListDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchShoppingListDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    FetchShoppingListDetailsQuery,
    FetchShoppingListDetailsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchShoppingListDetailsQuery, FetchShoppingListDetailsQueryVariables>(
    FetchShoppingListDetailsDocument,
    options,
  );
}
export function useFetchShoppingListDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchShoppingListDetailsQuery,
    FetchShoppingListDetailsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchShoppingListDetailsQuery, FetchShoppingListDetailsQueryVariables>(
    FetchShoppingListDetailsDocument,
    options,
  );
}
export type FetchShoppingListDetailsQueryHookResult = ReturnType<
  typeof useFetchShoppingListDetailsQuery
>;
export type FetchShoppingListDetailsLazyQueryHookResult = ReturnType<
  typeof useFetchShoppingListDetailsLazyQuery
>;
export type FetchShoppingListDetailsQueryResult = Apollo.QueryResult<
  FetchShoppingListDetailsQuery,
  FetchShoppingListDetailsQueryVariables
>;
export const FetchShoppingListsDocument = gql`
  query FetchShoppingLists($limit: Int!, $offset: Int!, $sort: [String!]) {
    shoppingLists(limit: $limit, offset: $offset, sort: $sort) {
      total
      results {
        ...shoppingListFields
      }
    }
  }
  ${ShoppingListFieldsFragmentDoc}
`;

/**
 * __useFetchShoppingListsQuery__
 *
 * To run a query within a React component, call `useFetchShoppingListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchShoppingListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchShoppingListsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useFetchShoppingListsQuery(
  baseOptions: Apollo.QueryHookOptions<FetchShoppingListsQuery, FetchShoppingListsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FetchShoppingListsQuery, FetchShoppingListsQueryVariables>(
    FetchShoppingListsDocument,
    options,
  );
}
export function useFetchShoppingListsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FetchShoppingListsQuery,
    FetchShoppingListsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FetchShoppingListsQuery, FetchShoppingListsQueryVariables>(
    FetchShoppingListsDocument,
    options,
  );
}
export type FetchShoppingListsQueryHookResult = ReturnType<typeof useFetchShoppingListsQuery>;
export type FetchShoppingListsLazyQueryHookResult = ReturnType<
  typeof useFetchShoppingListsLazyQuery
>;
export type FetchShoppingListsQueryResult = Apollo.QueryResult<
  FetchShoppingListsQuery,
  FetchShoppingListsQueryVariables
>;
