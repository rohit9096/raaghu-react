/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions';

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    CREDENTIALS: 'include' | 'omit' | 'same-origin';
    TOKEN?: string | Resolver<string>;
    USERNAME?: string | Resolver<string>;
    PASSWORD?: string | Resolver<string>;
    HEADERS?: Headers | Resolver<Headers>;
    ENCODE_PATH?: (path: string) => string;
};

const getToken: Resolver<string> = () => {
  return new Promise((resolve, reject) => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      resolve(token);
    } else {
      reject(new Error("Access token not found"));
    }
  });
};

export const OpenAPI: OpenAPIConfig = {
    BASE: sessionStorage.getItem("REACT_APP_API_URL") || 'https://localhost:44325',
    VERSION: '1',
    WITH_CREDENTIALS: false,
    CREDENTIALS: 'include', 
    TOKEN: getToken,
    USERNAME: undefined,
    PASSWORD: undefined,
    HEADERS: undefined,
    ENCODE_PATH: undefined,
};
