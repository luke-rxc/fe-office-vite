import { GoodsInfoResSchema } from '../schemas';

export const detailSchemaMocks: GoodsInfoResSchema = {
  id: 245,
  name: '상품등록 테스트',
  code: '상품코드',
  isDataCollect: true,
  description: '상품설명 테스트',
  brandId: 6,
  brandName: 'FILA',
  providerId: 45,
  providerName: '나이키',
  commissionRate: 33,
  status: 'UNSOLD',
  goodsKind: 'REAL',
  ticket: null,
  requestStatus: 'STANDBY',
  requestId: 135,
  partnerExportCode: 'partnerExportCode example',
  feedConfig: {
    facebook: false,
    google: false,
    naver: true,
  },
  searchTags: [
    {
      id: 1,
      value: '검색태그',
    },
  ],
  purchase: {
    userMaxPurchaseLimit: 'UNLIMIT',
    userMaxPurchaseEa: null,
    limitedType: 'NONE',
    limitedGoodsEa: null,
  },
  shipping: {
    shippingPolicy: 'GOODS',
    shippingMethod: 'PARCEL',
    goodsShippingPolicy: 'UNLIMIT',
    unLimitShippingPrice: 1000,
    limitShippingEa: 0,
    limitShippingPrice: 0,
    ifpayCost: 0,
    ifpayFreePrice: 0,
  },
  keyword: [
    {
      id: 1,
      name: '프리즘셀렉션',
    },
    {
      id: 2,
      name: '프리미엄브랜드',
    },
    {
      id: 3,
      name: '슬기로운집콕생활',
    },
    {
      id: 4,
      name: '위드코로나',
    },
  ],
  optionTitles: ['색상'],
  options: [
    {
      id: 600,
      goodsId: 245,
      sortNumber: 0,
      optionGroup: {
        title1: '색상',
        title2: '',
        title3: '',
        option1: '화이트',
        option2: '',
        option3: '',
      },
      consumerPrice: 27000,
      price: 26000,
      commissionRate: 33,
      stock: 99,
    },
    {
      id: 601,
      goodsId: 245,
      sortNumber: 0,
      optionGroup: {
        title1: '색상',
        title2: '',
        title3: '',
        option1: '블랙',
        option2: '',
        option3: '',
      },
      consumerPrice: 30000,
      price: 10000,
      commissionRate: 33,
      stock: 99,
    },
  ],
  categories: [
    {
      one: {
        id: 2,
        name: '디지탈/가전',
      },
      two: {
        id: 30,
        name: '컴퓨터',
      },
      three: {
        id: 32,
        name: '메모리',
      },
      primary: true,
    },
  ],
  primaryImage: {
    id: 534,
    path: 'goods/20210907/efaf6052-9321-4fe8-b678-201cc5a384a1',
    extension: 'jpeg',
    width: 0,
    height: 0,
  },
  files: [
    {
      file: {
        id: 10171,
        path: 'goods/20211018/11cd6943-2e5f-4f6d-98ae-7bbf23ea1201.png',
        extension: 'png',
        width: 1560,
        height: 1168,
      },
      videoPlayType: null,
    },
    {
      file: {
        id: 10172,
        path: 'goods/20211018/6ffe4e3a-8249-4683-aaca-6dcfd09445aa.mp4',
        extension: 'mp4',
        width: 0,
        height: 0,
      },
      videoPlayType: 'ONCE',
    },
  ],
  components: [],
  informationList: [
    {
      id: 281,
      title: '1. 제품 소재 (섬유의 조성 또는 혼용률을 백분율로 표시, 기능성인 경우 성적서 또는 허가서)',
      contents: '상품상세페이지 참조',
      sortNumber: 1,
    },
    {
      id: 282,
      title: '2. 색상',
      contents: '상품상세페이지 참조',
      sortNumber: 2,
    },
    {
      id: 283,
      title: '3. 치수',
      contents: '상품상세페이지 참조',
      sortNumber: 3,
    },
    {
      id: 284,
      title: '4. 제조자, 수입품의 경우 수입자를 함께 표기 (병행수입의 경우 병행수입 여부로 대체 가능)',
      contents: '상품상세페이지 참조',
      sortNumber: 4,
    },
    {
      id: 285,
      title: '5. 제조국',
      contents: '상품상세페이지 참조',
      sortNumber: 5,
    },
    {
      id: 286,
      title: '6. 세탁방법 및 취급시 주의사항',
      contents: '상품상세페이지 참조',
      sortNumber: 6,
    },
    {
      id: 287,
      title: '7. 제조연월',
      contents: '상품상세페이지 참조',
      sortNumber: 7,
    },
    {
      id: 288,
      title: '8. 품질보증기준',
      contents: '상품상세페이지 참조',
      sortNumber: 8,
    },
    {
      id: 289,
      title: '9. A/S 책임자와 전화번호',
      contents: '상품상세페이지 참조',
      sortNumber: 9,
    },
  ],
  deliveryPolicy: {
    deliveryExportingDelays: 1,
    deliveryTodayEndTime: null,
  },
  displayPeriod: {
    salesStartDate: 1631029187000,
    salesEndDate: null,
    displayStartDate: 1631029187000,
  },
  adminUserId: 210,
  adminMdId: 11,
  adminGoodsManagerId: 319,
  goodsType: 'NORMAL',
  providerShippingId: 29,
  isOptionUse: true,
  isAdultRequired: false,
  isPrizmOnly: false,
  isUseCoupon: true,
  isPcccRequired: true,
  isCancelable: true,
  kcFileList: [
    {
      id: 1,
      path: 'brand/2021/05/21/7225e89f-38d9-43bf-a40a-1c56d454c5fc',
      originalFileName: '111.png',
      extension: 'png',
      width: 200,
      height: 300,
      fileSize: 2907756,
      fileType: 'IMAGE',
    },
    {
      id: 2,
      path: 'goods/2021/05/21/efd10af6-733a-448e-b73c-4374cbcb0b06',
      originalFileName: '111.png',
      extension: 'png',
      width: 100,
      height: 200,
      fileSize: 2907756,
      fileType: 'IMAGE',
    },
    {
      id: 3,
      path: 'goods/2021/05/21/4d38fc60-d7cd-4ee0-8feb-45ec2d1f2a34',
      originalFileName: '111.png',
      extension: 'png',
      width: 100,
      height: 200,
      fileSize: 2907756,
      fileType: 'IMAGE',
    },
  ],
  certificationList: [
    {
      id: 1,
      path: 'brand/2021/05/21/7225e89f-38d9-43bf-a40a-1c56d454c5fc',
      originalFileName: '111.png',
      extension: 'png',
      width: 200,
      height: 300,
      fileSize: 2907756,
      fileType: 'IMAGE',
    },
    {
      id: 2,
      path: 'goods/2021/05/21/efd10af6-733a-448e-b73c-4374cbcb0b06',
      originalFileName: '111.png',
      extension: 'png',
      width: 100,
      height: 200,
      fileSize: 2907756,
      fileType: 'IMAGE',
    },
    {
      id: 3,
      path: 'goods/2021/05/21/4d38fc60-d7cd-4ee0-8feb-45ec2d1f2a34',
      originalFileName: '111.png',
      extension: 'png',
      width: 100,
      height: 200,
      fileSize: 2907756,
      fileType: 'IMAGE',
    },
  ],
  settlementKind: 'COMMISSION',
  vatCode: null,
};
