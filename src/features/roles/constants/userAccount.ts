/**
 * React Query 키
 */
export const ROLES_QUERY_KEYS = {
  ACCOUNT_LIST: 'ROLES_QUERY_KEYS_ACCOUNT_LIST',
  ACCOUNT_INFO: 'ROLES_QUERY_KEYS_ACCOUNT_INFO',
  INVITATION_LIST: 'ROLES_QUERY_KEYS_INVITATION_LIST',
  INVITATION_INFO: 'ROLES_QUERY_KEYS_INVITATION_INFO',
  PROVIDER_LIST: 'ROLES_QUERY_KEYS_PROVIDER_LIST',
  PROVIDER_COMBO_LIST: 'ROLES_QUERY_KEYS_PROVIDER_COMBO_LIST',
  ROLE_LIST: 'ROLES_QUERY_KEYS_ROLE_LIST',
} as const;

/**
 * 계정 타입
 */
export const PRINCIPAL_TYPE = {
  MANAGER: 'MANAGER',
  PARTNER: 'PARTNER',
} as const;

/**
 * 계정 권한 타입
 */
export const GRADE_TYPE = {
  MANAGER_GENERAL: 'MANAGER_GENERAL',
  MANAGER_ROOT: 'MANAGER_ROOT',
  PARTNER_GENERAL: 'PARTNER_GENERAL',
  PARTNER_ROOT: 'PARTNER_ROOT',
} as const;