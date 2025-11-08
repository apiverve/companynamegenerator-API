declare module '@apiverve/companynamegenerator' {
  export interface companynamegeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface companynamegeneratorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class companynamegeneratorWrapper {
    constructor(options: companynamegeneratorOptions);

    execute(callback: (error: any, data: companynamegeneratorResponse | null) => void): Promise<companynamegeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: companynamegeneratorResponse | null) => void): Promise<companynamegeneratorResponse>;
    execute(query?: Record<string, any>): Promise<companynamegeneratorResponse>;
  }
}
