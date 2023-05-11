import { PaginationResponse } from '@schemas/PaginationSchema';
import { CouponUseType, CouponIssuePeriodType, CouponCostType, CouponIssueType } from '../constants';
import { CouponSchema } from '../schemas';

export const couponSchemaMock: PaginationResponse<CouponSchema> = {
  content: [
    {
      id: 1,
      useType: 'GOODS' as CouponUseType,
      name: '첫번째 쿠폰',
      display: {
        name: '유저 전시 쿠폰명',
        contents: '유저 전시 내용',
        image: null,
      },
      issuePeriod: {
        issuePeriodType: 'DAY' as CouponIssuePeriodType,
        startDateTime: null,
        expiredDateTime: null,
        downloadAfterDay: 7,
      },
      salePolicy: {
        costType: 'PERCENT' as CouponCostType,
        percentRate: 10,
        fixedPrice: 0,
        limitMaxSalePrice: 5000,
        limitMinPurchasePrice: 30000,
        displayText: '10 %할인 (최대 5,000원)',
      },
      downloadPolicy: {
        issueType: 'DOWNLOAD' as CouponIssueType,
        keyword: '22',
        startDateTime: 1625462667000,
        endDateTime: 1625462697000,
        limitEaAll: 0,
        limitEaPerUser: 1,
        showRoomId: null,
      },
      issuedStat: {
        totalIssueCount: 2,
        totalUseCount: 0,
      },
      createdDate: 1625463823000,
      isActive: true,
    },
    {
      id: 2,
      useType: 'GOODS' as CouponUseType,
      name: '두번째 쿠폰',
      display: {
        name: '유저 전시 쿠폰명2',
        contents: '유저 전시 내용2',
        image: null,
      },
      issuePeriod: {
        issuePeriodType: 'PERIOD' as CouponIssuePeriodType,
        startDateTime: 1625463971000,
        expiredDateTime: 1636191171000,
        downloadAfterDay: null,
      },
      salePolicy: {
        costType: 'WON' as CouponCostType,
        percentRate: 0,
        fixedPrice: 2000,
        limitMaxSalePrice: 0,
        limitMinPurchasePrice: 10000,
        displayText: '2,000원 고정할인',
      },
      downloadPolicy: {
        issueType: 'DOWNLOAD' as CouponIssueType,
        keyword: '22',
        startDateTime: 1625462667000,
        endDateTime: 1625462697000,
        limitEaAll: 0,
        limitEaPerUser: 1,
        showRoomId: null,
      },
      issuedStat: {
        totalIssueCount: 2,
        totalUseCount: 0,
      },
      createdDate: 1625464259000,
      isActive: true,
    },
    {
      id: 3,
      useType: 'GOODS' as CouponUseType,
      name: '테스트 쿠폰 3',
      display: {
        name: '유저 전시 쿠폰명',
        contents: '유저 전시 내용',
        image: null,
      },
      issuePeriod: {
        issuePeriodType: 'DAY' as CouponIssuePeriodType,
        startDateTime: null,
        expiredDateTime: null,
        downloadAfterDay: 2,
      },
      salePolicy: {
        costType: 'PERCENT' as CouponCostType,
        percentRate: 10,
        fixedPrice: 0,
        limitMaxSalePrice: 5000,
        limitMinPurchasePrice: 30000,
        displayText: '10 %할인 (최대 5,000원)',
      },
      downloadPolicy: {
        issueType: 'DOWNLOAD' as CouponIssueType,
        keyword: null,
        startDateTime: 1625981067000,
        endDateTime: 1632288297000,
        limitEaAll: 0,
        limitEaPerUser: 1,
        showRoomId: null,
      },
      issuedStat: {
        totalIssueCount: 0,
        totalUseCount: 0,
      },
      createdDate: 1626058963000,
      isActive: true,
    },
    {
      id: 4,
      useType: 'GOODS' as CouponUseType,
      name: '테스트 쿠폰 4',
      display: {
        name: '유저 전시 쿠폰명',
        contents: '유저 전시 내용',
        image: null,
      },
      issuePeriod: {
        issuePeriodType: 'DAY' as CouponIssuePeriodType,
        startDateTime: null,
        expiredDateTime: null,
        downloadAfterDay: 20,
      },
      salePolicy: {
        costType: 'PERCENT' as CouponCostType,
        percentRate: 10,
        fixedPrice: 0,
        limitMaxSalePrice: 5000,
        limitMinPurchasePrice: 30000,
        displayText: '10 %할인 (최대 5,000원)',
      },
      downloadPolicy: {
        issueType: 'DOWNLOAD' as CouponIssueType,
        keyword: null,
        startDateTime: 1625981067000,
        endDateTime: 1633411497000,
        limitEaAll: 0,
        limitEaPerUser: 1,
        showRoomId: null,
      },
      issuedStat: {
        totalIssueCount: 2,
        totalUseCount: 0,
      },
      createdDate: 1626058977000,
      isActive: true,
    },
    {
      id: 5,
      useType: 'GOODS' as CouponUseType,
      name: '기간기반 고정형 할인1',
      display: {
        name: '콜라 대 세일',
        contents: '유저 전시 내용2',
        image: null,
      },
      issuePeriod: {
        issuePeriodType: 'PERIOD' as CouponIssuePeriodType,
        startDateTime: 1625463971000,
        expiredDateTime: 1629451971000,
        downloadAfterDay: null,
      },
      salePolicy: {
        costType: 'WON' as CouponCostType,
        percentRate: 0,
        fixedPrice: 2000,
        limitMaxSalePrice: 0,
        limitMinPurchasePrice: 5000,
        displayText: '2,000원 고정할인',
      },
      downloadPolicy: {
        issueType: 'DOWNLOAD' as CouponIssueType,
        keyword: null,
        startDateTime: 1625462667000,
        endDateTime: 1628745897000,
        limitEaAll: 0,
        limitEaPerUser: 1,
        showRoomId: null,
      },
      issuedStat: {
        totalIssueCount: 2,
        totalUseCount: 0,
      },
      createdDate: 1626059102000,
      isActive: true,
    },
    {
      id: 6,
      useType: 'GOODS' as CouponUseType,
      name: '기간기반 고정형 할인2',
      display: {
        name: '애플펜슬2 대방출',
        contents: '유저 전시 내용2',
        image: null,
      },
      issuePeriod: {
        issuePeriodType: 'PERIOD' as CouponIssuePeriodType,
        startDateTime: 1625463971000,
        expiredDateTime: 1632564000000,
        downloadAfterDay: null,
      },
      salePolicy: {
        costType: 'WON' as CouponCostType,
        percentRate: 0,
        fixedPrice: 3000,
        limitMaxSalePrice: 0,
        limitMinPurchasePrice: 10000,
        displayText: '3,000원 고정할인',
      },
      downloadPolicy: {
        issueType: 'DOWNLOAD' as CouponIssueType,
        keyword: null,
        startDateTime: 1625981067000,
        endDateTime: 1632115497000,
        limitEaAll: 0,
        limitEaPerUser: 1,
        showRoomId: null,
      },
      issuedStat: {
        totalIssueCount: 0,
        totalUseCount: 0,
      },
      createdDate: 1626059108000,
      isActive: true,
    },
    {
      id: 7,
      useType: 'GOODS' as CouponUseType,
      name: '기간기반 고정형 할인3',
      display: {
        name: '애플펜슬3 초저가',
        contents: '유저 전시 내용2',
        image: null,
      },
      issuePeriod: {
        issuePeriodType: 'PERIOD' as CouponIssuePeriodType,
        startDateTime: 1625463971000,
        expiredDateTime: 1635599700000,
        downloadAfterDay: null,
      },
      salePolicy: {
        costType: 'WON' as CouponCostType,
        percentRate: 0,
        fixedPrice: 5000,
        limitMaxSalePrice: 0,
        limitMinPurchasePrice: 15000,
        displayText: '5,000원 고정할인',
      },
      downloadPolicy: {
        issueType: 'DOWNLOAD' as CouponIssueType,
        keyword: null,
        startDateTime: 1625981067000,
        endDateTime: 1634534697000,
        limitEaAll: 0,
        limitEaPerUser: 1,
        showRoomId: null,
      },
      issuedStat: {
        totalIssueCount: 0,
        totalUseCount: 0,
      },
      createdDate: 1626059112000,
      isActive: true,
    },
    {
      id: 8,
      useType: 'GOODS' as CouponUseType,
      name: '웰컴-퍼센트 할인 쿠폰1',
      display: {
        name: '웰컴 고갱님',
        contents: '환영합니다 고갱님 1',
        image: null,
      },
      issuePeriod: {
        issuePeriodType: 'DAY' as CouponIssuePeriodType,
        startDateTime: null,
        expiredDateTime: null,
        downloadAfterDay: 14,
      },
      salePolicy: {
        costType: 'PERCENT' as CouponCostType,
        percentRate: 10,
        fixedPrice: 0,
        limitMaxSalePrice: 5000,
        limitMinPurchasePrice: 30000,
        displayText: '10 %할인 (최대 5,000원)',
      },
      downloadPolicy: {
        issueType: 'WELCOME' as CouponIssueType,
        keyword: null,
        startDateTime: 1626059944000,
        endDateTime: 1629059944000,
        limitEaAll: 0,
        limitEaPerUser: 1,
        showRoomId: null,
      },
      issuedStat: {
        totalIssueCount: 2,
        totalUseCount: 0,
      },
      createdDate: 1626060361000,
      isActive: true,
    },
    {
      id: 9,
      useType: 'GOODS' as CouponUseType,
      name: '웰컴-고정형 할인 쿠폰1',
      display: {
        name: '웰컴 고갱님-기간',
        contents: '환영합니다 고갱님 2',
        image: null,
      },
      issuePeriod: {
        issuePeriodType: 'PERIOD' as CouponIssuePeriodType,
        startDateTime: 1625463971000,
        expiredDateTime: 1629059944000,
        downloadAfterDay: null,
      },
      salePolicy: {
        costType: 'WON' as CouponCostType,
        percentRate: 0,
        fixedPrice: 5000,
        limitMaxSalePrice: 0,
        limitMinPurchasePrice: 10000,
        displayText: '5,000원 고정할인',
      },
      downloadPolicy: {
        issueType: 'WELCOME' as CouponIssueType,
        keyword: '22',
        startDateTime: 1626059944000,
        endDateTime: 1629059944000,
        limitEaAll: 0,
        limitEaPerUser: 1,
        showRoomId: null,
      },
      issuedStat: {
        totalIssueCount: 0,
        totalUseCount: 0,
      },
      createdDate: 1626060489000,
      isActive: true,
    },
    {
      id: 10,
      useType: 'CART' as CouponUseType,
      name: '웰컴-퍼센트 할인 (장바구니) 5000원 할인 쿠폰1',
      display: {
        name: '웰컴 고갱님 장바구니',
        contents: '환영합니다 고갱님 장바구니에서 1',
        image: null,
      },
      issuePeriod: {
        issuePeriodType: 'DAY' as CouponIssuePeriodType,
        startDateTime: null,
        expiredDateTime: null,
        downloadAfterDay: 30,
      },
      salePolicy: {
        costType: 'PERCENT' as CouponCostType,
        percentRate: 10,
        fixedPrice: 0,
        limitMaxSalePrice: 5000,
        limitMinPurchasePrice: 30000,
        displayText: '10 %할인 (최대 5,000원)',
      },
      downloadPolicy: {
        issueType: 'WELCOME' as CouponIssueType,
        keyword: null,
        startDateTime: 1626059944000,
        endDateTime: 1629059944000,
        limitEaAll: 0,
        limitEaPerUser: 1,
        showRoomId: null,
      },
      issuedStat: {
        totalIssueCount: 2,
        totalUseCount: 0,
      },
      createdDate: 1626060503000,
      isActive: true,
    },
  ],
  last: true,
  totalElements: 10,
  totalPages: 1,
  first: true,
  numberOfElements: 10,
  size: 20,
};